import { Component, ElementRef, ViewChild } from '@angular/core';
import { ViewGrandChildComponent } from '../view-grand-child/view-grand-child.component';

@Component({
  selector: 'app-view-child',
  standalone: true,
  imports: [ViewGrandChildComponent],
  templateUrl: './view-child.component.html',
  styleUrl: './view-child.component.css',
})
export class ViewChildComponent {
  @ViewChild('searchInput') searchInput!: ElementRef;
  @ViewChild(ViewGrandChildComponent) grandChildRef!: ViewGrandChildComponent;

  ngAfterViewInit(): void {
    // console.log(this.grandChildRef);
  }

  getGrandChildReferece(){
    return this.grandChildRef.getGrandChildReference();
  }
}
