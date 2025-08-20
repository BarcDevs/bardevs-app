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
        title: 'Promptopia',
        description:
            'A full-stack website for sharing useful AI prompts. you can read other\'s prompts or create some by your own.',
        image: {
            w: 640,
            h: 420,
            query: 'Promptopia dashboard',
            src: 'promptopia-dashboard'
        },
        link: 'https://promptopia-eight-plum.vercel.app/'
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
