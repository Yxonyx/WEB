'use client';

import { ReactNode, useEffect, useRef, useState } from 'react';

interface MountOnVisibleProps {
    children: ReactNode;
    fallback?: ReactNode;
    /** Extra margin in px around the viewport before mounting. */
    rootMargin?: string;
    /** If true, never unmount after first mount. */
    once?: boolean;
    className?: string;
}

/**
 * Mounts its children only while the wrapper is in (or near) the viewport.
 * Unmounts them when scrolled away — releasing WebGL contexts, canvas
 * timers, and other expensive resources. Critical on mobile to keep two
 * heavy 3D scenes from being alive simultaneously.
 */
export const MountOnVisible = ({
    children,
    fallback = null,
    rootMargin = '300px',
    once = false,
    className,
}: MountOnVisibleProps) => {
    const ref = useRef<HTMLDivElement>(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const node = ref.current;
        if (!node) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true);
                    if (once) observer.disconnect();
                } else if (!once) {
                    setVisible(false);
                }
            },
            { rootMargin, threshold: 0 }
        );

        observer.observe(node);
        return () => observer.disconnect();
    }, [rootMargin, once]);

    return (
        <div ref={ref} className={className}>
            {visible ? children : fallback}
        </div>
    );
};
