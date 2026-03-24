import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight, Sun } from 'lucide-react';
import HeroSection from '../../components/HeroSection';
import SEO from '../../components/SEO';

const SolarEnergyPage: React.FC = () => {
  useEffect(() => {
    // Add Tally script
    const script = document.createElement('script');
    script.innerHTML = `var d=document,w="https://tally.so/widgets/embed.js",v=function(){"undefined"!=typeof Tally?Tally.loadEmbeds():d.querySelectorAll("iframe[data-tally-src]:not([src])").forEach((function(e){e.src=e.dataset.tallySrc}))};if("undefined"!=typeof Tally)v();else if(d.querySelector('script[src="'+w='"]')==null){var s=d.createElement("script");s.src=w,s.onload=v,s.onerror=v,d.body.appendChild(s);}`;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const responsibilities = [
    'Booking af kvalificerede møder med potentielle solcellekunder',
    'Præsentation af grønne energiløsninger og deres fordele',
    'Screening og kvalificering af leads',
    'Koordinering med salgsteamet omkring mødeplanlægning',
    'Vedligeholdelse af CRM-system med kundedata'
  ];

  const requirements = [
    'Erfaring med B2B/B2C salg eller mødebooking (en fordel, men ikke et krav)',
    'Stærke kommunikationsevner og overbevisende telefonstemme',
    'Interesse for vedvarende energi og grøn omstilling',
    'Selvstændig og resultatorienteret arbejdstilgang',
    'Struktureret og systematisk i din arbejdsform'
  ];

  const benefits = [
    'Høj provisions afregning og bonus baseret på bookede møder',
    'Fleksible arbejdstider og mulighed for hjemmearbejde',
    'Grundig oplæring i solcelleløsninger og salgsteknikker',
    'Del af et engageret team i en voksende grøn industri',
    'Gode karrieremuligheder i en fremtidssikret branche'
  ];

  const marketHighlights = [
    {
      title: 'Voksende marked',
      description: 'Solcellebranchen oplever kraftig vækst med stigende efterspørgsel fra både private og erhverv.'
    },
    {
      title: 'Grøn omstilling',
      description: 'Du bidrager aktivt til den grønne omstilling og hjælper kunder med at reducere deres CO2-aftryk.'
    },
    {
      title: 'Fremtidssikret job',
      description: 'Vedvarende energi er fremtiden, og efterspørgslen efter kvalificerede medarbejdere stiger.'
    }
  ];

  return (
    <>
      <SEO
        title="Mødebooker til Perovskite Solceller & Energilagring 2026 | Nexus Marketing"
        description="Bliv mødebooker for næste generation solceller med 35% effektivitet, bi-facial panels og AI-optimeret energilagring. Fremtidens vedvarende energi til danske familier og virksomheder."
        canonical="/jobs/solar-energy"
        keywords="perovskite solceller 2026, bi-facial solar, energilagring, AI solar, tandem solceller, grøn energi, mødebooker"
      />

      <HeroSection
        title="Mødebooker til Perovskite Solceller & Energilagring 2026"
        subtitle="Præsenter cutting-edge solteknologi: Perovskite-silicium tandem celler med 35% effektivitet, bi-facial panels og AI-optimeret batterilagring. Fremtidens solenergi er her."
        ctaText="Ansøg nu"
        ctaLink="#apply"
        backgroundImage="https://images.pexels.com/photos/356036/pexels-photo-356036.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Om stillingen</h2>
              <p className="text-lg text-gray-600">
                Som mødebooker inden for solceller og vedvarende energi får du en nøglerolle i at hjælpe 
                virksomheder og private med at træffe bæredygtige energivalg. Du bliver bindeleddet mellem 
                potentielle kunder og vores eksperter i vedvarende energiløsninger.
              </p>
            </div>

            {/* Market Highlights */}
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {marketHighlights.map((highlight, index) => (
                <div key={index} className="bg-blue-50 rounded-lg p-6 text-center">
                  <Sun className="w-12 h-12 text-blue-600 mx-auto mb-4" />
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

            <div className="bg-gray-50 rounded-lg p-8 mb-12">
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
                  title="Jobansøgning - Solenergi"
                ></iframe>
              </div>

              {/* SEO Content for Solar Energy Application */}
              <div className="max-w-4xl mx-auto mt-12 px-8">
                <div className="bg-white rounded-lg p-8 shadow-md">
                  <h3 className="text-2xl font-bold mb-6 text-center">Hvorfor Søge Job som Mødebooker i Solcellebranchen?</h3>
                  
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-lg font-semibold mb-4 text-blue-600">Vær en Del af den Grønne Revolution</h4>
                      <p className="text-gray-600 mb-4">
                        Solcellebranchen er i centrum af den grønne omstilling, og som mødebooker bliver du en 
                        aktiv del af kampen mod klimaforandringer. Du hjælper virksomheder og private med at 
                        reducere deres CO2-aftryk og blive mere selvforsynende med ren energi.
                      </p>
                      <p className="text-gray-600">
                        Hver møde du booker kan potentielt føre til installation af solceller, der producerer 
                        ren energi i 25+ år. Dette gør dit arbejde ekstraordinært meningsfuldt og giver dig 
                        en stærk motivation i hverdagen.
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-semibold mb-4 text-green-600">Fremtidssikret Karriere med Høj Vækst</h4>
                      <p className="text-gray-600 mb-4">
                        Solcellebranchen oplever eksplosiv vækst med stigende efterspørgsel fra både private 
                        og erhverv. Regeringens klimamål og EU's grønne omstilling sikrer, at denne branche 
                        vil fortsætte med at vokse kraftigt i de kommende årtier.
                      </p>
                      <p className="text-gray-600">
                        Som mødebooker i solcellebranchen positionerer du dig selv i en fremtidssikret karriere 
                        med gode indtjeningsmuligheder og mulighed for professionel udvikling. Branchen tilbyder 
                        også gode muligheder for at specialisere sig og avancere til lederstillinger.
                      </p>
                    </div>
                  </div>

                  <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-green-50 rounded-lg">
                    <h4 className="text-lg font-semibold mb-4 text-center">Bidrag til Danmarks Energiuafhængighed</h4>
                    <p className="text-gray-600 text-center mb-4">
                      Som mødebooker for solcelleløsninger hjælper du Danmark med at blive mere energiuafhængig 
                      og reducere afhængigheden af fossile brændstoffer. Du er med til at skabe en mere 
                      bæredygtig og sikker energiforsyning for fremtidige generationer.
                    </p>
                    <p className="text-gray-600 text-center">
                      Solcellebranchen tilbyder ikke bare et job - det tilbyder en mission. Ansøg i dag og 
                      bliv en del af Danmarks grønne fremtid!
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

export default SolarEnergyPage;