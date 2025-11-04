import { motion } from 'framer-motion';

const ProjectCard = ({ project, onSelect }) => (
  <motion.button
    type="button"
    whileHover={{ translateY: -8 }}
    whileTap={{ scale: 0.99 }}
    onClick={() => onSelect(project)}
    className="group flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200/60 bg-white/70 text-left shadow-lg shadow-slate-900/5 backdrop-blur transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent-500 dark:border-slate-700/60 dark:bg-slate-900/70"
  >
    <div className="relative overflow-hidden">
      <img
        src={project.image}
        srcSet={project.imageSrcSet}
        sizes={project.imageSizes}
        alt={project.imageAlt}
        loading="lazy"
        decoding="async"
        className="h-48 w-full object-cover transition duration-500 group-hover:scale-105"
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-accent-500/20 opacity-0 transition group-hover:opacity-100" />
    </div>
    <div className="flex flex-1 flex-col gap-4 px-6 py-6">
      <div className="space-y-2">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent-600">
          {project.type}
        </p>
        <h3 className="text-2xl font-semibold text-slate-900 transition group-hover:text-accent-500 dark:text-white">
          {project.title}
        </h3>
        <p className="text-sm text-slate-600 dark:text-slate-300">{project.excerpt}</p>
      </div>
      <div className="mt-auto flex flex-wrap gap-2">
        {project.technologies.map((technology) => (
          <span
            key={technology}
            className="rounded-full border border-slate-200/70 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-600 transition dark:border-slate-700/60 dark:bg-slate-800/80 dark:text-slate-200"
          >
            {technology}
          </span>
        ))}
      </div>
    </div>
  </motion.button>
);

export default ProjectCard;
