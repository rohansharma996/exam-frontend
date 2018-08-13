import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class LocalService {

  constructor(private http:HttpClient) { }

  addSubject(data):Observable<any>{
    return this.http.post("http://localhost:3000/admin/add-subject",data);
  }

  getSubject():Observable<any>{
    return this.http.get("http://localhost:3000/admin/get-subject");
  }

  addTest(data):Observable<any>{
    return this.http.post("http://localhost:3000/admin/add-test",data);
  }
}
