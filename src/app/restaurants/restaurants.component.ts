import { Component, OnInit } from '@angular/core';
import { Restaurant } from '../Models/restaurant.model';
import { RestaurantsService } from "../Services/restaurants.service.js";

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.sass']
})
export class RestaurantsComponent implements OnInit {

  restaurants: Restaurant[]

  constructor(private Service: RestaurantsService) { }

  ngOnInit() {
    this.Service.restaurant()
      .subscribe(resp => {
        this.restaurants = resp
        console.log(this.restaurants)
      })
  }
}
