import { Component, OnInit } from '@angular/core';
import {ServicePizza} from './servicepizza';
import {Pizza} from './pizza';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-pizza',
  templateUrl: './pizza.component.html',
  styleUrls: ['./pizza.component.css']
})
export class PizzaComponent implements OnInit {

  listPizza;
  pizzaListInOrder;
  constructor(private servicePizza: ServicePizza) {}

  ngOnInit() {
    this.servicePizza.getListPizza().subscribe(result => this.listPizza = result);
  }

  buyPizza(id: number) {
    this.servicePizza.addPizzaInCart(id).subscribe(data => this.pizzaListInOrder = data);
  }
}
