import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight, Phone, Users, Target, BarChart3, Euro, Clock, Shield, Award } from 'lucide-react';
import HeroSection from '../components/HeroSection';
import SEO from '../components/SEO';

const PricingPage: React.FC = () => {
  useEffect(() => {
    // Add Tally script
    const script = document.createElement('script');
    script.innerHTML = `var d=document,w="https://tally.so/widgets/embed.js",v=function(){"undefined"!=typeof Tally?Tally.loadEmbeds():d.querySelectorAll("iframe[data-tally-src]:not([src])").forEach((function(e){e.src=e.dataset.tallySrc}))};if("undefined"!=typeof Tally)v();else if(d.querySelector('script[src="'+w+'"]')==null){var s=d.createElement("script");s.src=w,s.onload=v,s.onerror=v,d.body.appendChild(s);}`;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const pricingPackages = [
    {
      name: 'Starter Pakke',
      price: 'Fra 15.000 kr./md',
      description: 'Perfekt til mindre virksomheder der vil teste telemarketing',
      features: [
        '40 timer telemarketing/mødebooking pr. måned',
        'Dedikeret mødebooker',
        'Grundlæggende CRM integration',
        'Ugentlig rapportering',
        'Email og telefon support',
        'Minimum 3 måneders kontrakt'
      ],
      popular: false,
      ctaText: 'Kom i gang'
    },
    {
      name: 'Pay-Per-Meeting Model',
      price: 'Fast pris pr. møde',
      description: 'Betal kun for succesfuldt bookede møder - ingen risiko, maksimal kontrol',
      features: [
        'Kun betaling for gennemførte møder',
        'Fast pris pr. salgsmøde aftalt på forhånd',
        'Præcis budgetkontrol og forudsigelighed',
        'Ingen månedlige faste omkostninger',
        'Skalerbar efter jeres behov',
        'Perfekt til sæsonbetonede virksomheder',
        'Uforpligtende start - test vores kvalitet'
      ],
      popular: true,
      ctaText: 'Få uforpligtende tilbud',
      highlight: 'No Cure No Pay'
    },
    {
      name: 'Enterprise Pakke',
      price: 'Fra 45.000 kr./md',
      description: 'Omfattende løsning til store virksomheder med komplekse behov',
      features: [
        '120+ timer telemarketing/mødebooking pr. måned',
        'Dedikeret team på 3-4 specialister',
        'Fuld CRM og marketing automation integration',
        'Ugentlig strategimøder og rapportering',
        'Kampagneoptimering og A/B testing',
        'Dedikeret account manager',
        'Skræddersyet kontrakt og SLA'
      ],
      popular: false,
      ctaText: 'Kontakt os'
    }
  ];

  const additionalServices = [
    {
      icon: <Target className="w-8 h-8 text-blue-600" />,
      service: 'Lead Kvalificering',
      price: 'Fra 150 kr. pr. kvalificeret lead',
      description: 'Grundig screening og kvalificering af indkommende leads'
    },
    {
      icon: <Phone className="w-8 h-8 text-blue-600" />,
      service: 'Enkelt Mødebooking',
      price: 'Fra 800 kr. pr. booket møde',
      description: 'Betaling kun for succesfuldt bookede møder med beslutningstagere'
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-blue-600" />,
      service: 'Markedsundersøgelse',
      price: 'Fra 25.000 kr. pr. projekt',
      description: 'Omfattende markedsanalyse og kundefeedback indsamling'
    },
    {
      icon: <Users className="w-8 h-8 text-blue-600" />,
      service: 'Database Opbygning',
      price: 'Fra 50 kr. pr. kontakt',
      description: 'Research og opbygning af kvalificerede kontaktdatabaser'
    }
  ];

  const valuePropositions = [
    {
      icon: <Euro className="w-12 h-12 text-green-600" />,
      title: 'Transparent Prissætning',
      description: 'Ingen skjulte omkostninger. Du ved præcis hvad du betaler for, og vi leverer altid det aftalte.'
    },
    {
      icon: <Award className="w-12 h-12 text-orange-600" />,
      title: 'No Cure No Pay Model',
      description: 'Med vores pay-per-meeting model betaler I kun for konkrete resultater. Ingen risiko for jer.'
    },
    {
      icon: <Shield className="w-12 h-12 text-purple-600" />,
      title: 'Resultatgaranti',
      description: 'Vi står bag vores arbejde. Hvis ikke vi leverer de aftalte resultater, justerer vi tilgangen.'
    }
  ];

  const costComparison = [
    {
      scenario: 'Intern mødebooker (fuldtid)',
      monthlyCost: '45.000-55.000 kr.',
      includes: 'Løn, pension, ferie, sygedage, uddannelse, kontor',
      efficiency: 'Variabel - afhænger af erfaring og motivation'
    },
    {
      scenario: 'Nexus Marketing Pay-Per-Meeting',
      monthlyCost: 'Kun betaling for resultater',
      includes: 'Erfarne specialister, CRM, rapportering, ingen faste omkostninger',
      efficiency: 'Høj - kun betaling for succesfuldt bookede møder'
    }
  ];

  return (
    <>
      <SEO 
        title="Priser på Mødebooking & Telemarketing | Nexus Marketing"
        description="Se vores transparente priser på professionel mødebooking og telemarketing. Pay-per-meeting model uden risiko. Fleksible pakker fra 15.000 kr./md eller fast pris pr. møde."
        canonical="/priser"
        keywords="mødebooking priser, telemarketing omkostninger, B2B salg priser, outsourcing salg, leadgenerering priser, no cure no pay, pay per meeting"
      />

      <HeroSection
        title="Transparente Priser på Professionel Mødebooking"
        subtitle="Vælg mellem faste månedlige pakker eller vores risikofrie pay-per-meeting model. Få mere værdi end en intern medarbejder til konkurrencedygtige priser."
        ctaText="Se vores pakker"
        ctaLink="#pricing-packages"
        secondaryCtaText="Få skræddersyet tilbud"
        secondaryCtaLink="#contact-form"
        backgroundImage="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      />

      {/* Value Propositions */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Hvorfor vælge Nexus Marketing?</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Vi leverer professionel mødebooking og telemarketing med fleksible prismodeller, der passer til jeres behov og budget.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {valuePropositions.map((prop, index) => (
              <div key={index} className="text-center p-6 bg-gray-50 rounded-lg">
                <div className="flex justify-center mb-4">{prop.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{prop.title}</h3>
                <p className="text-gray-600">{prop.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cost Comparison */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Sammenligning: Intern vs. Outsourcing</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Se hvordan vores pay-per-meeting model eliminerer risiko og giver jer fuld kontrol over jeres investering.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {costComparison.map((option, index) => (
                <div key={index} className={`bg-white rounded-lg p-8 shadow-lg ${index === 1 ? 'border-2 border-green-500' : ''}`}>
                  {index === 1 && (
                    <div className="bg-green-500 text-white px-4 py-2 rounded-md text-sm font-medium mb-4 inline-block">
                      Risikofri løsning
                    </div>
                  )}
                  <h3 className="text-xl font-bold mb-4">{option.scenario}</h3>
                  <div className="text-3xl font-bold text-blue-600 mb-4">{option.monthlyCost}</div>
                  <p className="text-gray-600 mb-4">{option.includes}</p>
                  <div className="border-t pt-4">
                    <p className="text-sm text-gray-500">
                      <strong>Effektivitet:</strong> {option.efficiency}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Packages */}
      <section id="pricing-packages" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Vælg den prismodel der passer til jer</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Alle vores løsninger inkluderer erfarne mødebookere, CRM integration og detaljeret rapportering. 
              Vælg mellem faste pakker eller vores risikofrie pay-per-meeting model.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {pricingPackages.map((pkg, index) => (
              <div key={index} className={`bg-white rounded-lg shadow-lg p-8 relative ${pkg.popular ? 'border-2 border-green-500 transform scale-105' : 'border border-gray-200'}`}>
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-green-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                      {pkg.highlight || 'Mest populære'}
                    </div>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
                  <div className="text-3xl font-bold text-blue-600 mb-2">{pkg.price}</div>
                  <p className="text-gray-600">{pkg.description}</p>
                </div>

                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <CheckCircle className="text-green-500 mr-3 mt-1 flex-shrink-0" size={16} />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link 
                  to="#contact-form" 
                  className={`w-full text-center py-3 px-6 rounded-md font-medium transition-colors block ${
                    pkg.popular 
                      ? 'bg-green-600 text-white hover:bg-green-700' 
                      : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                  }`}
                >
                  {pkg.ctaText}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pay-Per-Meeting Detailed Section */}
      <section className="py-16 bg-green-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Fast Pris pr. Mødeaftale – No Cure No Pay</h2>
              <p className="text-lg text-gray-600">
                Med vores pay-per-meeting model får I maksimal kontrol og minimal risiko
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-white rounded-lg p-8 shadow-md">
                <h3 className="text-xl font-semibold mb-4 text-green-600">Præcis Budgetkontrol</h3>
                <p className="text-gray-600 mb-4">
                  Med en fast pris pr. mødeaftale kan I bestille det antal møder pr. uge eller måned, som I ønsker. 
                  I kender prisen per salgsmøde på forhånd, og erfaringsmæssigt ved I sikkert, hvor mange møder 
                  der typisk går på en ordre. Dette giver jer mulighed for at styre jeres salgsbudget meget præcist.
                </p>
                <p className="text-gray-600">
                  Ingen månedlige faste omkostninger betyder, at I kun investerer når I har behov for møder, 
                  hvilket er perfekt til sæsonbetonede virksomheder eller når I vil teste nye markeder.
                </p>
              </div>

              <div className="bg-white rounded-lg p-8 shadow-md">
                <h3 className="text-xl font-semibold mb-4 text-blue-600">Skræddersyet Prissætning</h3>
                <p className="text-gray-600 mb-4">
                  Prisen for et salgsmøde varierer naturligvis fra opgave til opgave, afhængigt af jeres branche, 
                  målgruppe og kompleksiteten af jeres produkter eller services. Faktorer som geografisk område, 
                  beslutningstagerniveau og mødevarighed påvirker også prisen.
                </p>
                <p className="text-gray-600">
                  Vi starter altid med at give jer et uforpligtende tilbud baseret på en grundig analyse af 
                  jeres specifikke behov og målgruppe. På den måde sikrer vi, at prisen er fair og konkurrencedygtig.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-md text-center">
              <h3 className="text-xl font-semibold mb-4">Fordele ved Pay-Per-Meeting</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <div className="text-green-600 font-bold text-2xl mb-2">0 kr.</div>
                  <p className="text-sm text-gray-600">Faste månedlige omkostninger</p>
                </div>
                <div>
                  <div className="text-blue-600 font-bold text-2xl mb-2">100%</div>
                  <p className="text-sm text-gray-600">Kontrol over jeres investering</p>
                </div>
                <div>
                  <div className="text-purple-600 font-bold text-2xl mb-2">Fast</div>
                  <p className="text-sm text-gray-600">Pris pr. møde aftalt på forhånd</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Tilkøb og specialiserede services</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Udover vores månedlige pakker og pay-per-meeting model tilbyder vi også specialiserede services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalServices.map((service, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-md">
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-lg font-semibold mb-2">{service.service}</h3>
                <div className="text-xl font-bold text-blue-600 mb-3">{service.price}</div>
                <p className="text-gray-600 text-sm">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEO Content Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Hvad koster professionel mødebooking og telemarketing?</h2>
            
            <div className="prose prose-lg max-w-none">
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Omkostningseffektiv Mødebooking</h3>
                  <p className="text-gray-600 mb-4">
                    Når virksomheder overvejer at outsource deres mødebooking og telemarketing, er prisen naturligvis 
                    en vigtig faktor. Hos Nexus Marketing har vi udviklet transparente og konkurrencedygtige 
                    prismodeller, der giver jer mere værdi end at ansætte internt.
                  </p>
                  <p className="text-gray-600">
                    Vores pay-per-meeting model eliminerer al risiko for jer, da I kun betaler for konkrete resultater. 
                    Dette er særligt attraktivt for virksomheder, der vil teste telemarketing uden store 
                    forudgående investeringer eller har sæsonbetonede salgsbehov.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-4">Fleksible Prismodeller</h3>
                  <p className="text-gray-600 mb-4">
                    Vi forstår, at forskellige virksomheder har forskellige behov og budgetter. Derfor tilbyder 
                    vi både faste månedlige pakker og vores populære pay-per-meeting model. Med pay-per-meeting 
                    får I præcis kontrol over jeres investering og kan skalere op eller ned efter behov.
                  </p>
                  <p className="text-gray-600">
                    Vores no cure no pay tilgang betyder, at vi kun får betaling, når vi leverer resultater. 
                    Dette skaber en naturlig incitamentsstruktur, hvor vores succes er direkte forbundet med jeres succes.
                  </p>
                </div>
              </div>

              <div className="bg-blue-50 rounded-lg p-8 mb-8">
                <h3 className="text-xl font-semibold mb-4">Hvad er inkluderet i prisen?</h3>
                <p className="text-gray-600 mb-4">
                  Uanset om I vælger en fast månedlig pakke eller vores pay-per-meeting model, får I adgang til 
                  erfarne specialister, der er trænet i jeres produkter og målgruppe, avanceret CRM integration, 
                  detaljeret rapportering og løbende optimering af jeres kampagner.
                </p>
                <p className="text-gray-600">
                  Med pay-per-meeting modellen inkluderer vi også grundig kvalificering af hver lead, 
                  mødebekræftelse og opfølgning for at sikre den højest mulige mødegennemførelsesrate. 
                  I betaler kun for møder, der rent faktisk bliver gennemført med kvalificerede beslutningstagere.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4">ROI og Værdi</h3>
                  <p className="text-gray-600 mb-4">
                    Med vores pay-per-meeting model er ROI beregningen meget enkel: I ved præcis, hvad hvert møde 
                    koster, og kan sammenligne dette med jeres gennemsnitlige ordreværdi og konverteringsrate. 
                    Dette giver jer fuldstændig transparens og kontrol over jeres salgsøkonomi.
                  </p>
                  <p className="text-gray-600">
                    Vores kunder oplever typisk, at pay-per-meeting modellen giver dem bedre ROI end både interne 
                    medarbejdere og traditionelle faste månedlige aftaler, fordi de kun betaler for konkrete, 
                    målbare resultater.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-4">Ingen Skjulte Omkostninger</h3>
                  <p className="text-gray-600 mb-4">
                    Med vores pay-per-meeting model er der ingen opsætningsgebyrer, månedlige faste omkostninger 
                    eller skjulte tillæg. Den pris, vi aftaler pr. møde, er den pris, I betaler - punktum. 
                    Dette giver jer fuldstændig budgetkontrol og forudsigelighed.
                  </p>
                  <p className="text-gray-600">
                    I kan starte helt uforpligtende og teste vores kvalitet uden store investeringer. 
                    Hvis I er tilfredse med resultaterne, kan I gradvist øge antallet af møder eller 
                    overgå til en fast månedlig pakke for endnu bedre priser.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact-form" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Få et skræddersyet tilbud på mødebooking</h2>
              <p className="text-lg text-gray-600">
                Udfyld formularen nedenfor, så sender vi jer et detaljeret tilbud inden for 24 timer. 
                Vælg mellem faste pakker eller vores risikofrie pay-per-meeting model.
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-8 shadow-lg">
              <iframe 
                data-tally-src="https://tally.so/embed/w4DglO?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1" 
                loading="lazy" 
                width="100%" 
                height="600" 
                frameBorder="0" 
                marginHeight="0" 
                marginWidth="0" 
                title="Få tilbud på mødebooking - Nexus Marketing"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PricingPage;