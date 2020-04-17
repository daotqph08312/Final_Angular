import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {School} from '../school';
const schoolAPI = "https://5e7c6ee4a917d70016683411.mockapi.io/schools";
@Injectable()
export class SchollService {

  constructor( private http: HttpClient) { }
  getListSchools(): Observable<School>{
      return this.http.get<any>(schoolAPI);
  };
  addSchool(object): Observable<School>{
    return this.http.post<School>(schoolAPI,object);
  }
  updateSchool(object): Observable<School>{
    let url = `${schoolAPI}/${object.id}`;
    return this.http.put<School>(url,object);
  }
     getListSchoolbyId(id): Observable<School>{
    let url = `${schoolAPI}/${id}`;
    return this.http.get<School>(url);
  }
  deleteSchool(id): Observable<School>{
    let url = `${schoolAPI}/${id}`;
    return this.http.delete<School>(url);
  }
}