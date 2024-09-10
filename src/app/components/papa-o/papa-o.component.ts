import { Component } from '@angular/core';
import { BetaOComponent } from '../beta-o/beta-o.component';

@Component({
  selector: 'app-papa-o',
  standalone: true,
  imports: [BetaOComponent],
  templateUrl: './papa-o.component.html',
  styleUrl: './papa-o.component.css',
})
export class PapaOComponent {
  ngOnInit(): void {}

  receiveData(e: any) {
    console.log(e);
  }

  receiveMode(e: any) {
    console.log(e);
  }
}
