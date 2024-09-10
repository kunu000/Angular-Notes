import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-component',
  standalone: true,
  imports: [],
  templateUrl: './component.component.html',
  styleUrl: './component.component.css',
})
export class ComponentComponent {
  title = 'Component';
  isDisabled = true;
  userId = '12345';
  isAdmin = true;
  usersData = [
    { name: 'kunal', age: 22 },
    { name: 'prabjot', age: 25 },
    { name: 'Rohit', age: 23 },
  ];
  @ViewChild('Btn', { static: false }) Button!: ElementRef;

  ngOnInit(): void {
    // accessing custom attribute of an Html element
    // const result = this.Button.nativeElement.getAttribute('data-user-id');
    // console.log(this.Button.nativeElement);
    // console.log(this.Button.nativeElement.innerText);
    // console.log(result);
    // In result we got null because the ngOnInit lifecycle hook runs after component's constructor and Angular initializes the component's data-bound properties but before the view and child views are initialized. This means that the @ViewChild elements are not yet available when ngOnInit is called.
    // On the other hand, in ngAfterViewInit we get the value because the ngAfterViewInit lifecycle hook runs after Angular fully initializes the component's view and child views. By this point, the @ViewChild elements are available, and you can safely access and manipulate them.
  }
  ngAfterViewInit(): void {
    // accessing custom attribute of an Html element
    const result = this.Button.nativeElement.getAttribute('data-user-id');
    console.log('ngAfterViewInit ', result); // 12345
  }

  handleClick() {
    alert('button clicked!');
  }

  handleDblClick(e: Event) {
    console.log('.........................');
    console.log((e.target as HTMLButtonElement).value);
    console.log(e.type);
    console.log(e.currentTarget);
    console.log(e.timeStamp);
    // console.log(e.preventDefault());
    // console.log(e.stopPropagation());
    console.log('.........................');
  }
}
