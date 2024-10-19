import { Component, Input } from '@angular/core';
import { TaskService } from '../../features/tasks/task.service';

@Component({
  selector: 'kra-button',
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
})
export class ButtonComponent {
  @Input() label = 'Click Me!';
  @Input() disabled: boolean = false;
}
