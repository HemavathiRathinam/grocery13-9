import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Payment } from 'src/app/Payment'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  private apiServerUrl=environment.apiBaseUrl;
  
  constructor(private http : HttpClient) { }
  
  public getOrders(): Observable<Payment[]> {
    return this.http.get<Payment[]>(`${this.apiServerUrl}/payments/all`);
  }

  public addOrders(plan: Payment): Observable<Payment> {
    return this.http.post<Payment>(`${this.apiServerUrl}/payments/add`, plan);
  }
}
