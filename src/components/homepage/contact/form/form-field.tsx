'use client'

import { UseFormRegister, FieldErrors } from 'react-hook-form'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { ContactFormData } from '@/validation/contactForm'

type FormFieldProps = {
    label: string
    name: keyof ContactFormData
    type?: 'text' | 'email' | 'textarea'
    placeholder: string
    register: UseFormRegister<ContactFormData>
    errors: FieldErrors<ContactFormData>
    inputMode?: 'email'
    rows?: number
}

const FormField = ({
    label,
    name,
    type = 'text',
    placeholder,
    register,
    errors,
    inputMode,
    rows
}: FormFieldProps) => {
    const fieldProps = {
        id: name,
        placeholder,
        ...register(name, { required: true }),
        ...( inputMode && { inputMode } )
    }

    return (
        <div className="grid gap-2">
            <label
                htmlFor={name}
                className="text-sm font-medium text-[#3e2f34]"
            >
                {label}
            </label>
            {type === 'textarea' ? (
                <Textarea
                    {...fieldProps}
                    rows={rows}
                />
            ) : (
                <Input
                    {...fieldProps}
                    type={type}
                />
            )}
            {errors[ name ] && (
                <span className="text-sm text-red-600">
          {errors[ name ]?.message || 'This field is required'}
        </span>
            )}
        </div>
    )
}

export default FormField
