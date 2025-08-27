import { getGeo } from '@/lib/geoLocation/get-geo'
import { NextRequest, NextResponse } from 'next/server'
import { nanoid } from 'nanoid'
import { UAParser } from 'ua-parser-js'

import { createSessionEntry, isSessionExists } from '@/services/session-service'
import { SessionData } from '@/types/session-data'

export const GET = async (req: NextRequest) => {
    if ( process.env.NODE_ENV === 'development' )
        return NextResponse.json({ sessionId: 'dev' })

    const headers = req.headers
    const cookies = req.cookies
    const sessionId =
        cookies.get('session_id')?.value ||
        nanoid()

    const source = headers.get('x-source')

    const parser = new UAParser(req.headers.get('user-agent') || '')
    const deviceInfo = parser.getResult()

    const ip =
        headers.get('x-forwarded-for')?.split(',')[ 0 ] ||
        headers.get('x-real-ip') ||
        'unknown'

    if ( await isSessionExists(ip) )
        return NextResponse.json({ 'message': 'Session already exists' })

    const location = await getGeo(ip)

    const session: SessionData = {
        ip,
        sessionId,
        browser: deviceInfo.browser.name,
        os: deviceInfo.os.name,
        device: deviceInfo.device.type || 'desktop',
        language: headers.get('accept-language'),
        referrer: source || req.url || 'unknown',
        location
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