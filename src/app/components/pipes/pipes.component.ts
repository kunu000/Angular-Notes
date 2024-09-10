import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CustomPipe } from '../../pipes/custom.pipe';
import { FilterArrayPipe } from '../../pipes/filter-array.pipe';

@Component({
  selector: 'app-pipes',
  standalone: true,
  imports: [CommonModule, CustomPipe, FilterArrayPipe],
  templateUrl: './pipes.component.html',
  styleUrl: './pipes.component.css',
})
export class PipesComponent {
  currentDate = new Date().toISOString();
  str = 'Hello World';
  num = 12345.59;
  num2 = 45.79;
  per = 0.98;
  obj = { name: 'kunal', age: 22 };
  heroes: any[] = [
    { name: 'Superman', canFly: true },
    { name: 'Batman', canFly: false },
    { name: 'Wonder Woman', canFly: true },
  ];

  addNewHero() {
    this.heroes = [...this.heroes, { name: 'Ant Man', canFly: false }];
  }
}
