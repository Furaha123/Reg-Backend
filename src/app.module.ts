import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { IssuesModule } from './issues/issues.module';
import { AuthModule } from './auth/auth.module';
import { ServicesModule } from './services/services.module';

@Module({
  imports: [UsersModule, IssuesModule, AuthModule, ServicesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
