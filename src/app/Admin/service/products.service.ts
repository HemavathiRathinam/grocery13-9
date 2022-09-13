import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { product } from '../product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private apiServerUrl=environment.apiBaseUrl;
  constructor(private http:HttpClient) { }
 

  public addProduct(data:product): Observable<product> {
    return this.http.post<product>(`${this.apiServerUrl}/admin/addProduct`,data);
  }

  public getProducts(): Observable<product[]> {
    return this.http.get<product[]>(`${this.apiServerUrl}/admin/getProducts`);
  }
  getProductbyid(theProductId: number): Observable<any> {
    // need to build URL based on product id
    const productUrl = `${this.apiServerUrl}/${theProductId}`;

    return this.http.get<product>(productUrl);
  }

  updateProduct(data:product)
  {
    return this.http.put(`${this.apiServerUrl}/admin/updateProduct`,data);
  }
  deleteByid(prodId:number)
  {
      return this.http.delete(`${this.apiServerUrl}/admin/deleteProduct/${prodId}`);
  }
}
