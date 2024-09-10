import { Component } from '@angular/core';
import { CustomDirective } from '../../directives/custom.directive';

@Component({
  selector: 'app-directives',
  standalone: true,
  imports: [CustomDirective],
  templateUrl: './directives.component.html',
  styleUrl: './directives.component.css',
})
export class DirectivesComponent {}
