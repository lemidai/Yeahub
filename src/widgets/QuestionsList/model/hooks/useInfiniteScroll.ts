import { useEffect, useRef } from 'react';

type UseInfiniteScrollProps = {
  enabled: boolean;
  onLoadMore: () => void;
};

export const useInfiniteScroll = ({ enabled, onLoadMore }: UseInfiniteScrollProps) => {
  const loaderRef = useRef<HTMLDivElement>(null);
  const wasHiddenRef = useRef(false);
  useEffect(() => {
    const node = loaderRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && enabled) {
          if (wasHiddenRef.current) {
            onLoadMore();
          }
        } else if (!entry.isIntersecting) {
          wasHiddenRef.current = true;
        }
      },
      {
        rootMargin: '0px 0px 300px',
      }
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, [enabled, onLoadMore]);

  useEffect(() => {
    wasHiddenRef.current = false;
  }, [enabled]);

  return loaderRef;
};
