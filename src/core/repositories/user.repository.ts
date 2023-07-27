import { DataSource, EntityRepository, Repository } from 'typeorm';
import { UserEntity } from '../entities/user.entity';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UserRepository extends Repository<UserEntity> {
  constructor(readonly datasource: DataSource) {
    super(UserEntity, datasource.createEntityManager());
  }

  findByUsername(username: string) {
    this.findOneOrFail({
      where: {
        username,
      },
    });
  }
}
