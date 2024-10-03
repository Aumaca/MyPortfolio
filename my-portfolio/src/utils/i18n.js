import { createI18n } from 'vue-i18n'

const messages = {
  en: {
    welcome: 'Hello World!'
  },
  pt: {
    welcome: 'Olá Mundo!'
  }
}

const i18n = createI18n({
  locale: 'en',
  fallbackLocale: 'en',
  legacy: false,
  messages
})

export default i18n
