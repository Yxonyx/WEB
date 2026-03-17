import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export function QrRedirect() {
    const router = useRouter();

    useEffect(() => {
        // Build the target URL with UTM parameters
        // utm_source=qr_code
        // utm_medium=offline
        // utm_campaign=offline_marketing
        const targetUrl = '/hu/?utm_source=qr_code&utm_medium=offline&utm_campaign=offline_marketing';

        // Use replace: true so the user can't use the back button to return to the redirect loop
        router.replace(targetUrl);
    }, [router]);

    return (
        <div className="min-h-screen bg-bgDeep flex items-center justify-center text-white font-display">
            <div className="flex flex-col items-center gap-4">
                <div className="w-8 h-8 rounded-full border-2 border-neonBlue border-t-transparent animate-spin"></div>
                <p className="text-muted">Átirányítás...</p>
            </div>
        </div>
    );
}
