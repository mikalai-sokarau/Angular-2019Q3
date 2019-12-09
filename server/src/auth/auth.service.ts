import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { users } from '../db/users';
import { IServerUser, IUser } from '../db/users/user.interface';
import { ICredentials } from './auth.interface';

@Injectable()
export class AuthService {
  private readonly users: Array<IServerUser>

  constructor() {
    /* request to db */
    this.users = users;
  }

  login(credentials: ICredentials): IUser {
      const existedUser = this.findUser(credentials);
      
      if (!existedUser) {
        throw new HttpException('User not found', HttpStatus.NOT_FOUND);
      }

      return {
          firstName: existedUser.firstName,
          lastName: existedUser.lastName,
          id: existedUser.id
      };
  }

  findUser(credentials: ICredentials): IUser {
    return this.users.find(
      ({email, password}) => credentials.email === email
        && credentials.password === password
    );
  }
}
