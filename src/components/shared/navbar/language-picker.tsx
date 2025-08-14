'use client'

import { useRouter } from 'next/navigation'
import { useLocale } from 'next-intl'

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue
} from '@/components/ui/select'

const LanguagePicker = () => {
    const currentLocale = useLocale()
    const router = useRouter()

    const onLanguagePick = (newLocale: 'en' | 'he') => {
        if ( newLocale === currentLocale ) return

        document.cookie = `NEXT_LOCALE=${newLocale}; path=/; max-age=31536000`

        router.refresh()
    }

    return (
        <Select
            value={currentLocale}
            onValueChange={(value: 'en' | 'he') => onLanguagePick(value)}
        >
            <SelectTrigger
                className="cursor-pointer cw-[110px]"
                aria-label="Language"
            >
                <SelectValue placeholder="Language"/>
            </SelectTrigger>

            <SelectContent
                align={currentLocale === 'he' ? 'start' : 'end'}
            >
                <SelectItem className="cursor-pointer" value="en">English</SelectItem>
                <SelectItem className="cursor-pointer" value="he">עברית</SelectItem>
            </SelectContent>
        </Select>
    )
}

export default LanguagePicker
