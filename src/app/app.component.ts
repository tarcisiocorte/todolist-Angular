import { Component } from '@angular/core';
import { Todo } from 'src/models/todo.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public todos: Todo[]=[];
  public title: String = 'Minhas Tarefas';

  constructor() {
    this.todos.push(new Todo(1, 'Passear com cão', false));
    this.todos.push(new Todo(1, 'Estudar Angular', false));
    this.todos.push(new Todo(1, 'Fazer uma aplicação de testes', true));
  }

  remove(){}

  markAsDone(){}

  markAsUndone(){}
}
