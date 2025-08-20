import { Project } from '@/types/project'

// TODO: add real projects

export const PROJECTS: Project[] = [
    {
        title: 'HealEase (on development)',
        description:
            'AI-powered full-stack platform designed to empower and facilitate the rehabilitation of severely injured patients.',
        image: {
            query: 'HealEase main page preview',
            src: 'healease-main-screen-image'
        },
        link: '#'
    },
    {
        title: 'Promptopia',
        description:
            'A full-stack website for sharing useful AI prompts. you can read other\'s prompts or create some by your own.',
        image: [
            {
                query: 'Promptopia dashboard',
                src: 'promptopia/dashboard'
            },
            {
                query: 'Create prompt',
                src: 'promptopia/create'
            },
            {
                query: 'User profile',
                src: 'promptopia/profile'
            }
        ],
        link: 'https://promptopia-eight-plum.vercel.app/'
    },
    {
        title: 'Corporate app',
        description: 'custom example landing page.',
        image: [
            {
                query: 'Website hero section',
                src: 'corporate-app/hero'
            },
            {
                query: 'Website quote form',
                src: 'corporate-app/quote-form'
            },
            {
                query: 'Website service and testimonials sections',
                src: 'corporate-app/services-and-testimonials'
            }
        ],
        link: 'https://corporate-website-five-kappa.vercel.app/'
    },
    {
        title: 'Nike landing page',
        description:
            'Landing page example based on nike brand.',
        image: {
            query: 'Nike landing page hero section',
            src: 'nike-landing-page-hero'
        },
        link: 'https://nike-landing-page-lyart.vercel.app/'
    }
]
