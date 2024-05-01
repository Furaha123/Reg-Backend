import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class Services {
  constructor(private prisma: PrismaService) {}

  createService(data: Prisma.ServicesCreateInput) {
    return this.prisma.services.create({
      data: {
        title: data.title,
        description: data.description,
      },
    });
  }
  
}
