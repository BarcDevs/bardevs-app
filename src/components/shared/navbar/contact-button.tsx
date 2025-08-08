import { Button } from '@/components/ui/button'
import { NAV_LINKS } from '@/constants/nav-links'
import { useLanguage } from '@/context/language'
import Link from 'next/link'

const ContactButton = ({}) => {
    const { t } = useLanguage()

    return (
        <div className="md:hidden">
            <Link
                href={NAV_LINKS.contact.href}
                aria-label={t(NAV_LINKS.contact.locale)}
            >
                <Button
                    size="sm"
                    className="bg-[#77c6b0] text-[#3e2f34] hover:bg-[#5fbba2]"
                >
                    {t(NAV_LINKS.contact.locale)}
                </Button>
            </Link>
        </div>
    )
}


export default ContactButton
