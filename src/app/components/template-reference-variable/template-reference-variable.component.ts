import { Component } from '@angular/core';

@Component({
  selector: 'app-template-reference-variable',
  standalone: true,
  imports: [],
  templateUrl: './template-reference-variable.component.html',
  styleUrl: './template-reference-variable.component.css',
})
export class TemplateReferenceVariableComponent {
  isTrue = true;
  submitData(val: any) {
    console.log(val);
  }
}
