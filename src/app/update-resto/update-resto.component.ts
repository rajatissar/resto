import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { RestoService } from '../resto.service';

@Component({
  selector: 'app-update-resto',
  templateUrl: './update-resto.component.html',
  styleUrls: ['./update-resto.component.css']
})
export class UpdateRestoComponent implements OnInit {
  isAlert = false;
  updateRestaurantForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(4)]),
    address: new FormControl('', [Validators.required, Validators.minLength(4)]),
    email: new FormControl('', [Validators.required, Validators.minLength(4)])
  });

  constructor(private router: ActivatedRoute, private resto: RestoService) { }

  ngOnInit(): void {
    const restaurantId = this.router.snapshot.params.id;
    this.resto.getRestaurant(restaurantId)
      .subscribe((restaurant: any) => {
        this.updateRestaurantForm.setValue({
          name: restaurant.name,
          address: restaurant.address,
          email: restaurant.email
        });
      });
  }

  get name() {
    return this.updateRestaurantForm.get('name');
  }

  get address() {
    return this.updateRestaurantForm.get('address');
  }

  get email() {
    return this.updateRestaurantForm.get('email');
  }

  updateRestaurant() {
    const restaurantId = this.router.snapshot.params.id;
    const updatedRestaurantBody = this.updateRestaurantForm.value;
    this.resto.updateRestaurant(restaurantId, updatedRestaurantBody)
      .subscribe((result) => {
        this.isAlert = true;
        this.updateRestaurantForm.reset({});
      });
  }

  closeAlert() {
    this.isAlert = false;
  }
}
