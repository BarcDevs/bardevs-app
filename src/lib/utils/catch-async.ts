import { NextResponse } from 'next/server'

type AsyncRouteHandler = (req: Request) => Promise<Response>

export const catchAsync = (
    fn: AsyncRouteHandler
): AsyncRouteHandler => {
    return async (req: Request): Promise<Response> => {
        try {
            return await fn(req)
        } catch ( error ) {
            console.error('Error in route:', error)
            return NextResponse.json(
                { error: 'Internal Server Error' },
                { status: 500 }
            )
        }
    }
}
