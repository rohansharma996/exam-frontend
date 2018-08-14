import { Component, OnInit } from '@angular/core';
import { LocalService } from './../../../services/local.service';
import swal from 'sweetalert'


@Component({
  selector: 'app-add-subject',
  templateUrl: './add-subject.component.html',
  styleUrls: ['./add-subject.component.css']
})
export class AddSubjectComponent implements OnInit {

  response:any;
  data:any;
  subject:any;
  success:any;
  getsubject:any;
  constructor(private local:LocalService) { }

  ngOnInit() {
    this.getSubject();
  }

  addSubject(){

    this.data = {
      subjectName:this.subject
    }
    this.local.addSubject(this.data).subscribe(res => {
     this.response = res;
     console.log(res);
     swal("Test added successfully")

     this.getSubject();
    },err => {
      console.log(err);
      this.success = "Error Saving Subject"
    });
  }

  getSubject(){
    this.local.getSubject().subscribe(res => {
      this.getsubject = res;
    });

  }

}
