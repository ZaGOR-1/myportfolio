import smartCampusImg from '../assets/images/smart-campus.svg';
import wellbeingImg from '../assets/images/wellbeing-dashboard.svg';
import techEventsImg from '../assets/images/tech-events.svg';

const projects = [
  {
    id: 'smart-campus',
    image: smartCampusImg,
    technologies: ['React', 'TailwindCSS', 'Node.js', 'PostgreSQL'],
    typeKey: 'projects.types.academic',
    titleKey: 'projects.items.smartCampus.title',
    excerptKey: 'projects.items.smartCampus.excerpt',
    descriptionKey: 'projects.items.smartCampus.description',
    links: [
      { href: 'https://www.figma.com/', labelKey: 'projects.actions.prototype' },
      { href: 'https://github.com/', labelKey: 'projects.actions.repository' },
    ],
  },
  {
    id: 'wellbeing-dashboard',
    image: wellbeingImg,
    technologies: ['React', 'Redux Toolkit', 'Firebase', 'Chart.js'],
    typeKey: 'projects.types.research',
    titleKey: 'projects.items.wellbeing.title',
    excerptKey: 'projects.items.wellbeing.excerpt',
    descriptionKey: 'projects.items.wellbeing.description',
    links: [{ href: 'https://github.com/', labelKey: 'projects.actions.repository' }],
  },
  {
    id: 'tech-events',
    image: techEventsImg,
    technologies: ['React', 'Express', 'MongoDB', 'Framer Motion'],
    typeKey: 'projects.types.community',
    titleKey: 'projects.items.techEvents.title',
    excerptKey: 'projects.items.techEvents.excerpt',
    descriptionKey: 'projects.items.techEvents.description',
    links: [
      { href: 'https://tech-events.example.com', labelKey: 'projects.actions.live' },
      { href: 'https://github.com/', labelKey: 'projects.actions.repository' },
    ],
  },
];

export default projects;
