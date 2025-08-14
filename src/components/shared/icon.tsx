import Image from 'next/image'
import { FC } from 'react'
import { twMerge } from 'tailwind-merge'

type IconProps = {
    src?: string;
    name: string;
    className?: string;
}

const Icon: FC<IconProps> = ({ src, name, className }) =>
    (
        <Image
            src={src ?? `./icons/${name.toLowerCase()}.svg`}
            alt={name}
            width={24}
            height={24}
            className={twMerge('size-4', className)}
        />
    )

export default Icon
