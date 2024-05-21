import { Module } from '@nestjs/common';
import { ProvinceController } from './province.controller';
import { ProvinceService } from './province.service';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [ProvinceController],
  providers: [ProvinceService],
})
export class ProvinceModule {}
