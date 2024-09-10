import {
  Component,
  Input,
  booleanAttribute,
  numberAttribute,
} from '@angular/core';

@Component({
  selector: 'app-beta',
  standalone: true,
  imports: [],
  templateUrl: './beta.component.html',
  styleUrl: './beta.component.css',
  inputs: ['disabled'],
})
export class BetaComponent {
  private info: any;

  // built in transform functions
  @Input({ required: true, transform: booleanAttribute }) title!: any; // Angular refers to properties marked with the @Input decorator as 'inputs'.
  @Input({ transform: numberAttribute, alias: 'lambai' }) height!: any;
  @Input({ transform: toUpperCase }) name!: string | null | undefined;
  @Input()
  get value(): number {
    return this.internalValue;
  }
  set value(newValue: number) {
    this.internalValue = newValue;
  }
  private internalValue = 0;
}

//this whole function will not run if we don't pass name to the child component's selector in parent component
function toUpperCase(value: any) {
  if (typeof value === 'string') return (value as string).toUpperCase();
  else return value;
}
