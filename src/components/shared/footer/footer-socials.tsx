import SocialLink from '@/components/shared/footer/social-link'
import { appConfig } from '@/config/bardevs'

const FooterSocials = ({}) => {

    return (
        <div>
            <div className="font-sans text-sm font-medium text-[#3e2f34]">
                Social
            </div>

            <div className="mt-3 flex items-center gap-3">
                <SocialLink
                    href={appConfig.socials.github}
                    label={'GitHub'}
                />
                <SocialLink
                    href={appConfig.socials.linkedin}
                    label={'LinkedIn'}
                />
                <SocialLink
                    href={appConfig.socials.facebook}
                    label={'Facebook'}
                />
            </div>
        </div>
    )
}

export default FooterSocials
