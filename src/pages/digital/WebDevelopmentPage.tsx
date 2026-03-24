import React from 'react';
import { Link } from 'react-router-dom';
import { Code, CheckCircle, ArrowRight, Database, Shield, Zap } from 'lucide-react';
import HeroSection from '../../components/HeroSection';
import SEO from '../../components/SEO';

const WebDevelopmentPage: React.FC = () => {
  const services = [
    {
      icon: <Code className="w-12 h-12 text-blue-600" />,
      title: 'Frontend Udvikling',
      description: 'Moderne og responsive brugergrænseflader med fokus på brugeroplevelse og performance.'
    },
    {
      icon: <Database className="w-12 h-12 text-blue-600" />,
      title: 'Backend Udvikling',
      description: 'Skalerbare og sikre backend-løsninger der understøtter din forretning.'
    },
    {
      icon: <Shield className="w-12 h-12 text-blue-600" />,
      title: 'Sikkerhed & Performance',
      description: 'Implementering af bedste praksis for sikkerhed og optimering af ydeevne.'
    },
    {
      icon: <Zap className="w-12 h-12 text-blue-600" />,
      title: 'API Integration',
      description: 'Seamless integration med eksterne systemer og APIs.'
    }
  ];

  const technologies = [
    'React & Next.js',
    'Node.js & Express',
    'TypeScript',
    'PostgreSQL & MongoDB',
    'AWS & Azure',
    'Docker & Kubernetes'
  ];

  const benefits = [
    'Skræddersyede løsninger til din forretning',
    'Agil udviklingsproces med løbende leverancer',
    'Fokus på skalerbarhed og vedligeholdelse',
    'Omfattende test og kvalitetssikring',
    'Teknisk support og vedligeholdelse',
    'Dokumentation og vidensdeling'
  ];

  return (
    <>
      <SEO 
        title="Webudvikling | Skræddersyede Digitale Løsninger | Nexus Marketing"
        description="Professionel webudvikling med fokus på kvalitet, sikkerhed og brugeroplevelse. Vi udvikler skræddersyede løsninger der understøtter din forretning."
        canonical="/digital/web-development"
      />

      <HeroSection
        title="Professionel Webudvikling"
        subtitle="Vi udvikler skræddersyede webløsninger der hjælper din virksomhed med at vækste digitalt. Moderne teknologier, høj kvalitet og fokus på brugeroplevelsen."
        ctaText="Få et uforpligtende tilbud"
        ctaLink="/kontakt"
        backgroundImage="https://images.pexels.com/photos/3182781/pexels-photo-3182781.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Vores Webudviklingsservices</h2>
              <p className="text-lg text-gray-600">
                Vi tilbyder full-stack webudvikling med fokus på kvalitet, sikkerhed og skalerbarhed. 
                Vores team af erfarne udviklere hjælper dig med at realisere dine digitale ambitioner.
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
                <h3 className="text-2xl font-bold mb-6">Moderne Teknologier</h3>
                <div className="space-y-4">
                  {technologies.map((tech, index) => (
                    <div key={index} className="flex items-center">
                      <CheckCircle className="text-green-500 mr-3" />
                      <span>{tech}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <img 
                  src="https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="Modern web development"
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>

            <div className="bg-blue-50 rounded-lg p-8 mb-16">
              <h3 className="text-2xl font-bold mb-6">Fordele ved at vælge os</h3>
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
              <h2 className="text-3xl font-bold mb-4">Klar til at starte dit projekt?</h2>
              <p className="text-lg text-gray-600 mb-8">
                Kontakt os i dag for en uforpligtende snak om dine behov og hvordan vi kan hjælpe.
              </p>
              <Link 
                to="/kontakt" 
                className="btn btn-primary inline-flex items-center"
              >
                Få et tilbud <ArrowRight size={20} className="ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WebDevelopmentPage;