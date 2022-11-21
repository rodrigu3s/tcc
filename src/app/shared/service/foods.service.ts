import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Food } from '../models/food';
import { HttpClient } from '@angular/common/http';

@Injectable({providedIn: 'root'})
export class FoodsService {
  foodsBehavior = new BehaviorSubject<Food[]>([])

  constructor(private http: HttpClient){

  }

  getFoods():Observable<Food[]>{
    return this.foodsBehavior.asObservable()
  }


  getCombos():Observable<Food[]>{
    return this.http.get<Food[]>('http://localhost:3000/combos')
  }

  getPlates():Observable<Food[]>{
    return this.http.get<Food[]>('http://localhost:3000/plates')
  }


}
