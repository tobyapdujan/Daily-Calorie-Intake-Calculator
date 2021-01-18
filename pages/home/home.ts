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

calculateDCIC () {
  
}

}
