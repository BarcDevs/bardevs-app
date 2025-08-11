'use client'

import { useTranslations } from 'next-intl'

import FooterLinks from '@/components/shared/footer/footer-links'
import FooterSocials from '@/components/shared/footer/footer-socials'
import { Locales } from '@/lib/language/keys'

export default function Footer () {
    const t = useTranslations()

    const year = new Date().getFullYear()

    return (
        <footer className="border-t bg-white">
            <div className="container mx-auto px-4 py-10">
                <div className="grid gap-8 md:grid-cols-3">
                    <div className="space-y-2">
                        <div className="text-lg font-semibold text-[#3e2f34]">
                            {t(Locales.brand)}
                        </div>
                        <p className="text-sm text-muted-foreground">
                            {year} • {t(Locales.footer_rights)}
                        </p>
                    </div>

                    <FooterLinks/>

                    <FooterSocials/>
                </div>

                <div className="mt-8 h-[2px] w-full rounded bg-[#77c6b0]/30" aria-hidden="true"/>
            </div>
        </footer>
    )
}
