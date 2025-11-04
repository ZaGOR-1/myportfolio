import { useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { AnimatePresence, motion } from 'framer-motion';
import ThemeToggle from './ThemeToggle.jsx';
import LanguageSwitcher from './LanguageSwitcher.jsx';

const navItems = [
  { key: 'nav.home', path: '/' },
  { key: 'nav.projects', path: '/projects' },
  { key: 'nav.about', path: '/about' },
  { key: 'nav.contact', path: '/contact' },
];

const Header = () => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  const navLinkClasses = ({ isActive }) =>
    `rounded-full px-4 py-2 text-sm font-medium tracking-wide transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-500 ${
      isActive
        ? 'bg-slate-900 text-white shadow dark:bg-slate-100 dark:text-slate-900'
        : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/70 dark:text-slate-300 dark:hover:text-white dark:hover:bg-slate-800/70'
    }`;

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-200/60 bg-white/60 backdrop-blur-xl transition dark:border-slate-800/60 dark:bg-slate-950/60">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <Link
            to="/"
            onClick={closeMenu}
            className="group flex items-center gap-3 rounded-full border border-transparent px-2 pr-3 py-1 transition hover:border-slate-200/80 hover:bg-white/70 dark:hover:border-slate-700/70 dark:hover:bg-slate-900/60"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-900 text-sm font-semibold uppercase tracking-widest text-white shadow-lg dark:bg-slate-100 dark:text-slate-900">
              DZ
            </span>
            <span className="hidden text-sm font-medium text-slate-500 transition group-hover:text-slate-900 dark:text-slate-400 dark:group-hover:text-slate-100 sm:block">
              Denys Zagorovskyi
            </span>
          </Link>
        </div>

        <nav className="hidden items-center gap-4 rounded-full border border-slate-200/70 bg-white/60 px-2 py-1.5 shadow-lg shadow-slate-900/5 backdrop-blur dark:border-slate-700/60 dark:bg-slate-900/50 lg:flex">
          {navItems.map((item) => (
            <NavLink key={item.key} to={item.path} className={navLinkClasses} end={item.path === '/'}>
              {t(item.key)}
            </NavLink>
          ))}
          <LanguageSwitcher />
          <div className="h-6 w-px bg-slate-200/80 dark:bg-slate-700/60" aria-hidden="true" />
          <ThemeToggle />
        </nav>

        <button
          type="button"
          onClick={toggleMenu}
          className="relative inline-flex items-center justify-center rounded-full border border-slate-200/80 bg-white/80 p-2 text-slate-600 transition hover:text-slate-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-500 dark:border-slate-700/70 dark:bg-slate-900/70 dark:text-slate-300 dark:hover:text-white lg:hidden"
          aria-expanded={isOpen}
          aria-label={isOpen ? t('nav.closeMenu') : t('nav.openMenu')}
        >
          <span className="sr-only">{isOpen ? t('nav.closeMenu') : t('nav.openMenu')}</span>
          <svg
            className={`h-6 w-6 transform transition ${isOpen ? 'scale-0 opacity-0' : 'scale-100 opacity-100'}`}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
          <svg
            className={`absolute h-6 w-6 transform transition ${isOpen ? 'scale-100 opacity-100' : 'scale-75 opacity-0'}`}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </button>
      </div>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="mobile-nav"
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="mx-auto mt-1 w-[92%] max-w-3xl rounded-3xl border border-slate-200/70 bg-white/95 p-4 shadow-2xl shadow-slate-900/10 backdrop-blur dark:border-slate-700/60 dark:bg-slate-900/90"
          >
            <nav className="flex flex-col gap-2">
              {navItems.map((item) => (
                <NavLink
                  key={item.key}
                  to={item.path}
                  end={item.path === '/'}
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    `flex items-center justify-between rounded-2xl px-4 py-3 text-base font-semibold transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-500 ${
                      isActive || location.pathname === item.path
                        ? 'bg-slate-900 text-white dark:bg-slate-100 dark:text-slate-900'
                        : 'bg-slate-100/80 text-slate-700 hover:bg-slate-200 dark:bg-slate-800/80 dark:text-slate-200 dark:hover:bg-slate-700'
                    }`
                  }
                >
                  <span>{t(item.key)}</span>
                  <span aria-hidden="true">↗</span>
                </NavLink>
              ))}
            </nav>
            <div className="mt-4 flex items-center justify-between rounded-2xl bg-slate-100/60 p-4 dark:bg-slate-800/60">
              <LanguageSwitcher variant="compact" />
              <ThemeToggle variant="compact" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
