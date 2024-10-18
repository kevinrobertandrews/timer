import { NgModule } from '@angular/core';
import { ButtonModule } from './button/button.module';
import { ClockModule } from './clock/clock.module';
import { InputModule } from './input/input.module';
import { IconButtonModule } from './icon-button/icon-button.module';

const modules = [ButtonModule, ClockModule, InputModule, IconButtonModule];

@NgModule({
  imports: modules,
  exports: modules,
})
export class ComponentsModule {}
