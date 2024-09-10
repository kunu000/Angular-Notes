import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-betwa',
  standalone: true,
  imports: [],
  templateUrl: './betwa.component.html',
  styleUrl: './betwa.component.css',
})
export class BetwaComponent {
  isLogin = false;

  handleClick = () => {
    this.isLogin = true;
  };
}
