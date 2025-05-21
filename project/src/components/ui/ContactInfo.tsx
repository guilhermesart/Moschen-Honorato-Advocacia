import React from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const ContactInfo: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-start">
        <div className="bg-accent/10 p-3 rounded-full mr-4">
          <Phone size={20} className="text-accent" />
        </div>
        <div>
          <h3 className="text-lg font-medium mb-1">Telefones</h3>
          <p className="text-gray-600">99713-3991</p>
        </div>
      </div>
      
      <div className="flex items-start">
        <div className="bg-accent/10 p-3 rounded-full mr-4">
          <Mail size={20} className="text-accent" />
        </div>
        <div>
          <h3 className="text-lg font-medium mb-1">E-mail</h3>
          <p className="text-gray-600">moschenhonoratoadv@gmail.com</p>
          
        </div>
      </div>
      
      {/*  <div className="flex items-start">
        <div className="bg-accent/10 p-3 rounded-full mr-4">
          <MapPin size={20} className="text-accent" />
        </div>
        <div>
          <h3 className="text-lg font-medium mb-1">Endereço</h3>
          <p className="text-gray-600">Endereço</p>
          <p className="text-gray-600">Endereço</p>
        </div>
      </div>*/}
      
      <div className="flex items-start">
        <div className="bg-accent/10 p-3 rounded-full mr-4">
          <Clock size={20} className="text-accent" />
        </div>
        <div>
          <h3 className="text-lg font-medium mb-1">Horário de Atendimento</h3>
          <p className="text-gray-600">9h as 17h</p>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;