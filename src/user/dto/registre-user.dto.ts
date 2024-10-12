import { PickType } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty } from 'class-validator';
import { LoginUserDto } from './login-user.dto';

export class RegisterUserDto extends PickType(LoginUserDto, ['password', 'username']) {
  @IsNotEmpty({
    message: '昵称不能为空',
  })
  nickName: string;

  @IsNotEmpty({
    message: '邮箱不能为空',
  })
  @IsEmail(
    {},
    {
      message: '不是合法的邮箱格式',
    },
  )
  email: string;

  @IsNotEmpty({
    message: '验证码不能为空',
  })
  captcha: string;
}
