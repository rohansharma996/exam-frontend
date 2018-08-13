import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }

  adminLogin(data){
    return this.http.post("http://localhost:3000/admin/login",data);
  }

}
