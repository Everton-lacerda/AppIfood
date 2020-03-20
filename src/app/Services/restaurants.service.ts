import {Injector, Injectable} from "@angular/core";

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map} from 'rxjs/operators';
import { Restaurant } from 'src/app/Models/restaurant.model';
import { MEAT_API } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class RestaurantsService {

  constructor(private http: HttpClient){

  }

  restaurant(): Observable<Restaurant[]> {
    // return this.http.get(`${MEAT_API}/restaurants`)
    //   .pipe(
    //     map(response => response.json())
    // );
    return this.http.get<Restaurant[]>(`${MEAT_API}/restaurants`);
  }

  restaurantById(id: string): Observable<Restaurant> {
    return this.http.get<Restaurant>(`${MEAT_API}/restaurants/${id}`)
  }
}
