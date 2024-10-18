import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TasksContainer } from './tasks.container';
import { TaskService } from './task.service';
import { InputComponent } from '../../components/input/input.component';
import { InputModule } from '../../components/input/input.module';
import { ClockModule } from '../../components/clock/clock.module';

@NgModule({
  declarations: [TasksContainer],
  providers: [TaskService],
  imports: [CommonModule, InputModule, ClockModule],
  exports: [TasksContainer],
})
export class TasksModule {}
