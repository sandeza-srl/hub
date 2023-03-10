import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';

import { Request } from 'express';
import { Observable } from 'rxjs';

import { hasValidAdminKey } from '../utils/hasValidAdminKey';


/**
 * The AdminGuard can be used to protect request handlers
 * and resources to be accessible only using the constant
 * ADMIN_KEY value, passed by headers, or query string value
 */
@Injectable()
export class AdminGuard implements CanActivate {

  public canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
    /** Get current request from execution context */
    const request = context.switchToHttp().getRequest<Request>();

    /** Assert key exists, and it is strictly equals to internal one */
    if (!hasValidAdminKey(request)) {
      throw new UnauthorizedException();
    }

    /** Complete the guard and let the request continue */
    return true;
  }

}
