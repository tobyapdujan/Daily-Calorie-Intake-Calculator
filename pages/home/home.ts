import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  styleUrls: ['home.css']
})
export class HomePage {
  gender: string;
  height: number;
  weight: number;
  age: number;
  activitylevel: string;
  dcic: number;
  bmr: number;

calculateDCIC () {
  this.gender = Male/Female

  if (this.gender = Male) {
    this.bmr = 10 * this.weight + 6.25 * this.height - 5 * this.age + 5;
  }


  }
  
}


