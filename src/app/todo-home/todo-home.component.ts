  import { Component, OnInit } from '@angular/core';
  import { AsyncSubject, forkJoin, from, Observable, of } from 'rxjs';

@Component({
  selector: 'app-todo-home',
  templateUrl: './todo-home.component.html',
  styleUrls: ['./todo-home.component.scss']
})
export class TodoHomeComponent implements OnInit  {
  count:number =10;
  accumulatorPxCounter = 2.5;
  maxAcumulatorLR = 5;
  maxLengthForLR = 2;
  headers = [' ToDos',' Active',' Completed'];
  ngOnInit() {

  }


  calcularDiametroCounter(count:number){
    if(count){
      return this.handleAcumulator(count.toString().length)
    }
    return {};
  }

  handleAcumulator(length:number){
    if(length > this.maxLengthForLR){
      return {
        padding:length * this.accumulatorPxCounter + 'px ' + ' ' + this.maxAcumulatorLR + 'px'
      }
    }
    return {
      padding:length * this.accumulatorPxCounter + 'px'
    }
  }
}
