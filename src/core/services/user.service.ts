import { CreateUpdateUserDto } from '../dto/user.dto';
import { UserEntity } from '../entities/user.entity';
import { UniversalService } from '../utils/interfaces/universal-service';

export interface UserService
  extends UniversalService<UserEntity, CreateUpdateUserDto, string> {}
