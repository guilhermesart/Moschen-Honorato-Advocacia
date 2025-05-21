import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import Button from './Button';

const ContactForm: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState<boolean | null>(null);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);

    if (!form.current) return;

    emailjs.sendForm(
      'service_5w7348j', // Substitua pelo seu Service ID do EmailJS
      'template_o93nbxv', // Substitua pelo seu Template ID do EmailJS
      form.current,
      'YSaTPt2Thl7ki05YJ' // Substitua pela sua Public Key do EmailJS
    )
      .then(() => {
        setSubmitSuccess(true);
        if (form.current) {
          form.current.reset();
        }
        setTimeout(() => {
          setSubmitSuccess(null);
        }, 5000);
      })
      .catch((error) => {
        setSubmitError('Ocorreu um erro ao enviar a mensagem. Por favor, tente novamente.');
        console.error('EmailJS Error:', error);
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <form ref={form} onSubmit={handleSubmit} className="space-y-6">
      {submitSuccess && (
        <div className="p-4 bg-green-50 text-green-700 rounded-md mb-6">
          Mensagem enviada com sucesso! Entraremos em contato em breve.
        </div>
      )}
      
      {submitError && (
        <div className="p-4 bg-red-50 text-red-700 rounded-md mb-6">
          {submitError}
        </div>
      )}
      
      <div>
        <label htmlFor="name" className="block text-gray-700 mb-2">
          Nome Completo *
        </label>
        <input
          type="text"
          id="name"
          name="user_name"
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
        />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="email" className="block text-gray-700 mb-2">
            E-mail *
          </label>
          <input
            type="email"
            id="email"
            name="user_email"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
          />
        </div>
        
        <div>
          <label htmlFor="phone" className="block text-gray-700 mb-2">
            Telefone *
          </label>
          <input
            type="tel"
            id="phone"
            name="user_phone"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
          />
        </div>
      </div>
      
      <div>
        <label htmlFor="subject" className="block text-gray-700 mb-2">
          Assunto *
        </label>
        <select
          id="subject"
          name="subject"
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
        >
          <option value="">Selecione um assunto</option>
          <option value="Consulta Jurídica">Consulta Jurídica</option>
          <option value="Direito Civil">Direito Civil</option>
          <option value="Direito Trabalhista">Direito Trabalhista</option>
          <option value="Direito Penal">Direito Penal</option>
          <option value="Direito Empresarial">Direito Empresarial</option>
          <option value="Direito de Família">Direito de Família</option>
          <option value="Direito Previdenciário">Direito Previdenciário</option>
          <option value="Outros">Outros</option>
        </select>
      </div>
      
      <div>
        <label htmlFor="message" className="block text-gray-700 mb-2">
          Mensagem *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
        ></textarea>
      </div>
      
      <div>
        <Button 
          type="submit" 
          variant="primary" 
          size="lg" 
          disabled={isSubmitting}
          className="w-full md:w-auto"
        >
          {isSubmitting ? 'Enviando...' : 'Enviar Mensagem'}
        </Button>
      </div>
    </form>
  );
};

export default ContactForm;