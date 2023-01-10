  import { Component, OnInit } from '@angular/core';
  import { AsyncSubject, forkJoin, from, Observable, of } from 'rxjs';

  @Component({
    selector: 'app-todo-home',
    templateUrl: './todo-home.component.html',
    styleUrls: ['./todo-home.component.scss']
  })
  export class TodoHomeComponent implements OnInit  {
    count:number =10;


   ngOnInit() {

     this.adicionarInvestigado();
  }





  async adicionarInvestigado(){
    let behavior:AsyncSubject<any> = new AsyncSubject();
    let enderecoSubject:AsyncSubject<any> = new AsyncSubject<any>();

    let lista:Array<AsyncSubject<any>> = []
    lista.push(behavior);
    lista.push(enderecoSubject);

    console.log('adicionarinvestigado')
    this.qualificacao(behavior,true);
    this.adicionarEndereco(enderecoSubject);

    forkJoin(lista).subscribe(_=>this.salvar());
  }
  adicionarEndereco(enderecoSubject:AsyncSubject<any>){
    setTimeout(()=>{
      let listaObservable:Array<Observable<number>> = [];
      let primeiro = of(1);
      let segundo = of(2);
      listaObservable.push(primeiro,segundo);
      forkJoin(listaObservable).subscribe(res=>{
        console.log(res[0]);
        console.log(res[1]);

        enderecoSubject.next(true);
        enderecoSubject.complete();
      })
    },6000)
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
    console.log('uf')
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
