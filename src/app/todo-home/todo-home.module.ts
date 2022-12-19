import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PasswordModule} from 'primeng/password';

import { TodoHomeRoutingModule } from './todo-home-routing.module';
import { TodoItemComponent } from '../todo-item/todo-item.component';
import { TodoHomeComponent } from './todo-home.component';


@NgModule({
  declarations: [    TodoItemComponent,
    TodoHomeComponent,],
  imports: [
    CommonModule,
    PasswordModule,

    TodoHomeRoutingModule
  ]
})
export class TodoHomeModule { }
