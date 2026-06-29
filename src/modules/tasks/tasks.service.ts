import { Injectable, Logger } from '@nestjs/common';
import { TaskSource, UnifiedTaskDto } from './dto/index.js';
import { TasksCacheService } from './cache/tasks-cache.service.js';

@Injectable()
export class TasksService {
  private readonly logger = new Logger(TasksService.name);

  constructor(private readonly cache: TasksCacheService) {}

  getTasks(source?: TaskSource): UnifiedTaskDto[] {
    this.logger.debug('Getting tasks from cache');
    const all = this.cache.getAll();
    return source ? all.filter((t) => t.source === source) : all;
  }

  async refresh(): Promise<{ count: number; refreshedAt: string }> {
    this.logger.debug('Forcing cache refresh');
    return this.cache.refresh();
  }
}
