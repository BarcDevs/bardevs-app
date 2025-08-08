import { useLanguage } from '@/context/language'

export const HomePage = () => {
    const { dir } = useLanguage()

    return (
        <div
            dir={dir}
            className="min-h-[100dvh] flex flex-col bg-white"
        >

        </main>
    )
}
