import { Component } from '@angular/core';
import { BetaComponent } from '../beta/beta.component';

@Component({
  selector: 'app-papa',
  standalone: true,
  imports: [BetaComponent],
  templateUrl: './papa.component.html',
  styleUrl: './papa.component.css',
})
export class PapaComponent {
  title = 'Initial';

  handleClick() {
    this.title = 'Finally';
  }
}
