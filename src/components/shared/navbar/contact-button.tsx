import { Button } from '@/components/ui/button'
import { NAV_LINKS } from '@/constants/nav-links'
import { useTranslations } from 'next-intl'
import Link from 'next/link'

const ContactButton = ({}) => {
    const t = useTranslations()

    return (
        <div className="md:hidden">
            <Link
                href={NAV_LINKS.contact.href}
                aria-label={t(NAV_LINKS.contact.locale)}
            >
                <Button
                    size="sm"
                    className="cursor-pointer bg-[#77c6b0] text-[#3e2f34] hover:bg-[#5fbba2]"
                >
                    {t(NAV_LINKS.contact.locale)}
                </Button>
            </Link>
        </div>
    )
}


export default ContactButton
