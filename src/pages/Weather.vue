<template>
  <v-container>
    <Language/>
    <div class="rounded rounded-md d-flex align-center justify-center mt-15 mb-15">
      <v-autocomplete
          :label="t('weatherForecastEnterTheCity')"
          variant="outlined"
          :items="cities"
          v-model="city"
          @input="fetchCities($event.target.value)"
          @update:modelValue="getWeather"
          clearable
      >
      </v-autocomplete>
    </div>
    <div v-if="loading">
      <v-row class="content">
        <v-col class="content__item1 d-flex flex-column align-start justify-space-between pa-6" cols="12" md="6" sm="6"
               lg="7">
          <div>
            <h1 style="">{{ formattedDate.weekday }}</h1>
            <p class="pb-2"> {{ formattedDate.dateFormatted }}</p>
            <p class=""><span></span>{{ weatherData.name }} {{ weatherData.sys.country }}</p>
          </div>
          <div class="d-flex">
            <div>
              <h1 class="degree">{{ Math.trunc(weatherData.main.temp - 273.15) }}°C</h1>
              <h3>{{ t(`weather.${weatherStore.translatedDescription}`) }}</h3>
              <!--              <h3>{{ weatherData.weather[0].description }}</h3>-->
            </div>
            <img class="img" :src="`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`"
                 alt="Weather Icon">
          </div>
        </v-col>
        <v-col class="content__item2 d-flex flex-column align-start justify-center pa-6" cols="12" md="6" sm="6" lg="5">
          <div class="d-inline-block w-100">
            <div class="d-flex justify-space-between align-center pb-3">
              <p class="content__item-description">{{ t('humidity') }}</p>
              <p>{{ weatherData.main.humidity }}%</p>
            </div>
            <div class="d-flex justify-space-between align-center pb-3">
              <p class="content__item-description">{{ t('wind') }}</p>
              <p>{{ weatherData.wind.speed }}m/s</p>
            </div>
            <div class="d-flex justify-space-between align-center pb-3">
              <p class="content__item-description">{{ t('gustOfWind') }}</p>
              <p>{{ weatherData.wind.gust }}m/s</p>
            </div>
            <div class="d-flex justify-space-between align-center pb-3">
              <p class="content__item-description">{{ t('clouds') }}</p>
              <p>{{ weatherData.clouds.all }}%</p>
            </div>
          </div>
        </v-col>
      </v-row>
    </div>
  </v-container>

</template>
<script setup lang="ts">
import {ref, computed} from "vue";
import {useWeatherStore} from '@/stores/useWeatherStore';
import Language from '@/components/Language.vue';
import {useI18n} from 'vue-i18n';
import debounce from 'lodash/debounce';

const city = ref<string>('');

const weatherStore = useWeatherStore();
const {t, locale} = useI18n();


const loading = computed(() => weatherStore.loading);
const weatherData = computed(() => weatherStore.weatherData);
const cities = computed(() => weatherStore.cities);

const formattedDate = computed(() => {
  const today = new Date();
  const timestamp = weatherData.value.dt * 1000;
  const date = new Date(timestamp);
  const todayFormatted = today.toLocaleDateString(locale.value, {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  const weekday = date.toLocaleDateString(locale.value, {weekday: 'long'});
  const dateFormatted = date.toLocaleDateString(locale.value, {
    day: 'numeric',
    month: 'short',
    year: 'numeric'
  });

  return {
    todayFormatted,
    weekday,
    dateFormatted,
  };
});

const fetchCities = debounce((input: string) => {
  if (input) {
    weatherStore.fetchCities(input);
  }
}, 500);

const getWeather = () => {
  weatherStore.fetchWeather(city.value);
};

</script>

<style>
body {
  background: #343d4b;
  color: #ffffff;
}

* {
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
}

.content {
  background: #1a212c;
  border-radius: 25px;
}

.content__item1 {
  position: relative;
  width: 350px;
  height: 350px;
  border-radius: 25px;
  background-image: url("/src/assets/images/map.png");
  background-size: cover;
  background-repeat: no-repeat;
}

.degree {
  font-weight: 700;
  font-size: 4em;
}

.content__item-description {
  line-height: 1.25em;
  font-weight: 700;
}

.img {
  width: 100px;
  height: 100%;
  object-fit: cover;
  object-position: center;
}

@media screen and (max-width: 604px) {
  .img {
    width: 90px;
  }
}

</style>
