import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import es from './locales/es.json'

const getTranslation = () => {
  let translation = {}
  Object.values(es).forEach(i => {
    translation = {
      ...translation,
      [i.data.iso]: { translation: { ...i } }
    }
  })
  return translation
}

i18n
  .use(initReactI18next)
  .init({
    resources: getTranslation(),
    lng: 'es',
    fallbackLng: 'es',
    debug: false,
    interpolation: {
      escapeValue: false // not needed for react as it escapes by default
    }

  })

export default i18n
