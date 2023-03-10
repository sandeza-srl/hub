import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';

import { Request } from 'express';
import { Observable } from 'rxjs';

import {
  ADMIN_KEY,
  ADMIN_KEY_HEADER_NAME,
  ADMIN_KEY_QUERY_PARAM
} from '../constants';


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

    /** Get header value, and if is not present, fallback to query string */
    const key = request.header(ADMIN_KEY_HEADER_NAME) || request.query[ADMIN_KEY_QUERY_PARAM]?.toString();

    /** Assert key exists, and it is strictly equals to internal one */
    if (key !== ADMIN_KEY) {
      throw new UnauthorizedException();
    }

    /** Complete the guard and let the request continue */
    return true;
  }

}
