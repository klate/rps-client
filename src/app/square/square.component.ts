import { Component, Inject, Input } from '@angular/core';

@Component({
  selector: 'app-square',
  template: `
    <p>
      square works! {{ random }} 
    </p>
  `,
  styles: [
  ]
})
export class SquareComponent {

  // creating value for template ui
  random = 0;

  constructor(@Inject("message") message: string) {
    this.displayValue = message;
    // sets an interval, so the timer random variable is updated every 500ms
    setInterval(() => this.random = Math.random(), 500);
  }

  // add input components next
  // add input components next

  @Input()
  displayValue: 'r' | 'p' | 's' | string;


}
