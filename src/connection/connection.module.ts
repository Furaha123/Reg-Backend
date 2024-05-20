import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';
import { ConnectionController } from './connection.controller';
import { ConnectionService } from './connection.service';

@Module({
  imports: [PrismaModule],
  controllers: [ConnectionController],
  providers: [ConnectionService],
})
export class ConnectionModule {}
