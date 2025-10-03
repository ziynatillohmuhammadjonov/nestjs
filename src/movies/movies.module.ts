import { Module } from '@nestjs/common';
import { MoviesService } from './movies.service';
import { MoviesController } from './movies.controller';

@Module({
  controllers: [MoviesController],
  providers: [MoviesService],
  exports: [MoviesModule, MoviesService],
})
export class MoviesModule {}
