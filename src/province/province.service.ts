import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { ProvinceCreateDto } from './dto/ProvinceCreate.dto';

@Injectable()
export class ProvinceService {
  constructor(private prisma: PrismaService) {}
  createProvince(data: ProvinceCreateDto) {
    return this.prisma.province.create({ data });
  }
}
