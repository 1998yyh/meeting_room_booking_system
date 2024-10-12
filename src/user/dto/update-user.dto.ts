import { PickType } from '@nestjs/swagger';
import { RegisterUserDto } from './registre-user.dto';

export class UpdateUserDto extends PickType(RegisterUserDto, ['captcha', 'email', 'nickName', 'password']) {}
