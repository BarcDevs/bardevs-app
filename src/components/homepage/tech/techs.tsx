import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger
} from '@/components/ui/tooltip'
import { TECHS } from '@/constants/tech/techs'
import TechImage from '@/components/homepage/tech/tech-image'

const Techs = ({}) => (
    <TooltipProvider>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
            {TECHS.map(tech => (
                <Tooltip
                    key={tech.name}
                    delayDuration={200}
                >
                    <TooltipTrigger asChild>
                        <div
                            className="group flex items-center gap-4 rounded-lg border bg-white p-4 transition hover:-translate-y-0.5 hover:shadow-md border-[#77c6b0]/30"
                            role="figure"
                            aria-label={`${tech.name} — ${tech.desc}`}
                        >
                            <div
                                className="relative h-12 w-12 shrink-0 overflow-hidden rounded-md ring-1 ring-[#77c6b0]/30 bg-white">
                                <TechImage
                                    logo={tech.logo}
                                />
                            </div>
                            <div className="flex-1">
                                <p className="font-medium text-[#3e2f34]">{tech.name}</p>
                                <p className="text-xs text-muted-foreground line-clamp-2">{tech.desc}</p>
                            </div>
                            <div
                                className="
                                h-2 w-2 rounded-full bg-[#77c6b0] opacity-0 transition group-hover:opacity-100"
                                aria-hidden="true"
                            />
                        </div>
                    </TooltipTrigger>

                    <TooltipContent
                        side="top"
                        className="max-w-xs"
                    >
                        <p className="text-xs">
                            {tech.desc}
                        </p>
                    </TooltipContent>
                </Tooltip>
            ))}
        </div>
    </TooltipProvider>
)

export default Techs
