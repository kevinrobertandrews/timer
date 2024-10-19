import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TasksContainer } from './tasks.container';
import { TaskService } from './task.service';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [TasksContainer],
  providers: [TaskService],
  imports: [CommonModule, SharedModule],
  exports: [TasksContainer],
})
export class TasksModule {}
