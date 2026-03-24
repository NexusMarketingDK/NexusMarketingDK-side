import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight, Zap } from 'lucide-react';
import HeroSection from '../../components/HeroSection';
import SEO from '../../components/SEO';

const EnergySalesPage: React.FC = () => {
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
    'Opsøgende salg af smart energy-løsninger: hjemmebatterier, V2G-systemer og AI-optimering',
    'Rådgivning om energi-selvforsyning, virtual power plants og smart grid integration',
    'Præsentation af moderne teknologier som bidirectional charging og peak shaving',
    'AI-assisteret behovsanalyse og tilbudsudarbejdelse',
    'Koordinering med tech-team omkring installation af avancerede energisystemer'
  ];

  const requirements = [
    'Erfaring med salg til private (B2C) - gerne inden for energi eller telecom',
    'Stærke kommunikationsevner og naturligt drive for salg',
    'Evne til at forklare tekniske løsninger på en enkel måde',
    'Selvstændig og resultatorienteret arbejdstilgang',
    'Kørekort og egen bil er en forudsætning'
  ];

  const benefits = [
    'Høj provisions afregning og bonus',
    'Grundig oplæring i energiløsninger og salgsteknikker'
  ];

  const marketHighlights = [
    {
      title: 'Voksende marked',
      description: 'Energibranchen er i kraftig vækst med øget fokus på grønne løsninger og besparelser.'
    },
    {
      title: 'Attraktive vilkår',
      description: 'Provision baseret på resultater med gode indtjeningsmuligheder.'
    },
    {
      title: 'Karrieremuligheder',
      description: 'Mulighed for at udvikle sig inden for salg og energibranchen.'
    }
  ];

  return (
    <>
      <SEO
        title="Sælger til Smart Energy & Batterilagring 2026 | Nexus Marketing"
        description="Bliv sælger af smart energy-løsninger med AI-optimering, V2G teknologi og hjemmebatterier i 2026. Vi søger engagerede sælgere til at rådgive om moderne energioptimering og selvforsyning."
        canonical="/jobs/energy-sales"
        keywords="smart energy 2026, V2G, hjemmebatteri, AI energioptimering, vehicle-to-grid, energisælger, grøn energi"
      />

      <HeroSection
        title="Sælger til Smart Energy & Batterilagring 2026"
        subtitle="Sælg fremtidens energiløsninger: AI-optimerede systemer, V2G (Vehicle-to-Grid), hjemmebatterier og virtuelle kraftværker. Hjælp familier med at blive energi-selvforsynende."
        ctaText="Ansøg nu"
        ctaLink="#apply"
        backgroundImage="https://images.pexels.com/photos/9875441/pexels-photo-9875441.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=2&fit=crop"
      />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Om stillingen</h2>
              <p className="text-lg text-gray-600">
                Som energisælger får du en central rolle i at hjælpe private husstande med at reducere deres 
                energiforbrug og omkostninger. Du bliver ekspert i energioptimering og rådgiver kunder om de 
                bedste løsninger til deres behov.
              </p>
            </div>

            {/* Market Highlights */}
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {marketHighlights.map((highlight, index) => (
                <div key={index} className="bg-blue-50 rounded-lg p-6 text-center">
                  <Zap className="w-12 h-12 text-blue-600 mx-auto mb-4" />
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
                  title="Jobansøgning - Energisælger"
                ></iframe>
              </div>

              {/* SEO Content for Energy Sales Application */}
              <div className="max-w-4xl mx-auto mt-12 px-8">
                <div className="bg-white rounded-lg p-8 shadow-md">
                  <h3 className="text-2xl font-bold mb-6 text-center">Hvorfor Søge Job som Energisælger i 2025?</h3>
                  
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-lg font-semibold mb-4 text-blue-600">Fremtidssikret Karriere i Vækstbranche</h4>
                      <p className="text-gray-600 mb-4">
                        Energibranchen er en af de hurtigst voksende sektorer i Danmark med stigende fokus på 
                        energieffektivitet og grønne løsninger. Som energisælger positionerer du dig selv i 
                        centrum af den grønne omstilling og arbejder med produkter, der virkelig gør en forskel.
                      </p>
                      <p className="text-gray-600">
                        Med regeringens mål om klimaneutralitet og stigende energipriser er efterspørgslen efter 
                        energioptimering eksploderet. Dette betyder stabile jobmuligheder og gode karriereprospekter 
                        for energisælgere i de kommende år.
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-semibold mb-4 text-green-600">Attraktiv Indtjening og Provision</h4>
                      <p className="text-gray-600 mb-4">
                        Som energisælger har du mulighed for at opnå en meget attraktiv indtjening gennem vores 
                        konkurrencedygtige provisionsmodel. Dygtige sælgere kan tjene betydeligt over gennemsnittet, 
                        da energiløsninger typisk har høje ordreværdier og gode marginer.
                      </p>
                      <p className="text-gray-600">
                        Vores provisionsstruktur belønner både volumen og kvalitet, så du får maksimal betaling 
                        for din indsats. Derudover tilbyder vi bonusordninger og incitamenter, der kan øge din 
                        samlede indtjening betydeligt.
                      </p>
                    </div>
                  </div>

                  <div className="mt-8 p-6 bg-green-50 rounded-lg">
                    <h4 className="text-lg font-semibold mb-4 text-center">Gør en Forskel for Miljøet og Familiers Økonomi</h4>
                    <p className="text-gray-600 text-center mb-4">
                      Som energisælger hjælper du ikke bare med at sælge produkter - du hjælper familier med at 
                      spare penge på deres energiregning og reducere deres CO2-aftryk. Dette gør dit arbejde 
                      meningsfuldt og giver dig en stærk motivation i hverdagen.
                    </p>
                    <p className="text-gray-600 text-center">
                      Med stigende energipriser er der aldrig været et bedre tidspunkt at starte en karriere 
                      som energisælger. Ansøg i dag og bliv en del af den grønne omstilling!
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

export default EnergySalesPage;