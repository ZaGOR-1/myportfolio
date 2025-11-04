import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../context/ThemeContext.jsx';

const ThemeToggle = ({ variant = 'default' }) => {
  const { theme, toggleTheme } = useTheme();
  const { t } = useTranslation();
  const isDark = theme === 'dark';

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className={`relative flex items-center gap-2 rounded-full border border-transparent px-2 py-1 text-xs font-semibold uppercase tracking-wide transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-500 ${
        variant === 'compact'
          ? 'bg-slate-900 text-white dark:bg-slate-100 dark:text-slate-900'
          : 'bg-slate-900 text-white hover:shadow-md dark:bg-slate-100 dark:text-slate-900'
      }`}
      aria-label={isDark ? t('nav.switchToLight') : t('nav.switchToDark')}
    >
      <motion.span
        key={theme}
        initial={{ opacity: 0, y: 4 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -4 }}
        transition={{ duration: 0.25, ease: 'easeOut' }}
        className="flex items-center gap-2"
      >
        <span aria-hidden="true" className="text-base">
          {isDark ? '🌙' : '☀️'}
        </span>
        <span className={variant === 'compact' ? 'text-[11px]' : 'text-[11px] sm:text-xs'}>
          {isDark ? t('nav.dark') : t('nav.light')}
        </span>
      </motion.span>
    </button>
  );
};

export default ThemeToggle;
