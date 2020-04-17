import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Class} from "./class"
const classAPI = "https://5e7c6ee4a917d70016683411.mockapi.io/schools";
@Injectable()
export class ClassService {

  constructor( private http: HttpClient) { }
   getlistClass(id): Observable<Class>{
     let url = `${classAPI}/${id}/Classes`;
     return this.http.get<Class>(url);
   }
   addClass(object): Observable<Class>{
     let url = `${classAPI}/${object.schoolId}/Classes`;
     return this.http.post<Class>(url,object);
   }
   updateClass(object,id): Observable<Class>{
      let url = `${classAPI}/${object.schoolId}/Classes/${id}`;
     return this.http.put<Class>(url,object);
   }
   getClassByID(idSchool,idclass): Observable<Class>{
  let url = `${classAPI}/${idSchool}/Classes/${idclass}`;
  return this.http.get<Class>(url);
   }
     Delete(idSchool,idclass): Observable<Class>{
  let url = `${classAPI}/${idSchool}/Classes/${idclass}`;
  return this.http.delete<Class>(url);
   }
}