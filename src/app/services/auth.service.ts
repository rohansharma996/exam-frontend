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

  userLogin(data){
    return this.http.post("http://localhost:3000/users/login", data);
  }

  userRegister(data){
    return this.http.post("http://localhost:3000/users/register", data);
  }
}
