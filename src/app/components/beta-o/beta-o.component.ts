import { Component, EventEmitter, Output, output } from '@angular/core';

@Component({
  selector: 'app-beta-o',
  standalone: true,
  imports: [],
  templateUrl: './beta-o.component.html',
  styleUrl: './beta-o.component.css',
})
export class BetaOComponent {
  @Output('dataEvent') Event = new EventEmitter();
  modeEvent: any = output({ alias: 'mode' });
  // Run it without @Output decorator
  // ngOnInit(): void {
  //   this.Event.subscribe((val: any) => {
  //     console.log(val);
  //   });
  // }

  handleClick(e: MouseEvent) {
    console.log(this.modeEvent);
    this.Event.emit('Button is clicked');
    this.modeEvent.emit('hello world mode');
  }
}

// Other way of doing the same as above

// import { Component, EventEmitter, Output } from '@angular/core';

// @Component({
//   selector: 'app-beta-o',
//   standalone: true,
//   imports: [],
//   templateUrl: './beta-o.component.html',
//   styleUrl: './beta-o.component.css',
//   outputs: ['Event : dataEvent'],
// })
// export class BetaOComponent {
//   Event = new EventEmitter();

//   handleClick(e: MouseEvent) {
//     this.Event.emit('Button is clicked');
//   }
// }
