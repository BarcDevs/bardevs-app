import { Hero } from '@/components/homepage/sections/hero'
import Portfolio from '@/components/homepage/sections/portfolio'
import Services from '@/components/homepage/sections/services'
import Tech from '@/components/homepage/sections/tech'
import { Navbar } from '@/components/shared/navbar'
import About from '@/components/homepage/sections/about'
import Footer from '@/components/shared/footer'

export const HomePage = () =>
    (
        <div
            className="min-h-[100dvh] flex flex-col bg-white"
        >
            <Navbar/>
            <main className="flex-1">
                <Hero/>
                <About/>
                <Tech/>
                <Services/>
                <Portfolio/>
            </main>
            <Footer/>
        </div>
    )
