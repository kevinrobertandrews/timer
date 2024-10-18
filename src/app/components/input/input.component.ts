import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'kra-input',
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss',
})
export class InputComponent {
  @Input() placeholder: string = 'Placeholder...';
  @Output() onSubmit: EventEmitter<string> = new EventEmitter();

  form = new FormGroup({});
  input = new FormControl();

  handleSubmit() {
    if (this.input.value == null) {
      return; // noop
    }

    this.onSubmit.emit(this.input.value);
    this.input.reset();
  }
}
