import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorModule } from './error/error.module';
import { LoggerModule } from './logger/logger.module';
import { StateModule } from './state/state.module';
import { StorageModule } from './storage/storage.module';

const modules = [ErrorModule, LoggerModule, StateModule, StorageModule];

@NgModule({
  declarations: [],
  imports: modules,
  exports: modules,
})
export class CoreModule {}
