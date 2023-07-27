import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
} from '@nestjs/common';
import { UniversalResponse } from '../utils/classes/universal-response/universal-response';
import { HttpResponse } from '../utils/declarations/http.declaration';

@Catch(HttpException)
export class GlobalExceptionHandler implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const context = host.switchToHttp();
    const response = context.getResponse<HttpResponse>();

    UniversalResponse.return(response, exception.getStatus(), {
      message: exception.message,
      error: exception.name,
      data: null,
    });
  }
}
