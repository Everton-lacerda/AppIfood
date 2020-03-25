import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from './shopping-cart.service';



@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.sass']
})
export class ShoppingCartComponent implements OnInit {

  constructor(private shoppingCartService: ShoppingCartService) { }

  ngOnInit() {

  }
  items(): any[] {
    return this.shoppingCartService.items
  }

  total(): number {
    return this.shoppingCartService.total()
  }
  clear (): any {
    return this.shoppingCartService.clear()
  }
  removeItem (item: any) {
    return this.shoppingCartService.remveItem(item)
  }

  addItem (item: any) {
    return this.shoppingCartService.addItem(item)
  }

}
