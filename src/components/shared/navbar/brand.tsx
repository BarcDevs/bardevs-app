import { NAV_LINKS } from '@/constants/nav-links'
import Image from 'next/image'
import Link from 'next/link'

const Brand = ({}) =>
    (
        <Link
            href={NAV_LINKS.home.href}
            className="font-mono flex items-center gap-2"
            aria-label={NAV_LINKS.home.locale}
        >
            <div
                className="h-8 w-8 flex items-center justify-center rounded-md bg-[#77c6b0] text-[#3e2f34]">
                <Image
                    src={'/logo/designed-logo-transparent.png'}
                    alt={'Bardevs'}
                    width={24}
                    height={24}
                    className="size-7"
                />
            </div>
            <span className="font-mono font-bold tracking-tight text-[#3e2f34]">
                {NAV_LINKS.home.locale}
            </span>
        </Link>
    )

export default Brand
