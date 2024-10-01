import { Injectable } from '@angular/core';
import { Food } from '../../shared/models/Food';
@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getAll(): Food[] {
    return [
      {
        id:1,
        cookTime: '30-40',
        imageUrl: 'assets/food/img1.jpeg',
        name: 'Viande bien cuite avec sauce',
        favorite: true,
        price: 50,
        stars:4,
        origins: ['France']
      },
      {
        id:2,
        cookTime: '25-40',
        imageUrl: 'assets/food/img2.jpeg',
        name: 'Don know',
        favorite: true,
        price: 20,
        stars:3,
        origins: ['France', 'Italy']
      },
      {
        id:3,
        cookTime: '10-20',
        imageUrl: 'assets/food/img3.jpeg',
        name: 'Oeufs brouillés bien doux',
        favorite: false,
        price: 15,
        stars:2,
        origins: ['France']
      },
      {
        id:4,
        cookTime: '30-40',
        imageUrl: 'assets/food/img4.jpeg',
        name: 'Viande',
        favorite: true,
        price: 20,
        stars:1,
        origins: ['USA']
      },
      {
        id:5,
        cookTime: '50-60',
        imageUrl: 'assets/food/img5.jpeg',
        name: 'Riz pillaf',
        favorite: true,
        price: 45,
        stars:4,
        origins: ['France (Antilles)']
      },
      {
        id:6,
        cookTime: '20-40',
        imageUrl: 'assets/food/img6.jpeg',
        name: 'Jelly belly bien gluante',
        favorite: true,
        price: 10,
        stars:5,
        origins: ['Deutshland']
      }
    ]
  }
}
