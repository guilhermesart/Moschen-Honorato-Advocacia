import React from 'react';
import Layout from '../components/layout/Layout';
import SectionTitle from '../components/ui/SectionTitle';
import { Shield, Award, Users, Scale, Target, Heart } from 'lucide-react';

const About: React.FC = () => {
  return (
    <Layout>
      <div className="bg-primary pt-32 pb-16">
        <div className="container mx-auto px-4 md:px-6">
          <SectionTitle 
            title="Quem Somos" 
            subtitle="Nossa história, missão, visão e valores"
            light
            center
          />
        </div>
      </div>

      {/* Historia Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-serif font-bold mb-6 text-primary">Nossa História</h2>
              <p className="text-gray-600 mb-6">
                   Fundado em janeiro de 2025 pelos advogados André Moschen e Pâmela Honorato, nosso escritório nasceu com o compromisso de oferecer soluções jurídicas personalizadas, eficazes e                    pautadas na ética e na excelência profissional. Com atuação especializada em Direito Civil e Consumidor, Direito trabalhista, Direito Previdenciário. construímos uma base                         sólida desde o início, prestando assessoria tanto em processos judiciais quanto extrajudiciais.
              </p>
              <p className="text-gray-600 mb-6">
               Nosso diferencial está na dedicação individual a cada caso, no atendimento humanizado e na busca constante por atualização e inovação no exercício da advocacia. Estamos prontos                   para atuar com firmeza, responsabilidade e comprometimento na defesa dos interesses dos nossos clientes.
              </p>
              <p className="text-gray-600">
               Nosso propósito vai além da defesa técnica: buscamos contribuir com a tranquilidade jurídica dos nossos clientes, oferecendo suporte integral em momentos decisivos da vida pessoal                e empresarial. Estamos preparados para enfrentar os desafios do presente com os olhos voltados para o futuro, sempre com profissionalismo, responsabilidade e paixão pela                          advocacia.
              </p>
            </div>
            <div className="relative">
              <div className="rounded-lg overflow-hidden shadow-xl">
                <img 
                  src="https://images.pexels.com/photos/5668859/pexels-photo-5668859.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                  alt="História do escritório" 
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-accent rounded-lg hidden lg:block" style={{ zIndex: -1 }}></div>
            </div>
          </div>
        </div>
      </section>

      {/* Missão, Visão e Valores */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="bg-primary/10 p-4 inline-flex rounded-full mb-4">
                <Target className="text-primary" size={24} />
              </div>
              <h3 className="text-2xl font-serif font-bold mb-4 text-primary">Missão</h3>
              <p className="text-gray-600">
                Oferecer soluções jurídicas eficientes e personalizadas, com excelência técnica e 
                comprometimento ético, contribuindo para a defesa dos direitos e interesses de nossos 
                clientes, bem como para a promoção da justiça na sociedade.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="bg-primary/10 p-4 inline-flex rounded-full mb-4">
                <Eye className="text-primary" size={24} />
              </div>
              <h3 className="text-2xl font-serif font-bold mb-4 text-primary">Visão</h3>
              <p className="text-gray-600">
                Ser reconhecido como escritório de referência em excelência jurídica, inovação e 
                resultados, destacando-se pelo relacionamento duradouro com os clientes e pela 
                contribuição ao desenvolvimento do Direito e da sociedade.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="bg-primary/10 p-4 inline-flex rounded-full mb-4">
                <Heart className="text-primary" size={24} />
              </div>
              <h3 className="text-2xl font-serif font-bold mb-4 text-primary">Valores</h3>
              <ul className="text-gray-600 space-y-2">
                <li className="flex items-center">
                  <div className="h-2 w-2 bg-accent rounded-full mr-2"></div>
                  <span>Ética e transparência em todas as ações</span>
                </li>
                <li className="flex items-center">
                  <div className="h-2 w-2 bg-accent rounded-full mr-2"></div>
                  <span>Excelência técnica e atualização constante</span>
                </li>
                <li className="flex items-center">
                  <div className="h-2 w-2 bg-accent rounded-full mr-2"></div>
                  <span>Comprometimento com resultados</span>
                </li>
                <li className="flex items-center">
                  <div className="h-2 w-2 bg-accent rounded-full mr-2"></div>
                  <span>Respeito e valorização do cliente</span>
                </li>
                <li className="flex items-center">
                  <div className="h-2 w-2 bg-accent rounded-full mr-2"></div>
                  <span>Responsabilidade social</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Diferenciais */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <SectionTitle 
            title="Nossos Diferenciais" 
            subtitle="Por que escolher o escritório Mosch & Honorato"
            center
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <div className="bg-primary/10 p-6 inline-flex rounded-full mb-6">
                <Users className="text-primary" size={32} />
              </div>
              <h3 className="text-xl font-medium mb-4 text-primary">Equipe Especializada</h3>
              <p className="text-gray-600">
                Profissionais altamente qualificados e especializados em diversas áreas do Direito, 
                garantindo atendimento técnico de excelência.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-primary/10 p-6 inline-flex rounded-full mb-6">
                <Scale className="text-primary" size={32} />
              </div>
              <h3 className="text-xl font-medium mb-4 text-primary">Atendimento Personalizado</h3>
              <p className="text-gray-600">
                Dedicamos tempo e atenção a cada cliente, entendendo suas necessidades específicas 
                e desenvolvendo estratégias sob medida.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-primary/10 p-6 inline-flex rounded-full mb-6">
                <Shield className="text-primary" size={32} />
              </div>
              <h3 className="text-xl font-medium mb-4 text-primary">Ética e Transparência</h3>
              <p className="text-gray-600">
                Atuamos com integridade, honestidade e clareza em todas as etapas do processo, 
                mantendo o cliente sempre informado.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-primary/10 p-6 inline-flex rounded-full mb-6">
                <FileText className="text-primary" size={32} />
              </div>
              <h3 className="text-xl font-medium mb-4 text-primary">Comunicação Clara</h3>
              <p className="text-gray-600">
                Traduzimos a linguagem jurídica de forma acessível, garantindo que nossos clientes 
                compreendam todos os aspectos de seus casos.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-primary/10 p-6 inline-flex rounded-full mb-6">
                <Clock className="text-primary" size={32} />
              </div>
              <h3 className="text-xl font-medium mb-4 text-primary">Agilidade</h3>
              <p className="text-gray-600">
                Resposta rápida às demandas e necessidades dos clientes, com eficiência no 
                desenvolvimento e condução dos processos.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-primary/10 p-6 inline-flex rounded-full mb-6">
                <Award className="text-primary" size={32} />
              </div>
              <h3 className="text-xl font-medium mb-4 text-primary">Excelência Técnica</h3>
              <p className="text-gray-600">
                Investimento constante em aperfeiçoamento profissional e atualização sobre 
                jurisprudência e mudanças legislativas.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

const FileText: React.FC<{ size: number; className: string }> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={props.className}
  >
    <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
    <polyline points="14 2 14 8 20 8" />
    <line x1="16" y1="13" x2="8" y2="13" />
    <line x1="16" y1="17" x2="8" y2="17" />
    <line x1="10" y1="9" x2="8" y2="9" />
  </svg>
);

const Clock: React.FC<{ size: number; className: string }> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={props.className}
  >
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
);

const Eye: React.FC<{ size: number; className: string }> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={props.className}
  >
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

export default About;