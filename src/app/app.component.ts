import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ClientService } from './features/clients/client.service';
import { StorageService } from './core/storage';
import { TasksContainer } from './features/tasks/tasks.container';
import { TasksModule } from './features/tasks/tasks.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, ReactiveFormsModule, TasksModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {}
