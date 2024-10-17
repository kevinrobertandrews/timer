import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { data } from './data.json';
import { CommonModule } from '@angular/common';
import './models/Client.model';
import './value-objects/Day.vo'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'timer';

  data = data;
}
