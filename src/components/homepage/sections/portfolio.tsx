'use client'

import { useTranslations } from 'next-intl'
import { Locales } from '@/lib/language/keys'
import Projects from '@/components/homepage/portfolioSection/projects'

const Portfolio = () => {
    const t = useTranslations()

    return (
        <section
            id="portfolio"
            className="scroll-mt-24 py-16 md:py-24"
        >
            <div className="container mx-auto px-4">
                <div className="mx-auto mb-8 max-w-3xl text-center space-y-3">
                    <h2 className="text-3xl font-bold tracking-tight text-[#3e2f34] sm:text-4xl">
                        {t(Locales.portfolio_title)}
                    </h2>
                </div>

                <Projects/>
            </div>
        </section>
    )
}

export default Portfolio
