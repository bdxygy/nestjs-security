import {
  TypeOrmModuleAsyncOptions,
  TypeOrmModuleOptions,
} from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { HttpException, HttpStatus } from '@nestjs/common';
// import { UserEntity } from '../entities/user.entity';
import { UserRepository } from '../repositories/user.repository';

class TypeOrmConfiguration {
  public static use(configService: ConfigService): TypeOrmModuleOptions {
    const databaseOptions = {
      // type: configService.get('DATABASE_TYPE'),
      type: 'mysql',
      database: configService.get<string>('DATABASE_NAME'),
      host: configService.get<string>('DATABASE_HOST'),
      port: configService.get<number>('DATABASE_PORT'),
      username: configService.get<string>('DATABASE_USERNAME'),
      password: configService.get<string>('DATABASE_PASSWORD'),
      poolSize: configService.get<number>('DATABASE_POOL'),
      synchronize: configService.get<boolean>('DATABASE_SYNC'),
      autoLoadEntities: configService.get<boolean>('DATABASE_AUTOLOAD'),
      entities: [UserRepository],
      logger: 'debug',
    } as TypeOrmModuleOptions;

    TypeOrmConfiguration.verifiedDatabaseOptions(databaseOptions);

    return databaseOptions;
  }

  private static verifiedDatabaseOptions(databaseOptions: {
    [key: string]: any;
  }) {
    for (let key in databaseOptions) {
      if (!Boolean(databaseOptions[key])) {
        throw new HttpException(
          'Database cannot connected! Please check database options.',
          HttpStatus.BAD_GATEWAY,
        );
      }
    }
  }
}

export const databaseConfiguration: TypeOrmModuleAsyncOptions = {
  imports: [ConfigModule],
  useFactory: (configService: ConfigService): TypeOrmModuleOptions => {
    return TypeOrmConfiguration.use(configService);
  },
  inject: [ConfigService],
};
