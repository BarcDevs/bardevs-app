import { connectToDatabase } from '@/db'
import { Session, SessionType } from '@/models/session'

export const createSessionEntry =
    async (data: SessionType) => {
        await connectToDatabase()

        const exists = await isSessionExists(data.ip!)
        if ( exists )
            return

        return await Session
            .create({ ...data })
    }

export const isSessionExists = async (ip: string) => {
    return Session.findOne({
        ip
    })
}