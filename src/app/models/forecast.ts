export enum TempTypes {
  kelvin = 'Kelvin',
  celsius = 'Celsius',
  fahrenheit = 'Fahrenheit'
}

/**
 * Interface representing the model of our forecast data
 */
export interface IForecast {
  /**
   * The percent chance of precip happening
   */
  precipitation: number;
  /**
   * The temperature, in Kelvin
   */
  temperatureK: number;
  /**
   * A date represented as a string
   */
  // TODO - Maybe make this a moment date or something
  date: string;
}

/**
 * Represents the forecast for a singular day. Includes temperature conversion in it
 */
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