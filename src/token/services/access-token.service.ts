import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

import { getRequiredEnv } from '../../utils';

import AbstractedTokenService from '../abstractions/abstracted-token.service';


@Injectable()
export class AccessTokenService extends AbstractedTokenService(
  getRequiredEnv('ACCESS_TOKEN_SECRET'),
  getRequiredEnv('ACCESS_TOKEN_VALIDITY')
) {

  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor(jwtService: JwtService) {
    super(jwtService);
  }

}
