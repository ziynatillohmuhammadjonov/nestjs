import { Injectable } from '@nestjs/common';

@Injectable()
export class MoviesService {
  async test() {
    const data = await 'Hello world';
    return { message: data };
  }
}
