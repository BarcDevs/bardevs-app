import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { nanoid } from 'nanoid'
import { UAParser } from 'ua-parser-js'

export const trackingMiddleware = (
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

    // Collect other metadata
    const language = req.headers.get('accept-language') || ''
    const referrer = req.headers.get('referer') || ''
    const ip =
        req.headers.get('x-forwarded-for')?.split(',')[ 0 ] ||
        req.headers.get('x-real-ip') ||
        'unknown'

    // Attach to request headers
    res.headers.set('x-session-id', sessionId)
    res.headers.set('x-browser', deviceInfo.browser.name || '')
    res.headers.set('x-os', deviceInfo.os.name || '')
    res.headers.set('x-device', deviceInfo.device.type || 'desktop')
    res.headers.set('x-language', language)
    res.headers.set('x-referrer', referrer)
    res.headers.set('x-ip', ip)

    return res
}
