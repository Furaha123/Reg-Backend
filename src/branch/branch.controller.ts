import { Body, Controller, Get, Post } from '@nestjs/common';
import { BranchService } from './branch.service';
import { BranchCreateDto } from './dtos/BranchCreate.dto';

@Controller('branch')
export class BranchController {
  constructor(private BranchService: BranchService) {}
  @Post()
  createBranch(@Body() branchCreateDto: BranchCreateDto) {
    return this.BranchService.createBranch(branchCreateDto);
  }

  @Get()
  getAllBranches() {
    return this.BranchService.getAllBranches();
  }
}
