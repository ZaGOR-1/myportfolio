import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import projectsSource from '../data/projects.js';
import SectionTitle from '../components/SectionTitle.jsx';
import ProjectCard from '../components/ProjectCard.jsx';
import ProjectModal from '../components/ProjectModal.jsx';
import useDocumentTitle from '../hooks/useDocumentTitle.js';

const Projects = () => {
  const { t } = useTranslation();
  useDocumentTitle(t('seo.projectsTitle'), t('seo.projectsDescription'));
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = useMemo(
    () =>
      projectsSource.map((project) => ({
        ...project,
        type: t(project.typeKey),
        title: t(project.titleKey),
        excerpt: t(project.excerptKey),
        description: t(project.descriptionKey),
        imageAlt: t(project.imageAltKey),
        links: project.links?.map((link) => ({ ...link, label: t(link.labelKey) })),
      })),
    [t]
  );

  return (
    <motion.section
      className="w-full"
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -16 }}
      transition={{ duration: 0.35, ease: 'easeOut' }}
    >
      <div className="flex w-full flex-col gap-12">
        <SectionTitle
          eyebrow={t('projects.eyebrow')}
          title={t('projects.title')}
          description={t('projects.description')}
        />
        <motion.div
          className="grid gap-8 md:grid-cols-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} onSelect={setSelectedProject} />
          ))}
        </motion.div>
      </div>
      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </motion.section>
  );
};

export default Projects;
