import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight, Target, Users, BarChart3, Briefcase } from 'lucide-react';
import HeroSection from '../../components/HeroSection';
import SEO from '../../components/SEO';

const WebBureauPage: React.FC = () => {
  useEffect(() => {
    // Add Tally script
    const script = document.createElement('script');
    script.innerHTML = `var d=document,w="https://tally.so/widgets/embed.js",v=function(){"undefined"!=typeof Tally?Tally.loadEmbeds():d.querySelectorAll("iframe[data-tally-src]:not([src])").forEach((function(e){e.src=e.dataset.tallySrc}))};if("undefined"!=typeof Tally)v();else if(d.querySelector('script[src="'+w+'"]')==null){var s=d.createElement("script");s.src=w,s.onload=v,s.onerror=v,d.body.appendChild(s);}`;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const responsibilities = [
    'Booking af kvalificerede møder med beslutningstagere omkring hjemmesider og SEO-løsninger',
    'Præsentation af professionelle web-løsninger og digitale services',
    'Kvalificering af leads gennem behovsafdækning',
    'Samarbejde med salgsteamet omkring mødeplanlægning',
    'Vedligeholdelse af CRM-system med kundedata',
    'Opfølgning på leads og potentielle kunder'
  ];

  const requirements = [
    'Erfaring med B2B salg eller mødebooking (en fordel)',
    'Stærke kommunikationsevner',
    'Interesse for digitale løsninger og teknologi',
    'Selvstændig og resultatorienteret',
    'Struktureret arbejdsform',
    'Gode IT-kundskaber'
  ];

  const benefits = [
    'Provisionsløn uden grænser og gode ordninger',
    'Grundig oplæring i hjemmeside og SEO produkter samt målgrupper',
    'Moderne kontor i hjertet af Aarhus',
    'Gode karrieremuligheder i en vækstende virksomhed'
  ];

  const highlights = [
    {
      icon: <Target className="w-12 h-12 text-blue-600" />,
      title: 'Ambitiøse mål',
      description: 'Vi vækster kraftigt og søger dygtige mødebookere til at understøtte vores ekspansion inden for hjemmeside og SEO'
    },
    {
      icon: <Users className="w-12 h-12 text-blue-600" />,
      title: 'Stærkt team',
      description: 'Bliv en del af et professionelt team med høj energi og godt sammenhold'
    },
    {
      icon: <BarChart3 className="w-12 h-12 text-blue-600" />,
      title: 'Ubegrænset indtjening',
      description: 'Provisionsløn uden loft med mulighed for at påvirke din egen indtjening'
    }
  ];

  const marketInfo = [
    {
      icon: <Briefcase className="w-12 h-12 text-blue-600" />,
      title: 'Om webbureauet',
      description: 'Vi repræsenterer et etableret digitalt bureau specialiseret i professionelle hjemmesider, SEO-optimering og digital marketing. Med erfarne udviklere og mange tilfredse kunder leverer vi kvalitetsløsninger til danske virksomheder.'
    }
  ];

  return (
    <>
      <SEO
        title="Mødebooker til Webbureau | Nexus Marketing"
        description="Bliv mødebooker for professionelle hjemmesider og SEO-løsninger. Vi tilbyder provisionsløn uden grænser og gode udviklingsmuligheder."
        canonical="/jobs/web-bureau"
        keywords="mødebooker, webbureau, hjemmesider, SEO, digital marketing job, B2B salg"
      />

      <HeroSection
        title="Mødebooker til Webbureau"
        subtitle="Bliv en del af vores team og book møder med virksomheder, der ønsker professionelle hjemmesider og SEO-løsninger."
        ctaText="Ansøg nu"
        ctaLink="#apply"
        backgroundImage="https://images.pexels.com/photos/3182746/pexels-photo-3182746.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=2&fit=crop"
      />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Bliv en del af vores succes inden for hjemmesider og SEO</h2>
              <p className="text-lg text-gray-600">
                Som mødebooker får du en nøglerolle i vores fortsatte vækst inden for hjemmeside og SEO services. 
                Du bliver ansvarlig for at skabe den første kontakt til potentielle kunder og booke kvalificerede 
                møder til vores salgsteam, der specialiserer sig i hjemmesider og SEO-optimering for danske virksomheder.
              </p>
            </div>

            {/* Market Info */}
            <div className="grid md:grid-cols-1 gap-6 mb-12">
              {marketInfo.map((info, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-8 text-center">
                  <div className="flex justify-center mb-4">{info.icon}</div>
                  <h3 className="text-xl font-semibold mb-3">{info.title}</h3>
                  <p className="text-gray-600">{info.description}</p>
                </div>
              ))}
            </div>

            {/* Highlights */}
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {highlights.map((highlight, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md p-6 text-center">
                  <div className="flex justify-center mb-4">{highlight.icon}</div>
                  <h3 className="text-lg font-semibold mb-2">{highlight.title}</h3>
                  <p className="text-gray-600 text-sm">{highlight.description}</p>
                </div>
              ))}
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div>
                <h3 className="text-xl font-semibold mb-4">Dine arbejdsopgaver</h3>
                <ul className="space-y-3">
                  {responsibilities.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="text-green-500 mr-2 mt-1 flex-shrink-0" size={20} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Vi forventer</h3>
                <ul className="space-y-3">
                  {requirements.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="text-green-500 mr-2 mt-1 flex-shrink-0" size={20} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="bg-blue-50 rounded-lg p-8 mb-12">
              <h3 className="text-xl font-semibold mb-4">Vi tilbyder</h3>
              <ul className="space-y-3">
                {benefits.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="text-green-500 mr-2 mt-1 flex-shrink-0" size={20} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Success Stories */}
            <div className="mb-12">
              <h3 className="text-xl font-semibold mb-6 text-center">Det siger vores medarbejdere</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <blockquote className="text-gray-600 italic mb-4">
                    "Det bedste ved jobbet er kombinationen af faglige udfordringer og det sociale miljø. 
                    Her er højt til loftet og masser af muligheder for at udvikle sig inden for hjemmeside og SEO."
                  </blockquote>
                  <p className="font-medium">- Maria H., Senior Mødebooker</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <blockquote className="text-gray-600 italic mb-4">
                    "Jeg startede som mødebooker for 2 år siden og er siden blevet forfremmet til teamleder. 
                    Her er der virkelig mulighed for at gøre karriere, hvis man vil."
                  </blockquote>
                  <p className="font-medium">- Peter K., Team Lead</p>
                </div>
              </div>
            </div>

            {/* Application Form */}
            <section id="apply" className="py-16 bg-gray-50 rounded-lg">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold mb-4">Ansøg om stillingen</h2>
                <p className="text-lg text-gray-600">
                  Udfyld formularen nedenfor, så kontakter vi dig hurtigst muligt.
                </p>
              </div>
              
              <div className="max-w-2xl mx-auto">
                <iframe 
                  data-tally-src="https://tally.so/embed/3qpMbY?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1" 
                  loading="lazy" 
                  width="100%" 
                  height="400" 
                  frameBorder="0" 
                  marginHeight="0" 
                  marginWidth="0" 
                  title="Jobansøgning - Web Bureau"
                ></iframe>
              </div>

              {/* SEO Content for Web Bureau Application */}
              <div className="max-w-4xl mx-auto mt-12 px-8">
                <div className="bg-white rounded-lg p-8 shadow-md">
                  <h3 className="text-2xl font-bold mb-6 text-center">Hvorfor Søge Job som Mødebooker for Hjemmeside & SEO Løsninger?</h3>
                  
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-lg font-semibold mb-4 text-blue-600">Karriere i den Digitale Fremtid med Hjemmesider og SEO</h4>
                      <p className="text-gray-600 mb-4">
                        Som mødebooker for hjemmeside og SEO løsninger får du en unik mulighed for at være en del af 
                        den digitale transformation, der sker i erhvervslivet. Du arbejder med hjemmesider, SEO-optimering 
                        og digitale marketingløsninger, der virkelig gør en forskel for danske virksomheders online synlighed.
                      </p>
                      <p className="text-gray-600">
                        Hjemmesider og SEO er fundamentet for enhver moderne virksomheds digitale tilstedeværelse. Ved at 
                        arbejde med disse services positionerer du dig selv i centrum af den teknologiske udvikling og 
                        får værdifuld erfaring inden for digital marketing og søgemaskineoptimering.
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-semibold mb-4 text-green-600">Provisionsløn Uden Grænser</h4>
                      <p className="text-gray-600 mb-4">
                        Med vores provisionsløn uden grænser har du mulighed for at opnå en exceptionel indtjening. 
                        Hjemmeside og SEO projekter har typisk høje ordreværdier, hvilket betyder attraktive provisioner 
                        for dygtige mødebookere. Jo flere kvalificerede møder du booker, jo højere bliver din indtjening.
                      </p>
                      <p className="text-gray-600">
                        Bureauet investerer kraftigt i sine medarbejderes succes med omfattende træning i hjemmeside og 
                        SEO services, moderne værktøjer og et supportivt miljø. Dette betyder, at du har alle 
                        forudsætninger for at lykkes og maksimere din indtjening uden begrænsninger.
                      </p>
                    </div>
                  </div>

                  <div className="mt-8 p-6 bg-blue-50 rounded-lg">
                    <h4 className="text-lg font-semibold mb-4 text-center">Hjælp Danske Virksomheder med Digital Succes</h4>
                    <p className="text-gray-600 text-center mb-4">
                      Som mødebooker for hjemmeside og SEO løsninger hjælper du danske virksomheder med at forbedre 
                      deres online tilstedeværelse, øge deres synlighed på Google og tiltrække flere kunder gennem 
                      professionelle hjemmesider og effektiv SEO-optimering.
                    </p>
                    <p className="text-gray-600 text-center">
                      Dette er mere end bare et job - det er en mulighed for at blive ekspert i hjemmesider og SEO, 
                      arbejde med Danmarks mest innovative digitale løsninger og hjælpe virksomheder med at vækste 
                      online. Ansøg i dag og bliv en del af Danmarks digitale elite!
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </section>
    </>
  );
};

export default WebBureauPage;