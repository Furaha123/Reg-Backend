import { Injectable } from '@nestjs/common';
import { AuthPayloadDto } from './dto/auth.dto';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from 'src/prisma/prisma.service';
import { User } from '@prisma/client';
// import { UsersService } from 'src/users/users.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,

    private prisma: PrismaService,
  ) {}

  async validateUser({ email, password }: AuthPayloadDto) {
    const findUser: any = await this.prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (!findUser) return null;
    const passwordMatches = await bcrypt.compare(password, findUser.password);
    if (passwordMatches) {
      const { password, ...user } = findUser;
      return this.jwtService.sign(user);
    }
  }
}
