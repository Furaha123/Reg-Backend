import { HttpException, Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class IssuesService {
  constructor(private prisma: PrismaService) {}
  createIssue(data: Prisma.IssuesCreateInput) {
    return this.prisma.issues.create({ data });
  }

  getIssues() {
    return this.prisma.issues.findMany();
  }
  async getIssueById(id: string) {
    const issue = await this.prisma.issues.findUnique({
      where: { id },
    });

    if (!issue) {
      throw new Error('Issue Not Found');
    }

    return issue;
  }

  async updateIssueById(id: string, data: Prisma.IssuesUpdateInput) {
    const findIssue = await this.getIssueById(id);
    if (!findIssue) {
      throw new HttpException('Issue not found', 404);
    }
    if (data.phone) {
      const exisitingIssue = await this.prisma.issues.findFirst({
        where: { phone: data.phone as number },
      });
      if (exisitingIssue) {
        throw new HttpException('Issue already updated', 409);
      }
    }
    return this.prisma.issues.update({
      where: { id },
      data,
    });
  }
  async deleteIssueById(id: string) {
    const findIssue = await this.getIssueById(id);
    if (!findIssue) throw new HttpException('Issue not found', 404);
    return this.prisma.issues.delete({
      where: { id },
    });
  }
}
