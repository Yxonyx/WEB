'use client';

import { useEffect, useRef, useState, type ReactNode, type ComponentType, Suspense } from 'react';

interface LazySectionProps {
  fallback?: ReactNode;
  rootMargin?: string;
  children: ReactNode;
}

/**
 * Renders children only when the component enters (or is about to enter) the viewport.
 * Uses IntersectionObserver with a generous rootMargin to start loading early.
 */
export function LazySection({ children, fallback, rootMargin = '200px' }: LazySectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [rootMargin]);

  return (
    <div ref={ref} style={{ minHeight: isVisible ? 'auto' : '100vh' }}>
      {isVisible ? children : (fallback ?? <div style={{ minHeight: '100vh' }} />)}
    </div>
  );
}
