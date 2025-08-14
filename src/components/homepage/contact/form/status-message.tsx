'use client'

import { Locales } from '@/lib/language/keys'
import { Status } from '@/types/status'
import { useTranslations } from 'next-intl'

type StatusMessageProps = {
    status: Status
}

const StatusMessage = ({ status }: StatusMessageProps) => {
    const t = useTranslations()

    if ( status === 'success' ) {
        return (
            <p
                role="status"
                className="text-sm text-green-600"
            >
                {t(Locales.contact_success_message)}
            </p>
        )
    }

    if ( status === 'error' ) {
        return (
            <p
                role="status"
                className="text-sm text-red-600"
            >
                {t(Locales.contact_error_message)}
            </p>
        )
    }

    return null
}

export default StatusMessage
