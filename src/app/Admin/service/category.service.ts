import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { category } from '../category';


@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private apiServerUrl=environment.apiBaseUrl;
  constructor(private http:HttpClient) { }
  public addCategory(data:category): Observable<category> {
    return this.http.post<category>(`${this.apiServerUrl}/admin/addCategory`,data);
  }

  public getCategory(): Observable<category[]> {
    return this.http.get<category[]>(`${this.apiServerUrl}/admin/getCategory`);
  }

  updateCategory(data:category)
  {
    return this.http.put(`${this.apiServerUrl}/admin/updateCategory`,data);
  }
  deleteByid(categoryId:number)
  {
      return this.http.delete(`${this.apiServerUrl}/admin/deleteCategory/${categoryId}`);
  }
}
