import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class LocalService {

  constructor(private http:HttpClient) { }
  baseUrl='http://localhost:3000/admin/'

  addSubject(data):Observable<any>{
    return this.http.post("http://localhost:3000/admin/add-subject",data);
  }

  getSubject():Observable<any>{
    return this.http.get("http://localhost:3000/admin/get-subject");
  }

  addTest(data):Observable<any>{
    return this.http.post("http://localhost:3000/admin/add-test",data);
  }
  
  addQuestion(id,add):Observable<any>{
    return this.http.post(`${this.baseUrl}add-question`+'/'+id,add);
  }
  
  getTest():Observable<any>{
    return this.http.get("http://localhost:3000/admin/get-tests");
  }
  getSingleTest(id):Observable<any>{
    return this.http.get("http://localhost:3000/admin/get-single-test/"+id);
  }
}
