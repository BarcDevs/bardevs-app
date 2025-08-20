import { useTranslations } from 'next-intl'
import { FC } from 'react'

import { DialogTrigger } from '@/components/ui/dialog'
import { Locales } from '@/lib/language/keys'
import { Project } from '@/types/project'
import ProjectImage from '@/components/homepage/portfolio/project-image'

type ProjectTriggerProps = {
    project: Project;
}

const ProjectTrigger: FC<ProjectTriggerProps> = ({ project }) => {
    const t = useTranslations()

    return (
        <DialogTrigger asChild>
            <button
                className="cursor-pointer group relative overflow-hidden rounded-lg border bg-white text-left transition hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-[#77c6b0]"
                aria-label={`${project.title} — ${t(Locales.portfolio_more)}`}
            >
                <ProjectImage
                    project={project}
                    variant={'preview'}
                />
                <div
                    className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 transition group-hover:opacity-100"
                />
                <div className="absolute inset-x-0 bottom-0 p-3 font-semibold text-gray-400">
                    <div className="flex items-center justify-between">
                        <span className="font-medium">
                            {project.title}
                        </span>
                        <span className="text-xs opacity-90">
                            {t(Locales.portfolio_more)}
                        </span>
                    </div>
                </div>
            </button>
        </DialogTrigger>
    )
}

export default ProjectTrigger
