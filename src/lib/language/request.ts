import { getRequestConfig } from 'next-intl/server'
import { cookies } from 'next/headers'

const SUPPORTED = ['en', 'he'] as const
type Locale = ( typeof SUPPORTED )[number]
const DEFAULT_LOCALE: Locale = 'en'

export default getRequestConfig(async ({ requestLocale }) => {
    const cookieStore = await cookies()
    const cookieLocale = cookieStore.get('NEXT_LOCALE')?.value

    const requested = ( await requestLocale ) ?? undefined

    const candidate =
        cookieLocale ??
        requested ??
        DEFAULT_LOCALE

    const locale = SUPPORTED.includes(candidate as Locale)
        ? ( candidate as Locale )
        : DEFAULT_LOCALE

    const messages =
        locale === 'he' ?
            ( await import('../../../messages/he.json') ).default :
            ( await import('../../../messages/en.json') ).default

    return {
        locale,
        messages
    }
})
