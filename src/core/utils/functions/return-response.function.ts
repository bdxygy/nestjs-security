import { HttpStatus } from '@nestjs/common';
import { UniversalResponse } from '../types/universal-response.type';
import { HttpResponse } from '../declarations/http.declaration';

export function ReturnResponse(
  responseContext: HttpResponse,
  status: HttpStatus,
  responseObject: Omit<UniversalResponse, 'statusCode'>,
) {
  const response: UniversalResponse = {
    ...responseObject,
    statusCode: status,
  };
  responseContext.status(status).send(response);
}
