import { Component, OnInit } from '@angular/core';
import { TestgroupService } from './../../../services/testgroup.service';
import { LocalService } from './../../../services/local.service';

@Component({
  selector: 'app-view-group',
  templateUrl: './view-group.component.html',
  styleUrls: ['./view-group.component.css']
})
export class ViewGroupComponent implements OnInit {

  //Edit Subject variables//
  groupname:any;
  instructions:any;
  questions:any;
  examduration:any;
  validity:any;
  total_marks:any;
  positive_marks:any;
  negative_marks:any;
  price:any;
  details:any;
  schedule:any;
  ////




  testgroup:any;
  testnumber:any;
  allowedtime:any;
  getsubs:any;
  fail:any;
  data:any;
  constructor(private test:TestgroupService,private local:LocalService) { }

  ngOnInit() {
    this.getallTestGroups();
    this.getSubject();
  }

  getSubject(){
    this.local.getSubject().subscribe(res => {
      this.getsubs = res;
    },err => {
      console.log(err);
      this.fail = "Subjects Not Found";
    })
  }
  getallTestGroups(){
    this.test.viewTestGroup().subscribe(res => {
      this.testgroup = res;
    }, err => {
       console.log(err);
    });
  }

  addTest(){
    this.data = {

    }
    this.local.addTest(this.data).subscribe(res => {
      
    })
  }





 // End //
}
