import { IsEmail, IsNotEmpty, IsString, MinLength } from "class-validator"

export class SigninAuthDto {
  @IsNotEmpty()
  @IsEmail()
  email: string

  @IsNotEmpty()
  @IsString()
  @MinLength(6)
  password:string
}
