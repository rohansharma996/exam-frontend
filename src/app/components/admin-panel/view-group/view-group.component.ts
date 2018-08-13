import { Component, OnInit } from '@angular/core';
import { TestgroupService } from './../../../services/testgroup.service';
import { LocalService } from './../../../services/local.service';

@Component({
  selector: 'app-view-group',
  templateUrl: './view-group.component.html',
  styleUrls: ['./view-group.component.css']
})
export class ViewGroupComponent implements OnInit {

  testgroup:any;
  getsubs:any;
  constructor(private test:TestgroupService,private local:LocalService) { }

  ngOnInit() {
    this.getallTestGroups();
    this.getSubject();
  }

  getSubject(){
    this.local.getSubject().subscribe(res => {
      this.getsubs = res;
    })
  }
  getallTestGroups(){
    this.test.viewTestGroup().subscribe(res => {
      this.testgroup = res;
    });
  }
}
