'use client'

import { useTranslations } from 'next-intl'
import { Locales } from '@/lib/language/keys'

const ContactHeader = () => {
    const t = useTranslations()

    return (
        <div className="mx-auto max-w-2xl space-y-3 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-[#3e2f34] sm:text-4xl">
                {t(Locales.contact_title)}
            </h2>
            <p className="text-muted-foreground">
                {t(Locales.contact_subtitle)}
            </p>
        </div>
    )
}

export default ContactHeader
