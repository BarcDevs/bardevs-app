'use client'

import { Button } from '@/components/ui/button'
import Icon from '@/components/shared/icon'
import { Locales } from '@/lib/language/keys'
import { zodResolver } from '@hookform/resolvers/zod'
import { useTranslations } from 'next-intl'
import { useForm } from 'react-hook-form'
import { useState } from 'react'
import { Status } from '@/types/status'
import { ContactFormData, contactFormSchema } from '@/validation/contactForm'
import FormField from './form-field'
import ContactLinks from '../contact-links'
import StatusMessage from './status-message'

const ContactForm = () => {
    const t = useTranslations()
    const [status, setStatus] = useState<Status>('idle')

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitting }
    } = useForm<ContactFormData>({
        resolver: zodResolver(contactFormSchema),
        mode: 'onBlur'
    })

    const onSubmit = async (data: ContactFormData) => {
        setStatus('loading')

        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data)
            })

            if ( !res.ok ) throw new Error('Failed')

            setStatus('success')
            reset()
        } catch {
            setStatus('error')
        }
    }

    return (
        <div className="mx-auto mt-8 grid max-w-2xl gap-6">
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="grid gap-4"
            >
                <FormField
                    label={t(Locales.contact_name)}
                    name="name"
                    placeholder={t(Locales.contact_placeholder_name)}
                    register={register}
                    errors={errors}
                />

                <FormField
                    label={t(Locales.contact_email)}
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    inputMode="email"
                    register={register}
                    errors={errors}
                />

                <FormField
                    label={t(Locales.contact_message)}
                    name="message"
                    type="textarea"
                    placeholder={t(Locales.contact_placeholder_message)}
                    rows={5}
                    register={register}
                    errors={errors}
                />

                <div className="flex flex-wrap items-center gap-3">
                    <Button
                        type="submit"
                        disabled={status === 'loading' || isSubmitting}
                        className="cursor-pointer bg-[#77c6b0] text-[#3e2f34] hover:bg-[#5fbba2] disabled:opacity-50"
                    >
                        <Icon
                            name="mail"
                            className="me-2"
                        />
                        {status === 'loading' || isSubmitting ? 'Sending...' : t('contact_send')}
                    </Button>

                    <ContactLinks/>
                </div>

                <StatusMessage status={status}/>
            </form>
        </div>
    )
}

export default ContactForm
