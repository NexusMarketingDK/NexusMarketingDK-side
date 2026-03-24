import React from 'react';
import { Link } from 'react-router-dom';
import { Lightbulb, CheckCircle, ArrowRight, Target, Users, BarChart } from 'lucide-react';
import HeroSection from '../../components/HeroSection';
import SEO from '../../components/SEO';

const ProjectDevelopmentPage: React.FC = () => {
  const services = [
    {
      icon: <Lightbulb className="w-12 h-12 text-blue-600" />,
      title: 'Konceptudvikling',
      description: 'Fra idé til konkret projektplan med fokus på forretningsmæssig værdi.'
    },
    {
      icon: <Target className="w-12 h-12 text-blue-600" />,
      title: 'Strategisk Planlægning',
      description: 'Detaljeret projektplanlægning med klare mål og milepæle.'
    },
    {
      icon: <Users className="w-12 h-12 text-blue-600" />,
      title: 'Agil Udvikling',
      description: 'Fleksibel og iterativ udviklingsproces med løbende leverancer.'
    },
    {
      icon: <BarChart className="w-12 h-12 text-blue-600" />,
      title: 'Resultatstyring',
      description: 'Kontinuerlig opfølgning og optimering af projektets resultater.'
    }
  ];

  const process = [
    'Indledende behovsanalyse',
    'Strategisk planlægning',
    'Design og arkitektur',
    'Agil udvikling',
    'Test og kvalitetssikring',
    'Implementering og udrulning'
  ];

  const benefits = [
    'Erfarne projektledere og udviklere',
    'Fokus på forretningsmæssig værdi',
    'Transparent kommunikation',
    'Agil og fleksibel tilgang',
    'Løbende leverancer og feedback',
    'Support efter lancering'
  ];

  return (
    <>
      <SEO 
        title="Projektudvikling | Digital Transformation | Nexus Marketing"
        description="Professionel projektudvikling med fokus på digitale løsninger. Vi hjælper din virksomhed fra idé til færdigt produkt med erfaren projektstyring."
        canonical="/digital/project-development"
      />

      <HeroSection
        title="Professionel Projektudvikling"
        subtitle="Vi hjælper din virksomhed med at realisere digitale projekter gennem erfaren projektstyring og agil udvikling."
        ctaText="Start dit projekt"
        ctaLink="/contact"
        backgroundImage="https://images.pexels.com/photos/3183183/pexels-photo-3183183.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Projektudvikling med Fokus på Resultater</h2>
              <p className="text-lg text-gray-600">
                Vi kombinerer strategisk projektledelse med agil udvikling for at sikre succesfuld 
                implementering af dine digitale projekter.
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
                <h3 className="text-2xl font-bold mb-6">Vores Proces</h3>
                <div className="space-y-4">
                  {process.map((step, index) => (
                    <div key={index} className="flex items-center">
                      <CheckCircle className="text-green-500 mr-3" />
                      <span>{step}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <img 
                  src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="Project development and management"
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>

            <div className="bg-blue-50 rounded-lg p-8 mb-16">
              <h3 className="text-2xl font-bold mb-6">Derfor skal du vælge os</h3>
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
              <h2 className="text-3xl font-bold mb-4">Klar til at starte dit næste projekt?</h2>
              <p className="text-lg text-gray-600 mb-8">
                Kontakt os for en uforpligtende snak om, hvordan vi kan hjælpe med at realisere dit projekt.
              </p>
              <Link 
                to="/contact" 
                className="btn btn-primary inline-flex items-center"
              >
                Kontakt os nu <ArrowRight size={20} className="ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProjectDevelopmentPage;