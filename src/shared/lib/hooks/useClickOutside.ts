import { useEffect, useRef, RefObject } from 'react';

interface UseClickOutsideOptions {
  ignoreRefs?: RefObject<HTMLElement | null>[];
  enabled?: boolean;
}

export const useClickOutside = <T extends HTMLElement = HTMLElement>(
  callback: () => void,
  options: UseClickOutsideOptions = {}
) => {
  const { ignoreRefs = [], enabled = true } = options;
  const ref = useRef<T>(null);

  useEffect(() => {
    if (!enabled || !callback) return;

    const handleEvent = (event: MouseEvent | TouchEvent) => {
      const target = event.target as Node;
      if (!ref.current) return;

      if (ref.current.contains(target)) return;

      if (ignoreRefs.some((ignoreRef) => ignoreRef.current?.contains(target))) return;

      callback();
    };

    document.addEventListener('mousedown', handleEvent);
    document.addEventListener('touchstart', handleEvent, { passive: true });

    return () => {
      document.removeEventListener('mousedown', handleEvent);
      document.removeEventListener('touchstart', handleEvent);
    };
  }, [callback, enabled, ignoreRefs]);

  return ref;
};
