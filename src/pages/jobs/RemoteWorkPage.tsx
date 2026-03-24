import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Clock, PiggyBank, Award, Users, CheckCircle, ArrowRight, Home } from 'lucide-react';
import HeroSection from '../../components/HeroSection';
import SEO from '../../components/SEO';
import { getJobListingsForRemotePage } from '../../data/jobListings';

const RemoteWorkPage: React.FC = () => {
  useEffect(() => {
    // Add Tally script
    const script = document.createElement('script');
    script.innerHTML = `var d=document,w="https://tally.so/widgets/embed.js",v=function(){"undefined"!=typeof Tally?Tally.loadEmbeds():d.querySelectorAll("iframe[data-tally-src]:not([src])").forEach((function(e){e.src=e.dataset.tallySrc}))};if("undefined"!=typeof Tally)v();else if(d.querySelector('script[src="'+w+'"]')==null){var s=d.createElement("script");s.src=w,s.onload=v,s.onerror=v,d.body.appendChild(s);}`;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const benefits = [
    {
      icon: <Home className="w-12 h-12 text-blue-600" />,
      title: 'Remote-first kultur',
      description: 'Arbejd 100% hjemmefra med cloud-baserede systemer og moderne samarbejdsværktøjer - ingen transporttid eller kontoromkostninger.'
    },
    {
      icon: <Clock className="w-12 h-12 text-blue-600" />,
      title: 'AI-assisterede værktøjer',
      description: 'Få adgang til de nyeste AI-værktøjer der hjælper med lead-kvalificering, script-optimering og performance-analyse.'
    },
    {
      icon: <PiggyBank className="w-12 h-12 text-blue-600" />,
      title: 'Attraktiv indtjening 2026',
      description: 'Tjen godt med moderne provisionsmodel og performance bonusser - AI-assisterede sælgere tjener 30% mere.'
    }
  ];

  const requirements = [
    'Et roligt hjemmekontor eller arbejdsplads med god internetforbindelse',
    'Computer eller laptop (Windows/Mac) - vi hjælper med setup',
    'Professionelt headset (noise-cancelling anbefales)',
    'Åbenhed overfor AI-værktøjer og digital innovation',
    'Selvdisciplin og struktur i remote-arbejde',
    'Minimum 20 timer ugentligt - fleksibel tilrettelæggelse'
  ];

  const advantages = [
    'Ingen transporttid - spar 10+ timer om ugen',
    'Bedre work-life balance med remote-first tilgang',
    'Fleksible arbejdstider - arbejd når du er mest produktiv',
    'Attraktiv indtjening med AI-boosted provisionsmodel',
    'Del af et moderne remote-team med stærk online-kultur',
    'AI-assisteret oplæring og 24/7 digital support',
    'Adgang til moderne CRM, AI-scripts og automatiseringsværktøjer',
    'Virtuelle team-events og professionelt netværk',
    'Vi hjælper med CVR/moms setup og freelance-administration'
  ];

  const testimonials = [
    {
      quote: "AI-værktøjerne fra Nexus Marketing har revolutioneret mit arbejde. Jeg kan nu identificere de bedste leads 3x hurtigere og mine mødebooking-rater er steget med 40%. Remote-kulturen giver mig perfekt work-life balance.",
      name: "Maria Hansen",
      title: "AI-Assisteret Mødebooker",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      quote: "Som studerende i 2026 er det fantastisk at arbejde remote med moderne AI-værktøjer. Jeg tjener mere end mine venner i traditionelle jobs, og jeg lærer cutting-edge teknologi der kommer til nytte i min fremtidige karriere.",
      name: "Peter Nielsen",
      title: "Remote Telesælger",
      image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600"
    }
  ];

  const workBenefits = [
    {
      icon: <Users size={40} className="text-blue-600" />,
      title: 'Del af et stærkt team',
      description: 'Bliv en del af et professionelt team med løbende sparring og udvikling inden for mødebooking og telesalg.'
    },
    {
      icon: <PiggyBank size={40} className="text-blue-600" />,
      title: 'Attraktiv aflønning',
      description: 'Få Branchens bedste afregning for mødebooking + attraktive bonusordninger baseret på dine resultater i telesalg.'
    },
    {
      icon: <Award size={40} className="text-blue-600" />,
      title: 'Karriereudvikling',
      description: 'Mulighed for at udvikle dine kompetencer inden for mødebooking og avancere til nye roller.'
    }
  ];

  // Get job listings dynamically from the central data source
  const jobTypes = getJobListingsForRemotePage();

  return (
    <>
      <SEO
        title="Arbejd hjemmefra som Mødebooker & AI-Assisteret Telesælger 2026 | Nexus Marketing"
        description="Få frihed og fleksibilitet med et job som mødebooker eller AI-assisteret telesælger hjemmefra i 2026. Vi tilbyder attraktiv løn, frie arbejdstider, AI-værktøjer og professionel oplæring inden for moderne telesalg og mødebooking."
        canonical="/jobs/arbejd-hjemmefra"
        keywords="mødebooker job 2026, telesælger job, arbejde hjemmefra, remote work, AI-assisteret salg, B2B salg, telesalg job, fleksibelt arbejde, hybrid arbejde"
      />

      <HeroSection
        title="Arbejd Hjemmefra som AI-Assisteret Mødebooker & Telesælger i 2026"
        subtitle="Få frihed til at arbejde hvor og hvornår du vil med de nyeste AI-værktøjer. Vi tilbyder moderne teknologi, attraktiv løn og professionel support til dig, der ønsker et fremtidssikret remote job med mødebooking og telesalg."
        ctaText="Ansøg nu"
        ctaLink="#apply"
        backgroundImage="https://images.pexels.com/photos/4064840/pexels-photo-4064840.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Remote-first med AI-assisterede værktøjer i 2026</h2>
              <p className="text-lg text-gray-600">
                Hos Nexus Marketing arbejder du 100% hjemmefra som AI-assisteret mødebooker eller telesælger
                med adgang til de nyeste teknologier. Du får moderne værktøjer som AI-drevet lead-scoring,
                automatiseret CRM og smart performance-tracking, samtidig med at du tilrettelægger din arbejdsdag
                præcis som det passer dig. Velkommen til fremtidens remote arbejde.
              </p>
            </div>

            {/* Benefits */}
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-6 text-center">
                  <div className="mb-4">{benefit.icon}</div>
                  <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-gray-600 text-sm">{benefit.description}</p>
                </div>
              ))}
            </div>

            {/* Requirements */}
            <div className="bg-blue-50 rounded-lg p-8 mb-12">
              <h3 className="text-xl font-semibold mb-4">Det skal du bruge</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {requirements.map((item, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="text-green-500 mr-2 mt-1 flex-shrink-0" size={20} />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Advantages */}
            <div className="mb-12">
              <h3 className="text-xl font-semibold mb-6">Fordele ved at arbejde hjemmefra</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {advantages.map((item, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="text-green-500 mr-2 mt-1 flex-shrink-0" size={20} />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Testimonials */}
            <div className="mb-12">
              <h3 className="text-xl font-semibold mb-6 text-center">Det siger vores freelancere</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                    <div className="flex items-center mb-4">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name} 
                        className="w-12 h-12 rounded-full object-cover mr-4"
                      />
                      <div>
                        <h4 className="font-semibold">{testimonial.name}</h4>
                        <p className="text-gray-600 text-sm">{testimonial.title}</p>
                      </div>
                    </div>
                    <blockquote className="text-gray-600 italic">
                      "{testimonial.quote}"
                    </blockquote>
                  </div>
                ))}
              </div>
            </div>

            {/* Additional Benefits Section */}
            <section className="py-16">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">Fordele ved at arbejde med os</h2>
                <p className="text-lg text-gray-600">
                  Som mødebooker eller telesælger hos Nexus Marketing får du ikke bare et job - du får en karriere med 
                  masser af muligheder for udvikling og succes.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {workBenefits.map((benefit, index) => (
                  <div 
                    key={index} 
                    className="card p-6 flex flex-col items-center text-center fade-in"
                    style={{ animationDelay: `${index * 0.2}s` }}
                  >
                    <div className="mb-4">{benefit.icon}</div>
                    <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                    <p className="text-gray-600">{benefit.description}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Job Types Section - Now Dynamic */}
            <section className="py-16">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">Jobmuligheder inden for forskellige brancher</h2>
                <p className="text-lg text-gray-600">
                  Vi tilbyder spændende jobmuligheder som mødebooker og sælger inden for mange forskellige brancher. 
                  Find den stilling der passer bedst til dine interesser og ambitioner.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {jobTypes.map((job, index) => {
                  const IconComponent = job.icon;
                  return (
                    <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                      <div className="mb-4">
                        <IconComponent className={`w-12 h-12 ${job.color}`} />
                      </div>
                      <h3 className="text-lg font-bold mb-3">{job.title}</h3>
                      <p className="text-gray-600 mb-4 text-sm">{job.description}</p>
                      <Link 
                        to={job.path} 
                        className="text-blue-600 font-medium hover:text-blue-700 inline-flex items-center text-sm"
                      >
                        Læs mere <ArrowRight size={16} className="ml-2" />
                      </Link>
                    </div>
                  );
                })}
              </div>

              <div className="text-center mt-8">
                <p className="text-gray-600 mb-4">
                  Alle stillinger tilbyder fleksible arbejdstider, attraktiv aflønning og mulighed for at arbejde hjemmefra.
                </p>
                <Link 
                  to="/freelance-telemarketing" 
                  className="btn btn-primary inline-flex items-center"
                >
                  Se alle jobmuligheder <ArrowRight size={16} className="ml-2" />
                </Link>
              </div>
            </section>

            {/* SEO Optimized Content Section */}
            <section className="py-16 bg-gray-50 rounded-lg mb-12">
              <div className="max-w-4xl mx-auto px-8">
                <h2 className="text-2xl font-bold mb-6">Freelance Mødebooker & Telesælger - Din Karriere Starter Her</h2>
                <div className="prose max-w-none">
                  <p className="mb-4">
                    Som freelance mødebooker eller telesælger hos Nexus Marketing får du muligheden for at bygge en 
                    succesfuld karriere med fuld fleksibilitet og attraktiv indtjening. Vi er specialister i B2B 
                    telemarketing og mødebooking, og vores freelancere er en afgørende del af vores succes.
                  </p>
                  
                  <h3 className="text-xl font-semibold mb-4">Hvorfor vælge Nexus Marketing som freelance partner?</h3>
                  <p className="mb-4">
                    Nexus Marketing tilbyder branchens bedste vilkår for freelance mødebookere og telesælgere. 
                    Med over 20 års erfaring i telemarketing og B2B salg, har vi skabt et miljø hvor freelancere 
                    kan trives og udvikle sig professionelt. Vores fokus på kvalitet frem for kvantitet sikrer, 
                    at du arbejder med seriøse kunder og meningsfulde projekter.
                  </p>
                  
                  <h3 className="text-xl font-semibold mb-4">Freelance Mødebooking - En Voksende Karrieremulighed</h3>
                  <p className="mb-4">
                    Mødebooking er blevet en specialiseret disciplin inden for B2B salg, og efterspørgslen efter 
                    dygtige freelance mødebookere stiger konstant. Som freelance mødebooker hos Nexus Marketing 
                    arbejder du med at identificere og kvalificere potentielle kunder, booke møder med 
                    beslutningstagere og sikre en høj konverteringsrate for vores samarbejdspartnere.
                  </p>
                  
                  <h3 className="text-xl font-semibold mb-4">Telesalg med Fokus på Kvalitet og Resultater</h3>
                  <p className="mb-4">
                    Vores freelance telesælgere er eksperter i at skabe værdi gennem professionel telefonisk 
                    kommunikation. Du får grundig oplæring i produkter, målgrupper og salgsteknikker, så du 
                    kan levere resultater fra dag ét. Vi tror på, at succesfuld telesalg handler om at forstå 
                    kundens behov og tilbyde relevante løsninger.
                  </p>
                  
                  <h3 className="text-xl font-semibold mb-4">Fleksibilitet og Work-Life Balance</h3>
                  <p className="mb-4">
                    Som freelancer hos Nexus Marketing får du friheden til at arbejde hjemmefra og tilrettelægge 
                    din arbejdsdag efter dine behov. Denne fleksibilitet gør det muligt at kombinere arbejde med 
                    familie, studier eller andre forpligtelser. Vi forstår vigtigheden af en god work-life balance 
                    og støtter vores freelancere i at opnå dette.
                  </p>
                  
                  <h3 className="text-xl font-semibold mb-4">Professionel Udvikling og Support</h3>
                  <p className="mb-4">
                    Hos Nexus Marketing investerer vi i vores freelanceres udvikling. Du får adgang til løbende 
                    træning, coaching og sparring med erfarne kollegaer. Vores supportteam er altid klar til at 
                    hjælpe med spørgsmål, udfordringer eller feedback. Vi tror på, at når vores freelancere 
                    udvikler sig, udvikler vi os alle sammen.
                  </p>
                  
                  <h3 className="text-xl font-semibold mb-4">Attraktiv Aflønning og Bonusordninger</h3>
                  <p className="mb-4">
                    Vi tilbyder branchens mest konkurrencedygtige aflønning for freelance mødebookere og telesælgere. 
                    Vores provisionsmodel er transparent og retfærdig, og vi har attraktive bonusordninger der 
                    belønner høj performance. Derudover hjælper vi med det praktiske omkring CVR-nummer, 
                    momsregistrering og andre administrative opgaver.
                  </p>
                  
                  <p className="mb-4">
                    Hvis du er klar til at tage næste skridt i din karriere som freelance mødebooker eller 
                    telesælger, så er Nexus Marketing det rigtige valg. Kontakt os i dag og hør mere om de 
                    spændende muligheder, der venter dig.
                  </p>
                </div>
              </div>
            </section>

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
                  title="Jobansøgning - Arbejd hjemmefra"
                ></iframe>
              </div>

              {/* SEO Content for Remote Work Application */}
              <div className="max-w-4xl mx-auto mt-12 px-8">
                <div className="bg-white rounded-lg p-8 shadow-md">
                  <h3 className="text-2xl font-bold mb-6 text-center">Hvorfor Søge Job som Hjemmearbejder hos Nexus Marketing?</h3>
                  
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-lg font-semibold mb-4 text-blue-600">Perfekt Work-Life Balance</h4>
                      <p className="text-gray-600 mb-4">
                        At arbejde hjemmefra som mødebooker eller telesælger hos Nexus Marketing giver dig den ultimative 
                        fleksibilitet til at skabe den perfekte balance mellem arbejde og privatliv. Du sparer tid på 
                        transport, kan arbejde i dit eget tempo og tilrettelægge din dag efter dine personlige behov.
                      </p>
                      <p className="text-gray-600">
                        Mange af vores freelancere er forældre, studerende eller personer der ønsker mere frihed i 
                        hverdagen. Hos os kan du kombinere en meningsfuld karriere med de ting, der betyder mest for dig.
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-semibold mb-4 text-green-600">Attraktiv Indtjening og Karrieremuligheder</h4>
                      <p className="text-gray-600 mb-4">
                        Som hjemmearbejder hos Nexus Marketing får du adgang til nogle af markedets bedste 
                        indtjeningsmuligheder inden for mødebooking og telesalg. Vores provisionsmodel belønner 
                        performance, så jo bedre du bliver, jo mere tjener du.
                      </p>
                      <p className="text-gray-600">
                        Vi investerer i din professionelle udvikling med løbende træning, coaching og 
                        karrierevejledning. Mange af vores freelancere har udviklet sig til teamledere, 
                        konsulenter eller har startet deres egen virksomhed med den erfaring, de har opnået hos os.
                      </p>
                    </div>
                  </div>

                  <div className="mt-8 p-6 bg-blue-50 rounded-lg">
                    <h4 className="text-lg font-semibold mb-4 text-center">Start Din Karriere som Hjemmearbejder i Dag</h4>
                    <p className="text-gray-600 text-center mb-4">
                      Nexus Marketing er den ideelle arbejdsplads for dig, der ønsker frihed, fleksibilitet og 
                      attraktiv indtjening. Vi tilbyder et professionelt miljø med høje standarder, samtidig 
                      med at du får den frihed, du drømmer om.
                    </p>
                    <p className="text-gray-600 text-center">
                      Ansøg i dag og tag det første skridt mod en karriere, der giver dig både økonomisk 
                      sikkerhed og den livsstil, du ønsker. Vi ser frem til at høre fra dig!
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

export default RemoteWorkPage;