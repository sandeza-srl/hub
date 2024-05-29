import { ExceptionFilter, Catch, ArgumentsHost, HttpException, HttpStatus, Logger } from '@nestjs/common';
import { Request, Response } from 'express';


@Catch()
export class AllExceptionsFilter implements ExceptionFilter {
  private readonly logger = new Logger(AllExceptionsFilter.name);


  catch(exception: unknown, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();
    const status = exception instanceof HttpException ? exception.getStatus() : HttpStatus.INTERNAL_SERVER_ERROR;
    const clientIp = request.headers['x-forwarded-for'] || request.connection.remoteAddress;

    const errorResponse = {
      statusCode: status,
      timestamp : new Date().toISOString(),
      path      : request.url,
      body      : request.body,
      clientIp  : clientIp,
      message   : (exception instanceof HttpException) ? exception.message : 'Internal server error'
    };

    this.logger.error(
      `HTTP Status: ${status} Error Message: ${JSON.stringify(errorResponse)}`,
      exception instanceof Error ? exception.stack : ''
    );

    response.status(status).json(errorResponse);
  }
}
