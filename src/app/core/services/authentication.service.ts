import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Login } from '../model/login';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  isAuthenticated: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  userType: BehaviorSubject<string> = new BehaviorSubject<string>('');

  constructor(private route:Router) {
    this.loadToken();
   }

  async loadToken() {
    const userType = await localStorage.getItem('type');
    this.userType.next(userType as string);

    if (userType === 'user' || userType === 'admin') {
      this.isAuthenticated.next(true);
      return userType;
    } else {
      this.isAuthenticated.next(false);
      return;
    }
  }

  login(credentials: Login){
    let userValue = 'user';
    let adminValue = 'admin';
    if (credentials.username === userValue && credentials.password === userValue) {
      this.localStorage('user');
      this.isAuthenticated.next(true);
      this.route.navigateByUrl('/home');
    
    }else if (credentials.username === adminValue && credentials.password === adminValue) {
      this.localStorage('admin');
      this.isAuthenticated.next(true);
      this.route.navigateByUrl('/admin');
    }
  }

  localStorage(type: string) {
    localStorage.setItem('type', type);
  }

  logout() {
    this.isAuthenticated.next(false);
    localStorage.removeItem('type');
    this.route.navigateByUrl('/landing');
  }
}
