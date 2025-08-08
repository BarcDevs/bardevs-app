'use client'

import { en } from '@/locales/en'
import { he } from '@/locales/he'
import { ProviderProps } from '@/types'
import { Lang, LanguageContext_T } from '@/types/language'
import { createContext, FC, useContext, useMemo, useState } from 'react'

const LanguageContext = createContext<LanguageContext_T | null>(null)

export const LanguageProvider: FC<ProviderProps> = ({ children }) => {
    const [lang, setLang] = useState<Lang>('en')

    const value = useMemo<LanguageContext_T>(() => {
        const dict = lang === 'en' ? en : he
        const dir = lang === 'en' ? 'ltr' : 'rtl'
        return {
            lang,
            dir,
            setLang,
            t: (key) => dict[ key ] ?? key
        }
    }, [lang])

    return (
        <LanguageContext.Provider value={value}>
            {children}
        </LanguageContext.Provider>
    )
}

export function useLanguage () {
    const ctx = useContext(LanguageContext)
    if ( !ctx ) {
        throw new Error(
            'useLanguage must be used within LanguageProvider'
        )
    }
    return ctx
}
