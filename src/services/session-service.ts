import { connectToDatabase } from '@/db'
import { Session, SessionType } from '@/models/session'

export const createSessionEntry =
    async (data: SessionType) => {
        await connectToDatabase()

        return await Session
            .create({ ...data })
    }