import { Project } from '@/types/project'

// TODO: add real projects

export const PROJECTS: Project[] = [
    {
        title: 'HealEase (on development)',
        description:
            'AI-powered full-stack platform designed to empower and facilitate the rehabilitation of severely injured patients.',
        image: {
            w: 640,
            h: 420,
            query: 'HealEase main page preview',
            src: 'healease-main-screen-image'
        },
        link: '#'
    },
    {
        title: 'E‑commerce UI',
        description:
            'Modern storefront with product filters, fast search, and responsive UI.',
        image: {
            w: 640,
            h: 420,
            query: 'ecommerce product grid modern ui clean'
        },
        link: '#'
    },
    {
        title: 'Admin Dashboard',
        description:
            'Custom analytics dashboard with charts, roles, and real-time updates.',
        image: {
            w: 640,
            h: 420,
            query: 'admin dashboard analytics charts clean ui'
        },
        link: '#'
    },
    {
        title: 'Booking Platform',
        description:
            'Full‑stack booking system with payments and calendar integration.',
        image: {
            w: 640,
            h: 420,
            query: 'booking platform clean ui calendar'
        },
        link: '#'
    }
]
