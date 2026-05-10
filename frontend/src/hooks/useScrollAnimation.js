import { useEffect, useRef, useCallback } from 'react';

/**
 * Attaches an IntersectionObserver to a container ref.
 * Any child with class "reveal" gets class "revealed" when it enters the viewport.
 * Uses useCallback so the effect is stable across re-renders.
 */
const OBSERVER_OPTIONS = { threshold: 0.12 };

const useScrollAnimation = () => {
  const ref = useRef(null);

  const observe = useCallback(() => {
    const container = ref.current;
    if (!container) return;

    const targets = container.querySelectorAll('.reveal');
    if (!targets.length) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          observer.unobserve(entry.target); // fire once, then stop watching
        }
      });
    }, OBSERVER_OPTIONS);

    targets.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const cleanup = observe();
    return cleanup;
  }, [observe]);

  return ref;
};

export default useScrollAnimation;
