import { handleContactForm } from '@/actions/contact/handle-contact-form'
import { catchAsync } from '@/lib/utils/catch-async'
import { NextResponse } from 'next/server'

export const POST = catchAsync(async (req: Request) => {
    try {
        const data = await req.json()
        const result = await handleContactForm(data)

        return NextResponse.json(result)
    } catch ( error ) {
        console.error('Contact form error:', error)

        return NextResponse.json(
            {
                message: 'Internal Server Error',
                error: ( error as Error ).message
            },
            { status: 500 }
        )
    }
})
