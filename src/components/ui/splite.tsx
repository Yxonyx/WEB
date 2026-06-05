'use client'

import { Suspense, lazy, useState, useEffect } from 'react'
import { MountOnVisible } from './MountOnVisible'
import { subscribeGeoWebGLActive } from '@/utils/webglScene'

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
  const [geoWebGLActive, setGeoWebGLActive] = useState(false);
  const [heroInView, setHeroInView] = useState(true);

  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      const dm = (navigator as Navigator & { deviceMemory?: number }).deviceMemory;
      const lowMem = dm !== undefined && dm < 3;
      setIsCapable(!reduced && !lowMem);
    });

    return () => cancelAnimationFrame(frame);
  }, []);

  useEffect(() => subscribeGeoWebGLActive(setGeoWebGLActive), []);

  useEffect(() => {
    const hero = document.getElementById('hero');
    if (!hero) return;

    const observer = new IntersectionObserver(
      ([entry]) => setHeroInView(entry.isIntersecting),
      { threshold: 0.05 },
    );
    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  // Only yield GPU to the GEO robot once the hero is off-screen
  const yieldToGeoRobot = geoWebGLActive && !heroInView;

  if (!isCapable || yieldToGeoRobot) {
    return <StaticGlow className={className} />;
  }

  return (
    <MountOnVisible
      className={className}
      rootMargin="200px"
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
