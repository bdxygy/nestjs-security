import { Module } from '@nestjs/common';
import { RestModule } from './rest/rest.module';
import { CoreModule } from './core/core.module';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { join } from 'path';
import { UserEntity } from './core/entities/user-entity';

const databaseConfiguration: TypeOrmModuleOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'root',
  database: 'nest_security',
  poolSize: 50,
  synchronize: true,
  entities: [UserEntity],
};

@Module({
  imports: [
    RestModule,
    CoreModule,
    TypeOrmModule.forRoot(databaseConfiguration),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
