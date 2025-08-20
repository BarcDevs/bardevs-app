import { createContactEntry } from '@/services/contact-service'
import { sendOwnerEmail, sendUserConfirmationEmail } from './send-contact-mail'
import { validateContactForm } from '@/lib/validators/contact-validator'
import { ContactFormData } from '@/types/contact-form-data'

export const handleContactForm = async (data: ContactFormData) => {
    const validationError = validateContactForm(data)

    if ( validationError )
        return {
            error: validationError,
            status: 400
        }

    const { name, email, message } = data

    await createContactEntry(data)

    await sendOwnerEmail({ name, email, message })
    await sendUserConfirmationEmail({ name, email, message })

    return { success: true }
}
