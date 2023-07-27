import { Controller, Get, HttpStatus, Res } from '@nestjs/common';
import { HttpResponse } from 'src/core/utils/declarations/http.declaration';
import { UniversalResponse } from 'src/core/utils/classes/universal-response/universal-response';
@Controller('interface')
export class InterfaceController {
  @Get()
  public home(@Res() response: HttpResponse) {
    UniversalResponse.return(response, HttpStatus.OK, {
      message: 'Welcome New Hero!',
      error: null,
      data: null,
    });
  }
}
