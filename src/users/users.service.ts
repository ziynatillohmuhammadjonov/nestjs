import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  constructor(readonly userService: UsersService) {}

  async test() {
    return await this.userService.test();
  }
}
