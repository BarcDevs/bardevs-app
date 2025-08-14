import { useTranslations } from 'next-intl'

import { Locales } from '@/lib/language/keys'
import FooterLink from '@/components/shared/footer/footer-link'

const FooterLinks = ({}) => {
    const t = useTranslations()

    return (
        <div>
            <div className="font-sans text-sm font-medium text-[#3e2f34]">
                {t(Locales.footer_quick_links)}
            </div>

            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                <FooterLink
                    href={'#about'}
                    labelLocale={Locales.nav_about}
                />
                <FooterLink
                    href={'#services'}
                    labelLocale={Locales.nav_services}
                />
                <FooterLink
                    href={'#portfolio'}
                    labelLocale={Locales.nav_portfolio}
                />
                <FooterLink
                    href={'#contact'}
                    labelLocale={Locales.nav_contact}
                />
            </ul>
        </div>
    )
}


export default FooterLinks
