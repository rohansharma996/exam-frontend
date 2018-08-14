import { Component, OnInit } from '@angular/core';
import { AuthService } from './../../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email:any;
  password:any;

  data:any;
  message:any;
  constructor(private Auth:AuthService) { }

  ngOnInit() {
  }


  UserLogin(){
    this.data = { 
     email:this.email,
     password:this.password
    }

    this.Auth.userLogin(this.data).subscribe(res => {
      console.log(res);
      window.location.href = '/dashboard';
    },err => {
      console.log(err);
      this.message = "Login Failed || Wrong Email/Password";
    });

  }

}
