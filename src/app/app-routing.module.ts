import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/to-do', pathMatch: 'full' },
  {
    path: 'to-do',
    loadChildren: () => import('./todo-home/todo-home.module').then(m => m.TodoHomeModule)
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
