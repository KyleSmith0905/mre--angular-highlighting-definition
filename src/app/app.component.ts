import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [CommonModule],
  template: `
<div *ngIf='data() as data'>
  <h1>Some Random Data Points:</h1>
  <p>{{data.dataPoint1}}</p>
  <p>{{data.dataPoint2}}</p>
  <p>{{data.dataPoint3}}</p>
</div>
  `,
  styles: [``],
  standalone: true,
})
export class AppComponent {
  data = signal({dataPoint1: 2, dataPoint2: 'hello', dataPoint3: true})
}
