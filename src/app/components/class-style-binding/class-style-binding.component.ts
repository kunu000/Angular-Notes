import { Component } from '@angular/core';

@Component({
  selector: 'app-class-style-binding',
  standalone: true,
  imports: [],
  templateUrl: './class-style-binding.component.html',
  styleUrl: './class-style-binding.component.css',
})
export class ClassStyleBindingComponent {
  isClass = true;
  classString = 'h1 h2 h3';
  classArray = ['h1', 'h2', 'h3'];
  classObj = { p1: false, p2: true };
  isClass2 = undefined;

  width = 100;
  height = '200px';
  styleObj = { width: '200px', backgroundColor: 'green' };
  styleString = 'background: black ;color : white ';
}
