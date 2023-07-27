import { Controller, Get, HttpStatus, Res } from '@nestjs/common';
import { HttpResponse } from 'src/core/utils/declarations/http.declaration';
import { ReturnResponse } from 'src/core/utils/functions/return-response.function';
@Controller('interface')
export class InterfaceController {
  @Get()
  public home(@Res() response: HttpResponse) {
    ReturnResponse(response, HttpStatus.OK, {
      message: 'Welcome New Hero!',
      error: null,
      data: null,
    });
  }
}
