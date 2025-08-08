import NavLink from '@/components/shared/navbar/nav-link'
import { Button } from '@/components/ui/button'
import { NAV_LINKS } from '@/constants/nav-links'
import { useLanguage } from '@/context/language'
import Link from 'next/link'

const NavLinks = ({}) => {
    const { t } = useLanguage()

    return (
        <nav
            className="hidden md:flex items-center gap-6"
            aria-label="Primary"
        >
            <NavLink
                href={NAV_LINKS.about.href}
                label={t(NAV_LINKS.about.locale)}
            />
            <NavLink
                href={NAV_LINKS.services.href}
                label={t(NAV_LINKS.services.locale)}
            />
            <NavLink
                href={NAV_LINKS.portfolio.href}
                label={t(NAV_LINKS.portfolio.locale)}
            />
            <NavLink
                href={NAV_LINKS.testimonials.href}
                label={t(NAV_LINKS.testimonials.locale)}
            />
            <Link href={NAV_LINKS.contact.href}>
                <Button
                    className="bg-[#77c6b0] text-[#3e2f34] hover:bg-[#5fbba2]"
                    aria-label={t(NAV_LINKS.contact.locale)}
                >
                    {t(NAV_LINKS.contact.locale)}
                </Button>
            </Link>
        </nav>
    )
}

export default NavLinks
