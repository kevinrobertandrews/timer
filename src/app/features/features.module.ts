import { NgModule } from '@angular/core';
import { TasksModule } from './tasks/tasks.module';
import { ClockModule } from './clock/clock.module';
import { SharedModule } from '../shared/shared.module';

const modules = [TasksModule, ClockModule, SharedModule];

@NgModule({
  imports: modules,
  exports: modules,
})
export class FeaturesModule {}
