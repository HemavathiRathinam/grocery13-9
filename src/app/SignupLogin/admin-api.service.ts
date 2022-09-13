import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { Admin } from '../Admin/admin';

@Injectable({
  providedIn: 'root'
})
export class AdminApiService {

  private apiServerUrl=environment.apiBaseUrl;
  constructor(private http:HttpClient) { }
  public getAdmin(): Observable<Admin[]> {
    return this.http.get<Admin[]>(`${this.apiServerUrl}/admins/all`);
  }

  public addAdmin(plan: Admin): Observable<Admin> {
    return this.http.post<Admin>(`${this.apiServerUrl}/admins/add`, plan);
  }

  public getAdminData(planId:number): Observable<Admin>{
    return this.http.get<Admin>(`${this.apiServerUrl}/admins/find/`+planId);

  }

}
