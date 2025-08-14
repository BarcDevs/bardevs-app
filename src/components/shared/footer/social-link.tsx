import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

type SocialLinkProps = {
    href: string;
    label: string;
    src?: string;
}

const SocialLink: FC<SocialLinkProps> = ({
    href,
    label,
    src
}) => (
    <Link
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={label}
    >
        <div
            className="inline-flex h-9 w-9 items-center justify-center rounded-md border text-[#3e2f34] hover:bg-[#77c6b0]/20">
            <Image
                src={src ?? `./icons/${label.toLowerCase()}.svg`}
                alt={label}
                width={24}
                height={24}
                className="size-4"
            />
        </div>
    </Link>
)

export default SocialLink
