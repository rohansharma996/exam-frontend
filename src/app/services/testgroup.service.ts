import { Injectable,OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TestgroupService implements OnInit {


  constructor(private http:HttpClient) { }

  ngOnInit(){

  }

  addTestGroup(data): Observable<any>{
    return this.http.post("http://localhost:3000/admin/add-group",data);
  }

  viewTestGroup():Observable<any> {
    return this.http.get("http://localhost:3000/admin/get-all");
  }

  updateTestGroup(id,data):Observable<any>{
    return this.http.post("http://localhost:3000/admin/update-group/"+id,data)
  }
}
