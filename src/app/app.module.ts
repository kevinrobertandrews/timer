import { NgModule } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { FeaturesModule } from './features/features.module';

@NgModule({
  declarations: [AppComponent],
  imports: [RouterOutlet, BrowserModule, FeaturesModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
