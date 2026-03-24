import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight, Briefcase, Shield, Users } from 'lucide-react';
import HeroSection from '../../components/HeroSection';
import SEO from '../../components/SEO';

const PensionPage: React.FC = () => {
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
    'Booking af kvalificerede møder med potentielle pensionskunder',
    'Præsentation af pensionsordninger og deres fordele',
    'Grundig kvalificering af leads gennem behovsafdækning',
    'Koordinering med pensionsrådgivere omkring mødeplanlægning',
    'Vedligeholdelse af CRM-system med kundedata',
    'Opfølgning på leads og kundeemner'
  ];

  const requirements = [
    'Erfaring med B2B salg eller mødebooking (en fordel, men ikke et krav)',
    'Stærke kommunikationsevner og behagelig telefonstemme',
    'Interesse for pension og finansielle produkter',
    'Selvstændig og resultatorienteret arbejdstilgang',
    'Struktureret og systematisk i din arbejdsform',
    'Gode IT-kundskaber'
  ];

  const benefits = [
    'Høj provisions afregning og bonus',
    'Fleksible arbejdstider med mulighed for hjemmearbejde',
    'Grundig oplæring i pensionsprodukter og rådgivning',
    'Udviklings- og karrieremuligheder i pensionsbranchen',
    'Moderne arbejdsplads med godt kollegialt sammenhold'
  ];

  const marketHighlights = [
    {
      icon: <Shield className="w-12 h-12 text-blue-600" />,
      title: 'Stabil branche',
      description: 'Pensionsbranchen er en af Danmarks mest stabile sektorer med konstant efterspørgsel'
    },
    {
      icon: <Users className="w-12 h-12 text-blue-600" />,
      title: 'Meningsfuldt arbejde',
      description: 'Hjælp danskere med at sikre deres økonomiske fremtid gennem gode pensionsløsninger'
    },
    {
      icon: <Briefcase className="w-12 h-12 text-blue-600" />,
      title: 'Karrieremuligheder',
      description: 'Bliv ekspert i pensionsrådgivning med mulighed for videre karriere i finanssektoren'
    }
  ];

  return (
    <>
      <SEO
        title="Mødebooker til AI-Drevet Pension & ESG Investering 2026 | Nexus Marketing"
        description="Bliv mødebooker for moderne pensionsløsninger med AI portfolio-optimering, ESG investering, crypto-pension og personaliseret longevity-planning. Fremtidens pensionsrådgivning."
        canonical="/jobs/pensionsordning"
        keywords="AI pension 2026, ESG investering, crypto pension, robo-advisor, digital pensionsrådgivning, longevity planning"
      />

      <HeroSection
        title="Mødebooker til AI-Drevet Pension & ESG Investering 2026"
        subtitle="Præsenter moderne pensionsløsninger: AI robo-advisors, ESG-optimerede porteføljer, crypto-pension integration og personaliseret longevity-planning baseret på genetisk data."
        ctaText="Ansøg nu"
        ctaLink="#apply"
        backgroundImage="https://images.pexels.com/photos/7681091/pexels-photo-7681091.jpeg"
      />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Bliv ekspert i pensionsrådgivning</h2>
              <p className="text-lg text-gray-600">
                Som mødebooker for pensionsordninger får du en nøglerolle i at hjælpe danskere med deres 
                pensionsplanlægning. Du bliver det første vigtige led i processen med at sikre, at flere 
                får en tryg økonomisk fremtid gennem professionel pensionsrådgivning.
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
                  title="Jobansøgning - Pensionsordning"
                ></iframe>
              </div>

              {/* SEO Content for Pension Application */}
              <div className="max-w-4xl mx-auto mt-12 px-8">
                <div className="bg-white rounded-lg p-8 shadow-md">
                  <h3 className="text-2xl font-bold mb-6 text-center">Hvorfor Søge Job som Mødebooker i Pensionsbranchen?</h3>
                  
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-lg font-semibold mb-4 text-blue-600">Stabil og Fremtidssikret Karriere</h4>
                      <p className="text-gray-600 mb-4">
                        Pensionsbranchen er en af Danmarks mest stabile og fremtidssikrede sektorer. Med en 
                        aldrende befolkning og øget fokus på pensionsopsparing er efterspørgslen efter 
                        professionel pensionsrådgivning konstant stigende.
                      </p>
                      <p className="text-gray-600">
                        Som mødebooker i pensionsbranchen positionerer du dig selv i en branche, der ikke 
                        påvirkes af konjunkturer på samme måde som andre sektorer. Pension er en nødvendighed, 
                        ikke en luksus, hvilket sikrer stabile jobmuligheder.
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-semibold mb-4 text-green-600">Meningsfuldt Arbejde med Stor Betydning</h4>
                      <p className="text-gray-600 mb-4">
                        Som mødebooker for pensionsordninger hjælper du danskere med at sikre deres økonomiske 
                        fremtid og opnå tryghed i alderdommen. Hver møde du booker kan potentielt ændre en 
                        persons eller families økonomiske situation til det bedre.
                      </p>
                      <p className="text-gray-600">
                        Du arbejder med noget, der virkelig betyder noget for folks liv. At hjælpe mennesker 
                        med at træffe de rigtige pensionsbeslutninger giver en dyb tilfredsstillelse og 
                        motivation i hverdagen.
                      </p>
                    </div>
                  </div>

                  <div className="mt-8 p-6 bg-blue-50 rounded-lg">
                    <h4 className="text-lg font-semibold mb-4 text-center">Bliv Ekspert i Finansiel Rådgivning</h4>
                    <p className="text-gray-600 text-center mb-4">
                      Som mødebooker i pensionsbranchen får du omfattende viden om finansielle produkter, 
                      pensionsordninger og investeringsstrategier. Denne ekspertise er værdifuld og kan 
                      åbne døre til mange andre karrieremuligheder i finanssektoren.
                    </p>
                    <p className="text-gray-600 text-center">
                      Pensionsbranchen tilbyder gode indtjeningsmuligheder, stabile arbejdsforhold og 
                      mulighed for at gøre en reel forskel i folks liv. Ansøg i dag og bliv en del af 
                      Danmarks pensionsfremtid!
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

export default PensionPage;