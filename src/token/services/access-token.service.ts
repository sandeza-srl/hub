import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

import type { Request } from 'express';

import { getRequiredEnv } from '../../utils';

import AbstractedTokenService from './abstractions/abstracted-token.service';


@Injectable()
export class AccessTokenService extends AbstractedTokenService(
  getRequiredEnv('ACCESS_TOKEN_SECRET'),
  getRequiredEnv('ACCESS_TOKEN_VALIDITY')
) {

  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor(jwtService: JwtService) {
    super(jwtService);
  }


  public extractFromRequest(request: Request): string | null {
    /** Assert the request header is present */
    if (!request.header('Authorization')) {
      return null;
    }

    /** Remove the bearer token from header value */
    return request.header('Authorization')!.replace(/^Bearer\s/ig, '');
  }
}
