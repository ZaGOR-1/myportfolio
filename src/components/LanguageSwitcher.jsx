import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';

const LANGUAGES = [
  { code: 'en', label: 'EN', emoji: '🇬🇧' },
  { code: 'pl', label: 'PL', emoji: '🇵🇱' },
  { code: 'uk', label: 'UA', emoji: '🇺🇦' },
];

const LanguageSwitcher = ({ variant = 'default' }) => {
  const { i18n, t } = useTranslation();

  const changeLanguage = useCallback(
    (lng) => {
      if ((i18n.resolvedLanguage || i18n.language) === lng) {
        return;
      }
      i18n.changeLanguage(lng);
      if (typeof window !== 'undefined') {
        window.localStorage.setItem('language', lng);
      }
    },
    [i18n]
  );

  const currentLanguage = i18n.resolvedLanguage || i18n.language;

  return (
    <div className={`flex items-center gap-1 ${variant === 'compact' ? '' : 'rounded-full bg-slate-100/70 px-1 py-1 dark:bg-slate-800/60'}`}>
      {LANGUAGES.map((lang) => {
        const active = currentLanguage.startsWith(lang.code);
        const label = t('nav.switchLanguage', { language: lang.label });
        return (
          <button
            key={lang.code}
            type="button"
            onClick={() => changeLanguage(lang.code)}
            aria-pressed={active}
            aria-label={label}
            className={`flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-semibold uppercase tracking-wide transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent-500 ${
              active
                ? 'bg-slate-900 text-white shadow-sm dark:bg-slate-100 dark:text-slate-900'
                : 'text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100'
            }`}
            title={label}
          >
            <span aria-hidden="true">{lang.emoji}</span>
            {lang.label}
          </button>
        );
      })}
    </div>
  );
};

export default LanguageSwitcher;
