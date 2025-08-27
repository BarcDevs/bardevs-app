import { apiServer } from '@/lib/axios'
import { AxiosError } from 'axios'

export const trackSession =
    (source: string) => {
        try {
            apiServer.get('/track/', {
                headers: {
                    'x-source': source
                }
            })
        } catch ( err: unknown ) {
            if ( err instanceof AxiosError )
                console.error('Failed to track session',
                    err.response?.data ||
                    err.message)
        }
    }