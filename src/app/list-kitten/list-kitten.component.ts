import { KeyValue } from '@angular/common';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Kitten } from '../create-kitten/kitten-model';

@Component({
  selector: 'app-list-kitten',
  templateUrl: './list-kitten.component.html',
  styleUrls: ['./list-kitten.component.css']
})
export class ListKittenComponent implements OnInit {

  @Input() kittenList: Array<Kitten | any> = [];
  @Output () sendAdoptedKitten: EventEmitter<Kitten> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  sortNull(a: KeyValue<any, any>): any {
    if(a.key !== 'skills') {
      return 0;
    }
  }

  addToUserList(kitten: Kitten): void {
    const index = this.kittenList.findIndex(object => {
      return object.id === kitten.id;
    });
    this.kittenList.splice(index, 1);

    this.sendKitten(kitten);
  }

  sendKitten(kitten: Kitten): void {
    this.sendAdoptedKitten.emit(kitten);
  }

}
