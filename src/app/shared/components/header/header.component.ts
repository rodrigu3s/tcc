import { Component } from '@angular/core';
import { Food } from '../../models/food';
import { FoodsService } from '../../service/foods.service';

@Component({
  selector:'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent{

  combos: Food[] = [];
  plates: Food[] = [];

  constructor(private foodsservice: FoodsService){
    this.foodsservice.getCombos().subscribe((response)=>{
      this.combos = response
    })

    this.foodsservice.getPlates().subscribe((response)=>{
      this.plates = response
    })
  }

  pratoGenerico:Array<Food> = []

  // individual = [
  //   {
  //     name: 'arroZ',
  //     price: '400,00'
  //   },
  //   {
  //     name: 'Feijão',
  //     price: '500,00'
  //   },
  //   {
  //     name: 'Macarrão',
  //     price: '600,00'
  //   },
  //   {
  //     name: 'arroZ',
  //     price: '400,00'
  //   },
  //   {
  //     name: 'Feijão',
  //     price: '500,00'
  //   },
  //   {
  //     name: 'Macarrão',
  //     price: '600,00'
  //   },
  //   {
  //     name: 'arroZ',
  //     price: '400,00'
  //   },
  //   {
  //     name: 'Feijão',
  //     price: '500,00'
  //   },
  //   {
  //     name: 'Macarrão',
  //     price: '600,00'
  //   }
  // ]

  // combo = [
  //   {
  //     name: 'lasanha',
  //     price: '15,00'
  //   },
  //   {
  //     name: 'carne',
  //     price: '25,00'
  //   },
  //   {
  //     name: 'frango',
  //     price: '47,00'
  //   }
  // ]

  sobremesa =[
    {
      name: 'pudin',
      price: '50,00'
    },
    {
      name: 'pudin',
      price: '50,00'
    },
  ]

    bebidas =[
      {
        name: 'caca',
        price: '20,00'
      },
      {
        name: 'fanta',
        price: '10,00'
      }
  ]


  getPratos(element:string){
    if(element == 'combos'){
      this.foodsservice.foodsBehavior.next(this.combos)
    }
    else if( element == 'individual'){
      this.foodsservice.foodsBehavior.next(this.plates)
    }

    else if(element == 'sobremesa'){
      this.foodsservice.foodsBehavior.next(this.sobremesa)
    }

    else if(element == 'bebidas'){
      this.foodsservice.foodsBehavior.next(this.bebidas)
    }
  }

}
