'use client'

import { Suspense, lazy, useState, useEffect } from 'react'
const Spline = lazy(() => import('@splinetool/react-spline'))

interface SplineSceneProps {
  scene: string
  className?: string
}

export function SplineScene({ scene, className }: SplineSceneProps) {
  const [shouldLoad, setShouldLoad] = useState(false);
  const [isCapable, setIsCapable] = useState(true);

  useEffect(() => {
    const mql = window.matchMedia('(min-width: 1024px) and (hover: hover)');
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const lowMem = (navigator as Navigator & { deviceMemory?: number }).deviceMemory !== undefined
      && ((navigator as Navigator & { deviceMemory?: number }).deviceMemory ?? 8) < 4;
    const capable = mql.matches && !reduced && !lowMem;
    setIsCapable(capable);
    if (!capable) return;
    const timer = setTimeout(() => setShouldLoad(true), 150);
    return () => clearTimeout(timer);
  }, []);

  if (!isCapable) {
    return (
      <div className={`${className} relative flex items-center justify-center`}>
        <div className="w-40 h-40 sm:w-56 sm:h-56 rounded-full bg-gradient-to-br from-neonBlue/35 via-neonBlue/10 to-neonPurple/25 border border-neonBlue/30 shadow-[0_0_70px_-10px_rgba(77,148,255,0.55)]" />
      </div>
    );
  }

  if (!shouldLoad) {
    return (
      <div className={`${className} flex items-center justify-center`}>
        <div className="w-32 h-48 rounded-2xl bg-white/5 animate-pulse" />
      </div>
    );
  }

  return (
    <Suspense
      fallback={
        <div className="w-full h-full flex items-center justify-center">
          <div className="w-32 h-48 rounded-2xl bg-white/5 animate-pulse" />
        </div>
      }
    >
      <Spline
        scene={scene}
        className={className}
      />
    </Suspense>
  )
}
