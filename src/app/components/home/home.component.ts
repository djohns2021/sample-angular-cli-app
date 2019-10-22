import { Component, OnInit } from '@angular/core';
import { Forecast } from 'src/app/models/forecast';
import * as moment from 'moment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor() { }

  forecastCards: Forecast[];
  today: moment.Moment;

  ngOnInit() {
    this.today = moment();
    this.forecastCards = this.generateForecasts();
  }

  /**
   * Testing function to randomly generate us 12 forecasts
   */
  generateForecasts(): Forecast[] {
    const forecastArray = [];
    for(let i = 0; i < 12; i ++) {
      // Most moment functions aren't pure ;_;
      const tempDate = this.today.clone();
      const daysAhead = tempDate.add(i, 'days');
      const date = daysAhead.format('dddd');

      const precipitation = Math.random() * 100;
      const temperatureK = this.getRandomArbitrary(260, 313);
      forecastArray.push(new Forecast({date, precipitation, temperatureK}));
    }

    return forecastArray;
  }

  /**
   * Returns a random number between this range
   * Shamelessly pulled from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
   * @param min - min range
   * @param max - max range
   */
  getRandomArbitrary(min, max): number {
    return Math.random() * (max - min) + min;
  }
}
