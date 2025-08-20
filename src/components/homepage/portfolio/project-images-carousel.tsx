'use client'

import { FC } from 'react'
import ProjectImage from '@/components/homepage/portfolio/project-image'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious
} from '@/components/ui/carousel'
import { Image } from '@/types/image'

type ProjectImagesCarouselProps = {
    images: Image[]
}

const ProjectImagesCarousel: FC<ProjectImagesCarouselProps> = ({ images }) =>
    (
        <Carousel className="w-full max-w-xl">
            <CarouselContent>
                {images.map((image) => (
                    <CarouselItem key={image.query}>
                        <ProjectImage
                            variant={'detail'}
                            src={image.src}
                            query={image.query}
                        />
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious className={'cursor-pointer -left-10'}/>
            <CarouselNext className={'cursor-pointer -right-10'}/>
        </Carousel>
    )

export default ProjectImagesCarousel