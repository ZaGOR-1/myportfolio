import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import SectionTitle from '../components/SectionTitle.jsx';
import useDocumentTitle from '../hooks/useDocumentTitle.js';

const About = () => {
  const { t } = useTranslation();
  useDocumentTitle(t('seo.aboutTitle'), t('seo.aboutDescription'));

  const skills = t('about.skills.items', { returnObjects: true });
  const values = t('about.values', { returnObjects: true });

  return (
    <motion.section
      className="w-full"
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -16 }}
      transition={{ duration: 0.35, ease: 'easeOut' }}
    >
      <div className="flex w-full flex-col gap-16">
        <SectionTitle
          eyebrow={t('about.eyebrow')}
          title={t('about.title')}
          description={t('about.description')}
        />
        <div className="grid gap-12 lg:grid-cols-[1.4fr,1fr]">
          <motion.div
            className="space-y-6 rounded-3xl border border-slate-200/70 bg-white/80 p-8 shadow-lg shadow-slate-900/5 backdrop-blur dark:border-slate-800/70 dark:bg-slate-900/70"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            <h3 className="text-2xl font-semibold text-slate-900 dark:text-white">{t('about.story.heading')}</h3>
            <p className="text-base leading-relaxed text-slate-600 dark:text-slate-300">
              {t('about.story.paragraph1')}
            </p>
            <p className="text-base leading-relaxed text-slate-600 dark:text-slate-300">
              {t('about.story.paragraph2')}
            </p>
            <div className="rounded-3xl border border-slate-200/60 bg-slate-50/90 p-6 dark:border-slate-700/60 dark:bg-slate-800/70">
              <h4 className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">
                {t('about.uni.heading')}
              </h4>
              <p className="mt-3 text-lg font-semibold text-slate-900 dark:text-white">{t('about.uni.name')}</p>
              <p className="text-sm text-slate-600 dark:text-slate-300">{t('about.uni.program')}</p>
              <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">{t('about.uni.period')}</p>
            </div>
            <div className="rounded-3xl border border-slate-200/60 bg-slate-50/90 p-6 dark:border-slate-700/60 dark:bg-slate-800/70">
              <h4 className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">
                {t('about.work.heading')}
              </h4>
              <div className="mt-4 space-y-4">
                <div>
                  <p className="text-base font-semibold text-slate-900 dark:text-white">{t('about.work.current.position')}</p>
                  <p className="text-sm text-slate-600 dark:text-slate-300">{t('about.work.current.company')}</p>
                  <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">{t('about.work.current.period')}</p>
                </div>
                <div className="border-t border-slate-200 pt-4 dark:border-slate-700">
                  <p className="text-base font-semibold text-slate-900 dark:text-white">{t('about.work.previous.position')}</p>
                  <p className="text-sm text-slate-600 dark:text-slate-300">{t('about.work.previous.company')}</p>
                  <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">{t('about.work.previous.period')}</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.1, ease: 'easeOut' }}
          >
            <div className="rounded-3xl border border-slate-200/70 bg-white/80 p-8 shadow-lg shadow-slate-900/5 backdrop-blur dark:border-slate-800/70 dark:bg-slate-900/70">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{t('about.skills.title')}</h3>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{t('about.skills.description')}</p>
              <div className="mt-5 flex flex-wrap gap-3">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-slate-200/60 bg-slate-50 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-slate-600 dark:border-slate-700/60 dark:bg-slate-800/70 dark:text-slate-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="rounded-3xl border border-slate-200/70 bg-white/80 p-8 shadow-lg shadow-slate-900/10 backdrop-blur dark:border-slate-800/70 dark:bg-slate-900/70">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{t('about.valuesTitle')}</h3>
              <div className="mt-6 space-y-5">
                {values.map((value) => (
                  <div key={value.title} className="space-y-2">
                    <p className="text-sm font-semibold uppercase tracking-[0.3em] text-accent-600">
                      {value.title}
                    </p>
                    <p className="text-sm text-slate-600 dark:text-slate-300">{value.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
