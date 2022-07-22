import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Food } from '../models/food';

@Injectable({providedIn: 'root'})
export class FoodsService {
  foodsBehavior = new BehaviorSubject<Food[]>([])

  getFoods():Observable<Food[]>{
    return this.foodsBehavior.asObservable()
  }


}
