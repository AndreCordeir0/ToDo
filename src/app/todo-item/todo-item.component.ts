import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent {
  @Input()
  id:number;

  onDrop(event:any){
    event.preventDefault();
    var data = event.dataTransfer.getData("text");
    event.target.appendChild(document.getElementById(data));
  }
  onDragOver(event:any) {
    event.stopPropagation();
    event.preventDefault();
  }
  drag(ev:any) {
    console.log(ev.target.id);

    ev.dataTransfer.setData("text", ev.target.id);
  }
}
