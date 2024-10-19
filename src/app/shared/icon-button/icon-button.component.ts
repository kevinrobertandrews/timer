import { Component, Input } from '@angular/core';

@Component({
  selector: 'kra-icon-button',
  templateUrl: './icon-button.component.html',
  styleUrl: './icon-button.component.scss',
})
export class IconButtonComponent {
  @Input() icon: string = '';
}
