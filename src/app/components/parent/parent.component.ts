import { Component } from '@angular/core';
import { ChildComponent } from '../child/child.component';
import { GrandChildComponent } from '../grand-child/grand-child.component';
import { UserInfoService } from '../../services/user-info.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [ChildComponent, GrandChildComponent, RouterModule],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css',
})
export class ParentComponent {
  userData: any = null;
  constructor(private userService: UserInfoService) {}

  ngOnInit(): void {
    this.userData = this.userService.getUserInfo();
    if (!this.userData) {
      this.userService.getUserInfoApi().subscribe(
        (response: any) => {
          this.userService.updateUserData(response);
          this.userData = response;
        },
        (error: any) => {
          console.log(error);
        }
      );
    }
  }

  updateUserData() {
    this.userService.changeUserName('kunal');
  }
}
