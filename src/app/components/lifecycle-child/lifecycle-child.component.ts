import {
  Component,
  ElementRef,
  Input,
  SimpleChanges,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-lifecycle-child',
  standalone: true,
  imports: [],
  templateUrl: './lifecycle-child.component.html',
  styleUrl: './lifecycle-child.component.css',
})
export class LifecycleChildComponent {
  name = 'David';
  @Input() title!: string;
  @Input({ alias: 'name', transform: toUpperCase, required: true })
  names!: string;
  @ViewChild('searchInput') searchInput!: ElementRef;

  constructor() {
    console.log('constructor 1');
    console.log(this.title, this.names, this.name);
  }

  ngOnInit(): void {
    console.log('ngOnInit 2');
    console.log(this.title, this.names);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges 3');
    console.log(changes);
    // when current value changes and it is not first change then call api
    if (changes['title'].currentValue != '' && !changes['title'].firstChange) {
      console.log('Text Changed, Call an API');
    }
  }

  // see example of ngOnDestroy in Component-b

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit');
    console.log(this.searchInput.nativeElement); // 'Search Input'
  }
}

function toUpperCase(value: any) {
  return value.toUpperCase();
}
