import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'
import { localeMiddleware } from '@/middleware/locale'

const middleware = (request: NextRequest) => {
    let response = NextResponse.next()

    response = localeMiddleware(request, response)

    return response
}

export const config = {
    matcher: ['/:path*']
}

export default middleware
