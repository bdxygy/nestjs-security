import { HttpStatus } from '@nestjs/common';

export type UniversalResponseType<T = null> = {
  data: T;
  error: string | null;
  message: string;
  statusCode: HttpStatus;
};
