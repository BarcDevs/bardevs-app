'use client'

import { useLocale, useTranslations } from 'next-intl'
import { Quote } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { QUOTES } from '@/constants/testimonials/quotes'
import { Locales } from '@/lib/language/keys'

const Testimonials = () => {
    const t = useTranslations()
    const locale = useLocale()

    return (
        <section
            id="testimonials"
            className="scroll-mt-24 py-16 md:py-24 bg-[#e9f7f3]/50"
        >
            <div className="container mx-auto px-4">
                <div className="mx-auto max-w-3xl text-center space-y-3">
                    <h2 className="text-3xl font-bold tracking-tight text-[#3e2f34] sm:text-4xl">
                        {t(Locales.testimonials_title)}
                    </h2>
                </div>

                <div className="mt-10 grid gap-6 md:grid-cols-3">
                    {QUOTES[ locale ].map(quote => (
                        <Card key={quote} className="h-full border-[#77c6b0]/30">
                            <CardContent className="p-6">
                                <Quote
                                    className="mb-3 h-5 w-5 text-[#77c6b0]"
                                    aria-hidden
                                />
                                <p className="text-sm text-muted-foreground">
                                    {quote}
                                </p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Testimonials
