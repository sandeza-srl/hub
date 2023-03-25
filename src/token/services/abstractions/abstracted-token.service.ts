import { JwtService } from '@nestjs/jwt';
import type { JwtSignOptions, JwtVerifyOptions } from '@nestjs/jwt';

import type { Request } from 'express';

import type { ITokenPayload } from '../../interfaces/TokenPayload';
import { isValidString } from '../../../utils';


export default function AbstractedTokenService(secret: string, validity: string | number | undefined) {

  abstract class MixinService {

    // noinspection TypeScriptAbstractClassConstructorCanBeMadeProtected
    constructor(
      readonly jwtService: JwtService
    ) {
    }


    abstract extractFromRequest(request: Request): string | null;


    getMongoDatabaseName(request: Request): string | null {
      /** Extract the token from the request */
      const token = this.extractFromRequest(request);

      /** Assert the token exists before continue */
      if (!isValidString(token)) {
        return null;
      }

      /** Decode the token and return the correct field */
      try {
        return this.decode(token)?.idInstallazione ?? null;
      }
      catch {
        return null;
      }
    }


    encodeTokenString(token: string): string {
      return token;
    }


    decodeTokenString(token: string): string {
      return token;
    }


    sign(payload: ITokenPayload, options?: Omit<JwtSignOptions, 'secret'>): string {
      const signedToken = this.jwtService.sign(payload, {
        expiresIn: validity,
        ...options,
        secret
      });

      return this.encodeTokenString(signedToken);
    }


    decode(token: string): ITokenPayload | null {
      const signedToken = this.decodeTokenString(token);

      return this.jwtService.decode(signedToken) as ITokenPayload;
    }


    verify(token: string, options?: Omit<JwtVerifyOptions, 'secret'>): ITokenPayload {
      const signedToken = this.decodeTokenString(token);

      return this.jwtService.verify<ITokenPayload>(signedToken, {
        ...options,
        secret
      });
    }

  }

  return MixinService;

}
