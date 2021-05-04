import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title: string = 'angular-crash-todolist';
  name: string = 'Brent Rucka motha fucka!';
  age: number = 33;

  constructor() {
    console.log(123);
    this.age = 34;
    this.changeName('Brent Rucka!!!');
  }

  changeName(name: string): void {
    this.name = name;
  }
}
