import { HttpException, Injectable } from '@nestjs/common';
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
  getServices() {
    return this.prisma.services.findMany();
  }
  getServiceById(id: string) {
    return this.prisma.services.findUnique({
      where: { id },
    });
  }
  async updateServiceById(id: string, data: Prisma.ServicesUpdateInput) {
    const findService = await this.getServiceById(id);
    if (!findService) {
      throw new HttpException('Service not found', 404);
    }

    if (data.title) {
      const existingService = await this.prisma.services.findFirst({
        where: {
          title: data.title as string,
        },
      });

      if (existingService) {
        throw new HttpException(
          'Service with the updated title already exists',
          409,
        );
      }
    }

    return this.prisma.services.update({
      where: { id },
      data,
    });
  }
  async deleteServiceById(id: string) {
    const findService = await this.getServiceById(id);
    if (!findService) throw new HttpException('Service not found', 404);
    return this.prisma.services.delete({ where: { id } });
  }
}
