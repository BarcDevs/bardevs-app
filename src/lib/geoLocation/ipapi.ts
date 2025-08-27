import axios from 'axios'

const IPAPI_TOKEN = process.env.IPAPI_TOKEN || ''

export const getGeoFromIpApi = async (ip: string) => {
    try {
        const { city, region, country_name } =
            ( await axios.get(`https://ipapi.co/${ip}/json/?access_key=${IPAPI_TOKEN}`) ).data
        return formatLocation(city, region, country_name)
    } catch ( err ) {
        throw new Error('ipapi failed')
    }
}

/**
 data structure:
 "ip": "12.345.678.90",
 "network": "12.345.678.90/24",
 "version": "IPv4",
 "city": "Tel Aviv",
 "region": "Tel Aviv",
 "region_code": "TA",
 "country": "IL",
 "country_name": "Israel",
 "country_code": "IL",
 "country_code_iso3": "ISR",
 "country_capital": "Jerusalem",
 "country_tld": ".il",
 "continent_code": "AS",
 "in_eu": false,
 "postal": "",
 "latitude": 0,
 "longitude": 0,
 "timezone": "Asia/Jerusalem",
 "utc_offset": "+0300",
 "country_calling_code": "+972",
 "currency": "ILS",
 "currency_name": "Shekel",
 "languages": "he,ar-IL,en-IL,",
 "country_area": 20770.0,
 "country_population": 8883800,
 "asn": "AS136787",
 "org": "PacketHub S.A."
 **/
