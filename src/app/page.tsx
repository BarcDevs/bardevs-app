'use client'

import { useSearchParams } from 'next/navigation'
import { useEffect } from 'react'
import { trackSession } from '@/actions/track-session'
import HomePage from '@/components/pages/home'

const Page = ({}) => {
    const searchParams = useSearchParams()
    useEffect(() => {
        trackSession(searchParams.get('source') || 'unknown')
    }, [])

    return (
        <HomePage/>
    )
}

export default Page
