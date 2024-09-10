import { Component } from '@angular/core';
import { ChildTwoWayBindingComponent } from '../child-two-way-binding/child-two-way-binding.component';

@Component({
  selector: 'app-parent-two-way-binding',
  standalone: true,
  imports: [ChildTwoWayBindingComponent],
  templateUrl: './parent-two-way-binding.component.html',
  styleUrl: './parent-two-way-binding.component.css',
})
export class ParentTwoWayBindingComponent {
  size = 5;
}
