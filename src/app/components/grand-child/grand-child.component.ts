import { Component } from '@angular/core';
import { UserInfoService } from '../../services/user-info.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-grand-child',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './grand-child.component.html',
  styleUrl: './grand-child.component.css',
})
export class GrandChildComponent {
  userData: any = null;
  constructor(private userService: UserInfoService) {
    this.userData = this.userService.getUserInfo();
  }

  handleClick() {
    this.userService.changeUserName('kunal2');
  }
}
