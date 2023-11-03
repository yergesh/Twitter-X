// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Vuetify
import { createVuetify, ThemeDefinition } from 'vuetify'
import { aliases, mdi } from 'vuetify/lib/iconsets/mdi'
import { light } from '../styles/themes'


export default createVuetify({
  theme: {
    defaultTheme: 'light',
    themes: {
      light,
    }
  },
  icons: {
    // iconfont: 'mdiSvg',
    defaultSet: 'mdi',
    aliases,
    sets: {
      mdi,
    }
  },
})
