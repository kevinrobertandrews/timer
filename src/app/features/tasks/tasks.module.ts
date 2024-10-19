import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TasksComponent } from './tasks.component';
import { TaskService } from './task.service';
import { SharedModule } from '../../shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [TasksComponent],
  providers: [TaskService],
  imports: [CommonModule, SharedModule, BrowserAnimationsModule],
  exports: [TasksComponent],
})
export class TasksModule {}
