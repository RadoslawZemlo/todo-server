import {Injectable, NotFoundException} from '@nestjs/common';
import {InjectModel} from '@nestjs/mongoose';
import {User, UserDocument} from './schemas/user.schema';
import {Model} from 'mongoose';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {
  }

  createUser(username: string, password: string): Promise<UserDocument> {
    return this.userModel.create({username, password});
  }

  async findUser(username: string): Promise<UserDocument> {
    const user = await this.userModel.findOne({username}).exec();
    if (!user)
      throw new NotFoundException(`User named ${username} was not found`);
    return user;
  }
}
