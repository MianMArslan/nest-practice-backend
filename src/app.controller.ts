import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Put,
  Delete,
} from '@nestjs/common';
import { AppService } from './app.service';
import { User as UserModel } from '@prisma/client';

@Controller()
export class AppController {
  constructor(private readonly userService: AppService) {}

  @Post('user')
  async signupUser(
    @Body() userData: { name?: string; email: string },
  ): Promise<UserModel> {
    return this.userService.createUser(userData);
  }
  @Get('user/:id')
  async users(@Param() Param: { id: number }) {
    console.log(
      '🚀 ~ file: app.controller.ts ~ line 25 ~ AppController ~ user ~ Param',
      typeof Param.id,
    );
    return this.userService.users({ where: { id: Number(Param.id) } });
  }
}
