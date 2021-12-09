
import { Component } from '@angular/core';
import { AppUser } from 'model/app-user';
import { AuthService } from 'services/AuthService/auth.service';

@Component({
  selector: 'bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.css']
})
export class BsNavbarComponent {

  appUser!: AppUser;

  constructor(private authService: AuthService) {
    authService.appUser$.subscribe(appUser => this.appUser = appUser)
    // console.log(this.appUser.isAdmin)
  }

  logout(){
    this.authService.logout();
  }

}
