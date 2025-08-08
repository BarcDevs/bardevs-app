import Link from 'next/link'
import { FC } from 'react'

type NavLinkProps = {
    href: string;
    label: string;
}

const NavLink: FC<NavLinkProps> = ({ href, label }) =>
    (
        <Link
            href={href}
            className="text-sm text-muted-foreground hover:text-[#3e2f34] transition"
        >
            {label}
        </Link> )

export default NavLink
