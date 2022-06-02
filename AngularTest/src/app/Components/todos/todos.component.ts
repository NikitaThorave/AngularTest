import { Component, OnInit,OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { TodosService } from 'src/app/Services/todos.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit, OnDestroy {
  todos: any[] = [];

  constructor(private router: Router, private todosService: TodosService) {}

  ngOnDestroy(): void {
    console.log('TODOS COMPONENT DESTROYED');
  }

  ngOnInit(): void {
    this.todos = this.todosService.getTodos();
  }

  addNewTodo() {
    this.router.navigate(['/create-todo']);
  }

  newTodoHandler(newTodo: any) {
    console.log('TODOS COMPONENT RECIEVED NEW TODO:   ', newTodo);
    this.todos.push(newTodo);
  }
}