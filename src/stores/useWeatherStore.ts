import {defineStore} from 'pinia';
import axios from "axios";

export const useWeatherStore = defineStore('weatherStore', {
    state: () => ({
        weatherData: {
            id: 0,
            name: '',
            coord: {
                lat: 0,
                lon: 0
            },
            main: {
                temp: 0,
                feels_like: 0,
                temp_min: 0,
                temp_max: 0,
                pressure: 0,
                humidity: 0,
                sea_level: 0,
                grnd_level: 0
            },
            dt: null,
            wind: {
                gust: 0,
                speed: 0,
                deg: 0
            },
            sys: {country: ''},
            rain: null,
            snow: null,
            clouds: {
                all: 0
            },
            weather: [{
                id: 0,
                main: '',
                description: '',
                icon: ''
            }]
        },
        cities: [] as string[],
        weatherMap: {
            "light rain": "light_rain",
            "moderate rain": "moderate_rain",
            "clear sky": "clear_sky",
            "few clouds": "few_clouds",
            "scattered clouds": "scattered_clouds",
            "broken clouds": "broken_clouds",
            "overcast clouds": "overcast_clouds",
            "shower rain": "shower_rain",
            "rain": "rain",
            "thunderstorm": "thunderstorm",
            "drizzle": "drizzle",
            "snow": "snow",
            "mist": "mist",
            "haze": "haze",
            "fog": "fog",
            "sand": "sand",
            "dust": "dust",
            "volcanic ash": "volcanic_ash",
            "squalls": "squalls",
            "tornado": "tornado",
        },
        translatedDescription: '',
        loading: false,
        error: null
    }),
    actions: {
        async fetchWeather(city: string) {
            this.loading = true;
            this.error = null;
            try {
                const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=a35c06003c6889535b045ba5e4727a88`);
                this.weatherData = response.data;
                this.translatedDescription = this.weatherMap[this.weatherData.weather[0].description];
            } catch (error) {
                this.error = 'Failed to load weather data.';
            }
        },
        async fetchCities(input: string) {
            try {
                const response = await axios.get(
                    `http://api.openweathermap.org/geo/1.0/direct?q=${input}&limit=5&appid=a35c06003c6889535b045ba5e4727a88`
                );
                this.cities = response.data.map((location: any) => location.name);
            } catch (error) {
                this.error = 'Ошибка при поиске городов';
            }
        }
    }
})
