'use client'

import { useTranslations } from 'next-intl'
import { FileCode } from 'lucide-react'

import { Locales } from '@/lib/language/keys'
import CodePreview from '@/components/homepage/hero/codePreview'
import CTAs from '@/components/homepage/hero/CTAs'
import FeatureChecklist from '@/components/homepage/hero/feature-checklist'
import HeroBackground from '@/components/homepage/hero/hero-background'

const Hero = () => {
    const t = useTranslations()

    return (
        <section id="home" className="relative overflow-hidden">
            <HeroBackground/>

            <div className="container mx-auto px-4 py-16 md:py-24">
                <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_.9fr]">
                    <div className="relative z-10 space-y-6">
                        <div
                            className="inline-flex items-center gap-2 rounded-full border bg-white px-3 py-1 text-xs text-muted-foreground shadow-sm">
                            <FileCode className="h-3.5 w-3.5 text-[#3e2f34]"/>
                            <span>
                                React • Next.js • Tailwind • Node.js
                            </span>
                        </div>

                        <h1 className="text-4xl font-bold tracking-tight text-[#3e2f34] sm:text-5xl lg:text-6xl">
                            {t(Locales.hero_title)}
                        </h1>
                        <p className="max-w-2xl text-base sm:text-lg text-muted-foreground">
                            {t(Locales.hero_subtitle)}
                        </p>

                        <FeatureChecklist/>

                        <CTAs/>

                        {/*TODO <Trust/>*/}
                    </div>

                    <CodePreview/>
                </div>
            </div>
        </section>
    )
}

export default Hero
