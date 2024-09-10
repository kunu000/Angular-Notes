import { Component, Input, output } from '@angular/core';

@Component({
  selector: 'app-child-two-way-binding',
  standalone: true,
  imports: [],
  templateUrl: './child-two-way-binding.component.html',
  styleUrl: './child-two-way-binding.component.css',
})
export class ChildTwoWayBindingComponent {
  @Input() size!: number;
  sizeChange: any = output();

  handleClick() {
    // we can change the value of input in child component it will not affect the parent component's value.
    // But when you pass an object,array or function from a parent component to a child component and then change the value of that in the child component, those changes will be reflected in the parent component because these in JavaScript are passed by reference, not by value.
    this.size++;
    this.sizeChange.emit(this.size);
  }
}
