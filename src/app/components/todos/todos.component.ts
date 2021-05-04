import { Component, OnInit } from '@angular/core';
import { Todo } from '../../models/Todo';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
// on html, uses todoItem. This is imported & used on app.module
export class TodosComponent implements OnInit {
  todos: Todo[] | undefined;

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    // subscribe is like .then() for asynchronous
    this.todoService.getTodos().subscribe((todos) => {
      this.todos = todos;
    });
  }

  deleteTodo(todo: Todo) {
    // remove from UI
    this.todos = this.todos?.filter((t) => t.id !== todo.id);
    // remove from server
    this.todoService.deleteTodo(todo).subscribe();
  }

  addTodo(todo: Todo) {
    this.todoService.addTodo(todo).subscribe((todo) => {
      this.todos?.push(todo);
    });
  }
}
