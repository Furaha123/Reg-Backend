import { Body, Controller, Post } from '@nestjs/common';
import { SectorService } from './sector.service';
import { SectorCreateDto } from './dto/SectorCreateDto';

@Controller('sector')
export class SectorController {
  constructor(private SectorService: SectorService) {}
  @Post()
  createSector(@Body() sectorCreateDto: SectorCreateDto) {
    return this.SectorService.createSector(sectorCreateDto);
  }
}
