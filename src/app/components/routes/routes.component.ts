import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-routes',
  standalone: true,
  imports: [],
  templateUrl: './routes.component.html',
  styleUrl: './routes.component.css',
})
export class RoutesComponent {
  @Input() id!: string;

  ngOnInit(): void {
    console.log(this.id);
  }
}
