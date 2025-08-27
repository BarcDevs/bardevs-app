import { getGeoFromIpApi } from './ipapi'
import { getGeoFromIpInfo } from './ipinfo'

export const getGeo: (ip: string) => Promise<string> = async (ip: string) => {
    if ( !ip || ip === 'unknown' )
        return 'unknown'

    try {
        return await getGeoFromIpApi(ip)
    } catch ( ipapiError ) {
        console.warn('ipapi failed, falling back to IPinfo', ipapiError)
        try {
            return await getGeoFromIpInfo(ip)
        } catch ( ipinfoError ) {
            console.error('Both geo APIs failed', ipinfoError)
            return 'unknown'
        }
    }
}
