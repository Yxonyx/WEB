'use client'

import { Suspense, lazy, useState, useEffect } from 'react'
const Spline = lazy(() => import('@splinetool/react-spline'))

interface SplineSceneProps {
  scene: string
  className?: string
}

export function SplineScene({ scene, className }: SplineSceneProps) {
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    // Short defer: lets hero text render first (LCP), then starts loading Spline
    const isMobile = window.innerWidth < 1024;
    const delay = isMobile ? 300 : 100;
    const timer = setTimeout(() => setShouldLoad(true), delay);
    return () => clearTimeout(timer);
  }, []);

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
