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
  Req,
  UseGuards
} from '@nestjs/common';
import { IssuesService } from './issues.service';
import { IssueCreateDto } from './dtos/IssueCreate.dto';
import { UpdateIssueDto } from './dtos/UpdateIssue.dto';
import { Request } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/guards/jwt.guards';

@Controller('issues')
export class IssuesController {
  constructor(private IssueService: IssuesService) {}
  @Post()
  @UsePipes(ValidationPipe)
  @UseGuards(JwtAuthGuard)
  async createIssue(
    @Body() issueCreateDto: IssueCreateDto,
    @Req() req: any,
  ) {
    const userId = req.user.userId;

    console.log(userId)
    return this.IssueService.createIssue({ ...issueCreateDto, userId });
  }
  @Get()
  getIssues() {
    return this.IssueService.getIssues();
  }
  @Get(':id')
  async getIssueById(@Param('id') id: string) {
    const issue = await this.IssueService.getIssueById(id);
    return issue;
  }
  @Put(':id')
  updateIssueById(
    @Param('id') id: string,
    @Body() updateIssueDto: UpdateIssueDto,
  ) {
    return this.IssueService.updateIssueById(id, updateIssueDto);
  }

  @Delete(':id')
  deleteIssueById(@Param('id') id: string) {
    return this.IssueService.deleteIssueById(id);
  }
}
