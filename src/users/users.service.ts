import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Prisma } from '@prisma/client';

@Injectable()
export class UsersService {
  private users = [
    { id: 0, name: 'John', email: 'john@example.com', role: 'user' },
    { id: 0, name: 'Jane', email: 'jane@example.com', role: 'manager' },
    { id: 0, name: 'James', email: 'james@example.com', role: 'manager' },
  ];
  getUsers(role?: 'manager' | 'user') {
    console.log(this.users);
    if (role) {
      return this.users.filter((user) => user.role === role);
    }
    return this.users;
  }
  getUser(id: number) {
    const user = this.users.find((user) => user.id === id);
    if (!user) {
      throw new Error('User id not found');
    }
    return user;
  }
  createUser(createUserDto: CreateUserDto) {
    const newUser = {
      ...createUserDto,
      id: Date.now(),
    };
    this.users.push(newUser);
    return newUser;
  }
  UpdateUser(id: number, updateUserDto: UpdateUserDto) {
    this.users = this.users.map((user) => {
      if (user.id === id) {
        return { ...user, ...updateUserDto };
      }
      return user;
    });
    return this.getUser(id);
  }
  removeUser(id: number) {
    const toBeRemoved = this.getUser(id);
    this.users = this.users.filter((user) => user.id !== id);
    return toBeRemoved;
  }
}
