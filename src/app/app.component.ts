import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'services/AuthService/auth.service';
import { UserService } from 'services/User/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private authService: AuthService, private router: Router, private userService: UserService){
    this.authService.user$.subscribe(user=>{
      if(user){
        this.userService.save(user)
        
        let returnUrl = localStorage.getItem('returnUrl');
        if(returnUrl)
          this.router.navigateByUrl(returnUrl)
      }
    })
  }
}
