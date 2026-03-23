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
     * @param {string} [customTemplateId] - Optional template ID to override default
     * @param {string} [customServiceId] - Optional service ID to override default
     * @returns {Promise<{success: boolean, text?: string, error?: any}>}
     */
    const sendEmail = async (formRef, customTemplateId, customServiceId) => {
        const serviceId = customServiceId || import.meta.env.VITE_EMAILJS_SERVICE_ID;
        const templateId = customTemplateId || import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
        const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

        // Basic environment variable check
        if (!serviceId || !templateId || !publicKey) {
            console.warn("EmailJS environment variables or custom IDs are missing!");
        }

        setLoading(true);
        setError(null);

        try {
            const result = await emailjs.sendForm(
                serviceId,
                templateId,
                formRef.current,
                {
                    publicKey: publicKey,
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
