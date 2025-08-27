export type SessionData = {
    sessionId: string
    ip: string
    browser?: string
    os?: string
    device: string
    userAgent?: string
    referrer?: string | null
    language?: string | null
    location?: string | null
}