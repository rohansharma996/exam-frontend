import { Component, OnInit } from '@angular/core';
import { TestgroupService } from './../../../services/testgroup.service';
import { LocalService } from './../../../services/local.service';
import { ActivatedRoute, Router } from "@angular/router";


@Component({
  selector: 'app-view-group',
  templateUrl: './view-group.component.html',
  styleUrls: ['./view-group.component.css']
})
export class ViewGroupComponent implements OnInit {

  testgroup:any;
  testnumber:any;
  allowedtime:any;
  getsubs:any;
  fail:any;
  data:any;
  testNo:any;
  subject:any;
  allowed_time:any;
  subjectname:any;
  question:any;
  correct:any;
  choice:any;
  gettest:any;

  add:any
  currentTest:any;
  main:any;
  id:any;
  currentId:any;
  arad:any;




  constructor(private test:TestgroupService,private _route:ActivatedRoute,private local:LocalService) { }

  ngOnInit() {
    this.getallTestGroups();
    this.getSubject();
    this.getTest();
    this.addQuestion();
    
  

  }

  getSubject(){
    this.local.getSubject().subscribe(res => {
      this.getsubs = res;
    },err => {
      console.log(err);
      this.fail = "Subjects Not Found";
    })
  }
    
  getTest(){
    this.local.getTest().subscribe(res => {
      this.gettest = res;
     
      console.log('fghj',this.gettest)
      for(let x of this.gettest){
      this.main=x._id;
        console.log('ghjk',this.main)
      }
      
  
      
    },err => {
      console.log(err);
      this.fail = "Subjects Not Found";
    })
  }
  getallTestGroups(){
    this.test.viewTestGroup().subscribe(res => {
      this.testgroup = res;
      this.arad=res
    
    }, err => {
       console.log(err);
    });
  }

  addTest(){
    this.data = {
      testNo:this.testnumber,
      subject:this.subjectname,
      allowed_time:this.allowedtime


    }
    this.local.addTest(this.data).subscribe(res => {
      
    })
  }

  
  addQuestion(){
    console.log(this.main)
    this.add= {
      question:this.question,
      answer:this.correct,
      choice:this.choice

    }
    this.local.addQuestion(this.main,this.add).subscribe(res => {
      console.log('add',res)
    console.log('id',this.main)
    })
  }





 // End //
}
