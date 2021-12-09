import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { ActivatedRoute, Router } from '@angular/router';
import * as fb from 'firebase/compat/app';
import { AppUser } from 'model/app-user';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { UserService } from 'services/User/user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user$;

  constructor(private afAuth: AngularFireAuth,
              private router: Router,
              private route: ActivatedRoute,
              private userService: UserService) {
    this.user$ = this.afAuth.authState
  }

  login(){
    let returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') || '/';
    localStorage.setItem('returnUrl', returnUrl);

    this.afAuth.signInWithRedirect(new fb.default.auth.GoogleAuthProvider());
  }

  logout(){
    this.afAuth.signOut();
    // this.router.navigate(['/'])
  }

  get appUser$(): Observable<AppUser>{
    return this.user$
                .pipe(switchMap((user: any)=>this.userService.get(user?.uid)))
  }

}
