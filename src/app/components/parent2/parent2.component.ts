import { Component } from '@angular/core';
import { UserInfoService } from '../../services/user-info.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-grand-child',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './parent2.component.html',
  styleUrl: './parent2.component.css',
})
export class Parent2Component {
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
