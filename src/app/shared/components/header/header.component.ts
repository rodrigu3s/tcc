import { Component } from '@angular/core';
import { Food } from '../../models/food';
import { FoodsService } from '../../service/foods.service';

@Component({
  selector:'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent{

  constructor(private foodsservice: FoodsService){

  }

  pratoGenerico:Array<Food> = []

  individual = [
    {
      name: 'arroZ',
      price: '400,00'
    },
    {
      name: 'Feijão',
      price: '500,00'
    },
    {
      name: 'Macarrão',
      price: '600,00'
    },
    {
      name: 'arroZ',
      price: '400,00'
    },
    {
      name: 'Feijão',
      price: '500,00'
    },
    {
      name: 'Macarrão',
      price: '600,00'
    },
    {
      name: 'arroZ',
      price: '400,00'
    },
    {
      name: 'Feijão',
      price: '500,00'
    },
    {
      name: 'Macarrão',
      price: '600,00'
    }
  ]

  combo = [
    {
      name: 'lasanha',
      price: '15,00'
    },
    {
      name: 'carne',
      price: '25,00'
    },
    {
      name: 'frango',
      price: '47,00'
    }
  ]


  getPratos(element:string){
    if(element == 'combo'){
      this.foodsservice.foodsBehavior.next(this.combo)
    }
    else if( element == 'individual'){
      this.foodsservice.foodsBehavior.next(this.individual)
    }
  }



}
