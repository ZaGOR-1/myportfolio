import Header from './Header.jsx';
import Footer from './Footer.jsx';

const Layout = ({ children }) => (
  <div className="relative min-h-screen overflow-x-hidden bg-slate-50 text-slate-900 transition-colors duration-300 dark:bg-slate-950 dark:text-slate-100">
    <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br from-accent-50 via-transparent to-transparent opacity-60 dark:from-indigo-900/30" />
    <Header />
    <main className="mx-auto flex w-full max-w-6xl flex-1 px-4 pb-24 pt-28 sm:px-6 lg:px-8">{children}</main>
    <Footer />
  </div>
);

export default Layout;
