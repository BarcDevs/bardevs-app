import { FC } from 'react'

import { Project } from '@/types/project'
import {
    DialogContent,
    DialogHeader,
    DialogTitle
} from '@/components/ui/dialog'
import ProjectImage from '@/components/homepage/portfolioSection/project-image'
import ProjectLink from '@/components/homepage/portfolioSection/project-link'

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
                <ProjectImage
                    project={project}
                    variant={'detail'}
                />
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
