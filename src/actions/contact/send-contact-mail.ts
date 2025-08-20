import { appConfig } from '@/config/bardevs'
import {
    generateOwnerEmail,
    generateUserConfirmationEmail
} from '@/actions/contact/mail-generator'
import { sendEmail } from '@/lib/mail'
import { ContactFormData } from '@/types/contact-form-data'

export const sendOwnerEmail = async (contactFormData: ContactFormData) => {
    const {
        name,
        email,
        message
    } = contactFormData

    const emailBody = generateOwnerEmail(
        name,
        email,
        message
    )

    try {
        await sendEmail({
            to: appConfig.email,
            subject: `📩 New Inquiry from ${name}`,
            message: emailBody
        })
    } catch ( e: unknown ) {
        console.error(
            'Failed to send contact email: %s',
            ( e as Error ).message
        )
    }
}

export const sendUserConfirmationEmail = async (contactFormData: ContactFormData) => {
    const {
        name,
        email,
        message
    } = contactFormData

    const emailBody = generateUserConfirmationEmail(
        name,
        message
    )

    try {
        await sendEmail({
            to: email,
            subject: 'We’ve received your message – thank you!',
            message: emailBody
        })
    } catch ( e: unknown ) {
        console.error(
            'Failed to send contact confirmation email: %s',
            ( e as Error ).message
        )
    }
}
