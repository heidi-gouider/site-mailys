"use client";

import { useState, ChangeEvent, FormEvent } from 'react';
// import { useTranslation } from '@/hooks/useTranslation';

// Définir un type pour les données du formulaire
interface FormData {
  name: string;
  email: string;
  message: string;
}
const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [status, setStatus] = useState<string | null>(null);

  // Fonction pour gérer les changements des champs du formulaire
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus(null);
  
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
  
      if (res.ok) {
        setStatus('Message envoyé avec succès!');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('Une erreur est survenue, réessayez plus tard.');
      }
    } catch (error) {
      setStatus('Une erreur est survenue, réessayez plus tard.');
    } finally {
      setIsSubmitting(false);
    }
  };
//   const { t } = useTranslation();

  return (
    <div className="max-w-3xl mx-auto p-6 text-[#202020]">
      <h2 className="text-3xl font-bold mb-6">Me contacter</h2>

      {status && (
        <div
          className={`mb-4 p-4 rounded ${
            status.includes('succès') ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
          }`}
        >
          {status}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-lg mb-2">Contact</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-lg mb-2">E-mail</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-lg mb-2">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={5}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="flex justify-end">
          <button
            type="submit"
            disabled={isSubmitting}
            className="px-6 py-2 bg-blue-500 text-white font-bold rounded-lg hover:bg-blue-700 transition duration-300 disabled:bg-gray-400"
          >
            {isSubmitting ? 'Envoi...' : 'Envoyer'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;