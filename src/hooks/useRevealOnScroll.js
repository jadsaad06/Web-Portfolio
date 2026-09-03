import { useEffect, useRef } from 'react';

/**
 * Reveals elements once they scroll into view.
 *
 * Attach the returned ref to a section; every matching descendant gets a
 * `data-revealed` attribute the first time it enters the viewport.
 *
 * The flag is an attribute rather than a class on purpose: React owns the
 * `className` of these elements, so a class added out-of-band here would be
 * wiped the next time the component re-renders (e.g. expanding a card) and
 * the element would silently fade back to opacity 0.
 */
const useRevealOnScroll = (selector = '.slide-up') => {
  const ref = useRef(null);

  useEffect(() => {
    const root = ref.current;
    if (!root) return undefined;

    const elements = Array.from(root.querySelectorAll(selector));
    if (!elements.length) return undefined;

    // No observer support: show the content rather than leaving it hidden.
    if (typeof IntersectionObserver === 'undefined') {
      elements.forEach((element) => element.setAttribute('data-revealed', 'true'));
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.setAttribute('data-revealed', 'true');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -8% 0px' }
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, [selector]);

  return ref;
};

export default useRevealOnScroll;
