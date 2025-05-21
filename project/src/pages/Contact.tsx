import React from 'react';
import Layout from '../components/layout/Layout';
import SectionTitle from '../components/ui/SectionTitle';
import ContactForm from '../components/ui/ContactForm';
import ContactInfo from '../components/ui/ContactInfo';

const Contact: React.FC = () => {
  return (
    <Layout>
      <div className="bg-primary pt-32 pb-16">
        <div className="container mx-auto px-4 md:px-6">
          <SectionTitle 
            title="Contato" 
            subtitle="Entre em contato conosco para uma consulta"
            light
            center
          />
        </div>
      </div>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-serif font-bold text-primary mb-6">
                Como podemos ajudar?
              </h2>
              <p className="text-gray-600 mb-8">
                Preencha o formulário ao lado para entrar em contato conosco. 
                Nossa equipe está pronta para responder suas dúvidas e agendar uma consulta 
                com o especialista mais adequado para o seu caso.
              </p>
              
              <ContactInfo />
            </div>
            
            <div>
              <div className="bg-gray-50 p-8 rounded-lg shadow-md">
                <h2 className="text-2xl font-serif font-bold text-primary mb-6">
                  Envie sua mensagem
                </h2>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-2xl font-serif font-bold text-primary mb-8 text-center">
            Nosso Escritório
          </h2>
          
          <div className="rounded-lg overflow-hidden shadow-lg">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.0976521080233!2d-46.65679632446194!3d-23.5632475672325!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c8da0aa315%3A0xd59f9431f2c9776a!2sAv.%20Paulista%20-%20Bela%20Vista%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1712607456981!5m2!1spt-BR!2sbr" 
              width="100%" 
              height="450" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização do escritório"
            ></iframe>
          </div>
        </div>
      </section>*/}
    </Layout>
  );
};

export default Contact;