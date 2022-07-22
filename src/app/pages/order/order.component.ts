import { Observable, Subscription } from 'rxjs';
import { Component, OnDestroy } from "@angular/core";
import { FoodsService } from "src/app/shared/service/foods.service";
import { Food } from 'src/app/shared/models/food';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})

export class OrderComponent implements OnDestroy {

  ladoEsquerdo:Food[] = [];
  ladoDireito:Food[] = [];

  private subscription: Subscription = new Subscription();

  constructor(private foodsService: FoodsService){
      this.subscription.add(
        this.foodsService.getFoods().subscribe((foods)=>{
        let isMutipleTree = false;
        this.ladoEsquerdo = [];
        this.ladoDireito= [];
        foods.forEach((element, index) => {
          if(index%3==0){
            isMutipleTree = !isMutipleTree;
          }
          if(isMutipleTree){
            this.ladoEsquerdo.push(element);
          }
          else{
            this.ladoDireito.push(element);
          }
        });
      })
    );


  }


  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
