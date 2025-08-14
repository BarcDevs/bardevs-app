'use client'

import { Locales } from '@/lib/language/keys'
import { useTranslations } from 'next-intl'
import ServiceList from '../servicesSection/service-list'

const Services = () => {
    const t = useTranslations()

    return (
        <section
            id="services"
            className="scroll-mt-24 py-16 md:py-24 bg-[#e9f7f3]/50"
        >
            <div className="container mx-auto px-4">
                <div className="mx-auto max-w-3xl text-center space-y-3">
                    <h2 className="text-3xl font-bold tracking-tight text-[#3e2f34] sm:text-4xl">
                        {t(Locales.services_title)}
                    </h2>
                    <p className="text-muted-foreground">
                        {/* empty subtitle for clean minimal look */}
                    </p>
                </div>

                <ServiceList/>
            </div>
        </section>
    )
}

export default Services
