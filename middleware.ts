import { localeMiddleware } from '@/middleware/locale'
import { trackingMiddleware } from '@/middleware/track'
import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

const middleware = async (request: NextRequest) => {
    let response = NextResponse.next()

    response = localeMiddleware(request, response)
    response = await trackingMiddleware(request, response)

    return response
}

export const config = {
    matcher: ['/:path*']
}

export default middleware
