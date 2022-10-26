import { Component, OnInit, Input } from '@angular/core';
import { Kitten } from '../create-kitten/kitten-model';

@Component({
  selector: 'app-user-kitten',
  templateUrl: './user-kitten.component.html',
  styleUrls: ['./user-kitten.component.css']
})
export class UserKittenComponent implements OnInit {

  @Input() userList: Array<Kitten> = [];

  constructor() { }

  ngOnInit(): void {
  }

}
