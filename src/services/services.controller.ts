import {
  Body,
  Controller,
  Get,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreateServiceDto } from './dtos/CeateService.dto';
import { Services } from './services.service';

@Controller('services')
export class ServicesController {
  constructor(private services: Services) {}
  @Post()
  @UsePipes(ValidationPipe)
  createService(@Body() createServiceDto: CreateServiceDto) {
    return this.services.createService(createServiceDto);
  }
}
