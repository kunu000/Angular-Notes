import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable, delay } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { ApisService } from '../../services/apis.service';

@Component({
  selector: 'app-control-flow',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './control-flow.component.html',
  styleUrl: './control-flow.component.css',
})
export class ControlFlowComponent {
  isLoggedIn: boolean = false;
  sum: number = 5;
  data: any;
  items: any;
  apiData$!: Observable<any>;
  userData: any[] = [];
  expression = 3;

  constructor(private http: HttpClient, private apiService: ApisService) {
    // this.apiData$ = this.getData();
  }

  ngOnInit(): void {
    this.apiData$ = this.apiService.fetchData();
  }
}
