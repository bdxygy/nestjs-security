import { Module } from '@nestjs/common';
import { PublicController } from './public/public.controller';

@Module({
  controllers: [PublicController]
})
export class RestModule {}
