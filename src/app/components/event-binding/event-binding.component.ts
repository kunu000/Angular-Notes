import { Component } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  standalone: true,
  imports: [],
  templateUrl: './event-binding.component.html',
  styleUrl: './event-binding.component.css',
})
export class EventBindingComponent {
  handleClick(e: Event) {
    console.log('Button clicked', e.target);
  }
  handleInput(e: Event) {
    console.log('Input value changed', (e as KeyboardEvent).key);
  }
}
