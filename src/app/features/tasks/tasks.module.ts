import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TasksContainer } from './tasks.container';
import { TaskService } from './task.service';
import { SharedModule } from '../../shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [TasksContainer],
  providers: [TaskService],
  imports: [CommonModule, SharedModule, BrowserAnimationsModule],
  exports: [TasksContainer],
})
export class TasksModule {}
