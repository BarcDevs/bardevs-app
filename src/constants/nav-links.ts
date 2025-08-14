import { config } from '@/config'
import { Locales } from '@/lib/language/keys'

type NavLink = {
    [ key: string ]:
        {
            locale: string
            href: string
        }
}

export const NAV_LINKS: NavLink = {
    home: {
        href: '#home',
        locale: config.brandName
    },
    about: {
        href: '#about',
        locale: Locales.nav_about
    },
    services: {
        href: '#services',
        locale: Locales.nav_services
    },
    portfolio: {
        href: '#portfolio',
        locale: Locales.nav_portfolio
    },
    testimonials: {
        href: '#testimonials',
        locale: Locales.nav_testimonials
    },
    contact: {
        href: '#contact',
        locale: Locales.nav_contact
    }
}
