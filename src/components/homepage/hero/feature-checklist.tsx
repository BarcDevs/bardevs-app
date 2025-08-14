import { CheckCircle2 } from 'lucide-react'
import { useTranslations } from 'next-intl'

import { FEATURES } from '@/constants/hero/features'

const FeatureChecklist = ({}) => {
    const t = useTranslations()

    return (
        <ul className="mt-2 grid gap-2 sm:grid-cols-2">
            {FEATURES.map((feature, i) => (
                <li
                    key={i}
                    className="flex items-center gap-2 text-sm text-[#3e2f34]"
                >
                    <CheckCircle2
                        className="h-4 w-4 text-[#77c6b0]"
                        aria-hidden="true"
                    />
                    <span>
                        {t(feature)}
                    </span>
                </li>
            ))}
        </ul>
    )
}

export default FeatureChecklist
