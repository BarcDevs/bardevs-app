'use client'

import Link from 'next/link'
import { useTranslations } from 'next-intl'
import Icon from '@/components/shared/icon'
import { Locales } from '@/lib/language/keys'

const ContactLinks = () => {
    const t = useTranslations()

    return (
        <div className="flex flex-wrap items-center gap-3">
      <span className="text-sm text-muted-foreground">
        {t(Locales.contact_or)}
      </span>
            <Link
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-[#3e2f34] underline-offset-4 hover:underline"
                aria-label="WhatsApp link"
            >
                <Icon name="whatsapp"/>
                WhatsApp
            </Link>
            <Link
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-[#3e2f34] underline-offset-4 hover:underline"
                aria-label="LinkedIn profile"
            >
                <Icon name="linkedIn"/>
                LinkedIn
            </Link>
        </div>
    )
}

export default ContactLinks
