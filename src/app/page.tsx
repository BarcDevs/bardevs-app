'use client'

import { useSearchParams } from 'next/navigation'
import { trackSession } from '@/actions/track-session'
import HomePage from '@/components/pages/home'


const Page = ({}) => {
    const searchParams = useSearchParams()
    trackSession(searchParams.get('source') || 'unknown')

    return (
        <HomePage/>
    )
}

export default Page
