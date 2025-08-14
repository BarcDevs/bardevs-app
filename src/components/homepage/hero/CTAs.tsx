import { Button } from '@/components/ui/button'
import { Locales } from '@/lib/language/keys'
import { ArrowRight } from 'lucide-react'
import { useTranslations } from 'next-intl'
import Link from 'next/link'

const CTAs = ({}) => {
    const t = useTranslations()

    return (
        <div className="flex flex-wrap items-center gap-3 pt-2">
            <Link href="#contact">
                <Button
                    className="cursor-pointer h-11 px-6 bg-[#77c6b0] text-[#3e2f34] hover:bg-[#5fbba2]"
                    aria-label={t(Locales.hero_cta)}
                >
                    {t(Locales.hero_cta)}
                    <ArrowRight className="ms-2 h-4 w-4"/>
                </Button>
            </Link>

            <Link
                href="#portfolio"
                className="text-sm font-medium text-[#3e2f34] underline-offset-4 hover:underline"
                aria-label={t(Locales.hero_secondary_cta)}
            >
                {t(Locales.hero_secondary_cta)}
            </Link>
        </div>
    )
}

export default CTAs
