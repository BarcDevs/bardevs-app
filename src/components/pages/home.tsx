import Contact from '@/components/homepage/contact'
import Hero from '@/components/homepage/hero'
import Portfolio from '@/components/homepage/portfolio'
import Services from '@/components/homepage/services'
import Tech from '@/components/homepage/tech'
import Testimonials from '@/components/homepage/testimonials'
import Navbar from '@/components/shared/navbar'
import About from '@/components/homepage/about'
import Footer from '@/components/shared/footer'

const HomePage = () =>
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
                <Testimonials/>
                <Contact/>
            </main>
            <Footer/>
        </div>
    )

export default HomePage
