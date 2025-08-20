import { Image } from '@/types/image'

export type Project = {
    title: string
    description: string
    image: Image | Image[]
    link?: string
}
