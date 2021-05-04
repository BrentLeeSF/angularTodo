import { Injectable } from '@angular/core';
/* @angular/common/http - Implements an HTTP client API for Angular apps that relies on 
the XMLHttpRequest interface exposed by browsers. */
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Todo } from '../models/Todo';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

/* Injectable - Decorator that marks a class as available to be provided and injected as a dependency. */
@Injectable({
  providedIn: 'root',
})
export class TodoService {
  todosUrl: string = 'https://jsonplaceholder.typicode.com/todos';
  todosLimit = '?_limit=5';

  constructor(private http: HttpClient) {}

  /* Observables provide support for passing messages between parts of your application. 
  They are used frequently in Angular and are a technique for event handling, 
  asynchronous programming, and handling multiple values. */
  getTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(`${this.todosUrl}${this.todosLimit}`);
    /*return [
      { id: 0, title: 'Beer', completed: false },
      { id: 1, title: 'Taco', completed: true },
      { id: 2, title: 'Burrito', completed: false },
    ];*/
  }

  /*HTTPClient - https://angular.io/api/common/http/HttpClient */
  toggleCompleted(todo: Todo): Observable<any> {
    const url = `${this.todosUrl}/${todo.id}`;
    return this.http.put(url, todo, httpOptions);
  }

  deleteTodo(todo: Todo): Observable<any> {
    const url = `${this.todosUrl}/${todo.id}`;
    return this.http.delete(url, httpOptions);
  }

  addTodo(todo: Todo): Observable<Todo> {
    return this.http.post<Todo>(this.todosUrl, todo, httpOptions);
  }
}
