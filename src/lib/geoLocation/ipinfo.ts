import axios from 'axios'

const IPINFO_TOKEN = process.env.IPINFO_TOKEN || ''

export const getGeoFromIpInfo = async (ip: string) => {
    try {
        const { city, region, country } =
            ( await axios.get(`https://ipinfo.io/${ip}/json?token=${IPINFO_TOKEN}`) ).data
        return formatLocation(city, region, country)
    } catch ( err ) {
        throw new Error('IPinfo failed')
    }
}

/**
 data structure:
 "ip": "12.345.678.90",
 "city": "Tel Aviv",
 "region": "Tel Aviv",
 "country": "IL",
 "loc": "00.0000,00.0000",
 "org": "AS136787 PacketHub S.A.",
 "timezone": "Asia/Jerusalem"
 **/