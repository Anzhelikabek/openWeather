import { createI18n } from 'vue-i18n';

// Пример сообщений
const messages = {
    en: {
        weatherForecastEnterTheCity: 'Weather forecast, enter the city',
        humidity: 'HUMIDITY',
        wind: 'WIND',
        gustOfWind: 'GUSTS OF WIND',
        clouds: 'ClOUDS',
        selectLanguage: 'Select Language',
        weather: {
            thunderstorm: 'Thunderstorm',
            drizzle: 'Drizzle',
            rain: 'Rain',
            snow: 'Snow',
            mist: 'Mist',
            clear_sky: 'Clear sky',
            few_clouds: 'Few clouds',
            scattered_clouds: 'Scattered clouds',
            broken_clouds: 'Broken clouds',
            overcast_clouds: 'Overcast clouds',  // Добавлено
            shower_rain: 'Shower rain',
            light_rain: 'Light rain',
            moderate_rain: 'Moderate rain',
            haze: 'Haze',
            fog: 'Fog',
            sand: 'Sand',
            dust: 'Dust',
            volcanic_ash: 'Volcanic ash',
            squalls: 'Squalls',
            tornado: 'Tornado'
        },
    },
    ru: {
        weatherForecastEnterTheCity: 'Прогноз погоды, введите город',
        humidity: 'ВЛАЖНОСТЬ',
        wind: 'ВЕТЕР',
        gustOfWind: 'ПОРЫВЫ ВЕТРА',
        clouds: 'ОБЛАЧНОСТЬ',
        selectLanguage: 'Выбрать язык',
        weather: {
            thunderstorm: 'Гроза',
            drizzle: 'Мелкий дождь',
            rain: 'Дождь',
            snow: 'Снег',
            mist: 'Туман',
            clear_sky: 'Ясное небо',
            few_clouds: 'Малооблачно',
            scattered_clouds: 'Рассеивающиеся облака',
            broken_clouds: 'Облачно с прояснениями',
            overcast_clouds: 'Пасмурные облака',  // Добавлено
            shower_rain: 'Ливень',
            light_rain: 'Небольшой дождь',
            moderate_rain: 'Умеренный дождь',
            haze: 'Лёгкая дымка',
            fog: 'Туман',
            sand: 'Песок',
            dust: 'Пыль',
            volcanic_ash: 'Вулканический пепел',
            squalls: 'Шквалы',
            tornado: 'Торнадо'
        },

    },
    ky: {
        weatherForecastEnterTheCity: 'Болжолдуу аба ырайы, шаарды киргизиңиз',
        humidity: 'НЫМДУУЛУК',
        wind: 'ШАМАЛ',
        gustOfWind: 'ШАМАЛДЫН КАТУУЛУГУ',
        clouds: 'БУЛУТ',
        selectLanguage: 'Тилди тандаңыз',
        weather: {
            thunderstorm: 'Кургакчылык',
            drizzle: 'Чакан жамгыр',
            rain: 'Жамгыр',
            snow: 'Кар',
            mist: 'Туман',
            clear_sky: 'Ачык асман',
            few_clouds: 'Бир аз булуттуу',
            scattered_clouds: 'Чачыранды булуттар',
            broken_clouds: 'Булуттуу',
            overcast_clouds: 'Калың булуттар',  // Добавлено
            shower_rain: 'Катуу жамгыр',
            light_rain: 'Бир аз жамгыр',
            moderate_rain: 'Орточо көлөмдө жамгыр',
            haze: 'Туман',
            fog: 'Туман',
            sand: 'Кум',
            dust: 'Чаң',
            volcanic_ash: 'Вулкандык күл',
            squalls: 'Катуу шамал',
            tornado: 'Торнадо'
        },
    },
};

const i18n = createI18n({
    locale: 'en', // Текущий язык
    fallbackLocale: 'en', // Язык по умолчанию, если перевод отсутствует
    messages,
});

export default i18n;
