import { ExternalLink } from 'lucide-react'
import { useTranslations } from 'next-intl'
import Link from 'next/link'
import { FC } from 'react'

import { Locales } from '@/lib/language/keys'
import { Button } from '@/components/ui/button'

type ProjectLinkProps = {
    link: string;
}

const ProjectLink: FC<ProjectLinkProps> = ({ link }) => {
    const t = useTranslations()

    return (
        <div>
            <Link
                href={link}
                target="_blank"
                rel="noopener noreferrer"
            >
                <Button variant="outline"
                        className="cursor-pointer gap-2 border-[#77c6b0] text-[#3e2f34]">
                    <ExternalLink className="h-4 w-4"/>
                    {t(Locales.portfolio_preview)}
                </Button>
            </Link>
        </div>
    )
}

export default ProjectLink
