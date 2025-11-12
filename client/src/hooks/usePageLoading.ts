import { useState, useEffect } from 'react';

export function usePageLoading() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check if page is already loaded
    if (document.readyState === 'complete') {
      // Add small delay for smooth transition
      setTimeout(() => setIsLoading(false), 500);
      return;
    }

    // Wait for all resources to load
    const handleLoad = () => {
      // Add small delay for smooth transition
      setTimeout(() => setIsLoading(false), 500);
    };

    window.addEventListener('load', handleLoad);

    return () => {
      window.removeEventListener('load', handleLoad);
    };
  }, []);

  return isLoading;
}
