import { Component, OnInit } from '@angular/core';
import { AuthService } from './../../../services/auth.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  name:any;
  email:any;
  mobile:any;
  password:any;
  city:any;

  data:any;
  message:any;

  constructor(private auth:AuthService) { }

  ngOnInit() {
  }


  UserRegister(){
    this.data = {
      email:this.email,
      fullName:this.name,
      password:this.password,
      mobile:this.mobile,
      city:this.city
    }

    this.auth.userRegister(this.data).subscribe(res => {
      this.message = "Successfully Registered";
      console.log(res);
      window.location.href = '/login';
    },err => {
      this.message = "Registration Failed";
      console.log(err);
    })
  }

}
