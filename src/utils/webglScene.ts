/** Coordinates which heavy WebGL scene should be active on the landing page. */

export const GEO_WEBGL_ACTIVE = 'geo-webgl-active';

export function setGeoWebGLActive(active: boolean) {
    if (typeof window === 'undefined') return;
    window.dispatchEvent(new CustomEvent(GEO_WEBGL_ACTIVE, { detail: { active } }));
}

export function subscribeGeoWebGLActive(onChange: (active: boolean) => void) {
    if (typeof window === 'undefined') return () => {};

    const handler = (event: Event) => {
        const detail = (event as CustomEvent<{ active: boolean }>).detail;
        onChange(detail.active);
    };

    window.addEventListener(GEO_WEBGL_ACTIVE, handler);
    return () => window.removeEventListener(GEO_WEBGL_ACTIVE, handler);
}
