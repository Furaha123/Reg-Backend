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
import { IssuesService } from './issues.service';
import { IssueCreateDto } from './dtos/IssueCreate.dto';
import { UpdateIssueDto } from './dtos/UpdateIssue.dto';

@Controller('issues')
export class IssuesController {
  constructor(private IssueService: IssuesService) {}
  @Post()
  @UsePipes(ValidationPipe)
  createIssue(@Body() issueCreatDto: IssueCreateDto) {
    return this.IssueService.createIssue(issueCreatDto);
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
