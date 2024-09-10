import { Component, OnInit } from '@angular/core';
import { BehaviousSubjectService } from '../../services/behavious-subject.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-component-b',
  standalone: true,
  imports: [],
  templateUrl: './component-b.component.html',
  styleUrl: './component-b.component.css',
})
export class ComponentBComponent implements OnInit {
  data: string = '';
  private subscription!: Subscription;

  constructor(private service: BehaviousSubjectService) {}

  ngOnInit() {
    this.subscription = this.service.data.subscribe((updatedData) => {
      console.log(updatedData); // once component B intialized and if we are not using ngOnDestroy then it will keep running ever if you are on some another component
      this.data = updatedData;
    });
  }

  // To avoid memory leaks
  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
