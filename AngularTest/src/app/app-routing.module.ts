import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodosComponent } from './Components/todos/todos.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { CreateTodoComponent } from './Components/create-todo/create-todo.component';

// const routes: Routes = [];

@NgModule({
  declarations:[],
  imports: [RouterModule.forRoot([
    {
      path:'todos',
      component: TodosComponent,
    },
    {
      path: 'create-todo',
      component: CreateTodoComponent,
    },
    {
      path: 'dashboard',
      component: DashboardComponent,
    },
  ])],
  exports: [RouterModule ]
})
export class AppRoutingModule { }
