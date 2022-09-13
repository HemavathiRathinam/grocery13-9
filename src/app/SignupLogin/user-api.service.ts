import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { User } from '../user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserApiService {

  private apiServerUrl=environment.apiBaseUrl;
  constructor(private http:HttpClient) { }
  public getUser(): Observable<User[]> {
    return this.http.get<User[]>(`${this.apiServerUrl}/users/all`);
  }

  public addUser(plan: User): Observable<User> {
    return this.http.post<User>(`${this.apiServerUrl}/users/add`, plan);
  }

  public getUserData(planId:number): Observable<User>{
    return this.http.get<User>(`${this.apiServerUrl}/users/find/`+planId);

  }

  public loginUser(plan: User): Observable<User> {
    return this.http.post<User>(`${this.apiServerUrl}/users/login`, plan);
  }

  updateUser(planId:number,plan:User): Observable<User>{
    return this.http.put<User>(`${this.apiServerUrl}/users/update/`+planId,plan);
  }

  // updateUser(data:User)
  // {
  //   return this.http.put(`${this.apiServerUrl}/admin/updateProduct`,data);
  // }
  // deleteByid(prodId:User)
  // {
  //     return this.http.delete(`${this.apiServerUrl}/admin/deleteProduct/${prodId}`);
  // }
}
