import { Component } from '@angular/core';
import { interval, Observable, of, Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularTest';
  dob = new Date();
  dig = 1234444.45678944;
  myObs$ : any;

  subscription = new Subscription();

  val = 0;
  total1 = 38;
  total2 = 10;

  increment1() {
    this.total1 += 1;
  }

  increment2() {
    this.total2 += 1;
  }
}
