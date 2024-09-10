import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-template-syntax',
  standalone: true,
  imports: [],
  templateUrl: './template-syntax.component.html',
  styleUrl: './template-syntax.component.css',
})
export class TemplateSyntaxComponent {
  name: string | null = 'Kunal';
  num: number = 1;
  colspan = 2;
  searchText = '';
  isDisabled = true;
  @ViewChild('dd') button!: ElementRef;
  @ViewChild('th') th!: ElementRef;

  deleteProducts() {
    console.log('product is deleted');
  }

  ngAfterViewInit(): void {
    console.log(this.button.nativeElement);
    console.log(this.button.nativeElement.contentEditable); // property
    console.log(this.button.nativeElement.getAttribute('contenteditable')); // attribute

    console.log(this.th.nativeElement.getAttribute('colspan'));
  }

  // when we define the initial value of attributes it will also inialize the properties with same value
  handleInput(e: Event) {
    // this.searchText = (e.target as HTMLInputElement).value;
    console.log((e.target as HTMLInputElement).value);
    console.log((e.target as HTMLInputElement).className);
    (e.target as HTMLInputElement).setAttribute('value', 'apple');
    console.log((e.target as HTMLInputElement).getAttribute('value'));
  }
}
