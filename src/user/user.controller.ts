import {
  Body,
  Controller,
  Get,
  HttpStatus,
  Param,
  ParseIntPipe,
  Post,
  UseGuards,
} from '@nestjs/common';
import { UserService } from './user.service';
import {
  RequestUser,
  User,
} from '../common/decorators/request.user.decorator';
import { StandardResponse } from '../response/StandardResponse';
import { ForbiddenError, UnauthorizedError } from '../response/HttpErrors';
import { ErrorCode } from '../response/ErrorCode';
import { AuthGuard } from '../auth/auth.guard';
import { AppMessage } from 'src/response/AppMessage';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @UseGuards(AuthGuard)
  @Get('profile')
  public async getProfile(@User() user: RequestUser) {
    const data = await this.userService.getProfile(user.id);
    const response: StandardResponse = {
      success: true,
      code: HttpStatus.OK,
      message: AppMessage.SUCCESS_RESPONSE,
      data,
    };
    return response;
  }
}
