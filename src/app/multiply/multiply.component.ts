import { ValueChangeEvent } from '@angular/forms';

import { FormsModule } from '@angular/forms'; // Import the FormsModule
import { Component, ElementRef, QueryList, TemplateRef, ViewChild, ViewChildren, afterRender } from "@angular/core";
import { PromiseCallAfter, randomInt, Callback } from './utils/basic-utils';

@Component({
  selector: 'app-multiply',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './multiply.component.html',
  styleUrl: './multiply.component.css'
})

export class MultiplyComponent {
  @ViewChild("myAnswer") txtAnswer!:ElementRef;

  constructor() {
    afterRender(() => {
      //console.log("AR " + this.txtAnswer);
      this.txtAnswer.nativeElement.focus();
    });
  }


  numbers: Array<Pair>=[];
  answer:number|null = null;
  size = 10;
  speed = 5;
  questions = 10;
  reminder = 0;
  question = 0;
  fn:any;
  animate:any;
  x: number|null = null;
  y: number|null = null;
  //txtAnswer: any;


  start = async () => {
    this.numbers = [];
    for(var i = 0; i < this.questions; i++) {
      this.numbers.push({x: randomInt(this.size), y: randomInt(this.size), answered: false, correct: false})
    }
    console.log(this.numbers);

    const pDisplayNumber = (index: number) => {return new Promise(async (resolve, reject) => {
      await this.displayNumber(index);
      resolve('Gut');
    })};
    for(this.question = 0; this.question < this.numbers.length; this.question++) {
      var r = await pDisplayNumber(this.question);
      this.answer = null;
      console.log("R" + r + "/"+ this.question);
    }
  }

  displayNumber = async (index: number) => {
    this.reminder = this.speed;
    this.x = this.numbers[index].x;
    this.y = this.numbers[index].y;
    //console.log(this.txtAnswer.nativeElement);
    this.txtAnswer.nativeElement.focus();

    this.fn = new Callback(this.finalFn, this.speed * 1000, ['You Mised!!!']);
    this.animate = new Callback(this.decreaseReminder, 200);
    await PromiseCallAfter(this.fn, this.animate);
    this.numbers[index].answered = true;
    //this.numbers[index].correct = false;

  }

  finalFn = (x:string) => {
    alert(x);

  }

  decreaseReminder = () => {
    this.reminder--;
    console.log("TR:" + this.reminder)
  }

  guess = () => {
    if(<number>this.answer == this.numbers[this.question].x *  this.numbers[this.question].y) {
      this.numbers[this.question].answered = true;
      this.numbers[this.question].correct = true;
      alert("Woooobraaaa");
      this.fn.stop = 1;
    }
  }
}

class Pair {
  x!: number;
  y!: number;
  answered: boolean=false;
  correct!: boolean;
}


