import { connectToDatabase } from '@/db'
import {
    ContactSubmission,
    ContactSubmissionType
} from '@/models/contact'

export const createContactEntry =
    async (data: ContactSubmissionType) => {
        await connectToDatabase()

        return await ContactSubmission
            .create({ ...data })
    }
