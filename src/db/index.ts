import mongoose from 'mongoose'

const MONGODB_URI = process.env.MONGODB_URI!

if ( !MONGODB_URI ) {
    throw new Error('❌ Missing MONGODB_URI')
}

let globalConnection = global.mongoose as {
    conn: typeof mongoose | null
    promise: Promise<typeof mongoose> | null
}

if ( !globalConnection ) {
    globalConnection = global.mongoose = {
        conn: null,
        promise: null
    }
}

export const connectToDatabase = async () => {
    if ( globalConnection.conn ) return globalConnection.conn

    if ( !globalConnection.promise ) {
        globalConnection.promise = mongoose.connect(MONGODB_URI, {
            bufferCommands: false
        })
    }

    globalConnection.conn = await globalConnection.promise
    return globalConnection.conn
}
