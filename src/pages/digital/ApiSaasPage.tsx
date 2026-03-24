import React from 'react';
import { Link } from 'react-router-dom';
import { Cloud, CheckCircle, ArrowRight, Server, Lock, Repeat } from 'lucide-react';
import HeroSection from '../../components/HeroSection';
import SEO from '../../components/SEO';

const ApiSaasPage: React.FC = () => {
  const services = [
    {
      icon: <Server className="w-12 h-12 text-blue-600" />,
      title: 'API Udvikling',
      description: 'Skræddersyede API-løsninger der forbinder systemer og automatiserer processer.'
    },
    {
      icon: <Cloud className="w-12 h-12 text-blue-600" />,
      title: 'SaaS Platforme',
      description: 'Udvikling af cloud-baserede software-as-a-service løsninger.'
    },
    {
      icon: <Lock className="w-12 h-12 text-blue-600" />,
      title: 'Sikkerhed',
      description: 'Implementering af robust sikkerhed og authentication.'
    },
    {
      icon: <Repeat className="w-12 h-12 text-blue-600" />,
      title: 'Integration',
      description: 'Seamless integration med eksisterende systemer og tredjepartstjenester.'
    }
  ];

  const features = [
    'RESTful og GraphQL APIs',
    'Mikroservice arkitektur',
    'Cloud-native løsninger',
    'Automatiseret testing',
    'CI/CD pipelines',
    'Skalerbar infrastruktur'
  ];

  const benefits = [
    'Reducerede udviklingsomkostninger',
    'Hurtigere time-to-market',
    'Øget fleksibilitet og skalerbarhed',
    'Forbedret sikkerhed',
    'Optimeret performance',
    '24/7 oppetid og support'
  ];

  return (
    <>
      <SEO 
        title="API & SaaS Udvikling | Cloud-baserede Løsninger | Nexus Marketing"
        description="Professionel udvikling af API'er og SaaS-platforme. Vi hjælper din virksomhed med at bygge skalerbare cloud-løsninger og systemintegrationer."
        canonical="/digital/api-saas"
      />

      <HeroSection
        title="API & SaaS Udvikling"
        subtitle="Skræddersyede API'er og cloud-baserede softwareløsninger der automatiserer processer og øger effektiviteten i din virksomhed."
        ctaText="Få et uforpligtende tilbud"
        ctaLink="/contact"
        backgroundImage="https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">API & SaaS Services</h2>
              <p className="text-lg text-gray-600">
                Vi udvikler robuste API'er og cloud-baserede softwareløsninger der hjælper din virksomhed 
                med at automatisere processer og skalere effektivt.
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
                <h3 className="text-2xl font-bold mb-6">Tekniske Features</h3>
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
                  src="https://images.pexels.com/photos/1181354/pexels-photo-1181354.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="Cloud computing and API development"
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
              <h2 className="text-3xl font-bold mb-4">Klar til at modernisere din forretning?</h2>
              <p className="text-lg text-gray-600 mb-8">
                Lad os hjælpe dig med at udvikle den perfekte API eller SaaS-løsning til din virksomhed.
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

export default ApiSaasPage;