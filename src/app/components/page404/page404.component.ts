import { Component } from '@angular/core';
import { Route, Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-page404',
  standalone: true,
  imports: [],
  templateUrl: './page404.component.html',
  styleUrl: './page404.component.css',
})
export class Page404Component {
  count = 5;
  intervalId: any;
  constructor(private router: Router) {}
  ngOnInit(): void {
    this.intervalId = setInterval(() => {
      this.count--;
      if (this.count === 0) {
        this.navigateToHome();
      }
    }, 1000);
  }

  navigateToHome() {
    this.router.navigateByUrl('/component');
  }

  ngOnDestroy(): void {
    clearInterval(this.intervalId);
  }
}
