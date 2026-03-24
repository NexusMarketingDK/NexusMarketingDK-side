import React from 'react';
import { Link } from 'react-router-dom';
import { Brain, CheckCircle, ArrowRight, MessageSquare, Bot, Cpu } from 'lucide-react';
import HeroSection from '../../components/HeroSection';
import SEO from '../../components/SEO';

const AiIntegrationPage: React.FC = () => {
  const services = [
    {
      icon: <MessageSquare className="w-12 h-12 text-blue-600" />,
      title: 'Chatbots & Assistenter',
      description: 'Intelligente chatbots og virtuelle assistenter til kundeservice og support.'
    },
    {
      icon: <Bot className="w-12 h-12 text-blue-600" />,
      title: 'Process Automation',
      description: 'Automatisering af arbejdsgange med AI-drevne løsninger.'
    },
    {
      icon: <Brain className="w-12 h-12 text-blue-600" />,
      title: 'Machine Learning',
      description: 'Implementering af ML-modeller til dataanalyse og prædiktion.'
    },
    {
      icon: <Cpu className="w-12 h-12 text-blue-600" />,
      title: 'AI Integration',
      description: 'Integration af AI-teknologier i eksisterende systemer.'
    }
  ];

  const features = [
    'Natural Language Processing',
    'Predictive Analytics',
    'Computer Vision',
    'Sentiment Analysis',
    'Automated Decision Making',
    'Real-time Processing'
  ];

  const benefits = [
    'Øget effektivitet',
    'Reducerede omkostninger',
    'Forbedret kundeservice',
    'Datadrevne beslutninger',
    '24/7 tilgængelighed',
    'Skalerbar løsning'
  ];

  return (
    <>
      <SEO 
        title="AI Integration & Kunstig Intelligens | Nexus Marketing"
        description="Integrer kunstig intelligens i din forretning. Vi hjælper med implementering af AI-løsninger der automatiserer processer og forbedrer kundeservice."
        canonical="/digital/ai-integration"
      />

      <HeroSection
        title="AI Integration & Kunstig Intelligens"
        subtitle="Udnyt potentialet i kunstig intelligens med skræddersyede AI-løsninger der automatiserer processer og skaber værdi for din virksomhed."
        ctaText="Få et uforpligtende tilbud"
        ctaLink="/contact"
        backgroundImage="https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">AI-løsninger til din Virksomhed</h2>
              <p className="text-lg text-gray-600">
                Vi hjælper din virksomhed med at implementere og udnytte kunstig intelligens 
                gennem skræddersyede løsninger der skaber målbare resultater.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-16">
              {services.map((service, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-6">
                  <div className="mb-4">{service.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              ))}
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h3 className="text-2xl font-bold mb-6">AI Teknologier</h3>
                <div className="space-y-4">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-center">
                      <CheckCircle className="text-green-500 mr-3" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <img 
                  src="https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="AI and machine learning"
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>

            <div className="bg-blue-50 rounded-lg p-8 mb-16">
              <h3 className="text-2xl font-bold mb-6">Forretningsmæssige fordele</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="text-green-500 mr-3" />
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="text-center">
              <h2 className="text-3xl font-bold mb-4">Klar til at implementere AI?</h2>
              <p className="text-lg text-gray-600 mb-8">
                Lad os hjælpe dig med at udnytte potentialet i kunstig intelligens og skabe værdi for din virksomhed.
              </p>
              <Link 
                to="/contact" 
                className="btn btn-primary inline-flex items-center"
              >
                Kontakt os <ArrowRight size={20} className="ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AiIntegrationPage;