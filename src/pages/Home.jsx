import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import useDocumentTitle from '../hooks/useDocumentTitle.js';

const heroVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0 },
};

const statsVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0 },
};

const Home = () => {
  const { t } = useTranslation();
  useDocumentTitle(t('seo.homeTitle'), t('seo.homeDescription'));

  const highlights = t('home.highlights', { returnObjects: true });

  return (
    <motion.section
      className="w-full"
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -16 }}
      transition={{ duration: 0.35, ease: 'easeOut' }}
    >
      <div className="mx-auto flex max-w-5xl flex-col items-start gap-16">
        <motion.div
          className="relative flex w-full flex-col gap-10 rounded-[40px] border border-slate-200/70 bg-white/70 px-8 py-12 shadow-2xl shadow-slate-900/5 backdrop-blur-xl dark:border-slate-800/60 dark:bg-slate-900/70 sm:px-12 sm:py-16 lg:px-16"
          variants={heroVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <div className="absolute -top-10 right-8 hidden h-36 w-36 rounded-full bg-gradient-to-br from-accent-500 to-indigo-500 opacity-80 blur-3xl lg:block" aria-hidden="true" />
          <div className="flex flex-col gap-6">
            <span className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.4em] text-accent-600">
              {t('home.eyebrow')}
            </span>
            <h1 className="text-4xl font-semibold leading-tight tracking-tight text-slate-900 dark:text-white sm:text-5xl md:text-6xl">
              {t('home.heroTitle.line1')}
              <span className="block text-transparent bg-gradient-to-r from-slate-900 via-accent-500 to-indigo-500 bg-clip-text dark:from-white dark:via-accent-100 dark:to-blue-200">
                {t('home.heroTitle.line2')}
              </span>
            </h1>
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-200/70 bg-white/80 px-4 py-2 text-xs font-medium text-slate-500 shadow-sm shadow-slate-900/5 dark:border-slate-700/60 dark:bg-slate-900/70 dark:text-slate-300">
              <span className="h-2 w-2 rounded-full bg-accent-500" aria-hidden="true" />
              <span className="text-xs sm:text-sm">{t('home.university')}</span>
            </div>
            <p className="max-w-2xl text-lg text-slate-600 dark:text-slate-300">
              {t('home.description')}
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <Link
                to="/projects"
                className="inline-flex items-center gap-3 rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-white transition hover:-translate-y-1 hover:bg-slate-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent-500 dark:bg-accent-500 dark:hover:bg-accent-600"
              >
                {t('home.ctaPrimary')}
                <span aria-hidden="true">↗</span>
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-3 rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-slate-700 transition hover:border-slate-400 hover:text-slate-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent-500 dark:border-slate-700 dark:text-slate-200 dark:hover:border-slate-500"
              >
                {t('home.ctaSecondary')}
              </Link>
            </div>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            {highlights.map((item) => (
              <motion.div
                key={item.title}
                className="rounded-3xl border border-slate-200/70 bg-white/80 p-6 shadow-lg shadow-slate-900/5 transition hover:-translate-y-1 hover:border-accent-500/70 dark:border-slate-700/60 dark:bg-slate-900/60"
                variants={statsVariants}
                initial="hidden"
                animate="visible"
                transition={{ duration: 0.4, delay: 0.2, ease: 'easeOut' }}
              >
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-400 dark:text-slate-500">
                  {item.title}
                </p>
                <p className="mt-3 text-3xl font-semibold text-slate-900 dark:text-white">{item.value}</p>
                <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">{item.caption}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="grid w-full gap-6 rounded-3xl border border-slate-200/70 bg-white/70 px-6 py-8 shadow-lg shadow-slate-900/10 backdrop-blur dark:border-slate-800/60 dark:bg-slate-900/70 sm:grid-cols-3 sm:gap-10 sm:px-10 sm:py-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          {t('home.focus', { returnObjects: true }).map((item) => (
            <div key={item.title} className="space-y-3">
              <div className="inline-flex items-center gap-2 rounded-full bg-slate-100/80 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-slate-500 dark:bg-slate-800/70 dark:text-slate-400">
                {item.title}
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-300">{item.description}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Home;
