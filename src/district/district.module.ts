import { Module } from '@nestjs/common';
import { DistrictController } from './district.controller';
import { DistrictService } from './district.service';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [DistrictController],
  providers: [DistrictService],
})
export class DistrictModule {}
