import { Tech } from '@/types/tech'

export const TECHS: Tech[] = [
    {
        name: 'React',
        desc: 'Modern UI library for building interactive interfaces.',
        logo: { w: 64, h: 64, query: 'react logo mark' }
    },
    {
        name: 'Next.js',
        desc: 'React framework with routing, data, and server-side features.',
        logo: { w: 64, h: 64, query: 'nextjs logo black' }
    },
    {
        name: 'TypeScript',
        desc: 'Typed JavaScript for safer, scalable code.',
        logo: { w: 64, h: 64, query: 'typescript logo' }
    },
    {
        name: 'Tailwind CSS',
        desc: 'Utility-first CSS for rapid UI development.',
        logo: { w: 64, h: 64, query: 'tailwindcss logo' }
    },
    {
        name: 'Node.js',
        desc: 'Backend runtime for scalable applications.',
        logo: { w: 64, h: 64, query: 'nodejs logo' }
    },
    {
        name: 'MongoDB',
        desc: 'Document database for flexible schemas.',
        logo: { w: 64, h: 64, query: 'mongodb leaf logo' }
    },
    {
        name: 'Postgres',
        desc: 'Reliable relational database (Neon, hosted Postgres).',
        logo: { w: 64, h: 64, query: 'postgresql elephant logo' }
    },
    {
        name: 'Vercel',
        desc: 'Zero-config deployments and edge platform.',
        logo: { w: 64, h: 64, query: 'vercel triangle logo' }
    },
    {
        name: 'Prisma ORM',
        desc: 'Type-safe database client & schema tooling.',
        logo: { w: 64, h: 64, query: 'prisma orm logo' }
    }
]
