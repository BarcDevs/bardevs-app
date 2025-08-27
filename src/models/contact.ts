import {
    Schema,
    model,
    models,
    InferSchemaType
} from 'mongoose'

const contactSubmissionSchema = new Schema(
    {
        name: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: false
        },
        message: {
            type: String,
            required: true
        },
        status: {
            type: String,
            enum: ['new', 'in_progress', 'resolved'],
            default: 'new'
        }
    },
    {
        timestamps: {
            createdAt: 'createdAt',
            updatedAt: false
        },
        collection: 'ContactSubmission'
    }
)

export const ContactSubmission =
    models.ContactSubmission ||
    model('ContactSubmission', contactSubmissionSchema)

export type ContactSubmissionType = InferSchemaType<typeof contactSubmissionSchema>

