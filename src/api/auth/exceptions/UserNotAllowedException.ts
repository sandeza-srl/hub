import { UnauthorizedException } from '@nestjs/common';


export class UserNotAllowedException extends UnauthorizedException {

  constructor() {
    super(
      'The requested user is not allowed to perform login action',
      'auth/user-not-allowed'
    );
  }

}
