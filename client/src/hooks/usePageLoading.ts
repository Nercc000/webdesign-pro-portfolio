import { useState, useEffect } from "react";

const VISITED_KEY = "webdesignpro_visited";

export function usePageLoading() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check if user has visited before
    const hasVisited = localStorage.getItem(VISITED_KEY);

    if (hasVisited) {
      // Skip loading screen for returning visitors
      setIsLoading(false);
      return;
    }

    // First visit: show loading screen
    const handleLoad = () => {
      // Add small delay for smooth transition
      setTimeout(() => {
        setIsLoading(false);
        // Mark as visited
        localStorage.setItem(VISITED_KEY, "true");
      }, 500);
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
      return () => window.removeEventListener("load", handleLoad);
    }
  }, []);

  return isLoading;
}
