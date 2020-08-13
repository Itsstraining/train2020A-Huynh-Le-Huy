import { Injectable } from '@angular/core';
import{AngularFireAuth} from '@angular/fire/auth';
import * as fire from 'firebase'


import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class SigninService {

  public user: firebase.User=null;
  constructor( public Auth:AngularFireAuth,public route:Router) { }
  public async loginGoogle(){
let provider = new fire.auth.GoogleAuthProvider;
await this.Auth.signInWithPopup(provider);
this.route.navigate(["home"]);
  }
  public async Logout(){
    await this.Auth.signOut();
    this.route.navigate([""]);
    
}
}
