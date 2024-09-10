import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-testng-content',
  standalone: true,
  imports: [],
  templateUrl: './testng-content.component.html',
  styleUrl: './testng-content.component.css',
})
export class TestngContentComponent {
  @Input({ alias: 'title', required: true, transform: upperCase }) heading!:
    | string
    | null;
}

function upperCase(value: any) {
  if (value != null) {
    return value.toUpperCase();
  }
  return value;
}
