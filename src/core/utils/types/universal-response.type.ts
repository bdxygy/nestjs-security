import { HttpStatus } from '@nestjs/common';

export type UniversalResponse<T = null> = {
  data: T;
  error: string | null;
  message: string;
  statusCode: HttpStatus;
};
