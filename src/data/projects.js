import cityPulseImg from '../assets/images/smart-campus.svg';
import campusPlannerImg from '../assets/images/wellbeing-dashboard.svg';
import greenRoutesImg from '../assets/images/tech-events.svg';

const projects = [
  {
    id: 'city-pulse',
    image: cityPulseImg,
    technologies: ['React', 'TypeScript', 'Mapbox GL', 'WebSockets'],
    typeKey: 'projects.types.research',
    titleKey: 'projects.items.cityPulse.title',
    excerptKey: 'projects.items.cityPulse.excerpt',
    descriptionKey: 'projects.items.cityPulse.description',
    links: [
      { href: 'https://citypulse.denyszagorovskyi.dev', labelKey: 'projects.actions.live' },
      { href: 'https://github.com/d-zagorovskyi/city-pulse', labelKey: 'projects.actions.repository' },
    ],
  },
  {
    id: 'campus-planner',
    image: campusPlannerImg,
    technologies: ['Next.js', 'PostgreSQL', 'Prisma', 'Telegram Bot API'],
    typeKey: 'projects.types.academic',
    titleKey: 'projects.items.campusPlanner.title',
    excerptKey: 'projects.items.campusPlanner.excerpt',
    descriptionKey: 'projects.items.campusPlanner.description',
    links: [{ href: 'https://github.com/d-zagorovskyi/campus-planner-360', labelKey: 'projects.actions.repository' }],
  },
  {
    id: 'green-routes',
    image: greenRoutesImg,
    technologies: ['Next.js', 'TailwindCSS', 'Node.js', 'Vercel'],
    typeKey: 'projects.types.community',
    titleKey: 'projects.items.greenRoutes.title',
    excerptKey: 'projects.items.greenRoutes.excerpt',
    descriptionKey: 'projects.items.greenRoutes.description',
    links: [
      { href: 'https://greenroutes-lviv.org', labelKey: 'projects.actions.live' },
      { href: 'https://github.com/d-zagorovskyi/green-routes', labelKey: 'projects.actions.repository' },
    ],
  },
];

export default projects;
