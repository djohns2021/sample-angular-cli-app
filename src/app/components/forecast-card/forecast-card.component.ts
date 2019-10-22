import { Component, OnInit, Input } from '@angular/core';
import { Forecast, TempTypes } from 'src/app/models/forecast';

@Component({
  selector: 'app-forecast-card',
  templateUrl: './forecast-card.component.html',
  styleUrls: ['./forecast-card.component.scss']
})
export class ForecastCardComponent implements OnInit {
  @Input() forecast: Forecast;
  @Input() tempType: TempTypes = TempTypes.fahrenheit;
  constructor() {}


  ngOnInit() {
    if (!this.forecast) {
      throw new Error('Error: A forecast must be passed into the forecast-card component!');
    }
  }

  getSelectedTemperature(): string {
    switch(this.tempType) {
      case TempTypes.fahrenheit: {
        return `${Math.round(this.forecast.temperatureF)}* F`;
      }
      case TempTypes.celsius: {
        return `${Math.round(this.forecast.temperatureC)} C`;
      }
      case TempTypes.fahrenheit: {
        return `${Math.round(this.forecast.temperatureK)} K`;
      }
      default: {
        return `N/A`;
      }
    }
  }

  getForecastIcon(): string {
    if (this.forecast.precipitation > 50) {
      return '/assets/rain.png';
    } else {
      return '/assets/sunny.png';
    }
  }
}
