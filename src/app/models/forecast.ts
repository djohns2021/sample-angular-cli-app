export enum TempTypes {
  kelvin = 'Kelvin',
  celsius = 'Celsius',
  fahrenheit = 'Fahrenheit'
}

export interface IForecast {
  precipitation: number;
  temperatureK: number;
  date: string;
}


export class Forecast implements IForecast {
  public precipitation: number = 0;
  public temperatureK: number = 273.15;
  public date: string = '';

  constructor(forecast: IForecast) {
    return Object.assign(this, forecast);
  }

  get temperatureF(): number {
    return (this.temperatureC * 9/5) + 32;
  }
  
  get temperatureC(): number {
    return this.temperatureK - 273.15;
  }
}