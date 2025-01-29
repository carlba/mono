import * as cheerio from 'cheerio';
import { error } from 'console';

import * as fs from 'fs/promises';

interface WeatherInfo {
  temperature: string;
  condition: string;
  humidity: string;
  wind: string;
}

const url = 'https://www.clima.com/mexico/distrito-federal/mexico';

const scrapeWeather = async (): Promise<WeatherInfo | null> => {
  try {
    const response = await fetch(url);
    const html = await response.text();

    const $ = cheerio.load(html);

    await fs.writeFile('weather.html', html);

    const weatherInfo: WeatherInfo = {
      temperature: $('span.degrees').attr('data-temperature') ?? '',
      condition: $('span[data-description]').first().text().trim(),
      humidity: $('span[data-humidity]').first().text().trim(),
      wind: $('span.wind-text-value.velocity').attr('data-speed') ?? '',
    };

    return weatherInfo;
  } catch (error) {
    if (error instanceof Error) {
      console.error(`There was an error: ${error.message}`);
    }

    return null;
  }
};

scrapeWeather()
  .then(weatherInfo => {
    if (weatherInfo) {
      console.log(weatherInfo);
    } else {
      console.log('Failed to retrieve weather information.');
    }
  })
  .catch(() => console.error(error));
