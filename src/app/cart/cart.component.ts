import {Component, OnInit, ViewChild} from '@angular/core';
import {ServiceCart} from './serviceCart';
import {Router} from '@angular/router';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(private serviceCart: ServiceCart, private router: Router) { }
  cartList;
  // count pizza+-
  count = 1;
  increase(): void {
    this.count++; }
  decrease(): void {
    this.count--; }


  ngOnInit() {
       this.serviceCart.getListPizza().subscribe(res => this.cartList = res);

  }
  commanderPizzaInCart(cart) {
    this.serviceCart.commanderPizzaCart(cart).subscribe(data => console.log(data));
    this.router.navigate(['/orders']);
  }


  deletePizzaInCart(id: number) {
    this.serviceCart.deletePizza(id).subscribe(data => console.log(data));
    this.router.navigate(['/cart']);
  }


}
