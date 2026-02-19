import { useState } from 'react';
import emailjs from '@emailjs/browser';

/**
 * Custom hook to handle EmailJS form submission
 * @returns {Object} - { sendEmail, loading, error }
 */
export const useEmail = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    /**
     * Sends email using emailjs.sendForm
     * @param {Object} formRef - The React ref object pointing to the form element
     * @returns {Promise<{success: boolean, text?: string, error?: any}>}
     */
    const sendEmail = async (formRef) => {
        // Basic environment variable check
        if (
            !import.meta.env.VITE_EMAILJS_SERVICE_ID ||
            !import.meta.env.VITE_EMAILJS_TEMPLATE_ID ||
            !import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        ) {
            console.warn("EmailJS environment variables are missing!");
            // We don't block here to allow testing if someone hardcodes, but good to warn.
        }

        setLoading(true);
        setError(null);

        try {
            const result = await emailjs.sendForm(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                formRef.current,
                {
                    publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
                }
            );

            setLoading(false);
            return { success: true, text: result.text };
        } catch (err) {
            console.error("EmailJS Error:", err);
            setLoading(false);
            setError(err);
            return { success: false, error: err };
        }
    };

    return { sendEmail, loading, error };
};
