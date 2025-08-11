import { useTranslations } from 'next-intl'

import { Locales } from '@/lib/language/keys'
import { Gauge, Timer, Trophy } from 'lucide-react'

const FloatingMetrics = ({}) => {
    const t = useTranslations()

    return (
        <>
            <div className="pointer-events-none absolute -left-4 -top-4 hidden md:block">
                <div
                    className="flex items-center gap-2 rounded-lg border bg-white/90 px-3 py-2 shadow-sm backdrop-blur">
                    <Gauge
                        className="h-4 w-4 text-[#77c6b0]"
                        aria-hidden="true"
                    />
                    <span className="text-xs font-medium text-[#3e2f34]">
                        {t(Locales.metric_vitals)}
                    </span>
                </div>
            </div>

            <div className="pointer-events-none absolute -right-4 -bottom-6 hidden md:block">
                <div
                    className="flex items-center gap-2 rounded-lg border bg-white/90 px-3 py-2 shadow-sm backdrop-blur">
                    <Timer
                        className="h-4 w-4 text-[#77c6b0]"
                        aria-hidden="true"
                    />
                    <span className="text-xs font-medium text-[#3e2f34]">
                        {t(Locales.metric_timeline)}
                    </span>
                </div>
            </div>

            <div className="pointer-events-none absolute -left-6 bottom-16 hidden md:block">
                <div
                    className="flex items-center gap-2 rounded-lg border bg-white/90 px-3 py-2 shadow-sm backdrop-blur">
                    <Trophy
                        className="h-4 w-4 text-[#77c6b0]"
                        aria-hidden="true"
                    />
                    <span className="text-xs font-medium text-[#3e2f34]">
                        {t(Locales.metric_lighthouse)}
                    </span>
                </div>
            </div>
        </>
    )
}

export default FloatingMetrics
