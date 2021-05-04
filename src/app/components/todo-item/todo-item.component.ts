import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from 'src/app/models/Todo';
import { TodoService } from '../../services/todo.service';
@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css'],
})
export class TodoItemComponent implements OnInit {
  // Input for iterating through each item
  /* Input - The input property is bound to a DOM property in the template. During change detection, 
  Angular automatically updates the data property with the DOM property's value.*/
  @Input() todo!: Todo;
  /* @Input() and @Output() give a child component a way to communicate with its parent component. */
  /* EventEmitter - allows us to create and handle custom events easily by using events module */
  @Output() deleteTodo: EventEmitter<Todo> = new EventEmitter();

  constructor(private service: TodoService) {}

  ngOnInit(): void {}

  // set dynamic classes
  setClasses() {
    let classes = {
      todo: true,
      'is-complete': this.todo.completed,
    };
    return classes;
  }

  onToggle(todo: Todo) {
    todo.completed = !todo.completed;
    this.service.toggleCompleted(todo).subscribe((todo: Todo) => {
      console.log('TODO = ', todo);
    });
  }

  onDelete(todo: Todo) {
    this.deleteTodo.emit(todo);
  }
}
