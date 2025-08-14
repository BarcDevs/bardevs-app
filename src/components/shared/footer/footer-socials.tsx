import SocialLink from '@/components/shared/footer/social-link'
import { config } from '@/config'

const FooterSocials = ({}) => {

    return (
        <div>
            <div className="text-sm font-medium text-[#3e2f34]">
                Social
            </div>

            <div className="mt-3 flex items-center gap-3">
                <SocialLink
                    href={config.socials.github}
                    label={'GitHub'}
                />
                <SocialLink
                    href={config.socials.linkedin}
                    label={'LinkedIn'}
                />
                <SocialLink
                    href={config.socials.facebook}
                    label={'Facebook'}
                />
            </div>
        </div>
    )
}

export default FooterSocials
