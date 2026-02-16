import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const ScrollToTop = () => {
    const { pathname, hash } = useLocation();

    useEffect(() => {
        // Only scroll to top if there is no hash key (anchors handled by Navbar)
        if (!hash) {
            window.scrollTo(0, 0);
        }
    }, [pathname, hash]);

    return null;
};
