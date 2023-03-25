import { Injectable } from '@nestjs/common';

import { AuthService } from '../auth.service';

import { RefreshTokenService } from '../../../token/services/refresh-token.service';

import { AbstractedTokenGuard } from './abstractions/AbstractedTokenGuard';


@Injectable()
export class RefreshTokenGuard extends AbstractedTokenGuard {

  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor(
    accessTokenService: RefreshTokenService,
    authService: AuthService
  ) {
    super(accessTokenService, authService);
  }

}
