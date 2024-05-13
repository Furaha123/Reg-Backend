import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class BranchService {
  constructor(private prisma: PrismaService) {}

  async createBranch(data: Prisma.BranchCreateInput) {
    return this.prisma.branch.create({ data });
  }

  getAllBranches() {
    return this.prisma.branch.findMany();
  }
}
