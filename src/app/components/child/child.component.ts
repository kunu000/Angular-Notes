import { Component } from '@angular/core';
import { UserInfoService } from '../../services/user-info.service';
import { GrandChildComponent } from '../grand-child/grand-child.component';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [GrandChildComponent],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css',
  providers: [UserInfoService], // this will create a separate instance of UserInfoService for child component
})
export class ChildComponent {
  userData: any = null;
  constructor(private userService: UserInfoService) {
    this.userData = this.userService.getUserInfo();
  }

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
}
