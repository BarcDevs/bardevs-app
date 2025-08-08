import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { useLanguage } from '@/context/language'

const LanguagePicker = ({}) => {
    const {
        lang,
        setLang,
        dir
    } = useLanguage()

    return (
        <Select
            value={lang}
            onValueChange={(v: 'en' | 'he') => setLang(v)}
        >
            <SelectTrigger
                className="w-[110px]"
                aria-label="Language"
            >
                <SelectValue placeholder="Language"/>
            </SelectTrigger>

            <SelectContent align={dir === 'rtl' ? 'start' : 'end'}>
                <SelectItem value="en">English</SelectItem>
                <SelectItem value="he">עברית</SelectItem>
            </SelectContent>
        </Select>
    )
}

export default LanguagePicker
