import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent  {
  username ="";
  password= "";
  errmsg ="";

  constructor(private auth:AuthService, private router: Router){}

  login(){
    if(this.username.trim().length===0){
      this.errmsg ="usernam is required";
    }
    else if(this.password.trim().length ===0){
      this.errmsg ="Password is required";
    }
    else{
      this.errmsg ="";
      let responsecode = this.auth.login(this.username, this.password);
      if(responsecode ===200){
        this.router.navigate(['home']);
      }
      if(responsecode ===403){
        this.errmsg ="Invalid Credential";
      }
    }
  }
}
