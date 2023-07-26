import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { UniversalEntity } from './universal-entity';
import { Role } from '../utils/role-enum';

@Entity({ name: 'users' })
export class UserEntity extends UniversalEntity {
  @Column({ nullable: false, unique: true })
  username: string;

  @Column({ nullable: false, unique: true })
  email: string;

  @Column({ nullable: false })
  password: string;

  @Column({ nullable: false, type: 'enum', enum: Role, default: Role.USER })
  role: Role;
}
