import ProjectImage from '@/components/homepage/portfolio/project-image'
import ProjectImagesCarousel from '@/components/homepage/portfolio/project-images-carousel'
import { FC } from 'react'

import { Project } from '@/types/project'
import {
    DialogContent,
    DialogHeader,
    DialogTitle
} from '@/components/ui/dialog'
import ProjectLink from '@/components/homepage/portfolio/project-link'

type ProjectDetailsProps = {
    project: Project
}

const ProjectDetails: FC<ProjectDetailsProps> = ({ project }) =>
    (
        <DialogContent className="sm:max-w-2xl">
            <DialogHeader>
                <DialogTitle className="text-[#3e2f34]">
                    {project.title}
                </DialogTitle>
            </DialogHeader>

            <div className="grid gap-4">
                {
                    Array.isArray(project.image) ?
                        <div className={'flex justify-center'}>
                            <ProjectImagesCarousel images={project.image}/>
                        </div> :
                        <ProjectImage
                            variant={'detail'}
                            src={project.image.src}
                            query={project.image.query}
                        />}
                <p className="text-sm text-muted-foreground">
                    {project.description}
                </p>

                {project.link && (
                    <ProjectLink link={project.link}/>
                )}
            </div>
        </DialogContent>
    )

export default ProjectDetails
