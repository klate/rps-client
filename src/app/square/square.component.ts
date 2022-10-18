import { Component, Inject, Input } from '@angular/core';

@Component({
  selector: 'app-square',
  template: `
      <button>{{ this.displayValue }}</button>
  `,
  styleUrls: [
    './square.component.scss'
  ]
})
// DUMP component for displaying a tile
export class SquareComponent {

  @Input()
  displayValue: 'r' | 'p' | 's' | string | undefined;


}
