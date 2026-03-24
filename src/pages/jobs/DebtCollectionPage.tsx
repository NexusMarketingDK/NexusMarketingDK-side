import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight, Shield, Scale, Users } from 'lucide-react';
import HeroSection from '../../components/HeroSection';
import SEO from '../../components/SEO';

const DebtCollectionPage: React.FC = () => {
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
    'Booking af kvalificerede møder med virksomheder omkring professionel inkasso',
    'Præsentation af inkassoløsninger og deres fordele',
    'Kvalificering af leads gennem grundig behovsafdækning',
    'Koordinering med inkassorådgivere omkring mødeplanlægning',
    'Vedligeholdelse af CRM-system med kundedata',
    'Opfølgning på leads og kundeemner'
  ];

  const requirements = [
    'Erfaring med B2B salg eller mødebooking (en fordel, men ikke et krav)',
    'Stærke kommunikationsevner og professionel telefonstemme',
    'Forretningsforståelse og evne til at identificere behov',
    'Selvstændig og resultatorienteret arbejdstilgang',
    'Struktureret og systematisk i din arbejdsform',
    'Interesse for inkasso og finansielle services'
  ];

  const benefits = [
    'Høj provisions afregning og bonus pr. booket møde',
    'Fleksible arbejdstider og mulighed for hjemmearbejde',
    'Grundig oplæring i inkassoløsninger og lovgivning',
    'Del af et professionelt team i vækst',
    'Gode karrieremuligheder i en stabil branche'
  ];

  const marketHighlights = [
    {
      icon: <Shield className="w-12 h-12 text-blue-600" />,
      title: 'Professionel inkasso',
      description: 'Vi repræsenterer en af Danmarks førende inkassovirksomheder med over 20 års erfaring'
    },
    {
      icon: <Scale className="w-12 h-12 text-blue-600" />,
      title: 'Juridisk ekspertise',
      description: 'Specialister i inkasso og juridisk rådgivning til erhvervslivet'
    },
    {
      icon: <Users className="w-12 h-12 text-blue-600" />,
      title: 'Stærkt team',
      description: 'Bliv en del af et dedikeret team med fokus på kvalitet og resultater'
    }
  ];

  return (
    <>
      <SEO 
        title="Mødebooker til Professionel Inkasso | Nexus Marketing"
        description="Bliv mødebooker for en af Danmarks førende inkassovirksomheder. Vi tilbyder attraktiv provision, fleksible arbejdstider og gode udviklingsmuligheder i en stabil branche."
        canonical="/jobs/inkasso"
      />

      <HeroSection
        title="Mødebooker til Professionel Inkasso"
        subtitle="Vil du være med til at hjælpe virksomheder med professionel inkasso og debitorhåndtering? Bliv mødebooker for en af Danmarks førende aktører inden for inkasso."
        ctaText="Ansøg nu"
        ctaLink="#apply"
        backgroundImage="https://images.pexels.com/photos/5688887/pexels-photo-5688887.jpeg"
      />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Om stillingen</h2>
              <p className="text-lg text-gray-600">
                Som mødebooker for vores inkassopartner får du en central rolle i at hjælpe virksomheder 
                med at optimere deres debitorhåndtering. Du bliver det første vigtige led i processen med 
                at sikre, at flere virksomheder får en professionel og effektiv inkassoløsning.
              </p>
            </div>

            {/* Market Highlights */}
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {marketHighlights.map((highlight, index) => (
                <div key={index} className="bg-blue-50 rounded-lg p-6 text-center">
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
              <h3 className="text-xl font-semibold mb-6 text-center">Det siger vores medarbejdere</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <blockquote className="text-gray-600 italic mb-4">
                    "Det er motiverende at arbejde med professionelle inkassoløsninger, der gør en reel 
                    forskel for virksomhedernes likviditet. Vi leverer en værdifuld service, og det kan 
                    mærkes i dialogen med kunderne."
                  </blockquote>
                  <p className="font-medium">- Maria H., Senior Mødebooker</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <blockquote className="text-gray-600 italic mb-4">
                    "Den grundige oplæring og det professionelle setup gør det nemt at komme i gang. 
                    Her er der virkelig fokus på kvalitet og kundetilfredshed."
                  </blockquote>
                  <p className="font-medium">- Peter K., Mødebooker</p>
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
                  title="Jobansøgning - Inkasso"
                ></iframe>
              </div>

              {/* SEO Content for Debt Collection Application */}
              <div className="max-w-4xl mx-auto mt-12 px-8">
                <div className="bg-white rounded-lg p-8 shadow-md">
                  <h3 className="text-2xl font-bold mb-6 text-center">Hvorfor Søge Job som Mødebooker i Inkassobranchen?</h3>
                  
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-lg font-semibold mb-4 text-blue-600">Stabil og Essentiel Branche</h4>
                      <p className="text-gray-600 mb-4">
                        Inkassobranchen er en stabil og essentiel del af erhvervslivet, da alle virksomheder 
                        har brug for professionel debitorhåndtering. Som mødebooker i denne branche arbejder 
                        du med services, der hjælper virksomheder med at forbedre deres likviditet og 
                        økonomiske stabilitet.
                      </p>
                      <p className="text-gray-600">
                        Professionel inkasso er ikke bare om at inddrive gæld - det handler om at hjælpe 
                        virksomheder med at optimere deres kreditpolitik, reducere tab på debitorer og 
                        forbedre deres cash flow. Dette gør arbejdet både meningsfuldt og værdifuldt.
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-semibold mb-4 text-green-600">Juridisk Ekspertise og Professionel Udvikling</h4>
                      <p className="text-gray-600 mb-4">
                        Som mødebooker for inkassoløsninger får du omfattende viden om juridiske processer, 
                        inkassolovgivning og professionel debitorhåndtering. Denne specialiserede viden er 
                        værdifuld og kan åbne døre til mange andre karrieremuligheder i finanssektoren.
                      </p>
                      <p className="text-gray-600">
                        Inkassobranchen tilbyder gode muligheder for professionel udvikling og specialisering. 
                        Du kan udvikle dig til ekspert i kreditvurdering, juridisk rådgivning eller 
                        virksomhedsøkonomi, hvilket giver stærke karriereprospekter.
                      </p>
                    </div>
                  </div>

                  <div className="mt-8 p-6 bg-blue-50 rounded-lg">
                    <h4 className="text-lg font-semibold mb-4 text-center">Hjælp Virksomheder med Bedre Økonomi</h4>
                    <p className="text-gray-600 text-center mb-4">
                      Som mødebooker for inkassoløsninger hjælper du virksomheder med at forbedre deres 
                      økonomiske situation gennem professionel debitorhåndtering. Du bidrager til at 
                      reducere tab på debitorer og forbedre virksomhedernes likviditet.
                    </p>
                    <p className="text-gray-600 text-center">
                      Inkassobranchen tilbyder stabile jobmuligheder, gode indtjeningsmuligheder og 
                      mulighed for at specialisere sig i et vigtigt område af erhvervslivet. Ansøg i dag 
                      og bliv en del af Danmarks professionelle inkassomiljø!
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

export default DebtCollectionPage;