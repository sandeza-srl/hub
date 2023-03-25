import { CanActivate, ExecutionContext } from '@nestjs/common';

import { Request } from 'express';

import { isValidString } from '../../../../utils';

import { AuthService } from '../../auth.service';

import AbstractedTokenService from '../../../../token/services/abstractions/abstracted-token.service';


export abstract class AbstractedTokenGuard implements CanActivate {

  // noinspection TypeScriptAbstractClassConstructorCanBeMadeProtected
  constructor(
    private readonly tokenService: InstanceType<ReturnType<typeof AbstractedTokenService>>,
    private readonly authService: AuthService
  ) {
  }


  public async canActivate(context: ExecutionContext): Promise<boolean> {
    /** Load the token from current request */
    const request = context.switchToHttp().getRequest<Request>();
    const token = this.tokenService.extractFromRequest(request);

    /** Assert the token exists */
    if (!isValidString(token)) {
      return false;
    }

    try {
      /** Extract the payload from the received token */
      const payload = this.tokenService.verify(token);

      /** Search for the user from auth service */
      const user = await this.authService.getByIdAsync(payload._id);

      /** Assert a valid user has been found */
      if (!user) {
        return false;
      }

      /** Save the user into the current request object */
      request.user = user;

      return true;
    }
    catch {
      return false;
    }
  }

}
