import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Department} from './models/Department';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  constructor(private http:HttpClient) { }

  public url: string = 'http://localhost:8091/'

  addDepartment(department:Department):Observable<Department>{
    return this.http.post<Department>(this.url +"addDepartment",department);
  }

  viewDepartments(): Observable<Department[]>{
    return this.http.get<Department[]>(this.url+"departments");
  }

  updateDepartment(department:Department): Observable<Department>{
    return this.http.put<Department>(this.url+"updateDep",department);
  }
  deleteDepartment(depId:number): Observable<Department>{
    return this.http.delete<Department>(this.url+"deleteDep/"+depId);
  }

  getDepartmentId(depId:number): Observable<Department>{
    return this.http.get<Department>(this.url+"department/"+depId)
  }
}