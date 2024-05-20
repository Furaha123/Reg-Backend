import { Body, Controller, Post } from '@nestjs/common';
import { ConnectionService } from './connection.service';
import { CreateConnectionDto } from './dtos/CreateConnection.dto';

@Controller('connections')
export class ConnectionController {
  constructor(private ConnectionService: ConnectionService) {}
  @Post()
  createConnection(@Body() CreateConnectionDto: CreateConnectionDto) {
    return this.ConnectionService.createConnection(CreateConnectionDto);
  }
}
