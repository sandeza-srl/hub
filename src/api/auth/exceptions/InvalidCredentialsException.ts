import { UnauthorizedException } from '@nestjs/common';


export class InvalidCredentialsException extends UnauthorizedException {

  constructor() {
    super(
      'Provided credentials are wrong',
      'auth/invalid-credentials'
    );
  }

}
