import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TabViewModule} from 'primeng/tabview';

import { TodoHomeRoutingModule } from './todo-home-routing.module';
import { TodoItemComponent } from '../todo-item/todo-item.component';
import { TodoHomeComponent } from './todo-home.component';


@NgModule({
  declarations: [TodoItemComponent,TodoHomeComponent],
  imports: [
    CommonModule,
    TabViewModule,
    TodoHomeRoutingModule
  ]
})
export class TodoHomeModule { }
