import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { addtocart } from '../addtocart';

@Injectable({
  providedIn: 'root'
})
export class AddcartService {

  private apiServerUrl=environment.apiBaseUrl;
  constructor(private http:HttpClient) { }
  public addProducttocart(data:addtocart): Observable<addtocart> {
    return this.http.post<addtocart>(`${this.apiServerUrl}/user/addtocart`,data);
  }

  public getProducts(): Observable<addtocart[]> {
    return this.http.get<addtocart[]>(`${this.apiServerUrl}/user/getcart`);
  }
  public getUserData(planId:number): Observable<addtocart[]>{
    return this.http.get<addtocart[]>(`${this.apiServerUrl}/user/find/`+planId);

  }
  updateProduct(data:addtocart)
  {
    return this.http.put(`${this.apiServerUrl}/user/updateCart`,data);
  }
  deleteByid(cartId:number)
  {
      return this.http.delete(`${this.apiServerUrl}/user/deleteCart/${cartId}`);
  }
}
