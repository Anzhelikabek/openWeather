import {createApp} from 'vue'
import {createPinia} from 'pinia'

import {createVuetify} from 'vuetify'
import 'vuetify/styles'  // Ensure you are using css-loader
import {aliases, mdi} from 'vuetify/iconsets/mdi' // For Material Icons
import { VApp,  VMain,  VContainer,  VRow,  VCol,  VBtn,  VCard,  VToolbar,  VIcon,  VTextField,  VForm,  VAvatar,  VList,  VListItem,  VListItemTitle,  VSnackbar,  VDialog, VAutocomplete, VLayout, VAppBar, VInput } from "vuetify/components";

const vuetify = createVuetify({
  components: {
    VApp,
    VAppBar,
    VMain,
    VContainer,
    VRow,
    VCol,
    VBtn,
    VCard,
    VToolbar,
    VIcon,
    VTextField,
    VForm,
    VAvatar,
    VList,
    VListItem,
    VListItemTitle,
    VSnackbar,
    VDialog,
    VAutocomplete,
    VLayout,
    VInput
  },
  icons: {
    defaultSet: 'mdi', // This is Material Design Icons
    aliases,
    sets: {
      mdi,
    },
  },
})
import 'vuetify/styles'
import '@mdi/font/css/materialdesignicons.css'
import './assets/fonts/Montserrat/stylesheet.css'
import App from './App.vue'
import router from './router'
import i18n from './i18n';
import { useCookies } from 'vue3-cookies';

const { cookies } = useCookies();

const savedLanguage = cookies.get('language');
if (savedLanguage) {
  i18n.global.locale = savedLanguage;
}

const app = createApp(App)

app.use(i18n);
app.use(vuetify)
app.use(createPinia())
app.use(router)

app.mount('#app')
