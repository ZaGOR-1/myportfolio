import { useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import SectionTitle from '../components/SectionTitle.jsx';
import useDocumentTitle from '../hooks/useDocumentTitle.js';

const socialLinks = [
  {
    labelKey: 'social.linkedin',
    href: 'https://www.linkedin.com/in/denys-zagorovskyi/',
    usernameKey: 'contact.links.linkedin',
  },
  {
    labelKey: 'social.github',
    href: 'https://github.com/d-zagorovskyi',
    usernameKey: 'contact.links.github',
  },
  {
    labelKey: 'social.telegram',
    href: 'https://t.me/zagorovskyi_denys',
    usernameKey: 'contact.links.telegram',
  },
];

const Contact = () => {
  const { t } = useTranslation();
  useDocumentTitle(t('seo.contactTitle'), t('seo.contactDescription'));
  const [status, setStatus] = useState('idle');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);

    setStatus('idle');

    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData).toString(),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      setStatus('success');
      form.reset();
    } catch (error) {
      setStatus('error');
    }
  };

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
          eyebrow={t('contact.eyebrow')}
          title={t('contact.title')}
          description={t('contact.description')}
        />
        <div className="grid gap-12 lg:grid-cols-[1.2fr,1fr]">
          <motion.form
            name="contact"
            method="POST"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            onSubmit={handleSubmit}
            className="space-y-6 rounded-3xl border border-slate-200/70 bg-white/80 p-8 shadow-xl shadow-slate-900/10 backdrop-blur dark:border-slate-800/60 dark:bg-slate-900/70"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            <input type="hidden" name="form-name" value="contact" />
            <div hidden>
              <label htmlFor="bot-field">
                Do not fill this out
                <input id="bot-field" name="bot-field" />
              </label>
            </div>
            <div className="grid gap-6 sm:grid-cols-2">
              <label className="flex flex-col gap-2">
                <span className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">
                  {t('contact.form.nameLabel')}
                </span>
                <input
                  type="text"
                  name="name"
                  required
                  autoComplete="name"
                  placeholder={t('contact.form.namePlaceholder')}
                  className="rounded-2xl border border-slate-200/70 bg-white px-4 py-3 text-sm text-slate-700 transition focus:border-accent-500 focus:outline-none focus:ring-2 focus:ring-accent-500/40 dark:border-slate-700/60 dark:bg-slate-900/70 dark:text-white"
                />
              </label>
              <label className="flex flex-col gap-2">
                <span className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">
                  {t('contact.form.emailLabel')}
                </span>
                <input
                  type="email"
                  name="email"
                  required
                  autoComplete="email"
                  placeholder={t('contact.form.emailPlaceholder')}
                  className="rounded-2xl border border-slate-200/70 bg-white px-4 py-3 text-sm text-slate-700 transition focus:border-accent-500 focus:outline-none focus:ring-2 focus:ring-accent-500/40 dark:border-slate-700/60 dark:bg-slate-900/70 dark:text-white"
                />
              </label>
            </div>
            <label className="flex flex-col gap-2">
              <span className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">
                {t('contact.form.messageLabel')}
              </span>
              <textarea
                name="message"
                rows="6"
                required
                placeholder={t('contact.form.messagePlaceholder')}
                className="rounded-2xl border border-slate-200/70 bg-white px-4 py-3 text-sm text-slate-700 transition focus:border-accent-500 focus:outline-none focus:ring-2 focus:ring-accent-500/40 dark:border-slate-700/60 dark:bg-slate-900/70 dark:text-white"
              />
            </label>
            <motion.button
              type="submit"
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-3 rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-white transition hover:-translate-y-1 hover:bg-slate-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent-500 dark:bg-accent-500 dark:hover:bg-accent-600"
            >
              {status === 'success' ? t('contact.form.sent') : t('contact.form.submit')}
              <span aria-hidden="true">↗</span>
            </motion.button>
            {status === 'error' && (
              <p className="text-sm text-red-500">{t('contact.form.error')}</p>
            )}
            {status === 'success' && (
              <p className="text-sm text-emerald-500">{t('contact.form.success')}</p>
            )}
          </motion.form>

          <motion.div
            className="space-y-6 rounded-3xl border border-slate-200/70 bg-white/80 p-8 shadow-lg shadow-slate-900/10 backdrop-blur dark:border-slate-800/70 dark:bg-slate-900/70"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.1, ease: 'easeOut' }}
          >
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{t('contact.sidebar.title')}</h3>
            <p className="text-sm text-slate-600 dark:text-slate-300">{t('contact.sidebar.description')}</p>
            <div className="space-y-4">
              {socialLinks.map((link) => (
                <a
                  key={link.labelKey}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between rounded-2xl border border-slate-200/70 bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-700 transition hover:border-accent-500 hover:text-accent-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent-500 dark:border-slate-700/60 dark:bg-slate-800/70 dark:text-slate-200"
                >
                  <span>{t(link.labelKey)}</span>
                  <span className="text-xs font-medium text-slate-500 dark:text-slate-400">{t(link.usernameKey)}</span>
                </a>
              ))}
            </div>
            <div className="rounded-2xl border border-dashed border-slate-300/80 p-4 text-sm text-slate-500 dark:border-slate-700/60 dark:text-slate-400">
              {t('contact.sidebar.note')}
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
