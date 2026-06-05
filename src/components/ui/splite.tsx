'use client'

import { Suspense, lazy, useState, useEffect } from 'react'
import { MountOnVisible } from './MountOnVisible'
const Spline = lazy(() => import('@splinetool/react-spline'))

interface SplineSceneProps {
  scene: string
  className?: string
}

const StaticGlow = ({ className }: { className?: string }) => (
  <div className={`${className} relative flex items-center justify-center`}>
    <div className="absolute w-44 h-44 sm:w-56 sm:h-56 rounded-full bg-gradient-to-br from-neonBlue/35 via-neonBlue/10 to-neonPurple/25 border border-neonBlue/30 shadow-[0_0_70px_-10px_rgba(77,148,255,0.55)]" />
    <div className="absolute w-24 h-24 sm:w-32 sm:h-32 rounded-full bg-neonBlue/30 blur-2xl" />
  </div>
);

export function SplineScene({ scene, className }: SplineSceneProps) {
  const [isCapable, setIsCapable] = useState(true);

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const dm = (navigator as Navigator & { deviceMemory?: number }).deviceMemory;
    const lowMem = dm !== undefined && dm < 3;
    setIsCapable(!reduced && !lowMem);
  }, []);

  if (!isCapable) {
    return <StaticGlow className={className} />;
  }

  return (
    <MountOnVisible
      className={className}
      rootMargin="200px"
      once
      fallback={<StaticGlow className={className} />}
    >
      <Suspense
        fallback={
          <div className="w-full h-full flex items-center justify-center">
            <div className="w-32 h-48 rounded-2xl bg-white/5 animate-pulse" />
          </div>
        }
      >
        <Spline scene={scene} className={className} />
      </Suspense>
    </MountOnVisible>
  )
}
