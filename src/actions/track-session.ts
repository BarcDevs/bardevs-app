import { AxiosError } from 'axios'
import { nanoid } from 'nanoid'
import { apiServer } from '@/lib/axios'

export const trackSession =
    (source: string) => {
        let session = localStorage.getItem('sid')
        if ( session )
            return

        session = nanoid()
        localStorage.setItem('session', session)

        try {
            apiServer.get('/track/', {
                headers: {
                    'x-source': source,
                    'session_id': session
                }
            })
        } catch ( err: unknown ) {
            if ( err instanceof AxiosError )
                console.error('Failed to track session',
                    err.response?.data ||
                    err.message)
        }
    }