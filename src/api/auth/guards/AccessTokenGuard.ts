import { Injectable } from '@nestjs/common';

import { AuthService } from '../auth.service';

import { AccessTokenService } from '../../../token/services/access-token.service';

import { AbstractedTokenGuard } from './abstractions/AbstractedTokenGuard';


@Injectable()
export class AccessTokenGuard extends AbstractedTokenGuard {

  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor(
    accessTokenService: AccessTokenService,
    authService: AuthService
  ) {
    super(accessTokenService, authService);
  }

}
