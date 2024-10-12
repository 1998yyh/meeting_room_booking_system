import { PickType } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty } from 'class-validator';
import { RegisterUserDto } from './registre-user.dto';

export class UpdateUserDto extends PickType(RegisterUserDto, ['captcha', 'email', 'nickName']) {
  headPic: string;
}
