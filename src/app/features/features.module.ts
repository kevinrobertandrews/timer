import { NgModule } from '@angular/core';
import { TasksModule } from './tasks/tasks.module';
import { ClockModule } from './clock/clock.module';

const modules = [TasksModule, ClockModule];

@NgModule({
  imports: modules,
  exports: modules,
})
export class FeaturesModule {}
