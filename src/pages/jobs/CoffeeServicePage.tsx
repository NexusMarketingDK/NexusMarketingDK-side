import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight, Coffee } from 'lucide-react';
import HeroSection from '../../components/HeroSection';
import SEO from '../../components/SEO';

const CoffeeServicePage: React.FC = () => {
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
    'Booking af kvalificerede møder med potentielle kaffekunder',
    'Præsentation af professionelle kaffeløsninger til virksomheder',
    'Kvalificering af leads og behovsafdækning',
    'Vedligeholdelse af CRM-system med kundedata',
    'Koordinering med salgsteamet omkring kundebesøg'
  ];

  const requirements = [
    'Erfaring med B2B salg eller mødebooking (en fordel, men ikke et krav)',
    'Stærke kommunikationsevner og god telefonstemme',
    'Struktureret og systematisk arbejdsform',
    'Selvstændig og resultatorienteret tilgang',
    'Interesse for kaffe og serviceløsninger er en fordel'
  ];

  const benefits = [
    'Høj provisions afregning og bonus baseret på bookede møder',
    'Fleksible arbejdstider og mulighed for hjemmearbejde',
    'Grundig oplæring i kaffeløsninger og salgsteknikker',
    'Del af et dynamisk team med højt energiniveau',
    'Gode karrieremuligheder i en voksende virksomhed'
  ];

  const marketHighlights = [
    {
      title: 'Voksende marked',
      description: 'Professionelle kaffeløsninger er i vækst med stigende efterspørgsel fra virksomheder.'
    },
    {
      title: 'Stabil indtjening',
      description: 'Attraktiv provisionsmodel der belønner gode resultater.'
    },
    {
      title: 'Spændende branche',
      description: 'Bliv ekspert i professionelle kaffeløsninger og kvalitetskaffe.'
    }
  ];

  return (
    <>
      <SEO
        title="Mødebooker til Smart Coffee & IoT Kaffeautomater 2026 | Nexus Marketing"
        description="Bliv mødebooker for AI-styrede kaffeautomater, IoT-monitoring og bæredygtige specialty coffee løsninger. Premium kaffeservice med smart teknologi til danske virksomheder."
        canonical="/jobs/coffee-service"
        keywords="smart kaffeautomat 2026, IoT kaffe, AI coffee, specialty coffee, bæredygtig kaffe, mødebooker"
      />

      <HeroSection
        title="Mødebooker til Smart Coffee & IoT Kaffeautomater 2026"
        subtitle="Præsenter AI-styrede kaffeautomater med personalisering, IoT-monitoring, bæredygtig specialty coffee og predictive maintenance. Kaffeoplevelsen møder cutting-edge teknologi."
        ctaText="Ansøg nu"
        ctaLink="#apply"
        backgroundImage="https://images.pexels.com/photos/4820714/pexels-photo-4820714.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=2&fit=crop"
      />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Om stillingen</h2>
              <p className="text-lg text-gray-600">
                Som mødebooker for professionelle kaffeløsninger bliver du en nøglespiller i at skabe kontakt 
                mellem virksomheder og kvalitetskaffe. Du hjælper virksomheder med at finde den perfekte 
                kaffeløsning til deres medarbejdere og kunder.
              </p>
            </div>

            {/* Market Highlights */}
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {marketHighlights.map((highlight, index) => (
                <div key={index} className="bg-amber-50 rounded-lg p-6 text-center">
                  <Coffee className="w-12 h-12 text-amber-800 mx-auto mb-4" />
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
                  title="Jobansøgning - Kaffeservice"
                ></iframe>
              </div>

              {/* SEO Content for Coffee Service Application */}
              <div className="max-w-4xl mx-auto mt-12 px-8">
                <div className="bg-white rounded-lg p-8 shadow-md">
                  <h3 className="text-2xl font-bold mb-6 text-center">Hvorfor Søge Job som Mødebooker i Kaffebranchen?</h3>
                  
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-lg font-semibold mb-4 text-amber-600">Stabil og Voksende Branche</h4>
                      <p className="text-gray-600 mb-4">
                        Kaffebranchen er en af de mest stabile og voksende sektorer i Danmark. Kaffe er ikke bare 
                        en drik - det er en del af dansk arbejdskultur og en vigtig faktor for medarbejdertilfredshed. 
                        Som mødebooker i denne branche arbejder du med produkter, der altid vil være efterspurgte.
                      </p>
                      <p className="text-gray-600">
                        Professionelle kaffeløsninger til virksomheder er et marked i konstant vækst, da flere og 
                        flere virksomheder investerer i kvalitetskaffe for at tiltrække og fastholde talenter. 
                        Dette sikrer stabile jobmuligheder og gode karriereprospekter.
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-semibold mb-4 text-green-600">Meningsfuldt Arbejde med Synlige Resultater</h4>
                      <p className="text-gray-600 mb-4">
                        Som mødebooker for kaffeløsninger hjælper du virksomheder med at forbedre deres 
                        arbejdsmiljø og medarbejdertilfredshed. God kaffe på arbejdspladsen øger produktiviteten, 
                        skaber sociale pauser og bidrager til et positivt arbejdsmiljø.
                      </p>
                      <p className="text-gray-600">
                        Du får mulighed for at arbejde med produkter, der bringer glæde til folks hverdag. 
                        Hver møde du booker kan potentielt forbedre arbejdsdagen for hundredvis af medarbejdere, 
                        hvilket gør dit arbejde både meningsfuldt og motiverende.
                      </p>
                    </div>
                  </div>

                  <div className="mt-8 p-6 bg-amber-50 rounded-lg">
                    <h4 className="text-lg font-semibold mb-4 text-center">Bliv Ekspert i Professionelle Kaffeløsninger</h4>
                    <p className="text-gray-600 text-center mb-4">
                      Som mødebooker får du omfattende viden om professionelle kaffemaskiner, bønner, service 
                      og vedligeholdelse. Du bliver ekspert i at matche den rigtige kaffeløsning til hver 
                      virksomheds specifikke behov og budget.
                    </p>
                    <p className="text-gray-600 text-center">
                      Kaffebranchen tilbyder gode indtjeningsmuligheder, fleksible arbejdsforhold og mulighed 
                      for at arbejde med noget, der bringer glæde til folks hverdag. Ansøg i dag og bliv en 
                      del af Danmarks kaffefællesskab!
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

export default CoffeeServicePage;