import { Hero } from '@/components/homepage/sections/hero'
import Footer from '@/components/shared/footer'
import { Navbar } from '@/components/shared/navbar'

export const HomePage = () =>
    (
        <div
            className="min-h-[100dvh] flex flex-col bg-white"
        >
            <Navbar/>
            <main className="flex-1">
                <Hero/>
            </main>
            <Footer/>
        </div>
    )
