import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

import type { Request } from 'express';

import { getRequiredEnv } from '../../utils';

import AbstractedTokenService from './abstractions/abstracted-token.service';


@Injectable()
export class RefreshTokenService extends AbstractedTokenService(
  getRequiredEnv('REFRESH_TOKEN_SECRET'),
  getRequiredEnv('REFRESH_TOKEN_VALIDITY')
) {


  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor(jwtService: JwtService) {
    super(jwtService);
  }


  public encodeTokenString(token: string): string {
    return Buffer.from(token).toString('base64');
  }


  public decodeTokenString(token: string): string {
    return Buffer.from(token, 'base64').toString('ascii');
  }


  public extractFromRequest(request: Request): string | null {
    return request.query.refresh_token?.toString() ?? null;
  }
}
