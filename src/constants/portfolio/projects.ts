import { Project } from '@/types/project'

// TODO: add real projects

export const PROJECTS: Project[] = [
    {
        title: 'SaaS Marketing Site',
        description:
            'High-performance marketing website with A/B-tested landing pages and CMS.',
        image: {
            w: 640,
            h: 420,
            query: 'saas marketing website landing page ui teal neutral'
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
