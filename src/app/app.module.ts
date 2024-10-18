import { NgModule } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { TasksModule } from './features/tasks/tasks.module';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [AppComponent],
  imports: [RouterOutlet, BrowserModule, ReactiveFormsModule, TasksModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
