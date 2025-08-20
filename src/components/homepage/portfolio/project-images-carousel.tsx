'use client'

import ProjectImage from '@/components/homepage/portfolio/project-image'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious
} from '@/components/ui/carousel'
import { Project } from '@/types/project'
import { FC } from 'react'

type ProjectImagesCarouselProps = {
    project: Project;
}

const ProjectImagesCarousel: FC<ProjectImagesCarouselProps> = ({ project }) =>
    (
        <Carousel className="w-full max-w-xl">
            <CarouselContent>
                {Array.from({ length: 5 }).map((_, index) => (
                    <CarouselItem key={index}>
                        <ProjectImage
                            project={project}
                            variant={'detail'}
                        />
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious className={'cursor-pointer -left-10'}/>
            <CarouselNext className={'cursor-pointer -right-10'}/>
        </Carousel>
    )

export default ProjectImagesCarousel