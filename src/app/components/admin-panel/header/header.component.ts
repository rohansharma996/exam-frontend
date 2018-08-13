import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isloggedIn = false;
  name:any;
  constructor(private router:Router) { }

  ngOnInit() {
    this.loggedIn();
  }

  loggedIn(){
   this.name = localStorage.getItem('user');
   if(this.name){
     this.isloggedIn = true;
   }

  }
  logout(){
    localStorage.removeItem('user');
    window.location.href = '/admin'

  }

  reload(){
    window.location.href = '/admin';
  }
}
