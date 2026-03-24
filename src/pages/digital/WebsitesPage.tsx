import React from 'react';
import { Link } from 'react-router-dom';
import { Layout, CheckCircle, ArrowRight, Search, Smartphone, Zap, Globe, ShoppingCart, TrendingUp } from 'lucide-react';
import HeroSection from '../../components/HeroSection';
import SEO from '../../components/SEO';

const WebsitesPage: React.FC = () => {
  const basicBenefits = [
    'Professionelt online visitkort',
    'Basis SEO optimering',
    'Responsivt design',
    'Mobil-venlig',
    'Hurtig opsætning',
    'Konkurrencedygtig pris'
  ];

  const professionalBenefits = [
    'Skræddersyet design',
    'Avanceret SEO optimering',
    'Alle funktioner inkluderet',
    'CMS administration',
    'Blog funktionalitet',
    'Analytics & rapportering'
  ];

  const webshopBenefits = [
    'WooCommerce integreret',
    'Produktkatalog',
    'Betalingsløsninger',
    'Lagerstyring',
    'Ordrehåndtering',
    'E-mail notifikationer'
  ];

  return (
    <>
      <SEO
        title="Professionelle Hjemmesider | Webdesign & Udvikling | Nexus Marketing"
        description="Få en professionel hjemmeside der konverterer. Vi designer og udvikler brugervenlige websites med fokus på SEO og performance. Fra prisvenlige visitkort til avancerede webshops."
        canonical="/digital/hjemmesider"
        keywords="hjemmeside design, webdesign Danmark, SEO hjemmeside, webshop, WooCommerce"
      />

      <HeroSection
        title="Professionelle Hjemmesider til Din Virksomhed"
        subtitle="Fra prisvenlige online visitkort til avancerede e-handel løsninger. Vi designer hjemmesider der konverterer og skaber resultater for din forretning."
        ctaText="Få et uforpligtende tilbud"
        ctaLink="/kontakt"
        backgroundImage="https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">

            <div className="mb-20">
              <div className="bg-gradient-to-r from-blue-600 to-blue-700 -mx-4 md:mx-0 md:rounded-lg p-8 md:p-12">
                <div className="flex flex-col md:flex-row items-start gap-6 px-4 md:px-0">
                  <Globe className="w-14 h-14 text-white flex-shrink-0 mt-2 hidden md:block" />
                  <Globe className="w-12 h-12 text-white flex-shrink-0 mt-2 md:hidden" />
                  <div>
                    <h2 className="text-3xl font-bold mb-4 text-white">Prisvenlig Hjemmeside - Dit Online Visitkort</h2>
                    <p className="text-lg text-blue-50 mb-6">
                      En professionel hjemmeside behøver ikke være dyr. Vores basis SEO-optimerede hjemmesider giver din virksomhed en stærk online tilstedeværelse til en konkurrencedygtig pris. Dette er det perfekte udgangspunkt for virksomheder, der ønsker at etablere sig online uden store investeringer.
                    </p>
                    <div className="grid md:grid-cols-2 gap-3 mb-6">
                      {basicBenefits.map((benefit, index) => (
                        <div key={index} className="flex items-center gap-2">
                          <CheckCircle className="w-5 h-5 text-green-300 flex-shrink-0" />
                          <span className="text-white">{benefit}</span>
                        </div>
                      ))}
                    </div>
                    <p className="text-blue-100 text-sm mb-4">
                      En basis hjemmeside giver dig et professionelt online visitkort der viser potentielle kunder hvem du er, hvad du tilbyder, og hvordan de kan komme i kontakt med dig. Med basis SEO optimering sikrer vi også, at dine mest relevante kunder kan finde dig på Google.
                    </p>
                    <Link to="/kontakt" className="inline-flex items-center px-6 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                      Se prisvenlige løsninger <ArrowRight size={18} className="ml-2" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-16">
              <h2 className="text-2xl font-bold text-center mb-12 text-gray-900">Hvad Er Retten For Din Virksomhed?</h2>

              <div className="grid md:grid-cols-2 gap-8">

                <div className="bg-gray-50 rounded-lg p-8 hover:shadow-lg transition-shadow">
                  <div className="flex items-center gap-3 mb-6">
                    <Layout className="w-10 h-10 text-blue-600" />
                    <h3 className="text-2xl font-bold text-gray-900">Professionelle Hjemmesider</h3>
                  </div>
                  <p className="text-gray-700 mb-6">
                    For virksomheder der ønsker en skræddersyet løsning med avanceret SEO optimering og alle funktioner. Vi designer hjemmesider der ikke bare ser flot ud, men også genererer resultater gennem høj konvertering og Google synlighed.
                  </p>
                  <h4 className="font-semibold text-gray-900 mb-4">Inkluderer:</h4>
                  <div className="space-y-2 mb-6">
                    {professionalBenefits.map((benefit, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                        <span className="text-gray-700">{benefit}</span>
                      </div>
                    ))}
                  </div>
                  <p className="text-sm text-gray-600">
                    Perfekt til virksomheder der kræver en stærk online tilstedeværelse med fokus på konvertering og kundeservice.
                  </p>
                </div>

                <div className="bg-gray-50 rounded-lg p-8 hover:shadow-lg transition-shadow">
                  <div className="flex items-center gap-3 mb-6">
                    <ShoppingCart className="w-10 h-10 text-green-600" />
                    <h3 className="text-2xl font-bold text-gray-900">Webshop Med WooCommerce</h3>
                  </div>
                  <p className="text-gray-700 mb-6">
                    Sælg dine produkter online med en professionel webshop powered af WooCommerce. Vi sætter op, konfigurerer betalingsløsninger, og optimerer for maksimal salg. Din forretning får en komplet e-handel løsning.
                  </p>
                  <h4 className="font-semibold text-gray-900 mb-4">Inkluderer:</h4>
                  <div className="space-y-2 mb-6">
                    {webshopBenefits.map((benefit, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                        <span className="text-gray-700">{benefit}</span>
                      </div>
                    ))}
                  </div>
                  <p className="text-sm text-gray-600">
                    Ideal til virksomheder der ønsker at begynde at sælge online eller forbedre deres eksisterende e-handel operation.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 rounded-lg p-8 md:p-12 mb-16">
              <h2 className="text-3xl font-bold mb-8 text-gray-900">Hvorfor Vælge Nexus Marketing til Din Hjemmeside?</h2>

              <div className="grid md:grid-cols-3 gap-8 mb-8">
                <div>
                  <TrendingUp className="w-12 h-12 text-blue-600 mb-4" />
                  <h3 className="text-xl font-bold mb-3 text-gray-900">Fokus på Resultater</h3>
                  <p className="text-gray-700">
                    Vi designer ikke bare flotte hjemmesider - vi designer hjemmesider der konverterer. Hver element er optimeret for at skabe handlinger fra dine besøgende.
                  </p>
                </div>
                <div>
                  <Search className="w-12 h-12 text-blue-600 mb-4" />
                  <h3 className="text-xl font-bold mb-3 text-gray-900">SEO Fra Start</h3>
                  <p className="text-gray-700">
                    Alle vores hjemmesider er SEO optimeret fra dag ét. Det betyder at dine potentielle kunder kan finde dig på Google når de søger efter dine produkter eller tjenester.
                  </p>
                </div>
                <div>
                  <Smartphone className="w-12 h-12 text-blue-600 mb-4" />
                  <h3 className="text-xl font-bold mb-3 text-gray-900">Mobil Først</h3>
                  <p className="text-gray-700">
                    Over 70% af brugere er på mobil. Alle vores hjemmesider er designet med "mobile-first" tilgang for at sikre optimal brugeroplevelse på alle enheder.
                  </p>
                </div>
              </div>

              <div className="border-t border-gray-200 pt-8">
                <h3 className="text-2xl font-bold mb-6 text-gray-900">Vores Hjemmesidesprocessen</h3>
                <div className="grid md:grid-cols-4 gap-4">
                  {[
                    { step: 1, title: 'Analyse', desc: 'Vi analyserer din virksomhed og dine mål' },
                    { step: 2, title: 'Design', desc: 'Vi designer en unik og konverterende hjemmeside' },
                    { step: 3, title: 'Udvikling', desc: 'Vi bygger og konfigurerer din hjemmeside' },
                    { step: 4, title: 'Launch', desc: 'Vi lancerer og optimerer kontinuerligt' }
                  ].map((item) => (
                    <div key={item.step} className="text-center">
                      <div className="bg-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3 font-bold text-blue-600 text-lg">
                        {item.step}
                      </div>
                      <h4 className="font-semibold text-gray-900">{item.title}</h4>
                      <p className="text-sm text-gray-600">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-8 md:p-12">
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Hvad Får Du Med Nexus Marketing?</h2>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div>
                  <h3 className="text-xl font-bold mb-4 text-gray-900">Under Udvikling</h3>
                  <ul className="space-y-3">
                    {[
                      'Personlig konsultation om dine behov',
                      'Professionelt webdesign tilpasset dit brand',
                      'Komplet SEO optimering',
                      'Responsivt design til alle enheder',
                      'Sikkerhedscertifikat og SSL',
                      'Mobil venlig og hurtig hjemmeside'
                    ].map((item, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{item}</span>
                      </div>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-4 text-gray-900">Efter Launch - Mulighed for tilkøb af</h3>
                  <ul className="space-y-3">
                    {[
                      'Gratis teknisk support',
                      'Sikkerhedsopdateringer og backup',
                      'SEO overvågning og optimering',
                      'Google Analytics opsætning',
                      'Løbende performance optimering',
                      'Assistance med indholdsplanlægning'
                    ].map((item, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{item}</span>
                      </div>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="text-center pt-6 border-t border-gray-200">
                <p className="text-lg text-gray-700 mb-6">
                  Klar til at få en professionel hjemmeside der genererer resultater? Kontakt os i dag for en uforpligtende konsultation.
                </p>
                <Link to="/kontakt" className="btn btn-primary inline-flex items-center">
                  Få et uforpligtende tilbud <ArrowRight size={20} className="ml-2" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WebsitesPage;