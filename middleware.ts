import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

export function middleware (request: NextRequest) {
    const response = NextResponse.next()
    const cookie = request.cookies.get('NEXT_LOCALE')?.value

    if ( !cookie ) {
        response.cookies.set('NEXT_LOCALE', 'en')
    }

    return response
}

export const config = {
    matcher: ['/:path*']
}
