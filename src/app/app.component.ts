import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  title = 'for realz!';
  counter = 0;

  increment() {
    this.counter += 1;
  }

  decrement() {
    this.counter = Math.max(0, this.counter - 1);
  }
}
