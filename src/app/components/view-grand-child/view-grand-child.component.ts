import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-view-grand-child',
  standalone: true,
  imports: [],
  templateUrl: './view-grand-child.component.html',
  styleUrl: './view-grand-child.component.css',
})
export class ViewGrandChildComponent {
  @ViewChild('grandRef') grandRef!: ElementRef;

  getGrandChildReference() {
    return this.grandRef.nativeElement;
  }
}
