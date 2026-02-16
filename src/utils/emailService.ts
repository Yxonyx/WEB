import emailjs from '@emailjs/browser';


export const sendGeoGuideEmail = async (email: string) => {
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;

    if (!publicKey || !serviceId || !templateId) {
        console.error('EmailJS configuration missing');
        throw new Error('Email configuration error');
    }

    try {
        const response = await emailjs.send(
            serviceId,
            templateId,
            {
                user_email: email,
                to_email: email,
                email: email, // Fallback common variable name
                reply_to: 'cyberlabsweb@gmail.com',
                message: 'Köszönjük, hogy letöltötted a GEO útmutatót!',
                resource_link: `${window.location.origin}/geo-tudasanyag/pdf`,
            },
            publicKey
        );
        return response;
    } catch (error) {
        console.error('EmailJS Error:', error);
        throw error;
    }
};
