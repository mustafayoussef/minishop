import { Router } from '@angular/router';
import { AuthenticationService } from './../../services/authentication.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{
  // type:string;
  constructor(public authService:AuthenticationService,private router: Router){}

  ngOnInit(): void {
      
  }

  home(){
    let userType = this.authService.userType.value;
    userType === 'user' ? this.router.navigateByUrl('/home'): userType === 'admin' ? this.router.navigateByUrl('/admin'): null; 
  }

  logout() {
    this.authService.logout();
  }
}
