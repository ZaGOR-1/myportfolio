import { motion } from 'framer-motion';

const SectionTitle = ({ eyebrow, title, description, align = 'left' }) => (
  <motion.div
    initial={{ opacity: 0, y: 16 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.4, ease: 'easeOut' }}
    className={`space-y-3 ${align === 'center' ? 'text-center' : ''}`}
  >
    {eyebrow && (
      <p className="text-xs font-semibold uppercase tracking-[0.35em] text-accent-600 dark:text-accent-100">
        {eyebrow}
      </p>
    )}
    <h2 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
      {title}
    </h2>
    {description && <p className="max-w-2xl text-base text-slate-600 dark:text-slate-300">{description}</p>}
  </motion.div>
);

export default SectionTitle;
