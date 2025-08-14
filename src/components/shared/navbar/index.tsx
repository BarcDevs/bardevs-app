'use client'

import Brand from '@/components/shared/navbar/brand'
import ContactButton from '@/components/shared/navbar/contact-button'
import LanguagePicker from '@/components/shared/navbar/language-picker'
import NavLinks from '@/components/shared/navbar/nav-links'
import { useEffect, useState } from 'react'

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const onScroll = () =>
            setScrolled(window.scrollY > 8)
        onScroll()
        window.addEventListener('scroll', onScroll)

        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    return (
        <header
            className={`sticky top-0 z-50 border-b transition-colors ${
                scrolled ? 'bg-white/80 backdrop-blur' : 'bg-white/60 backdrop-blur'
            }`}
            role="banner"
        >
            <div className="container mx-auto px-4">
                <div className="flex h-14 items-center justify-between">
                    <Brand/>

                    <NavLinks/>

                    <div className="flex items-center gap-3">
                        <LanguagePicker/>
                        <ContactButton/>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Navbar
