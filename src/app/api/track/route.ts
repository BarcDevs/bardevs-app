import { createSessionEntry } from '@/services/session-service'
import { SessionData } from '@/types/session-data'
import { NextRequest, NextResponse } from 'next/server'
import { nanoid } from 'nanoid'
import { UAParser } from 'ua-parser-js'

export const GET = async (req: NextRequest) => {
    if ( process.env.NODE_ENV !== 'production' )
        return NextResponse.json({ sessionId: 'test' })

    const headers = req.headers
    const cookies = req.cookies
    let sessionId = cookies.get('session_id')?.value

    if ( sessionId )
        return NextResponse.json({ sessionId })

    sessionId = nanoid()

    const parser = new UAParser(req.headers.get('user-agent') || '')
    const deviceInfo = parser.getResult()

    const ip =
        headers.get('x-forwarded-for')?.split(',')[ 0 ] ||
        headers.get('x-real-ip') ||
        'unknown'

    const session: SessionData = {
        ip,
        sessionId,
        browser: deviceInfo.browser.name,
        os: deviceInfo.os.name,
        device: deviceInfo.device.type || 'desktop',
        language: headers.get('accept-language'),
        referrer: headers.get('referer')
    }

    await createSessionEntry(session)

    const res = NextResponse.json({ sessionId })

    res.cookies.set('session_id', sessionId, {
        path: '/',
        httpOnly: true,
        sameSite: 'lax',
        secure: process.env.NODE_ENV === 'production',
        maxAge: 60 * 60 * 24 * 7
    })

    return res
}