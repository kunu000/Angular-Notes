import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Input,
} from '@angular/core';

@Directive({
  selector: '[appCustom]',
  standalone: true,
})
export class CustomDirective {
  constructor(private el: ElementRef) {}
  @Input() color!: string;
  @Input() style!: any;

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    console.log(this.style);
  }

  @HostBinding('class.directive') class = true;
  @HostListener('mouseenter') onMouseEnter = () => {
    this.el.nativeElement.style.backgroundColor = this.color || 'red';
  };
  @HostListener('mouseleave') onMouseLeave = () => {
    this.el.nativeElement.style.backgroundColor = '';
  };
}
