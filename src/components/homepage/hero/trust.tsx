import { useTranslations } from 'next-intl'
import Image from 'next/image'

const Trust = ({}) => {
    const t = useTranslations()
    // TODO: add real data
    return (
        <div className="pt-4">
            <p className="text-xs text-muted-foreground">{t('hero_trust')}</p>
            <div className="mt-3 flex flex-wrap items-center gap-6 opacity-80">
                <Image
                    src="/placeholder.svg?height=24&width=80"
                    width={80}
                    height={24}
                    alt="Brand 1 logo"
                />
                <Image
                    src="/placeholder.svg?height=24&width=80"
                    width={80}
                    height={24}
                    alt="Brand 2 logo"
                />
                <Image
                    src="/placeholder.svg?height=24&width=80"
                    width={80}
                    height={24}
                    alt="Brand 3 logo"
                />
                <Image
                    src="/placeholder.svg?height=24&width=80"
                    width={80}
                    height={24}
                    alt="Brand 4 logo"
                />
            </div>
        </div>

    )
}

export default Trust
