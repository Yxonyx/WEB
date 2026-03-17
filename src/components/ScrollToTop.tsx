import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export const ScrollToTop = () => {
    const pathname = usePathname();

    useEffect(() => {
        // Only scroll to top if there is no hash (anchors handled by Navbar)
        if (typeof window !== 'undefined' && !window.location.hash) {
            window.scrollTo(0, 0);
        }
    }, [pathname]);

    return null;
};
