import 'dotenv/config';

import { NestFactory } from '@nestjs/core';
import { ValidationPipe, Logger } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

import helmet from 'helmet';
import compression from 'compression';

import { AppModule } from './app.module';


/** Create a Logger for Bootstrap */
const mainLogger = new Logger('Bootstrap');


/** Create the function to Bootstrap API Server */
async function bootstrap() {

  /** Get the PORT from the current environment */
  const { PORT = 3000 } = process.env;

  /** Create the App */
  mainLogger.verbose('Creating the App');
  const app = await NestFactory.create(AppModule);

  /** Setup Swagger to automatically generate ApiDocumentation */
  const swaggerConfig = new DocumentBuilder()
    .setTitle('Sandeza Hub')
    .setDescription('API to communicate with internal DataHub')
    .setVersion('1.0')
    .build();

  /** Create the Swagger Document and append to Application */
  const document = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup('help', app, document);

  /** Enable ValidationPipe and Variable auto Transform */
  mainLogger.verbose('Attaching Global Pipe');
  app.useGlobalPipes(new ValidationPipe({
    transform       : true,
    transformOptions: {
      enableImplicitConversion: true
    }
  }));

  /** Enable base CORS Options */
  mainLogger.verbose('Enabling CORS');
  app.enableCors();

  /** Attach basic server protection and base gzip compression */
  mainLogger.verbose('Enabling Compression and Helmet Protection');
  app.use(helmet());
  app.use(compression());

  /** Listen */
  await app.listen(PORT);
}


/** Launch the Server */
bootstrap()
  .then(() => {
    mainLogger.verbose(`Server successfully started: Listening on Port ${process.env.PORT}`);
  })
  .catch((error) => {
    mainLogger.error('An error occurred while bootstrapping the API Server');
    mainLogger.error(error);
  });
