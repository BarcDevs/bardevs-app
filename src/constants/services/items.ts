import { Locales } from '@/lib/language/keys'
import {
    Boxes,
    Globe,
    Rocket,
    Wrench
} from 'lucide-react'

export const ITEMS = [
    {
        icon: Rocket,
        title: Locales.service_landing_title,
        desc: Locales.service_landing_desc
    },
    {
        icon: Globe,
        title: Locales.service_business_title,
        desc: Locales.service_business_desc
    },
    {
        icon: Boxes,
        title: Locales.service_custom_title,
        desc: Locales.service_custom_desc
    },
    {
        icon: Wrench,
        title: Locales.service_maintenance_title,
        desc: Locales.service_maintenance_desc
    }
]
