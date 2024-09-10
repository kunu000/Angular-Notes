import {
  Component,
  ElementRef,
  QueryList,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { ViewChildComponent } from '../view-child/view-child.component';

@Component({
  selector: 'app-view-parent',
  standalone: true,
  imports: [ViewChildComponent],
  templateUrl: './view-parent.component.html',
  styleUrl: './view-parent.component.css',
})
export class ViewParentComponent {
  @ViewChild('btn') button!: ElementRef;
  @ViewChild(ViewChildComponent) viewC!: ViewChildComponent;
  @ViewChildren('btn') buttons!: QueryList<any>;

  // If you want to access grandchild ref here so you should put static as true in @ViewChild decorator in all the components
  ngOnInit(): void {
    // access grand child element (right way)
    // console.log(this.viewC.getGrandChildReferece());
  }

  ngAfterViewInit(): void {
    console.log(this.button.nativeElement); // access ElementRef
    console.log(this.viewC.searchInput.nativeElement); // access child element ref
    // console.log(this.viewC.grandChildRef.grandRef.nativeElement); // access grand child element (not recommended)
    console.log(this.viewC.getGrandChildReferece()); // access grand child element (right way)


    console.log(this.buttons); // access Multiple Elements
    this.buttons.forEach((button) => {
      console.log(button.nativeElement.innerText);
    });
  }
}
