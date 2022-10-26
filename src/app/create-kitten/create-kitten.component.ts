import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Kitten } from './kitten-model';

@Component({
  selector: 'app-create-kitten',
  templateUrl: './create-kitten.component.html',
  styleUrls: ['./create-kitten.component.css']
})
export class CreateKittenComponent implements OnInit {

  @Output() sendNewKitten: EventEmitter<Kitten> = new EventEmitter();
  inputName: string = "";
  inputRace: string = "";
  inputDate: string = "";
  inputImageUrl: string = "";
  currentId: number = 0;

  kittenPictures: Array<string> = [
    'https://static.vets-now.com/uploads/2017/01/Common-emergencies-in-kittens-Vets-Now.jpg',
    'https://pbs.twimg.com/profile_images/1367170536632176648/a0M1hmET_400x400.jpg',
    'https://i.guim.co.uk/img/media/43352be36da0eb156e8551d775a57fadba8ae6d7/0_0_1440_864/master/1440.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=1829611852af3ffc6460b4068e20bcbc',
    'https://dollfacepersiankittens.com/wp-content/uploads/2012/07/0155.jpg'
  ]

  constructor() { }

  ngOnInit(): void {
  }

  resetValues(): void {
    this.inputName = "";
    this.inputRace = "";
    this.inputDate = "";
    this.inputImageUrl = "";
  }

  sendData(): void{
    if(this.inputImageUrl === "") {
      const i: number = Math.floor(Math.random() * this.kittenPictures.length);
      this.inputImageUrl = this.kittenPictures[i];
    }
    const newKitten = new Kitten(this.currentId, this.inputName, this.inputRace, this.inputDate.split("-").reverse().join("/"), this.inputImageUrl);
    this.currentId ++; 
    this.sendNewKitten.emit(newKitten);
    this.resetValues();
  }

}
