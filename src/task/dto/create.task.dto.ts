import {
  IsArray,
  IsBoolean,
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';
import { StartWith } from '../decorators/start-with.decorator';

export enum TaskTagEnum {
  WORK = 'work',
  STUDY = 'study',
}

export class CreateTaskDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  @MaxLength(30)
  // @StartWith('Task:')
  title: string;

  @IsBoolean()
  @IsNotEmpty()
  isCompleted: boolean;

  @IsOptional()
  description: string;

  @IsArray()
  @IsEnum(TaskTagEnum, { message: "Tag noto'g'ri kiritilibdi" })
  @IsString({ each: true })
  tags: string[];
}
