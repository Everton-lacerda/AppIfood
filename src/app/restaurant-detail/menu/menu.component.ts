import { Component, OnInit } from '@angular/core';
import { RestaurantsService } from 'src/app/Services/restaurants.service';
import { ActivatedRoute } from '@angular/router';
import { MenuItem } from '../menu-item/menu-item.model';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.sass']
})
export class MenuComponent implements OnInit {

  menuItem: MenuItem

  constructor(private RestaurantsService: RestaurantsService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.RestaurantsService.meuOfRestaurant(this.route.parent.snapshot.params['id']).subscribe(response => {
      this.menuItem = response,
      console.log(this.menuItem)
    })
  }

  addMenuItem (item: MenuItem) {
    console.log(item)
  }

}
