import { BeforeInsert, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { UniversalEntity } from '../utils/classes/universal-entity/universal-entity';
import bcrypt from 'bcrypt';

@Entity({ name: 'users' })
export class UserEntity extends UniversalEntity {
  @Column({ nullable: false })
  username: string;

  @Column({ nullable: false })
  password: string;

  @Column({ nullable: false })
  email: string;

  @BeforeInsert()
  async hashingPassword() {
    this.password = await bcrypt.hash(this.password, 12);
  }
}
