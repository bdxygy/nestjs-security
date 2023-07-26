import { Controller, Get } from '@nestjs/common';

@Controller('public')
export class PublicController {
  @Get()
  public welcome() {
    return 'Welcome';
  }
}
