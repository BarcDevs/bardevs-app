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
            className="group relative inline-flex items-center text-sm text-muted-foreground transition duration-200 ease-out hover:text-[#3e2f34] hover:-translate-y-0.5 focus-visible:outline-none focus-visible:text-[#3e2f34] motion-reduce:transform-none motion-reduce:transition-none"
        >
            {label}
            <span
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-0 -bottom-1 h-[2px] origin-left scale-x-0 bg-[#77c6b0] transition-transform duration-300 ease-out group-hover:scale-x-100 group-focus-visible:scale-x-100"
            />
        </Link> )

export default NavLink
