import { Body, Controller, Post } from '@nestjs/common';
import { ProvinceService } from './province.service';
import { ProvinceCreateDto } from './dto/ProvinceCreate.dto';

@Controller('province')
export class ProvinceController {
  constructor(private ProvinceService: ProvinceService) {}

  @Post()
  createProvince(@Body() provinceCreateDto: ProvinceCreateDto) {
    return this.ProvinceService.createProvince(provinceCreateDto);
  }
}
