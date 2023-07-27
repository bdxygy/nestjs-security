import { HttpStatus } from '@nestjs/common';
import { UniversalResponseType } from '../../types/universal-response.type';
import { HttpResponse } from '../../declarations/http.declaration';

export class UniversalResponse {
  public static return(
    responseContext: HttpResponse,
    status: HttpStatus,
    responseObject: Omit<UniversalResponseType, 'statusCode'>,
  ) {
    const response: UniversalResponseType = {
      ...responseObject,
      statusCode: status,
    };
    responseContext.status(status).send(response);
  }
}
