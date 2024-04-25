import { HttpException, Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async createUser(data: Prisma.UserCreateInput) {
    return await this.prisma.user.create({
      data: {
        ...data,
        userSetting: {
          create: {
            smsEnabled: true,
            notificationOn: false,
          },
        },
      },
    });
  }

  getUsers() {
    return this.prisma.user.findMany({ include: { userSetting: true } });
  }

  getUserId(id: string) {
    return this.prisma.user.findUnique({ where: { id }, include:{
      userSetting:true
    } }); 
  }

  async updateUserById(id: string, data: Prisma.UserUpdateInput) {
    const findUser = await this.getUserId(id);
    if (!findUser) throw new HttpException('User not found', 404);

    if (data.email) {
      const findUser = await this.prisma.user.findUnique({
        where: { email: data.email as string },
      });
      if (findUser) throw new HttpException('User   already exists', 404);
    }
    return this.prisma.user.update({ where: { id }, data });
  }

  async deleteUserById(id: string) {
    const findUser = await this.getUserId(id);
    if (!findUser) throw new HttpException('User not found', 404);
    return this.prisma.user.delete({ where: { id } });
  }
}
