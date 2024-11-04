<template>
  <div class="d-flex justify-space-between">
    <div col="6"></div>
    <div col="6" class="w-50">
      <v-autocomplete
          v-model="selectedLanguage"
          :items="languages"
          :label="t('selectLanguage')"
          item-text="name"
          item-value="code"
          @change="setLanguage"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import {ref, watch} from 'vue';
import {useI18n} from 'vue-i18n';
import {useCookies} from 'vue3-cookies';

const {t} = useI18n();
const {cookies} = useCookies();
const {locale} = useI18n();

const languages = ['English', 'Русский', 'Кыргызча'];

const langMap = {
  'en': 'English',
  'ru': 'Русский',
  'ky': 'Кыргызча'
};

const languageCode = cookies.get('language') || 'en'; // По умолчанию 'en'
const selectedLanguage = ref(langMap[languageCode] || 'English');


const setLanguage = (newLang: string) => {
  const langMap = {
    "English": 'en',
    "Русский": 'ru',
    "Кыргызча": 'ky'
  };
  newLang = langMap[newLang] || newLang;
  locale.value = newLang;
  cookies.set('language', newLang, '7d');
};

watch(selectedLanguage, (newLang) => {
  setLanguage(newLang);
});
</script>
