import ProjectDetails from '@/components/homepage/portfolioSection/project-details'
import ProjectTrigger from '@/components/homepage/portfolioSection/project-trigger'
import { Dialog } from '@/components/ui/dialog'
import { PROJECTS } from '@/constants/portfolio/projects'

const Projects = ({}) =>
    (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {PROJECTS.map(project => (
                <Dialog key={project.title}>
                    <ProjectTrigger project={project}/>

                    <ProjectDetails project={project}/>
                </Dialog>
            ))}
        </div>
    )

export default Projects
