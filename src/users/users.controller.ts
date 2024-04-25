import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Put,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}
  @Post()
  @UsePipes(ValidationPipe)
  CreateUser(@Body() CreateUserDto: CreateUserDto) {
    return this.userService.createUser(CreateUserDto);
  }

  @Get()
  getUsers() {
    return this.userService.getUsers();
  }
  @Get(':id')
  async getUserById(@Param('id') id: string) {
    const user = await this.userService.getUserId(id);
    return user;
  }
  @Put(':id')
  updateUserById(
    @Param('id') id: string,
    @Body() UpdateUserDto: UpdateUserDto,
  ) {
    return this.userService.updateUserById(id, UpdateUserDto);
  }
  @Delete(':id')
  deleteUserById(@Param('id') id: string) {
    return this.userService.deleteUserById(id);
  }
}
