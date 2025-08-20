import { ContactFormData } from '@/types/contact-form-data'

export const validateContactForm = (
    data: Partial<ContactFormData>
): string | null => {
    const { name, email, message } = data

    if ( !name || !email || !message )
        return 'Missing fields'

    const emailRegex =
        /^[\w-.]+@([\w-]+\.)+[\w-]{2,}$/

    if ( !emailRegex.test(email) )
        return 'Invalid email format'

    return null
}
