import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { RestoService } from '../resto.service';

@Component({
  selector: 'app-add-resto',
  templateUrl: './add-resto.component.html',
  styleUrls: ['./add-resto.component.css']
})
export class AddRestoComponent implements OnInit {
  isAlert = false;
  addRestaurantForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(4)]),
    address: new FormControl('', [Validators.required, Validators.minLength(4)]),
    email: new FormControl('', [Validators.required, Validators.minLength(4)])
  });

  constructor(private resto: RestoService, private router: Router) { }

  ngOnInit(): void {
  }

  get name() {
    return this.addRestaurantForm.get('name');
  }

  get address() {
    return this.addRestaurantForm.get('address');
  }

  get email() {
    return this.addRestaurantForm.get('email');
  }

  addRestaurant() {
    const formData = this.addRestaurantForm.value;
    this.resto.addRestaurants(formData).subscribe((result) => {
      // console.log('addRestaurant -> result ->>', result);
      this.addRestaurantForm.reset({});
      this.isAlert = true;
      this.router.navigate(['list']); // redirects url to new component
    });
  }

  closeAlert() {
    this.isAlert = false;
  }
}
