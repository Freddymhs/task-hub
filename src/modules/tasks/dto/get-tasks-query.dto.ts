import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsEnum, IsOptional } from 'class-validator';
import { TaskSource } from './task-source.enum';

export class GetTaskQueryDto {
  @ApiPropertyOptional({ enum: TaskSource })
  @IsOptional()
  @IsEnum(TaskSource)
  source?: TaskSource;
}
