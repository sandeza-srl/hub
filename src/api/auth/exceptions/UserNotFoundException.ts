import { UnauthorizedException } from '@nestjs/common';


export class UserNotFoundException extends UnauthorizedException {

  constructor() {
    super(
      'Could not find a valid user with provided email',
      'auth/user-not-found'
    );
  }

}
