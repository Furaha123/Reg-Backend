import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { SectorCreateDto } from './dto/SectorCreateDto';

@Injectable()
export class SectorService {
    constructor( private prisma: PrismaService) {}
    createSector(data: SectorCreateDto){
        return this.prisma.sector.create({data})
    }
}
