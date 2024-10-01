import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getAll(): String[] {
    return [
      'assets/food/img1.jpeg',
      'assets/food/img2.jpeg',
      'assets/food/img3.jpeg',
      'assets/food/img4.jpeg',
      'assets/food/img5.jpeg',
      'assets/food/img6.jpeg'
    ]
  }
}
