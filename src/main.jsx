import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import { registerSW } from 'virtual:pwa-register';
import App from './App.jsx';
import AnimationProvider from './components/AnimationProvider.jsx';
import { ThemeProvider } from './context/ThemeContext.jsx';
import './index.css';
import './i18n/index.js';

if (typeof window !== 'undefined') {
  registerSW({ immediate: true });
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter>
      <ThemeProvider>
        <AnimationProvider>
          <App />
        </AnimationProvider>
      </ThemeProvider>
    </HashRouter>
  </React.StrictMode>
);
