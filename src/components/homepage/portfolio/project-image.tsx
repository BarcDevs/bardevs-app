import Image from 'next/image'
import { FC } from 'react'
import { Project } from '@/types/project'

type ProjectImageProps = {
    project: Project;
    variant?: 'preview' | 'detail';
    scale?: number;
}

const ProjectImage: FC<ProjectImageProps> = ({
    project,
    variant = 'preview',
    scale
}) => {
    const { w, h, src } = project.image

    const factor = scale ?? ( variant === 'detail' ? 1.2 : 1 )
    const width = w && Math.round(w * factor)
    const height = h && Math.round(h * factor)
    const projectImage = src ? `/projects/${src}.png` : '/projects/placeholder.svg'

    const variantClasses = {
        preview: 'aspect-[16/11]',
        detail: 'rounded-md border'
    }

    return (
        <Image
            src={`${projectImage}?query=${
                encodeURIComponent(
                    project.image.query
                )}`}
            width={width}
            height={height}
            alt={`${project.title} ${variant}`}
            className={`w-full object-cover ${variantClasses[ variant ] || ''}`}
        />
    )
}

export default ProjectImage
