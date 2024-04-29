import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { IssuesModule } from './issues/issues.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [UsersModule, IssuesModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
