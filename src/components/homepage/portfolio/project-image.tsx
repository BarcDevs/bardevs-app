import Image from 'next/image'
import { FC } from 'react'

type ProjectImageProps = {
    variant?: 'preview' | 'detail';
    query: string;
    src?: string;
}

const ProjectImage: FC<ProjectImageProps> = ({
    variant = 'preview',
    query,
    src
}) => {
    const factor = variant === 'detail' ? 1.2 : 1
    const width = Math.round(640 * factor)
    const height = Math.round(420 * factor)
    const projectImage = src ? `/projects/${src}.png` : '/projects/placeholder.svg'

    const variantClasses = {
        preview: 'aspect-[16/11]',
        detail: 'rounded-md border'
    }

    return (
        <Image
            src={`${projectImage}?query=${
                encodeURIComponent(
                    query
                )}`}
            width={width}
            height={height}
            alt={query}
            className={`w-full object-cover ${variantClasses[ variant ] || ''}`}
        />
    )
}

export default ProjectImage
