import { createSessionEntry } from '@/services/session-service'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { nanoid } from 'nanoid'
import { UAParser } from 'ua-parser-js'

export const trackingMiddleware = async (
    req: NextRequest,
    res: NextResponse
) => {
    // Ensure visitor has a session cookie
    let sessionId =
        req.cookies.get('session_id')?.value

    if ( !sessionId ) {
        sessionId = nanoid()
        res.cookies.set('session_id', sessionId, {
            path: '/',
            httpOnly: true,
            sameSite: 'lax',
            secure: process.env.NODE_ENV === 'production',
            maxAge: 60 * 60 * 24 * 7
        })
    }

    // Parse user agent
    const userAgent = req.headers.get('user-agent') || ''
    const parser = new UAParser(userAgent)
    const deviceInfo = parser.getResult()

    const ip =
        req.headers.get('x-forwarded-for')?.split(',')[ 0 ] ||
        req.headers.get('x-real-ip') ||
        'unknown'

    const session = {
        ip,
        sessionId,
        browser: deviceInfo.browser.name,
        os: deviceInfo.os.name,
        device: deviceInfo.device.type || 'desktop',
        language: req.headers.get('accept-language'),
        referrer: req.headers.get('referer')
    }

    Object
        .entries(session)
        .forEach(([key, value]) => {
            if ( !value ) return
            res.headers.set(`x-${
                key === 'sessionId' ?
                    'session-id' : key
            }`, `${value}`)
        })

    await createSessionEntry(session)

    return res
}
