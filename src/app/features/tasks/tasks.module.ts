import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TasksContainer } from './tasks.container';
import { TaskService } from './task.service';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [TasksContainer],
  providers: [TaskService],
  imports: [CommonModule, ComponentsModule],
  exports: [TasksContainer],
})
export class TasksModule {}
