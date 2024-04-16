import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UsersService } from './users.service';

@Controller('users') // origin path
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  // get all users
  @Get()
  async getUsers(@Query('role') role: 'user' | 'manager') {
    //const service = new UsersService();
    return this.usersService.getUsers(role);
  }
  //get user by id
  @Get(':id')
  getOneUser(@Param('id') id: string) {
    try {
      return this.usersService.getUser(+id);
    } catch (error) {
      throw new NotFoundException('User id  not found   ');
    }
  }
  //create a new user

  @Post()
  createUser(@Body() CreateUserDto: CreateUserDto) {
    return this.usersService.createUser(CreateUserDto);
  }

  //update user
  @Put(':id')
  updateUse(@Param('id') id: string, @Body() UpdateUserDto: UpdateUserDto) {
    return this.usersService.UpdateUser(+id, UpdateUserDto);
  }

  //delete user
  @Delete(':id')
  removeUser(@Param('id') id: string) {
    return this.usersService.removeUser(+id);
  }
}
