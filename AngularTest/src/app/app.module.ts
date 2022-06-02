import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { AgePipe } from './pipes/age.pipe';
import { MarksPipe } from './pipes/marks.pipe';
import { TodosComponent } from './Components/todos/todos.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { CreateTodoComponent } from './Components/create-todo/create-todo.component';
import { TodosService } from './Services/todos.service';

@NgModule({
  declarations: [
    AppComponent,
    AgePipe,
    MarksPipe,
    TodosComponent,
    DashboardComponent,
    CreateTodoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    TodosService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
