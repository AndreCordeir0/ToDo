  import { Component, OnInit } from '@angular/core';
  import { AsyncSubject, from, Observable, of } from 'rxjs';

  @Component({
    selector: 'app-todo-home',
    templateUrl: './todo-home.component.html',
    styleUrls: ['./todo-home.component.scss']
  })
  export class TodoHomeComponent implements OnInit  {
    count:number =10;


   ngOnInit() {
    //  this.adicionarInvestigado();
     this.adicionarEndereco();
  }
  adicionarEndereco(){
    let observables:Observable<number> = from(of(2,3,4,5,6));

    observables.subscribe(a=>{
      console.log('cidade');
      console.log(a.toString());
    })
  }




  async adicionarInvestigado(){
    let behavior:AsyncSubject<any> = new AsyncSubject();
    console.log('adicionarinvestigado')
    this.qualificacao(behavior,true);
    behavior.subscribe(_=>this.salvar());
  }

  qualificacao(asyncObject:AsyncSubject<any>,hasMunicipio:boolean){
    console.log('qualificacao');
    if(hasMunicipio){
      setTimeout(() => {
        console.log('nacionalidade');
        asyncObject.next(true);
        asyncObject.complete();

      }, 3000);
    }else{
      asyncObject.next(true);
      asyncObject.complete();
    }
  }

  // const click$ = fromEvent(document, 'click').pipe(
  //   map((e: MouseEvent) => ({
  //     x: e.clientX,
  //     y: e.clientY,
  //     id: Math.random()
  //   })),
  //   tap(addHtmlElement),
  //   mergeMap(coords => subject.pipe(tap(v => setElementText(coords.id, v))))
  // );
  salvar(){
    console.log('salvar');
  }
  }
