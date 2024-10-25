import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { SocialProfile } from './models/SocialProfile';
@Injectable({
  providedIn: 'root'
})
export class SocialProfileService {

  constructor(private http:HttpClient) { }

  public url: string = 'http://localhost:8091/'

  addProfile(profile:SocialProfile):Observable<SocialProfile>{
    return this.http.post<SocialProfile>(this.url +"addSocialProfile",profile);
  }

  viewProfiles(): Observable<SocialProfile[]>{
    return this.http.get<SocialProfile[]>(this.url+"SocialProfiles");
  }

  updateProfile(profile:SocialProfile): Observable<SocialProfile>{
    return this.http.put<SocialProfile>(this.url+"updatesp",profile);
  }
  deleteProfile(sId:number): Observable<SocialProfile>{
    return this.http.delete<SocialProfile>(this.url+"deletesp/"+sId);
  }

  getProfileById(sId:number): Observable<SocialProfile>{
    return this.http.get<SocialProfile>(this.url+"profile/"+sId)
  }

}