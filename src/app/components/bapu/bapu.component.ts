import { Component } from '@angular/core';
import { BetwaComponent } from '../betwa/betwa.component';
import { TestngContentComponent } from '../testng-content/testng-content.component';

@Component({
  selector: 'app-bapu',
  standalone: true,
  imports: [BetwaComponent, TestngContentComponent],
  templateUrl: './bapu.component.html',
  styleUrl: './bapu.component.css',
})
export class BapuComponent {
  title = 'bapu';
}
