import { Component, HostBinding, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { data } from './data';
import { CommonModule } from '@angular/common';
import { AppService } from './app.service';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'timer';

  data = data;

  form = new FormGroup({})
  client = new FormControl()

  constructor(public app: AppService) {
  }

  ngOnInit(): void {
    this.app.addClient({ name: "init client" })
  }

  handleClick() {
    console.log('handling click...')
  }
  
  public log(event: Event) {
    console.log(event);
  }

  handleSubmit() {
    console.log(this.client.value);
    this.app.addClient({ name: this.client.value })
    this.client.reset();
  }

}

