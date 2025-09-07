import { IsPhoneNumber } from 'class-validator';

export class RegisterByPhoneDto {
  @IsPhoneNumber()
  phoneNumber: string;
}
