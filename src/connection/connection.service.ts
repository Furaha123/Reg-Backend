import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ConnectionService {
    constructor(private prisma: PrismaService){}

     createConnection(data: Prisma.ConnectionCreateInput) {
        return this.prisma.connection.create({data})
    }
}
