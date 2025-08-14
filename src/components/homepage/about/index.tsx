'use client'

import { useTranslations } from 'next-intl'
import { Locales } from '@/lib/language/keys'
import Skills from '@/components/homepage/about/skills'

const About = () => {
    const t = useTranslations()

    return (
        <section
            id="about"
            className="scroll-mt-24 py-16 md:py-24"
        >
            <div className="container mx-auto px-4">
                <div className="mx-auto max-w-4xl space-y-4">
                    <h2 className="text-3xl font-bold tracking-tight text-[#3e2f34] sm:text-4xl">
                        {t(Locales.about_title)}
                    </h2>
                    <p className="text-muted-foreground leading-relaxed">
                        {t(Locales.about_body)}
                    </p>

                    <Skills/>
                </div>
            </div>
        </section>
    )
}

export default About
