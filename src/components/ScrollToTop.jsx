import { useEffect, useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * ScrollToTop ensures every route change instantly starts at the top (0, 0)
 * without any bottom-to-top slide animation or scroll jumping.
 */
export const ScrollToTop = () => {
  const { pathname, search } = useLocation();

  useLayoutEffect(() => {
    // Prevent browser from restoring previous page scroll position
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    // Instantly reset scroll to top before the browser paints the new page
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant'
    });
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, [pathname, search]);

  useEffect(() => {
    // Secondary safeguard in case of asynchronous component mounting or layout shifts
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant'
    });
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, [pathname, search]);

  return null;
};
