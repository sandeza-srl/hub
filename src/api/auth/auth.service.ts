import * as crypto from 'crypto';

import { Injectable, InternalServerErrorException, NotImplementedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { isValidString } from '../../utils';

import {
  IndirizziRubrica as IndirizziRubricaModel,
  TIndirizziRubricaDocument,
  TIndirizziRubricaModel
} from '../../database/models';

import type { UserLoginDto } from './dto/UserLoginDto';

import { UserNotAllowedException } from './exceptions/UserNotAllowedException';
import { InvalidCredentialsException } from './exceptions/InvalidCredentialsException';
import { UserNotFoundException } from './exceptions/UserNotFoundException';

import type { IUserData, TUserDataSource } from './interfaces/UserData';
import { AccessTokenService } from '../../token/services/access-token.service';
import { RefreshTokenService } from '../../token/services/refresh-token.service';
import { IAuthData } from './interfaces/AuthData';


@Injectable()
export class AuthService {

  constructor(
    @InjectModel(IndirizziRubricaModel.collection.name)
    private readonly IndirizziRubrica: TIndirizziRubricaModel,
    private readonly accessTokenService: AccessTokenService,
    private readonly refreshTokenService: RefreshTokenService
  ) {
  }


  /**
   * Starting from a valid UserData object, return the two signed tokens
   * @param userData
   */
  public createAuthData(userData: IUserData): IAuthData {
    return {
      accessToken : this.accessTokenService.signToken(userData),
      refreshToken: this.refreshTokenService.signToken(userData),
      userData
    };
  }


  /**
   * Verify the user login data and return a proper IUserData object
   * @param loginDto
   */
  public async verifyLoginAsync(loginDto: UserLoginDto): Promise<IUserData> {
    /** Search the user into IndirizziRubrica */
    const privateUserData = await this.verifyLoginFromIndirizziRubricaAsync(loginDto);

    /** If a private user has been found, return its minimal data */
    if (privateUserData) {
      return this.createUserData({ type: 'user', doc: privateUserData });
    }

    // TODO: Verify authentication using different auth source

    /** If no valid authentication has been found, throw the final exception */
    throw new UserNotFoundException();
  }


  /**
   * Search for a user using the IndirizziRubrica collection for private user login
   * @param loginDto
   * @private
   */
  private async verifyLoginFromIndirizziRubricaAsync(loginDto: UserLoginDto): Promise<TIndirizziRubricaDocument | null> {
    /** Search the user using provided data into IndirizziRubrica collection */
    const maybeUser = await this.IndirizziRubrica
      .findOne(this.IndirizziRubrica.translateAliases({ Mail: loginDto.email }))
      .exec();

    /** If no user has been found, could exit */
    if (!maybeUser) {
      return null;
    }

    /** If a user has been found, assert it has access to web login */
    if (!maybeUser.FlagWebAttivo || !isValidString(maybeUser.PasswordWeb)) {
      throw new UserNotAllowedException();
    }

    /** Hash the provided password using MD5 hash */
    const passwordHash = crypto.createHash('md5').update(loginDto.password).digest('hex');

    /** Assert the passwords are the same */
    if (passwordHash.toUpperCase() !== maybeUser.PasswordWeb.toUpperCase()) {
      throw new InvalidCredentialsException();
    }

    /** Return the found user */
    return maybeUser;
  }


  // TODO: Use login data to check credentials in Societa collection
  private async verifyLoginFromSocietaAsync(loginDto: UserLoginDto): Promise<unknown | null> {
    throw new NotImplementedException();
  }


  /**
   * Starting from any of the defined authorization sources,
   * extract relevant data and return a unique UserData interface
   * @param source
   * @private
   */
  private createUserData(
    source: TUserDataSource
  ): IUserData {
    switch (source.type) {
      case 'user':
        return {
          _id               : source.doc._id,
          email             : source.doc.Mail,
          idAccountCompagnia: source.doc.IdAccountCompagnia,
          idInstallazione   : source.doc.IdInstallazione,
          userType          : source.type
        };

      // TODO: Implement transformation from Societa login
      case 'company':
        throw new NotImplementedException();

      default:
        throw new InternalServerErrorException();
    }
  }

}
