import {
    Schema,
    model,
    models,
    InferSchemaType
} from 'mongoose'

const sessionSchema = new Schema(
    {
        sessionId: {
            type: String,
            required: true,
            unique: true
        },
        browser: { type: String },
        os: { type: String },
        device: {
            type: String,
            default: 'desktop'
        },
        language: { type: String },
        referrer: { type: String },
        ip: { type: String },
        location: { type: String }
    },
    {
        timestamps: {
            createdAt: 'createdAt',
            updatedAt: false
        },
        collection: 'Session',
        versionKey: false
    }
)

export const Session =
    models.Session ||
    model('Session', sessionSchema)

export type SessionType = InferSchemaType<typeof sessionSchema>