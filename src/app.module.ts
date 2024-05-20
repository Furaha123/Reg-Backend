import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';

import { AuthModule } from './auth/auth.module';
import { ServicesModule } from './services/services.module';
import { IssuesModule } from './issues/issues.module';
import { BranchModule } from './branch/branch.module';
import { ConnectionModule } from './connection/connection.module';

@Module({
  imports: [
    UsersModule,
    AuthModule,
    ServicesModule,
    IssuesModule,
    BranchModule,
    ConnectionModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
