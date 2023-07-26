import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
} from '@nestjs/common';
import { Response, Request } from 'express';
import { UniversalResponse } from '../utils/universal-response';

@Catch(HttpException)
export class ExceptionHandler implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const { message, name: error } = exception;
    const context = host.switchToHttp();
    const response = context.getResponse<Response>();
    const status = exception.getStatus();

    const errorResponse: UniversalResponse<null> = {
      data: null,
      error,
      message,
      status,
    };

    response.status(status).json(errorResponse);
  }
}
