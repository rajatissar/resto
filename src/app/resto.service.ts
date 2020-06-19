import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RestoService {
  url = 'http://localhost:3000/restaurants';

  constructor(private http: HttpClient) { }

  getRestaurants() {
    return this.http.get<[]>(this.url);
  }

  getRestaurant(id) {
    return this.http.get<[]>(`${this.url}/${id}`);
  }

  addRestaurants(body) {
    return this.http.post<[]>(this.url, body);
  }

  deleteRestaurant(id) {
    return this.http.delete<[]>(`${this.url}/${id}`);
  }

  updateRestaurant(id, body) {
    return this.http.put<[]>(`${this.url}/${id}`, body);
  }
}
