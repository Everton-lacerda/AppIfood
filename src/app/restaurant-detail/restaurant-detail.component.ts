import { Component, OnInit } from '@angular/core';
import { RestaurantsService } from '../Services/restaurants.service';
import { Restaurant } from '../Models/restaurant.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-restaurant-detail',
  templateUrl: './restaurant-detail.component.html',
  styleUrls: ['./restaurant-detail.component.sass']
})
export class RestaurantDetailComponent implements OnInit {
  //obs
  // ActivatedRoute tem as informações sobre a rota acesso como parametros nesse exemplo o (id)
  // Tem duas maneiras de usar com SnapShot ou Subscribe, nesse exemplo vai ser usado o snapshot

  restaurant: Restaurant
  constructor(
    private restaurantsService: RestaurantsService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {

    this.restaurantsService.restaurantById(this.route.snapshot.params['id']).subscribe(response => {
     this.restaurant = response
   })
  }

}
