import { Component, OnInit } from '@angular/core';
import { RestaurantsService } from 'src/app/Services/restaurants.service';
import { ActivatedRoute } from '@angular/router';
import { Reviews } from 'src/app/Models/review.model';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.sass']
})
export class ReviewsComponent implements OnInit {

  reviews: Reviews

  constructor(private RestaurantsService: RestaurantsService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.RestaurantsService.reviewsOfRestaurant(this.route.parent.snapshot.params['id']).subscribe(response => {
      this.reviews = response,
      console.log(this.reviews)
    })
  }

}
