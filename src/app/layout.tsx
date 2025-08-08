import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { ReactNode } from 'react'
import './globals.css'

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

export default function RootLayout ({
    children
}: Readonly<{
    children: ReactNode;
}>) {
    return (
        <html lang="en">
        <body
            className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
        {children}
        </body>
        </html>
    )
}
