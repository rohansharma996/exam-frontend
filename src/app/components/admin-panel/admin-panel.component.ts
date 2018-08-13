import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.css']
})
export class AdminPanelComponent implements OnInit {

  emailinput:any;
  passinput:any;
  fail:any;


  response:any;
  data:any;
  isloggedin = false;
  constructor(private auth:AuthService, private router:Router) { }

  ngOnInit() {


  }

  adminlogin(){

    this.data = {
      email:this.emailinput,
      password:this.passinput,
    } 

    this.auth.adminLogin(this.data).subscribe(
      res => {
      this.response = JSON.stringify(res);
      console.log(res);
      localStorage.setItem('user', JSON.stringify(res));
      window.location.href = '/addgroup';
      },err => {
        console.log(err);
      this.fail = "Wrong email/password"
      }
    );
    
    
  }





}
