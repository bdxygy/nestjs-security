import { Controller, Get, HttpStatus } from '@nestjs/common';
import { UniversalResponse } from 'src/core/utils/types/universal-response.type';

@Controller('interface')
export class InterfaceController {

  @Get()
  public home(): UniversalResponse<null> {
    return {
      statusCode: HttpStatus.ACCEPTED,
      message: 'Welcome Hero!',
      error: null,
      data: null,
    };
  }
}
