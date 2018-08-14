import { Component, OnInit } from '@angular/core';
import { LocalService } from './../../../services/local.service';

@Component({
  selector: 'app-view-all',
  templateUrl: './view-all.component.html',
  styleUrls: ['./view-all.component.css']
})
export class ViewAllComponent implements OnInit {


  tests:any;
  constructor(private local:LocalService) { }

  
  ngOnInit() {
    this.getTest();
  }

  getTest(){
    this.local.getTest().subscribe(res => {
      this.tests = res;
    },err => {
      console.log(err);
    })
  }
}
