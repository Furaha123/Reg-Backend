import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreateServiceDto } from './dtos/CeateService.dto';
import { Services } from './services.service';
import { UpdateServiceDto } from './dtos/UpdateService.dto';

@Controller('services')
export class ServicesController {
  constructor(private services: Services) {}
  @Post()
  @UsePipes(ValidationPipe)
  createService(@Body() createServiceDto: CreateServiceDto) {
    return this.services.createService(createServiceDto);
  }
  @Get()
  getServices() {
    return this.services.getServices();
  }

  @Get(':id')
  async getServiceById(@Param('id') id: string) {
    const service = this.services.getServiceById(id);
    return service;
  }

  @Put(':id')
  updateServiceById(
    @Param('id') id: string,
    @Body() updateServiceDto: UpdateServiceDto,
  ) {
    return this.services.updateServiceById(id, updateServiceDto);
  }

  @Delete(':id')
  deleteServiceById(@Param('id') id: string) {
    return this.services.deleteServiceById(id);
  }
}
