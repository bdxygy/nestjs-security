import { Module } from '@nestjs/common';
import { InterfaceController } from './rest/interface/interface.controller';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { databaseConfiguration } from './core/configs/database.config';
import { UserRepository } from './core/repositories/user.repository';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRootAsync(databaseConfiguration),
  ],
  controllers: [InterfaceController],
  providers: [UserRepository],
})
export class AppModule {
  public static port: number;
  constructor(private configService: ConfigService) {
    AppModule.port = this.configService.get<number>('APP_PORT');
  }
}
