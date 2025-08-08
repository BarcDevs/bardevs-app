import { en } from '@/locales/en'

export type Lang = 'en' | 'he'

export type LanguageContext_T = {
    lang: Lang
    dir: 'ltr' | 'rtl'
    t: (key: keyof typeof en) => string
    setLang: (lang: Lang) => void
}
