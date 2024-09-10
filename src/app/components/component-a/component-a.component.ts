import { Component } from '@angular/core';
import { BehaviousSubjectService } from '../../services/behavious-subject.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-component-a',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './component-a.component.html',
  styleUrl: './component-a.component.css',
})
export class ComponentAComponent {
  data: string = '';

  constructor(private service: BehaviousSubjectService) {}

  updateData() {
    this.service.updateData(this.data);
  }
}
