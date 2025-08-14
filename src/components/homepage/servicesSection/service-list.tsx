import { useTranslations } from 'next-intl'
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle
} from '@/components/ui/card'
import { ITEMS } from '@/constants/services/items'


const ServiceList = ({}) => {
    const t = useTranslations()

    return (
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {ITEMS.map(item => (
                <Card
                    key={item.title}
                    className="group transition hover:shadow-md border-[#77c6b0]/30"
                >
                    <CardHeader>
                        <div
                            className="mb-2 inline-flex h-10 w-10 items-center justify-center rounded-md bg-[#77c6b0]/20 text-[#3e2f34]">
                            <item.icon className="h-5 w-5"/>
                        </div>

                        <CardTitle className="text-[#3e2f34]">
                            {t(item.title)}
                        </CardTitle>

                        <CardDescription>
                            {t(item.desc)}
                        </CardDescription>
                    </CardHeader>

                    <CardContent>
                        <div
                            className="h-1 w-0 group-hover:w-full transition-all bg-[#77c6b0]/60 rounded"
                            aria-hidden
                        />
                    </CardContent>
                </Card>
            ))}
        </div>
    )
}

export default ServiceList
