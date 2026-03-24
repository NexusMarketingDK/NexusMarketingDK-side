import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight, Lightbulb, Zap, Building, Leaf, Brain, Shield } from 'lucide-react';
import HeroSection from '../../components/HeroSection';
import SEO from '../../components/SEO';

const LedLightingPage: React.FC = () => {
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
    'Booking af kvalificerede møder med beslutningstagere i virksomheder omkring LED-belysningsløsninger',
    'Præsentation af innovative og energieffektive LED-produkter til erhvervsmarkedet',
    'Kvalificering af leads gennem grundig behovsafdækning omkring belysningsbehov',
    'Koordinering med salgsteamet omkring mødeplanlægning og kundebesøg',
    'Vedligeholdelse af CRM-system med opdaterede kundedata og projektinformation',
    'Opfølgning på leads og potentielle kunder inden for belysningsbranchen'
  ];

  const requirements = [
    'Erfaring med B2B salg eller mødebooking (en fordel, men ikke et krav)',
    'Stærke kommunikationsevner og overbevisende telefonstemme',
    'Interesse for innovative teknologier og energieffektive løsninger',
    'Selvstændig og resultatorienteret arbejdstilgang',
    'Struktureret og systematisk i din arbejdsform',
    'Forståelse for værdien af bæredygtige løsninger og energibesparelser'
  ];

  const benefits = [
    'Høj provisions afregning og bonus pr. booket møde',
    'Fleksible arbejdstider med mulighed for hjemmearbejde',
    'Grundig oplæring i LED-teknologi og belysningsløsninger',
    'Del af et innovativt team i en teknologisk førende virksomhed',
    'Gode karrieremuligheder i en voksende og fremtidssikret branche',
    'Mulighed for at arbejde med bæredygtige og miljøvenlige produkter'
  ];

  const companyHighlights = [
    {
      icon: <Lightbulb className="w-12 h-12 text-yellow-600" />,
      title: 'Innovative LED-løsninger',
      description: 'Arbejd med Danmarks mest innovative LED-virksomhed og deres banebrydende belysningsteknologi'
    },
    {
      icon: <Zap className="w-12 h-12 text-blue-600" />,
      title: 'Energieffektivitet',
      description: 'Hjælp virksomheder med at optimere deres energiforbrug gennem intelligente LED-løsninger'
    },
    {
      icon: <Building className="w-12 h-12 text-gray-600" />,
      title: 'B2B Fokus',
      description: 'Specialiseret i erhvervsmarkedet med løsninger til industri, kontor, retail og offentlige institutioner'
    },
    {
      icon: <Leaf className="w-12 h-12 text-green-600" />,
      title: 'Bæredygtighed',
      description: 'Bidrag til den grønne omstilling med miljøvenlige og CO2-reducerende belysningsløsninger'
    }
  ];

  const productFeatures = [
    {
      title: 'Intelligente LED-systemer med AI',
      description: 'Avancerede styringssystemer med AI-drevet optimering, sensorer og automatisering for maksimal energiudnyttelse'
    },
    {
      title: 'Industriel belysning',
      description: 'Robuste og ekstremt holdbare LED-løsninger til produktionshaller og industrielle miljøer'
    },
    {
      title: 'Smart kontorbelysning',
      description: 'Intelligente og ergonomiske belysningsløsninger med adaptiv styring der forbedrer arbejdsmiljøet'
    },
    {
      title: 'Udendørs LED med smart styring',
      description: 'Vejbelysning og arkitektonisk belysning med intelligent styring og længere levetid'
    }
  ];

  return (
    <>
      <SEO 
        title="Mødebooker til Innovative LED-løsninger | Nexus Marketing"
        description="Bliv mødebooker for et af Danmarks mest innovative LED-virksomheder. Hjælp erhvervsvirksomheder med energieffektive belysningsløsninger og bidrag til den grønne omstilling."
        canonical="/jobs/led-belysning"
      />

      <HeroSection
        title="Mødebooker til Innovative LED-belysningsløsninger"
        subtitle="Vil du være med til at revolutionere belysningsbranchen? Bliv mødebooker for et af Danmarks mest innovative LED-virksomheder og hjælp erhvervsvirksomheder med at spare energi og reducere CO2-udslip."
        ctaText="Ansøg nu"
        ctaLink="#apply"
        backgroundImage="https://images.pexels.com/photos/1112598/pexels-photo-1112598.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Bliv en del af belysningens fremtid</h2>
              <p className="text-lg text-gray-600">
                Som mødebooker for Danmarks mest innovative LED-virksomhed får du mulighed for at arbejde 
                med banebrydende teknologi og hjælpe virksomheder med at opnå betydelige energibesparelser. 
                Du bliver ambassadør for intelligente belysningsløsninger, der ikke bare sparer penge, 
                men også bidrager til en mere bæredygtig fremtid.
              </p>
            </div>

            {/* Company Highlights */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {companyHighlights.map((highlight, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-6 text-center">
                  <div className="flex justify-center mb-4">{highlight.icon}</div>
                  <h3 className="text-lg font-semibold mb-2">{highlight.title}</h3>
                  <p className="text-gray-600 text-sm">{highlight.description}</p>
                </div>
              ))}
            </div>

            {/* Product Features */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold mb-6 text-center">LED-løsninger du vil præsentere</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {productFeatures.map((feature, index) => (
                  <div key={index} className="bg-blue-50 rounded-lg p-6">
                    <h4 className="text-lg font-semibold mb-3 text-blue-800">{feature.title}</h4>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                ))}
              </div>
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

            {/* Why LED Technology */}
            <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-lg p-8 mb-12">
              <h3 className="text-xl font-semibold mb-6 text-center">Hvorfor LED-teknologi er fremtiden</h3>
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <Shield className="w-12 h-12 text-blue-600 mx-auto mb-3" />
                  <div className="text-lg font-bold text-blue-600 mb-2">Mere Holdbar</div>
                  <p className="text-gray-600 text-sm">Betydeligt mere holdbar end traditionelle LED-lyskilder med længere levetid</p>
                </div>
                <div>
                  <Brain className="w-12 h-12 text-purple-600 mx-auto mb-3" />
                  <div className="text-lg font-bold text-purple-600 mb-2">Intelligent Styring</div>
                  <p className="text-gray-600 text-sm">AI-drevet styring og automatisering for optimal energiudnyttelse</p>
                </div>
                <div>
                  <Leaf className="w-12 h-12 text-green-600 mx-auto mb-3" />
                  <div className="text-lg font-bold text-green-600 mb-2">Større Besparelser</div>
                  <p className="text-gray-600 text-sm">Intelligente løsninger der skaber større energibesparelser end nogensinde før</p>
                </div>
              </div>
            </div>

            {/* Success Stories */}
            <div className="mb-12">
              <h3 className="text-xl font-semibold mb-6 text-center">Hvad vores mødebookere siger</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <blockquote className="text-gray-600 italic mb-4">
                    "Det er fantastisk at arbejde med produkter, der gør en reel forskel. Når jeg fortæller 
                    virksomheder om de energibesparelser og den intelligente styring, de kan opnå, er interessen 
                    altid stor. Den nye LED-teknologi med AI sælger næsten sig selv!"
                  </blockquote>
                  <p className="font-medium">- Sarah L., Senior Mødebooker</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <blockquote className="text-gray-600 italic mb-4">
                    "Jeg er stolt af at arbejde for en virksomhed, der er så innovativ og fremsynet. 
                    Deres intelligente LED-løsninger med AI-styring er virkelig i verdensklasse, og det gør 
                    mit job som mødebooker meget nemmere."
                  </blockquote>
                  <p className="font-medium">- Michael K., Mødebooker</p>
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
                  title="Jobansøgning - LED Belysning"
                ></iframe>
              </div>

              {/* SEO Content for LED Lighting Application */}
              <div className="max-w-4xl mx-auto mt-12 px-8">
                <div className="bg-white rounded-lg p-8 shadow-md">
                  <h3 className="text-2xl font-bold mb-6 text-center">Hvorfor Søge Job som Mødebooker i LED-belysningsbranchen?</h3>
                  
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-lg font-semibold mb-4 text-blue-600">Fremtidssikret Karriere i Grøn Teknologi</h4>
                      <p className="text-gray-600 mb-4">
                        LED-belysningsbranchen er en af de hurtigst voksende sektorer inden for grøn teknologi. 
                        Som mødebooker i denne branche positionerer du dig selv i centrum af den grønne omstilling 
                        og arbejder med teknologier, der virkelig gør en forskel for miljøet og virksomhedernes bundlinje.
                      </p>
                      <p className="text-gray-600">
                        Med den stigende fokus på bæredygtighed og energieffektivitet er efterspørgslen efter 
                        intelligente LED-løsninger eksploderet. Dette betyder stabile jobmuligheder og gode 
                        karriereprospekter for dem, der kommer ind i branchen nu.
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-semibold mb-4 text-green-600">Meningsfuldt Arbejde med Målbare Resultater</h4>
                      <p className="text-gray-600 mb-4">
                        Som mødebooker for LED-løsninger arbejder du ikke bare med salg - du hjælper virksomheder 
                        med at reducere deres energiforbrug, spare penge og mindske deres CO2-aftryk. Hver møde 
                        du booker kan potentielt føre til betydelige miljømæssige og økonomiske forbedringer.
                      </p>
                      <p className="text-gray-600">
                        De intelligente LED-systemer med AI-styring, du præsenterer, kan give virksomheder 
                        energibesparelser på op til 80% og betydeligt længere levetid end traditionelle løsninger. 
                        Dette gør dit job både meningsfuldt og lettere at sælge.
                      </p>
                    </div>
                  </div>

                  <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-green-50 rounded-lg">
                    <h4 className="text-lg font-semibold mb-4 text-center">Bliv Pionér i Intelligent Belysningsteknologi</h4>
                    <p className="text-gray-600 text-center mb-4">
                      LED-teknologien udvikler sig konstant med AI-drevet styring, IoT-integration og avancerede 
                      sensorsystemer. Som mødebooker får du førstehånds kendskab til de nyeste innovationer og 
                      bliver ekspert i fremtidens belysningsløsninger.
                    </p>
                    <p className="text-gray-600 text-center">
                      Denne stilling giver dig mulighed for at være en del af en teknologisk revolution, samtidig 
                      med at du bidrager til en mere bæredygtig fremtid. Ansøg i dag og bliv en del af Danmarks 
                      mest innovative LED-virksomhed!
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

export default LedLightingPage;