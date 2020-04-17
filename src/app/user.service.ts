import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, from } from 'rxjs';
import {User} from './user'
 const UserAPI = "https://5e7c6ee4a917d70016683411.mockapi.io/user";
@Injectable()
export class UserService {

  constructor( private http : HttpClient) { }
  login(Username,password): Observable<User>{
    let url = `${UserAPI}/${Username}`;
    return this.http.get<User>(url);
  }
}