import { useTranslation } from 'react-i18next';

const socialLinks = [
  {
    labelKey: 'social.linkedin',
    href: 'https://www.linkedin.com/in/denys-zagorovskyi/',
  },
  {
    labelKey: 'social.github',
    href: 'https://github.com/d-zagorovskyi',
  },
  {
    labelKey: 'social.telegram',
    href: 'https://t.me/zagorovskyi_denys',
  },
];

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="border-t border-slate-200/70 bg-white/70 py-8 backdrop-blur dark:border-slate-800/70 dark:bg-slate-900/60">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-4 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
            Denys Zagorovskyi
          </p>
          <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">{t('footer.tagline')}</p>
        </div>
        <div className="flex flex-wrap items-center gap-4 text-sm font-medium text-slate-600 dark:text-slate-300">
          {socialLinks.map((link) => (
            <a
              key={link.labelKey}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-transparent px-4 py-2 transition hover:border-slate-300 hover:bg-white dark:hover:border-slate-600 dark:hover:bg-slate-800"
            >
              {t(link.labelKey)}
            </a>
          ))}
        </div>
        <p className="text-xs text-slate-500 dark:text-slate-500">© {new Date().getFullYear()} {t('footer.rights')}</p>
      </div>
    </footer>
  );
};

export default Footer;
