import { ValueChangeEvent } from '@angular/forms';

import { FormsModule } from '@angular/forms'; // Import the FormsModule
import { Component } from "@angular/core";
import { callAfter, randomInt } from './utils/basic-utils';

@Component({
  selector: 'app-multiply',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './multiply.component.html',
  styleUrl: './multiply.component.css'
})
export class MultiplyComponent {
  numbers: Array<Pair>=[];
  //answers: Array<number>=[];

  answer:number|null = null;
  size = 10;
  speed = 5;
  questions = 10;
  reminder = 0;
  question = 0;


  x: number|null = null;
  y: number|null = null;
  start = () => {
    this.numbers = [];
    for(var i = 0; i < this.questions; i++) {
      this.numbers.push({x: randomInt(this.size), y: randomInt(this.size)})
    }
    console.log(this.numbers);
    this.displayNumber(this.question);
  }

  displayNumber = (index: number) => {
    this.reminder = this.speed;
    this.x = this.numbers[index].x;
    this.y = this.numbers[index].y;
    
    callAfter(this.speed * 1000, this.fn, ['Gotovoooooo'], 1000, this.decreaseReminder);
  }

  fn = (x:string) => {
    alert(x);

  }
  decreaseReminder = () => {
    this.reminder--;
  }
}

class Pair {
  x!:number;
  y!:number;
}

