import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TodosComponent } from './Components/todos/todos.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { CreateTodoComponent } from './Components/create-todo/create-todo.component';
import { UserMgmtComponent } from './Components/user-mgmt/user-mgmt.component';
import { UserSettingsFormComponent } from './Components/user-settings-form/user-settings-form.component';

// const routes: Routes = [];

@NgModule({
  declarations:[],
  imports: [
    CommonModule,
    RouterModule.forRoot([
    {
      path: '',
      redirectTo: 'home',
      pathMatch: 'full',
    },
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
    {
      path: 'user-mgmt',
      component: UserMgmtComponent
    },
    {
      path: 'form',
      component: UserSettingsFormComponent
    },
    {
      path: '**',
      redirectTo: 'dashboard'
    },
    
  ],
  { enableTracing: false }
  )],
  exports: [RouterModule ]
})
export class AppRoutingModule { }
