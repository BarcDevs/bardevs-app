import Image from 'next/image'
import { FC } from 'react'
import { Image as Image_T } from '@/types/image'

type TechImageProps = {
    logo: Image_T
}

const TechImage: FC<TechImageProps> = ({ logo }) => (
    <Image
        src={`/icons/technologies/${logo.path}.svg`}
        width={logo.w}
        height={logo.h}
        alt={logo.query}
        className={'h-full w-full object-contain p-2'}
    />
)

export default TechImage
