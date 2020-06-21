import { Component, OnInit } from '@angular/core';
import { RestoService } from '../resto.service';

@Component({
  selector: 'app-list-resto',
  templateUrl: './list-resto.component.html',
  styleUrls: ['./list-resto.component.css']
})
export class ListRestoComponent implements OnInit {
  restaurants: [];
  length = '1000';
  pageSize = '5';
  pageSizeOptions = [5, 10, 25, 100];

  constructor(private resto: RestoService) { }

  ngOnInit(): void {
    const begin = 0;
    const end = this.pageSize;
    const path = `?_start=${begin}&_end=${end}`;
    this.resto.getRestaurants(path)
      .subscribe((restaurants) => {
        this.restaurants = restaurants;
      });
  }

  deleteRestaurant(id) {
    this.restaurants.splice(id - 1, 1);
    this.resto.deleteRestaurant(id)
      .subscribe((restaurants) => { });
  }

  handlePage(event) {
    const begin = event.pageSize * event.pageIndex;
    const end = begin + event.pageSize;
    const path = `?_start=${begin}&_end=${end}`;
    this.resto.getRestaurants(path)
      .subscribe((restaurants) => {
        this.restaurants = restaurants;
      });
  }
}
