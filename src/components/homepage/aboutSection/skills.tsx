import { SKILLS } from '@/constants/about/skills'

const Skills = ({}) => (
    <ul className="flex flex-wrap gap-2 text-sm text-[#3e2f34]">
        {SKILLS.map(skill => (
            <li
                key={skill}
                className="rounded-full border px-3 py-1 bg-white"
                aria-label={skill}
            >
                {skill}
            </li>
        ))}
    </ul>
)

export default Skills
