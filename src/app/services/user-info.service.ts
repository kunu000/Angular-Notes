import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserInfoService {
  userData: any = null;
  constructor(private http: HttpClient) {}

  getUserInfoApi() {
    return this.http.get('https://jsonplaceholder.typicode.com/users/1');
  }

  getUserInfo() {
    return this.userData;
  }

  changeUserName(value: string) {
    if (this.userData) {
      this.userData.name = value;
    }
  }

  changePhoneNumber(value: string | number) {
    if (this.userData) {
      this.userData.phone = value;
    }
  }

  updateUserData(value: any) {
    this.userData = value;
  }

  clearUserData() {
    this.userData = null;
  }
}
