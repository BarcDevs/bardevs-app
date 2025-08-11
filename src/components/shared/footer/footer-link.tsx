import { useTranslations } from 'next-intl'
import Link from 'next/link'
import { FC } from 'react'

type FooterLinkProps = {
    href: string;
    labelLocale: string;
}

const FooterLink: FC<FooterLinkProps> = ({
    href,
    labelLocale
}) => {
    const t = useTranslations()

    return (
        <li>
            <Link
                href={href}
                className="hover:text-[#3e2f34]">
                {t(labelLocale)}
            </Link>
        </li>

    )
}

export default FooterLink
