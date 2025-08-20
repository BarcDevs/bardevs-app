import { Resend } from 'resend'
import { Email } from '@/types/email'

const resend = new Resend(process.env.RESEND_API_KEY)

export const sendEmail = async ({
    to,
    subject,
    message
}: Email) =>
    resend.emails.send({
        from: 'BarDevs@resend.dev',
        to,
        subject: subject,
        html: message
    })
