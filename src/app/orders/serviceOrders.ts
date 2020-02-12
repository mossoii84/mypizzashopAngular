import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Order} from './order';

@Injectable({
  providedIn: 'root',
})
export class ServiceOrders {

  private url = 'http://localhost:8080/api/order/allOrder';
  constructor(private http: HttpClient) {}

  getOrder(): Observable<Order[]> {
    return this.http.get<Order[]>(this.url);
  }
}
