import cityPulseImg from '../assets/images/smart-campus.svg';
import cityPulseImg2x from '../assets/images/smart-campus@2x.svg';
import campusPlannerImg from '../assets/images/wellbeing-dashboard.svg';
import campusPlannerImg2x from '../assets/images/wellbeing-dashboard@2x.svg';
import greenRoutesImg from '../assets/images/tech-events.svg';
import greenRoutesImg2x from '../assets/images/tech-events@2x.svg';

const projects = [
  {
    id: 'city-pulse',
    image: cityPulseImg,
    image2x: cityPulseImg2x,
    imageSrcSet: `${cityPulseImg} 640w, ${cityPulseImg2x} 1280w`,
    imageSizes: '(min-width: 1024px) 45vw, (min-width: 768px) 50vw, 100vw',
    imageAltKey: 'projects.items.cityPulse.imageAlt',
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
    image2x: campusPlannerImg2x,
    imageSrcSet: `${campusPlannerImg} 640w, ${campusPlannerImg2x} 1280w`,
    imageSizes: '(min-width: 1024px) 45vw, (min-width: 768px) 50vw, 100vw',
    imageAltKey: 'projects.items.campusPlanner.imageAlt',
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
    image2x: greenRoutesImg2x,
    imageSrcSet: `${greenRoutesImg} 640w, ${greenRoutesImg2x} 1280w`,
    imageSizes: '(min-width: 1024px) 45vw, (min-width: 768px) 50vw, 100vw',
    imageAltKey: 'projects.items.greenRoutes.imageAlt',
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
