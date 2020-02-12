import {Pizza} from '../pizza/pizza';
import {Order} from '../orders/order';

export class Cart {
  id: number;
 // client: Client;
  orders: Order;
  pizzas: Pizza;



  constructor(id: number, orders: Order, pizzas: Pizza) {
    this.id = id;
    this.orders = orders;
    this.pizzas = pizzas;
  }
}
