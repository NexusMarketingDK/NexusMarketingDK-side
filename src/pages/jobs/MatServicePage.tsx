import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight, Shield, Recycle, Sparkles } from 'lucide-react';
import HeroSection from '../../components/HeroSection';
import SEO from '../../components/SEO';

const MatServicePage: React.FC = () => {
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
    'Booking af kvalificerede møder med beslutningstagere i virksomheder',
    'Præsentation af professionelle måtteserviceløsninger',
    'Kvalificering af leads gennem grundig behovsafdækning',
    'Vedligeholdelse af kundedata i vores CRM-system',
    'Tæt samarbejde med salgsteamet omkring mødeplanlægning',
    'Opfølgning på leads og kundeemner'
  ];

  const requirements = [
    'Erfaring med B2B salg eller mødebooking (en fordel, men ikke et krav)',
    'Stærke kommunikationsevner og behagelig telefonstemme',
    'Struktureret og målrettet tilgang til arbejdet',
    'Evne til at arbejde selvstændigt og resultatorienteret',
    'Interesse for facility service og professionelle serviceløsninger',
    'Forståelse for værdien af god kundeservice'
  ];

  const benefits = [
    'Høj provisions afregning og bonus pr. booket møde',
    'Fleksible arbejdstider med mulighed for hjemmearbejde',
    'Grundig oplæring i produkter og services',
    'Pension og sundhedsforsikring efter 3 måneder',
    'Udviklings- og karrieremuligheder i en international virksomhed',
    'Moderne arbejdsplads med godt kollegialt sammenhold'
  ];

  const serviceHighlights = [
    {
      icon: <Shield className="w-12 h-12 text-blue-600" />,
      title: 'Professionel Service',
      description: 'Markedsledende leverandør af professionelle måtteserviceløsninger til erhverv'
    },
    {
      icon: <Recycle className="w-12 h-12 text-blue-600" />,
      title: 'Bæredygtig Løsning',
      description: 'Miljøvenlig vask og vedligeholdelse med fokus på ressourceoptimering'
    },
    {
      icon: <Sparkles className="w-12 h-12 text-blue-600" />,
      title: 'Komplet Service',
      description: 'Alt-i-én måtteservice med regelmæssig udskiftning og vask'
    }
  ];

  const productFeatures = [
    {
      image: 'https://images.pexels.com/photos/6466236/pexels-photo-6466236.jpeg',
      title: 'Professionelle indgangsmåtter',
      description: 'Skræddersyede løsninger der holder indgangspartier rene og sikre'
    },
    {
      image: 'https://images.pexels.com/photos/6466267/pexels-photo-6466267.jpeg',
      title: 'Specialdesignede løsninger',
      description: 'Måtter tilpasset forskellige miljøer og behov'
    },
    {
      image: 'https://images.pexels.com/photos/6466241/pexels-photo-6466241.jpeg',
      title: 'Komplet servicekoncept',
      description: 'Regelmæssig udskiftning og professionel vask'
    }
  ];

  return (
    <>
      <SEO 
        title="Mødebooker til Professionel Måtteservice | Nexus Marketing"
        description="Bliv mødebooker for en førende leverandør af måtteservice. Vi tilbyder attraktiv løn, fleksible arbejdstider og gode udviklingsmuligheder i en international virksomhed."
        canonical="/jobs/mat-service"
      />

      <HeroSection
        title="Mødebooker til Professionel Måtteservice"
        subtitle="Vil du være med til at sikre et renere og mere professionelt arbejdsmiljø i danske virksomheder? Bliv mødebooker for en af Danmarks førende leverandører af professionel måtteservice."
        ctaText="Ansøg nu"
        ctaLink="#apply"
        backgroundImage="https://images.pexels.com/photos/6466236/pexels-photo-6466236.jpeg"
      />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Om stillingen</h2>
              <p className="text-lg text-gray-600">
                Som mødebooker bliver du en nøglespiller i at skabe kontakt mellem virksomheder og vores 
                professionelle måtteserviceløsninger. Du hjælper virksomheder med at optimere deres 
                indgangspartier og arbejdsmiljø gennem skræddersyede måtteløsninger.
              </p>
            </div>

            {/* Product Features */}
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {productFeatures.map((feature, index) => (
                <div key={index} className="relative overflow-hidden rounded-lg shadow-lg">
                  <img 
                    src={feature.image} 
                    alt={feature.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                    <h3 className="text-white font-medium mb-1">{feature.title}</h3>
                    <p className="text-white/80 text-sm">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Service Highlights */}
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {serviceHighlights.map((highlight, index) => (
                <div key={index} className="bg-blue-50 rounded-lg p-6 text-center">
                  <div className="mb-4">{highlight.icon}</div>
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

            {/* Success Stories */}
            <div className="mb-12">
              <h3 className="text-xl font-semibold mb-6 text-center">Hvad vores mødebookere siger</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <blockquote className="text-gray-600 italic mb-4">
                    "Det er motiverende at arbejde med professionelle produkter og services, der gør en reel 
                    forskel for virksomhedernes arbejdsmiljø. Vores løsninger sælger næsten sig selv."
                  </blockquote>
                  <p className="font-medium">- Maria H., Mødebooker</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <blockquote className="text-gray-600 italic mb-4">
                    "Den grundige oplæring og det professionelle setup gør det nemt at komme i gang. 
                    Her er der virkelig fokus på kvalitet og kundetilfredshed."
                  </blockquote>
                  <p className="font-medium">- Peter K., Senior Mødebooker</p>
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
                  title="Jobansøgning - Måtteservice"
                ></iframe>
              </div>

              {/* SEO Content for Mat Service Application */}
              <div className="max-w-4xl mx-auto mt-12 px-8">
                <div className="bg-white rounded-lg p-8 shadow-md">
                  <h3 className="text-2xl font-bold mb-6 text-center">Hvorfor Søge Job som Mødebooker i Facility Service Branchen?</h3>
                  
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-lg font-semibold mb-4 text-blue-600">Stabil og Essentiel Branche</h4>
                      <p className="text-gray-600 mb-4">
                        Facility service og måtteservice er en stabil og essentiel branche, da alle virksomheder 
                        har brug for at holde deres lokaler rene og professionelle. Som mødebooker i denne branche 
                        arbejder du med services, der altid vil være efterspurgte, uanset konjunkturer.
                      </p>
                      <p className="text-gray-600">
                        Professionelle måtteløsninger er ikke bare en omkostning - de er en investering i 
                        virksomhedens image, medarbejdernes arbejdsmiljø og vedligeholdelse af bygninger. 
                        Dette gør det nemt at argumentere for værdien af vores services.
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-semibold mb-4 text-green-600">Internationale Karrieremuligheder</h4>
                      <p className="text-gray-600 mb-4">
                        Som mødebooker for en international virksomhed får du adgang til et globalt netværk 
                        og mulighed for karriereudvikling på tværs af lande. Facility service branchen tilbyder 
                        gode muligheder for at specialisere sig og avancere til lederstillinger.
                      </p>
                      <p className="text-gray-600">
                        Virksomheden investerer i sine medarbejderes udvikling med omfattende træningsprogrammer, 
                        certificeringer og mulighed for at arbejde med internationale kunder og projekter. 
                        Dette giver værdifuld erfaring og kompetencer.
                      </p>
                    </div>
                  </div>

                  <div className="mt-8 p-6 bg-blue-50 rounded-lg">
                    <h4 className="text-lg font-semibold mb-4 text-center">Bidrag til Bedre Arbejdsmiljøer</h4>
                    <p className="text-gray-600 text-center mb-4">
                      Som mødebooker for måtteservice hjælper du virksomheder med at skabe renere, sikrere og 
                      mere professionelle arbejdsmiljøer. Professionelle indgangsmåtter reducerer snavs, 
                      forbedrer sikkerheden og skaber et positivt første indtryk for kunder og medarbejdere.
                    </p>
                    <p className="text-gray-600 text-center">
                      Facility service branchen tilbyder stabile jobmuligheder, gode indtjeningsmuligheder 
                      og mulighed for at arbejde med noget, der gør en reel forskel. Ansøg i dag og bliv 
                      en del af Danmarks førende måtteservice virksomhed!
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

export default MatServicePage;