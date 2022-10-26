import { Component } from '@angular/core';
import { Kitten } from './create-kitten/kitten-model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Kitten';

  public kittenList: Array<Kitten> = [];
  public userList: Array<Kitten> = [];

  addKitten(event: Kitten): void {
    this.kittenList.push(event);
    console.log(this.kittenList);
  }

  addAdoptedKitten(event: Kitten): void {
    this.userList.push(event);
    console.log(this.userList);
  }
}
