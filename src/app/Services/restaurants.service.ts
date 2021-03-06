import {Injector, Injectable} from "@angular/core";

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map} from 'rxjs/operators';
import { Restaurant } from 'src/app/Models/restaurant.model';
import { MEAT_API } from 'src/environments/environment';
import { Reviews } from '../Models/review.model';
import { MenuItem } from '../restaurant-detail/menu-item/menu-item.model';


@Injectable({
  providedIn: 'root'
})
export class RestaurantsService {

  constructor(private http: HttpClient){

  }

  restaurant(): Observable<Restaurant[]> {
    return this.http.get<Restaurant[]>(`${MEAT_API}/restaurants`);
  }

  restaurantById(id: string): Observable<Restaurant> {
    return this.http.get<Restaurant>(`${MEAT_API}/restaurants/${id}`)
  }

  reviewsOfRestaurant(id: string): Observable<Reviews> {
    return this.http.get<Reviews>(`${MEAT_API}/restaurants/${id}/reviews`)
  }

  meuOfRestaurant(id: string): Observable<MenuItem> {
    return this.http.get<MenuItem>(`${MEAT_API}/restaurants/${id}/menu`)
  }
}
