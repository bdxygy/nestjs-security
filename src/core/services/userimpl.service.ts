import { Injectable, NotFoundException } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUpdateUserDto } from '../dto/user.dto';
import { UserEntity } from '../entities/user.entity';
import { UserRepository } from '../repositories/user.repository';

@Injectable()
export class UserServiceImpl implements UserService {
  constructor(private userRespository: UserRepository) {}

  async findAll(): Promise<UserEntity[]> {
    return this.userRespository.find();
  }

  async findById(id: string): Promise<UserEntity> {
    let user: UserEntity;

    try {
      user = await this.userRespository.findOneOrFail({ where: { id } });
    } catch (error) {
      throw new NotFoundException(error);
    }

    return user;
  }

  async create(createDto: CreateUpdateUserDto): Promise<UserEntity> {
    return this.userRespository.create({
      username: createDto.username,
      password: createDto.password,
      email: createDto.email,
    });
  }

  async update(updateDto: Partial<CreateUpdateUserDto>): Promise<UserEntity> {
    const user: UserEntity = await this.findById(updateDto.id);
    
    for(let key in updateDto){
        if(updateDto[key]){
            user[key] = updateDto[key];
        }
    }

   return this.userRespository.save(user);

  }
  
  async delete(id: string): Promise<void> {
    const user: UserEntity = await this.findById(id);
    await this.userRespository.remove(user);
  }
}
