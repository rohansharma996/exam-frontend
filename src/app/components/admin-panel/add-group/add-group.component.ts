import { Component, OnInit } from '@angular/core';
import { TestgroupService } from './../../../services/testgroup.service';
import { LocalService } from './../../../services/local.service';

@Component({
  selector: 'app-add-group',
  templateUrl: './add-group.component.html',
  styleUrls: ['./add-group.component.css']
})
export class AddGroupComponent implements OnInit {

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

  addgroup:any;
  response1:any;
  getsubs:any;
  sucess:any;
  constructor(private test:TestgroupService,private local:LocalService) { }

  ngOnInit() 
  {
    this.getSubject();
  }
  
  getSubject(){
    this.local.getSubject().subscribe(res => {
      this.getsubs = res;
    })
  }

  addGroup(){
    this.addgroup = {
      groupName: this.groupname,
      instructions: this.instructions,
      questionNo: this.questions,
      examDuration :this.examduration,
      validity:this.validity,
      total_marks:this.total_marks,
      positive_marks:this.positive_marks,
      negative_marks:this.negative_marks,
      price:this.price,
      details_pdf:this.details,
      schedule_pdf:this.schedule
    }

    this.test.addTestGroup(this.addgroup).subscribe(
      res => {
        this.response1 = res;
        console.log(res);
        this.sucess = "Group Saved";
      },err => {
        this.sucess = "Error Saving Group";
        console.log(err);
      });
  }

  

}
