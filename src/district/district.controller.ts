import { Body, Controller, Post } from '@nestjs/common';
import { DistrictService } from './district.service';
import { DistrictCreateDto } from './dto/DistrictCreateDto';

@Controller('district')
export class DistrictController {
  constructor(private DistrictService: DistrictService) {}

  @Post()
  createDistrict(@Body() districtCreateDto: DistrictCreateDto) {
    return this.DistrictService.createDistrict(districtCreateDto);
  }
}
