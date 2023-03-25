import { Injectable } from '@nestjs/common';

import { getRequiredEnv } from '../../utils';

import AbstractedTokenService from '../abstractions/abstracted-token.service';
import { ITokenPayload } from '../interfaces/TokenPayload';
import { JwtService, JwtSignOptions, JwtVerifyOptions } from '@nestjs/jwt';


@Injectable()
export class RefreshTokenService extends AbstractedTokenService(
  getRequiredEnv('REFRESH_TOKEN_SECRET'),
  getRequiredEnv('REFRESH_TOKEN_VALIDITY')
) {


  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor(jwtService: JwtService) {
    super(jwtService);
  }


  public signToken(payload: ITokenPayload, options?: Omit<JwtSignOptions, 'secret'>): string {
    /** Sign the token */
    const signedToken = super.signToken(payload, options);

    /** Return converted in base64 */
    return Buffer.from(signedToken).toString('base64');
  }


  public verify(token: string, options?: Omit<JwtVerifyOptions, 'secret'>): ITokenPayload {
    /** Convert from base64 to string */
    const signedToken = Buffer.from(token, 'base64').toString('ascii');

    /** Use converted to token to verify it */
    return super.verify(signedToken, options);
  }
}
