import { Metadata } from 'next'
import { NextIntlClientProvider } from 'next-intl'
import { getLocale, getMessages } from 'next-intl/server'
import { Geist, Geist_Mono } from 'next/font/google'
import { FC, ReactNode } from 'react'

import '@/styles/globals.css'

const geistSans = Geist({
    variable: '--font-geist-sans',
    subsets: ['latin']
})

const geistMono = Geist_Mono({
    variable: '--font-geist-mono',
    subsets: ['latin']
})

export const metadata: Metadata = {
    title: {
        default: 'Bardevs — Clean code. Elegant design. Real results.',
        template: '%s — bardevs'
    },
    description: 'Professional websites for modern businesses. Custom-built websites, landing pages, and web apps with clean code and elegant design.',
    icons: {
        icon: '/favicon.ico',
        shortcut: '/favicon-16x16.png',
        apple: '/apple-touch-icon.png'
    },
    manifest: '/site.webmanifest'
}

type RootLayoutProps = {
    children: ReactNode
}

const getDirection = (locale: string) => ( locale === 'he' ? 'rtl' : 'ltr' )

const RootLayout: FC<RootLayoutProps> = async ({ children }) => {
    const locale = await getLocale()
    const messages = await getMessages()

    return (
        <html lang={locale} dir={getDirection(locale)}>
        <NextIntlClientProvider
            locale={locale}
            messages={messages}
        >
            <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
            {children}
            </body>
        </NextIntlClientProvider>
        </html>
    )
}

export default RootLayout
