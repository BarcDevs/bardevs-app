import { connectToDatabase } from '@/db'
import { Session, SessionType } from '@/models/session'

export const createSessionEntry =
    async (data: SessionType) => {
        await connectToDatabase()

        const exists = await Session.findOne({ sessionId: data.sessionId })
        if ( exists )
            return

        return await Session
            .create({ ...data })
    }