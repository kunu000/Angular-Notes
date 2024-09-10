import { Component, ElementRef, ViewChild, afterNextRender, afterRender } from '@angular/core';
import { LifecycleChildComponent } from '../lifecycle-child/lifecycle-child.component';

@Component({
  selector: 'app-lifecycle-parent',
  standalone: true,
  imports: [LifecycleChildComponent],
  templateUrl: './lifecycle-parent.component.html',
  styleUrl: './lifecycle-parent.component.css',
})
export class LifecycleParentComponent {
  userData: any[] = [
    { id: 1, name: 'John' },
    { id: 2, name: 'Pinky' },
    { id: 3, name: 'Blinder' },
  ];
  title: any = 'Loading...'; // if the value of title is same after clicking the button it will not call ngOnChanges
  @ViewChild(LifecycleChildComponent) lifecycleChild!: LifecycleChildComponent; // access child component object
  @ViewChild('refs') ref!:ElementRef;

  constructor(private el: ElementRef) {
    // This hook runs every time all components have been rendered to the DOM.
    afterRender(() => {
      el.nativeElement.querySelector('#inp')?.focus();
    });

    // This hook runs once the next time all components have been rendered to the DOM.
    // afterNextRender(() => {
    //   el.nativeElement.querySelector('#inp')?.focus();
    // });
  }

  handleClick() {
    this.title = 'Lifecycle';
    console.log(this.ref.nativeElement.getAttribute('value')) // attribute
    console.log(this.ref.nativeElement.value); // property
  }

  ngAfterViewInit(): void {
    console.log(this.lifecycleChild);
    console.log(this.lifecycleChild.searchInput.nativeElement);
  }

  // ngAfterViewInit(): void {
  //   console.log('ngAfterViewInit');
  //   console.log(this.searchInput.nativeElement); // 'Search Input'
  // }
}
