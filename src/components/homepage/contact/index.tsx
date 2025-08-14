'use client'

import ContactHeader from '@/components/homepage/contact/contact-header'
import ContactForm from '@/components/homepage/contact/form/contact-form'

const Contact = () => {
    return (
        <section
            id="contact"
            className="scroll-mt-24 py-16 md:py-24"
        >
            <div className="container mx-auto px-4">
                <ContactHeader/>
                <ContactForm/>
            </div>
        </section>
    )
}

export default Contact
