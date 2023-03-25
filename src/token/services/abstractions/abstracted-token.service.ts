import { JwtService } from '@nestjs/jwt';
import type { JwtSignOptions, JwtVerifyOptions } from '@nestjs/jwt';

import type { ITokenPayload } from '../../interfaces/TokenPayload';


export default function AbstractedTokenService(secret: string, validity: string | number | undefined) {

  abstract class MixinService {

    // noinspection TypeScriptAbstractClassConstructorCanBeMadeProtected
    constructor(
      readonly jwtService: JwtService
    ) {
    }


    signToken(payload: ITokenPayload, options?: Omit<JwtSignOptions, 'secret'>): string {
      return this.jwtService.sign(payload, {
        expiresIn: validity,
        ...options,
        secret
      });
    }


    verify(token: string, options?: Omit<JwtVerifyOptions, 'secret'>): ITokenPayload {
      return this.jwtService.verify<ITokenPayload>(token, {
        ...options,
        secret
      });
    }

  }

  return MixinService;

}
