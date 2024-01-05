import { IsNotEmpty, IsString, MinLength } from "class-validator";

export class DeleteUserDTO {
  @IsNotEmpty()
  @IsString()
  @MinLength(6)
  password: string
}