import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Cart} from './cart';


@Injectable({
  providedIn: 'root',
})
export class ServiceCart {
private url = 'http://localhost:8080/api/cart/allCartsList';
private urlDelete = 'http://localhost:8080/api/cart/deletePizzaInCart/';
private urlcommanderPizzaCart = 'http://localhost:8080/api/cart/createOrder';
constructor(private http: HttpClient) {}

getListPizza(): Observable<Cart[]> {
  return this.http.get<Cart[]>(this.url);
}

  deletePizza(id: number) {
    return this.http.delete(this.urlDelete + id);
  }

  commanderPizzaCart(cart) {
    return this.http.post(this.urlcommanderPizzaCart, cart);
  }
}
