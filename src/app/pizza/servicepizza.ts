import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Pizza} from './pizza';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ServicePizza {

  private url = 'http://localhost:8080/api/pizza/allPizzaList';
  private urlAddPizzaInCart = 'http://localhost:8080/api/pizza/addPizzaInCart/';
  constructor(private http: HttpClient) {}

  getListPizza(): Observable<Pizza[]> {
    return this.http.get<Pizza[]>(this.url);
  }
  addPizzaInCart(pizza) {
   return this.http.get(this.urlAddPizzaInCart + pizza.id);
  }


}
