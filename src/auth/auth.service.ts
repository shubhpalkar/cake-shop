import * as jwt from 'jsonwebtoken';
import { Injectable, Logger } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { JwtPayload } from '../interface/jwt-payload.interface';
import { User } from 'src/user/user.entity';
import { UserRO } from 'src/user/userRO.RO';
import { debug } from 'console';
import { RegistrationStatus } from '../interface/registrationStatus.interface';
import { CreateUserDto } from 'src/user/userDTO.dto';

@Injectable()
export class AuthService {
  constructor(private readonly usersService: UserService) { }

  private readonly logger = new Logger(AuthService.name);

  async register(user: CreateUserDto) {
    let status: RegistrationStatus = {
      success: true,
      message: 'user register',
    };
    try {
      await this.usersService.register(user);
    } catch (err) {
      //debug(err);
      status = { success: false, message: err };
    }
    return status;
  }
  createToken(user: User) {

    const expiresIn = 3600;


    const accessToken = jwt.sign(
      {
        id: user.id,
        email: user.email,
        firstname: user.firstName,
        lastname: user.lastName,
      },
      'shubh',
      { expiresIn },
    );
    //debug('return the token');
    //debug(accessToken);
    return {
      expiresIn,
      accessToken,
    };
  }

  async validateUserToken(payload: JwtPayload): Promise<User> {
    return await this.usersService.findById(payload.id);
  }
  async validateUser(email: string, password: string): Promise<UserRO> {
    const user = await this.usersService.findByEmail(email);
    if (user && user.comparePassword(password)) {
      this.logger.log('password check success');
      const { password, ...result } = user;
      return result;
    }
    return null;
  }
}
