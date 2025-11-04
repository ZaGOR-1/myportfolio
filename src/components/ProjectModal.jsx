import { useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const overlayVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 },
};

const dialogVariants = {
  hidden: { opacity: 0, scale: 0.95, y: 12 },
  visible: { opacity: 1, scale: 1, y: 0 },
  exit: { opacity: 0, scale: 0.95, y: 12 },
};

const ProjectModal = ({ project, onClose }) => {
  const { t } = useTranslation();

  useEffect(() => {
    if (!project) {
      return undefined;
    }

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-start justify-center overflow-hidden bg-slate-900/70 px-4 py-20 backdrop-blur"
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={overlayVariants}
          onClick={onClose}
        >
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={project.title}
            className="relative w-full max-w-3xl overflow-hidden rounded-3xl border border-slate-200/70 bg-white/95 shadow-2xl backdrop-blur dark:border-slate-700/60 dark:bg-slate-900/90"
            variants={dialogVariants}
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={onClose}
              className="absolute right-5 top-5 rounded-full border border-transparent bg-white/80 p-2 text-slate-500 transition hover:border-slate-200 hover:text-slate-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-500 dark:bg-slate-800/80 dark:text-slate-300 dark:hover:text-white"
              aria-label={t('projects.closeDetails')}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </button>
            <div className="grid gap-8 md:grid-cols-[1.2fr,1fr]">
              <div className="relative h-full">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-slate-900/10 via-transparent to-accent-500/10" aria-hidden="true" />
              </div>
              <div className="flex flex-col gap-6 px-6 pb-8 pt-8 md:px-8">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent-600">
                    {project.type}
                  </p>
                  <h3 className="mt-2 text-3xl font-semibold text-slate-900 dark:text-white">{project.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                    {project.description}
                  </p>
                </div>
                <div>
                  <h4 className="text-sm font-semibold uppercase tracking-widest text-slate-400 dark:text-slate-500">
                    {t('projects.techStack')}
                  </h4>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-slate-200/70 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-600 dark:border-slate-700/60 dark:bg-slate-800/70 dark:text-slate-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex flex-wrap gap-3">
                  {project.links?.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-slate-200/60 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-accent-500 hover:text-accent-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-500 dark:border-slate-700/60 dark:bg-slate-900/80 dark:text-slate-200 dark:hover:border-accent-500 dark:hover:text-accent-400"
                    >
                      {link.label}
                      <span aria-hidden="true">↗</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProjectModal;
