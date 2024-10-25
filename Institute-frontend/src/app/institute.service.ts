import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Institute } from './models/Institute';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class InstituteService {

  constructor(private http:HttpClient) { }

  public url: string = 'http://localhost:8091/'

  addInstitute(institute:Institute):Observable<Institute>{
    return this.http.post<Institute>(this.url +"addinstitute",institute);
  }

  viewInstitutes(): Observable<Institute[]>{
    return this.http.get<Institute[]>(this.url+"institutes");
  }

  updateInstitute(institute:Institute): Observable<Institute>{
    return this.http.put<Institute>(this.url+"updateIns",institute);
  }
  deleteInstitute(insId:number): Observable<Institute>{
    return this.http.delete<Institute>(this.url+"deleteIns/"+insId);
  }

  getInstituteById(insId:number): Observable<Institute>{
    return this.http.get<Institute>(this.url+"institute/"+insId)
  }

}
