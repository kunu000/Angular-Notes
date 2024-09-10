import { Component, HostBinding, HostListener } from '@angular/core';

@Component({
  selector: 'app-learn-host',
  standalone: true,
  imports: [],
  templateUrl: './learn-host.component.html',
  styleUrl: './learn-host.component.css',
  // host: { // recommended way to apply attributes, properties and events to the host element
  //   className: 'learn-host123', // adding static class name
  //   // style: `
  //   // background-color: rgb(255 34 201) !important;
  //   // display:none;
  //   // `,
  //   '[tabIndex]': 'disabled ? -1 : 0', //adding dynamic values
  //   '(click)': 'handleClick($event)', // adding event listener
  // },
})
export class LearnHostComponent {
  disabled = false;
  // Not recommended way to apply attributes, properties.
  @HostBinding('class') value = 'host123';
  // @HostBinding('style.display') value2 = 'none';
  @HostBinding('tabIndex')
  tabIndex() {
    return this.disabled ? -1 : 0;
  }

  // Not recommended way to apply events to the host element
  @HostListener('keydown', ['$event'])
  fun(e: KeyboardEvent) {
    console.log(e.key);
  }

  handleClick(e: any) {
    console.log(e.currentTarget);
    alert(e.target);
  }
}
