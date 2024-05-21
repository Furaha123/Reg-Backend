import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma } from '@prisma/client';
import { DistrictCreateDto } from './dto/DistrictCreateDto';

@Injectable()
export class DistrictService {
  constructor(private prisma: PrismaService) {}
  createDistrict(data: DistrictCreateDto) {
    return this.prisma.district.create({ data });
  }
}
