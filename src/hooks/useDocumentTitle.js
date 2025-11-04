import { useEffect } from 'react';

const useDocumentTitle = (title, description) => {
  useEffect(() => {
    if (typeof document === 'undefined') {
      return;
    }

    if (title) {
      document.title = title;
    }

    if (!description) {
      return;
    }

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    } else {
      const meta = document.createElement('meta');
      meta.setAttribute('name', 'description');
      meta.setAttribute('content', description);
      document.head.appendChild(meta);
    }
  }, [title, description]);
};

export default useDocumentTitle;
