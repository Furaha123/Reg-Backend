import { Module } from '@nestjs/common';
import { ServicesController } from './services.controller';

import { PrismaModule } from 'src/prisma/prisma.module';
import { Services } from './services.service';

@Module({
  imports: [PrismaModule],
  controllers: [ServicesController],
  providers: [Services],
})
export class ServicesModule {}
