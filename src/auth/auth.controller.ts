import {
  Body,
  Controller,
  Get,
  HttpException,
  Post,
  Req,
  UseGuards,
} from '@nestjs/common';
import { AuthPayloadDto } from './dto/auth.dto';
import { AuthService } from './auth.service';
import { LocalGuard } from './guards/local.guards';
import { JwtAuthGuard } from './guards/jwt.guards';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}
  @Post('login')
  // @UseGuards(LocalGuard)
  login(@Body() authPayload: AuthPayloadDto) {

    console.log(authPayload)
    const user = this.authService.validateUser(authPayload);
    if (!user) throw new HttpException('Invalide credentials ', 401);
    return user;
  }

  @Get('status')
  @UseGuards(JwtAuthGuard)
  status(@Req() req: Request) {
    // console.log(req.user);
  }
}
