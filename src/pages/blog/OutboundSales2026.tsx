import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Target, Rocket, TrendingUp, Users2, Mail, Linkedin } from 'lucide-react';
import SEO from '../../components/SEO';

const OutboundSales2026: React.FC = () => {
  return (
    <>
      <SEO
        title="Outbound Sales i 2026: Strategier der virker | Nexus Marketing"
        description="Komplet guide til moderne outbound sales i 2026. Lær hvordan du bygger en effektiv outbound-motor med AI, multi-channel tilgange og dokumenterede best practices."
        canonical="https://nexusmarketing.dk/blog/outbound-sales-2026"
        keywords="outbound sales, outbound strategi, B2B salg, cold outreach, sales development, SDR, lead generation 2026"
      />

      <article className="min-h-screen bg-gray-50">
        <div className="bg-gradient-to-br from-indigo-600 to-purple-700 text-white py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <Link to="/blog" className="inline-flex items-center text-indigo-100 hover:text-white mb-6 transition-colors">
                <ArrowLeft className="mr-2" size={20} />
                Tilbage til blog
              </Link>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Outbound Sales i 2026: Sådan bygger du en skalerbar salgsmotor
              </h1>
              <div className="flex items-center text-indigo-100 text-sm">
                <span>28. januar 2026</span>
                <span className="mx-3">•</span>
                <span>13 minutters læsning</span>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
              <div className="prose prose-lg max-w-none">
                <p className="text-xl text-gray-700 leading-relaxed mb-8">
                  Mens mange virksomheder satser alt på inbound marketing, bygger de mest succesrige B2B-virksomheder en stærk outbound sales-motor. I 2026 er outbound ikke død - det er bare blevet mere sofistikeret, datadrevet og effektivt. Denne guide viser dig hvordan.
                </p>

                <div className="bg-indigo-50 border-l-4 border-indigo-600 p-6 mb-8">
                  <p className="text-gray-800 font-semibold mb-2">I denne omfattende guide:</p>
                  <ul className="list-disc list-inside text-gray-700 space-y-1 mb-0">
                    <li>Forskellen på moderne og gammeldags outbound</li>
                    <li>Hvordan du bygger en outbound-strategi fra bunden</li>
                    <li>Multi-channel prospecting der virker</li>
                    <li>AI og automation i outbound sales</li>
                    <li>Metrics der betyder noget</li>
                    <li>Case studies fra succesfulde outbound-teams</li>
                  </ul>
                </div>

                <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900">Hvorfor outbound sales stadig er relevant i 2026</h2>

                <p className="text-gray-700 leading-relaxed mb-6">
                  I en verden præget af content marketing, SEO og social selling kunne man tro at outbound er forældet. Realiteten er anderledes:
                </p>

                <div className="grid md:grid-cols-2 gap-6 my-8">
                  <div className="bg-indigo-50 p-6 rounded-lg border border-indigo-200">
                    <h3 className="text-lg font-semibold mb-3 text-gray-900">Inbound marketing</h3>
                    <div className="space-y-2 text-sm text-gray-700">
                      <p><span className="text-green-600 font-bold">+</span> Lavere cost per lead over tid</p>
                      <p><span className="text-green-600 font-bold">+</span> Høj kvalitet (leads søger dig)</p>
                      <p><span className="text-green-600 font-bold">+</span> Skalerbart ved succes</p>
                      <p className="pt-2"><span className="text-red-600 font-bold">-</span> Tager måneder/år at bygge</p>
                      <p><span className="text-red-600 font-bold">-</span> Afhængig af SEO/algoritmer</p>
                      <p><span className="text-red-600 font-bold">-</span> Passiv - du venter på leads</p>
                    </div>
                  </div>

                  <div className="bg-purple-50 p-6 rounded-lg border border-purple-200">
                    <h3 className="text-lg font-semibold mb-3 text-gray-900">Outbound sales</h3>
                    <div className="space-y-2 text-sm text-gray-700">
                      <p><span className="text-green-600 font-bold">+</span> Predictable revenue fra dag 1</p>
                      <p><span className="text-green-600 font-bold">+</span> Du vælger præcis hvem du går efter</p>
                      <p><span className="text-green-600 font-bold">+</span> Hurtig feedback og læring</p>
                      <p className="pt-2"><span className="text-red-600 font-bold">-</span> Højere cost per lead</p>
                      <p><span className="text-red-600 font-bold">-</span> Kræver dedikeret team</p>
                      <p><span className="text-red-600 font-bold">-</span> Skal kontinuerligt optimeres</p>
                    </div>
                  </div>
                </div>

                <div className="bg-green-50 border-l-4 border-green-600 p-6 my-8">
                  <p className="text-gray-800 mb-0">
                    <strong>Sandheden:</strong> De mest succesrige B2B-virksomheder bruger BÅDE inbound og outbound. Inbound bygger mærket og fanger demand. Outbound skaber demand proaktivt hos de rette prospects.
                  </p>
                </div>

                <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900">Moderne outbound vs. gammeldags spam</h2>

                <p className="text-gray-700 leading-relaxed mb-6">
                  Hvis dit billede af outbound er massive blast-emails og aggressive cold calls, er du bagud. Her er forskellen:
                </p>

                <div className="overflow-x-auto my-8">
                  <table className="min-w-full bg-white border border-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900 border-b">Aspekt</th>
                        <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900 border-b">Gammeldags</th>
                        <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900 border-b">Moderne (2026)</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      <tr>
                        <td className="px-6 py-4 text-sm font-medium text-gray-900">Targeting</td>
                        <td className="px-6 py-4 text-sm text-gray-700">Bred, ukvalificeret liste</td>
                        <td className="px-6 py-4 text-sm text-gray-700">AI-drevet ICP match + intent signals</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 text-sm font-medium text-gray-900">Personalisering</td>
                        <td className="px-6 py-4 text-sm text-gray-700">{{FirstName}} i email</td>
                        <td className="px-6 py-4 text-sm text-gray-700">Dyb research, relevante insights</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 text-sm font-medium text-gray-900">Kanaler</td>
                        <td className="px-6 py-4 text-sm text-gray-700">Kun email eller kun tlf</td>
                        <td className="px-6 py-4 text-sm text-gray-700">Multi-channel sequences</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 text-sm font-medium text-gray-900">Værdi</td>
                        <td className="px-6 py-4 text-sm text-gray-700">Pitch dit produkt</td>
                        <td className="px-6 py-4 text-sm text-gray-700">Løs deres problem først</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 text-sm font-medium text-gray-900">Måling</td>
                        <td className="px-6 py-4 text-sm text-gray-700">Volume af aktivitet</td>
                        <td className="px-6 py-4 text-sm text-gray-700">Conversion metrics på hvert trin</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900">De 6 faser i en succesfuld outbound-strategi</h2>

                <div className="space-y-8 my-8">
                  <div className="border-l-4 border-indigo-600 pl-6">
                    <div className="flex items-start mb-4">
                      <div className="flex-shrink-0 w-10 h-10 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold mr-4">
                        1
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2 text-gray-900">Definer din Ideal Customer Profile (ICP)</h3>
                      </div>
                    </div>
                    <p className="text-gray-700 mb-3">
                      Alt starter med krystalklar forståelse af hvem din perfekte kunde er. Brug data fra eksisterende kunder:
                    </p>
                    <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
                      <li><strong>Firmografics:</strong> Branche, størrelse, omsætning, vækstrate, geografi</li>
                      <li><strong>Technographics:</strong> Hvilke teknologier bruger de? (særligt relevant for SaaS)</li>
                      <li><strong>Behavioral:</strong> Hvad gør de før de køber? Hvilke pain points har de?</li>
                      <li><strong>Buying committee:</strong> Hvem er beslutningstagerne? Hvad er deres prioriteter?</li>
                    </ul>
                    <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                      <p className="text-sm text-gray-700 mb-2"><strong>Framework: ICP Scoring Matrix</strong></p>
                      <p className="text-sm text-gray-600 mb-0">
                        Giv point til hver prospect baseret på hvor godt de matcher din ICP. Fokuser 80% af ressourcer på A-tier prospects (90-100 points), 20% på B-tier (70-89).
                      </p>
                    </div>
                  </div>

                  <div className="border-l-4 border-indigo-600 pl-6">
                    <div className="flex items-start mb-4">
                      <div className="flex-shrink-0 w-10 h-10 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold mr-4">
                        2
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2 text-gray-900">Byg din prospect-liste med AI</h3>
                      </div>
                    </div>
                    <p className="text-gray-700 mb-3">
                      Manuel list-building er død. Brug moderne sales intelligence platforme:
                    </p>
                    <div className="grid md:grid-cols-2 gap-4 mb-4">
                      <div className="bg-white border border-gray-200 p-4 rounded">
                        <p className="font-semibold text-gray-900 mb-2 text-sm">Database platforme</p>
                        <ul className="text-xs text-gray-700 space-y-1">
                          <li>• Apollo.io (250M+ kontakter)</li>
                          <li>• ZoomInfo (B2B intelligence)</li>
                          <li>• Cognism (GDPR-compliant EU data)</li>
                          <li>• LinkedIn Sales Navigator</li>
                        </ul>
                      </div>
                      <div className="bg-white border border-gray-200 p-4 rounded">
                        <p className="font-semibold text-gray-900 mb-2 text-sm">Intent data værktøjer</p>
                        <ul className="text-xs text-gray-700 space-y-1">
                          <li>• Bombora (B2B intent data)</li>
                          <li>• 6sense (predictive analytics)</li>
                          <li>• Clearbit (real-time enrichment)</li>
                          <li>• BuiltWith (technology tracking)</li>
                        </ul>
                      </div>
                    </div>
                    <p className="text-gray-700 text-sm">
                      Pro tip: Kombiner firmographic filtering med intent signals. En virksomhed der matcher din ICP OG aktivt researcher løsninger som din = hot prospect.
                    </p>
                  </div>

                  <div className="border-l-4 border-indigo-600 pl-6">
                    <div className="flex items-start mb-4">
                      <div className="flex-shrink-0 w-10 h-10 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold mr-4">
                        3
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2 text-gray-900">Personaliseret research (det der sælger)</h3>
                      </div>
                    </div>
                    <p className="text-gray-700 mb-3">
                      Det er her du skiller dig ud. Før du kontakter en prospect, skal du vide:
                    </p>
                    <div className="bg-indigo-50 p-6 rounded-lg mb-4">
                      <h4 className="font-semibold text-gray-900 mb-3">Research checklist (5-10 min per account)</h4>
                      <ul className="space-y-2 text-sm text-gray-700">
                        <li className="flex items-start">
                          <span className="mr-2">☐</span>
                          <span><strong>Company news:</strong> Funding, ekspansion, produktlanceringer, lederskift</span>
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2">☐</span>
                          <span><strong>Decision-maker profil:</strong> LinkedIn baggrund, tidligere roller, interesser</span>
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2">☐</span>
                          <span><strong>Tech stack:</strong> Hvilke tools bruger de? Hvad mangler de?</span>
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2">☐</span>
                          <span><strong>Content de engagerer med:</strong> Blog posts, LinkedIn activity</span>
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2">☐</span>
                          <span><strong>Pain points:</strong> Job postings, Glassdoor reviews, G2 reviews</span>
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2">☐</span>
                          <span><strong>Fælles forbindelser:</strong> Mutual LinkedIn connections, same alma mater</span>
                        </li>
                      </ul>
                    </div>
                    <div className="bg-white border border-gray-200 p-4 rounded">
                      <p className="text-sm text-gray-700 mb-0">
                        <strong>AI-shortcut:</strong> Værktøjer som Clay.com og Bardeen kan automatisere 70% af denne research og give dig personaliserede insights på sekunder.
                      </p>
                    </div>
                  </div>

                  <div className="border-l-4 border-indigo-600 pl-6">
                    <div className="flex items-start mb-4">
                      <div className="flex-shrink-0 w-10 h-10 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold mr-4">
                        4
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2 text-gray-900">Multi-channel outreach sequence</h3>
                      </div>
                    </div>
                    <p className="text-gray-700 mb-3">
                      Et enkelt touchpoint er ikke nok. Top-performing SDR teams bruger 8-12 touchpoints over 3-4 uger:
                    </p>
                    <div className="bg-white border border-gray-200 rounded-lg p-6 mb-4">
                      <h4 className="font-semibold text-gray-900 mb-4">Eksempel: 21-dages sequence</h4>
                      <div className="space-y-3 text-sm">
                        <div className="flex items-start">
                          <div className="font-semibold text-indigo-600 mr-3 min-w-[60px]">Dag 1</div>
                          <div>
                            <div className="flex items-center mb-1">
                              <Mail className="text-gray-400 mr-2" size={16} />
                              <span className="font-medium">Email 1:</span>
                            </div>
                            <p className="text-gray-600">Personaliseret introduktion baseret på research. Fokus på deres udfordring, ikke dit produkt.</p>
                          </div>
                        </div>
                        <div className="flex items-start">
                          <div className="font-semibold text-indigo-600 mr-3 min-w-[60px]">Dag 2</div>
                          <div>
                            <div className="flex items-center mb-1">
                              <Linkedin className="text-gray-400 mr-2" size={16} />
                              <span className="font-medium">LinkedIn:</span>
                            </div>
                            <p className="text-gray-600">Forbindelsesanmodning med personlig note (reference email)</p>
                          </div>
                        </div>
                        <div className="flex items-start">
                          <div className="font-semibold text-indigo-600 mr-3 min-w-[60px]">Dag 4</div>
                          <div>
                            <div className="flex items-center mb-1">
                              <Target className="text-gray-400 mr-2" size={16} />
                              <span className="font-medium">Cold call:</span>
                            </div>
                            <p className="text-gray-600">Reference til email. Efterlad voicemail med værdi hvis ingen svar.</p>
                          </div>
                        </div>
                        <div className="flex items-start">
                          <div className="font-semibold text-indigo-600 mr-3 min-w-[60px]">Dag 7</div>
                          <div>
                            <div className="flex items-center mb-1">
                              <Mail className="text-gray-400 mr-2" size={16} />
                              <span className="font-medium">Email 2:</span>
                            </div>
                            <p className="text-gray-600">Del relevant case study eller whitepaper</p>
                          </div>
                        </div>
                        <div className="flex items-start">
                          <div className="font-semibold text-indigo-600 mr-3 min-w-[60px]">Dag 10</div>
                          <div>
                            <div className="flex items-center mb-1">
                              <Linkedin className="text-gray-400 mr-2" size={16} />
                              <span className="font-medium">LinkedIn:</span>
                            </div>
                            <p className="text-gray-600">Like/comment på deres content + kort besked</p>
                          </div>
                        </div>
                        <div className="flex items-start">
                          <div className="font-semibold text-indigo-600 mr-3 min-w-[60px]">Dag 14</div>
                          <div>
                            <div className="flex items-center mb-1">
                              <Target className="text-gray-400 mr-2" size={16} />
                              <span className="font-medium">Call 2:</span>
                            </div>
                            <p className="text-gray-600">Follow-up call med specifik værdi-prop baseret på research</p>
                          </div>
                        </div>
                        <div className="flex items-start">
                          <div className="font-semibold text-indigo-600 mr-3 min-w-[60px]">Dag 21</div>
                          <div>
                            <div className="flex items-center mb-1">
                              <Mail className="text-gray-400 mr-2" size={16} />
                              <span className="font-medium">Breakup email:</span>
                            </div>
                            <p className="text-gray-600">"Jeg antager timing ikke er rigtig... Skulle det ændre sig, jeg er her"</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="border-l-4 border-indigo-600 pl-6">
                    <div className="flex items-start mb-4">
                      <div className="flex-shrink-0 w-10 h-10 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold mr-4">
                        5
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2 text-gray-900">Kvalificering og booking</h3>
                      </div>
                    </div>
                    <p className="text-gray-700 mb-3">
                      Når du får respons, er målet ikke at sælge - det er at kvalificere og booke et kvalificeret møde.
                    </p>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <p className="font-semibold text-gray-900 mb-2">BANT-framework (stadig relevant i 2026):</p>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• <strong>Budget:</strong> Har de budget til løsningen?</li>
                        <li>• <strong>Authority:</strong> Kan de træffe beslutningen?</li>
                        <li>• <strong>Need:</strong> Har de et reelt, akut behov?</li>
                        <li>• <strong>Timeline:</strong> Hvornår skal de have en løsning?</li>
                      </ul>
                    </div>
                  </div>

                  <div className="border-l-4 border-indigo-600 pl-6">
                    <div className="flex items-start mb-4">
                      <div className="flex-shrink-0 w-10 h-10 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold mr-4">
                        6
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2 text-gray-900">Mål, lær, optimer</h3>
                      </div>
                    </div>
                    <p className="text-gray-700 mb-3">
                      Data er din bedste ven i outbound. Track alt og optimer kontinuerligt:
                    </p>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="bg-white border border-gray-200 p-4 rounded">
                        <p className="font-semibold text-gray-900 mb-2 text-sm">Top-of-funnel metrics:</p>
                        <ul className="text-xs text-gray-700 space-y-1">
                          <li>• Accounts contacted</li>
                          <li>• Email open rate</li>
                          <li>• Reply rate</li>
                          <li>• Call connect rate</li>
                          <li>• LinkedIn acceptance rate</li>
                        </ul>
                      </div>
                      <div className="bg-white border border-gray-200 p-4 rounded">
                        <p className="font-semibold text-gray-900 mb-2 text-sm">Conversion metrics:</p>
                        <ul className="text-xs text-gray-700 space-y-1">
                          <li>• Conversation to meeting rate</li>
                          <li>• Meeting show-up rate</li>
                          <li>• Meeting to qualified opp rate</li>
                          <li>• Opportunity to close rate</li>
                          <li>• Average deal size</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900">Teknologi stack til moderne outbound</h2>

                <p className="text-gray-700 leading-relaxed mb-6">
                  Du kan ikke køre effektiv outbound uden det rette værktøjssæt. Her er essentials:
                </p>

                <div className="space-y-6 my-8">
                  <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <div className="flex items-start">
                      <Rocket className="text-indigo-600 mr-4 flex-shrink-0" size={32} />
                      <div>
                        <h3 className="text-lg font-semibold mb-2 text-gray-900">Sales Engagement Platform</h3>
                        <p className="text-gray-700 text-sm mb-3">
                          Centralt hub til at manage sequences, tracking og team collaboration.
                        </p>
                        <p className="text-sm text-gray-600">
                          <strong>Top valg:</strong> Outreach.io, Salesloft, Apollo.io, Reply.io
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <div className="flex items-start">
                      <Users2 className="text-indigo-600 mr-4 flex-shrink-0" size={32} />
                      <div>
                        <h3 className="text-lg font-semibold mb-2 text-gray-900">CRM System</h3>
                        <p className="text-gray-700 text-sm mb-3">
                          Single source of truth for alle prospect og customer data.
                        </p>
                        <p className="text-sm text-gray-600">
                          <strong>Top valg:</strong> Salesforce, HubSpot, Pipedrive, Close.com
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <div className="flex items-start">
                      <Target className="text-indigo-600 mr-4 flex-shrink-0" size={32} />
                      <div>
                        <h3 className="text-lg font-semibold mb-2 text-gray-900">Intent Data & Enrichment</h3>
                        <p className="text-gray-700 text-sm mb-3">
                          Identificer hvem der er in-market og berig dine data automatisk.
                        </p>
                        <p className="text-sm text-gray-600">
                          <strong>Top valg:</strong> 6sense, Bombora, Clearbit, ZoomInfo
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <div className="flex items-start">
                      <TrendingUp className="text-indigo-600 mr-4 flex-shrink-0" size={32} />
                      <div>
                        <h3 className="text-lg font-semibold mb-2 text-gray-900">Analytics & Attribution</h3>
                        <p className="text-gray-700 text-sm mb-3">
                          Forstå hvad der virker og hvor dine deals kommer fra.
                        </p>
                        <p className="text-sm text-gray-600">
                          <strong>Top valg:</strong> Gong.io (conversation intelligence), Clari (forecasting), ChartMogul (revenue analytics)
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900">Benchmarks: Hvad er gode tal i 2026?</h2>

                <p className="text-gray-700 leading-relaxed mb-6">
                  Baseret på data fra tusindvis af B2B outbound-teams:
                </p>

                <div className="bg-gradient-to-r from-indigo-50 to-purple-50 p-8 rounded-lg my-8 border border-indigo-200">
                  <div className="grid md:grid-cols-3 gap-6 mb-6">
                    <div className="text-center">
                      <h3 className="text-3xl font-bold mb-1 text-gray-900">23%</h3>
                      <p className="text-sm text-gray-600">Gennemsnitlig email open rate</p>
                    </div>
                    <div className="text-center">
                      <h3 className="text-3xl font-bold mb-1 text-gray-900">8.5%</h3>
                      <p className="text-sm text-gray-600">Email reply rate (positiv)</p>
                    </div>
                    <div className="text-center">
                      <h3 className="text-3xl font-bold mb-1 text-gray-900">5-7%</h3>
                      <p className="text-sm text-gray-600">Cold call connect rate</p>
                    </div>
                  </div>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="text-center">
                      <h3 className="text-3xl font-bold mb-1 text-gray-900">30-40%</h3>
                      <p className="text-sm text-gray-600">LinkedIn acceptance rate</p>
                    </div>
                    <div className="text-center">
                      <h3 className="text-3xl font-bold mb-1 text-gray-900">15-20%</h3>
                      <p className="text-sm text-gray-600">Conversation to meeting rate</p>
                    </div>
                    <div className="text-center">
                      <h3 className="text-3xl font-bold mb-1 text-gray-900">75-85%</h3>
                      <p className="text-sm text-gray-600">Meeting show-up rate</p>
                    </div>
                  </div>
                </div>

                <div className="bg-yellow-50 border-l-4 border-yellow-600 p-6 my-8">
                  <p className="text-gray-800 mb-0">
                    <strong>Vigtigt:</strong> Disse tal varierer betydeligt baseret på: ICP match-kvalitet, personalisering level, værdiproposition, branche og produkt-kompleksitet. Top 10% af teams har 2-3x bedre conversion rates.
                  </p>
                </div>

                <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900">Case study: Skalerbar outbound-motor</h2>

                <div className="bg-white border-2 border-indigo-200 rounded-lg p-8 my-8">
                  <h3 className="text-xl font-semibold mb-4 text-gray-900">SaaS virksomhed: Fra 0 til 50 møder/måned på 90 dage</h3>

                  <div className="mb-6">
                    <p className="font-semibold text-gray-900 mb-2">Situation:</p>
                    <p className="text-gray-700 text-sm">
                      Dansk B2B SaaS startup med stort produkt men ingen pipeline. Afhængig af referrals og netværk.
                    </p>
                  </div>

                  <div className="mb-6">
                    <p className="font-semibold text-gray-900 mb-2">Tilgang:</p>
                    <ul className="list-disc pl-6 text-sm text-gray-700 space-y-1">
                      <li>Definerede præcis ICP baseret på early adopters</li>
                      <li>Byggede liste på 500 high-fit accounts med Apollo + ZoomInfo</li>
                      <li>Ansatte 2 SDR'er med fokus på quality over quantity</li>
                      <li>Implementerede 14-dags multi-channel sequence</li>
                      <li>Dyb personalisering (5 min research per account)</li>
                    </ul>
                  </div>

                  <div>
                    <p className="font-semibold text-gray-900 mb-3">Resultater efter 90 dage:</p>
                    <div className="grid md:grid-cols-4 gap-4">
                      <div className="bg-green-50 p-4 rounded text-center border border-green-200">
                        <p className="text-2xl font-bold text-gray-900 mb-1">52</p>
                        <p className="text-xs text-gray-600">Møder booket</p>
                      </div>
                      <div className="bg-green-50 p-4 rounded text-center border border-green-200">
                        <p className="text-2xl font-bold text-gray-900 mb-1">18%</p>
                        <p className="text-xs text-gray-600">Reply rate</p>
                      </div>
                      <div className="bg-green-50 p-4 rounded text-center border border-green-200">
                        <p className="text-2xl font-bold text-gray-900 mb-1">12</p>
                        <p className="text-xs text-gray-600">Closed deals</p>
                      </div>
                      <div className="bg-green-50 p-4 rounded text-center border border-green-200">
                        <p className="text-2xl font-bold text-gray-900 mb-1">€180K</p>
                        <p className="text-xs text-gray-600">Pipeline skabt</p>
                      </div>
                    </div>
                  </div>
                </div>

                <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900">Konklusion: Outbound er predictable revenue</h2>

                <p className="text-gray-700 leading-relaxed mb-6">
                  I modsætning til inbound (som tager tid at bygge) og paid ads (som kan være uforudsigelige), giver outbound sales dig direkte kontrol over din pipeline. Når du har en velfungerende outbound-motor:
                </p>

                <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                  <li>Du ved præcis hvor mange møder du kan generere næste måned</li>
                  <li>Du kan skalere op eller ned efter behov</li>
                  <li>Du går efter præcis de kunder du vil have</li>
                  <li>Du lærer hurtigt hvad der resonerer med markedet</li>
                  <li>Du bygger reelle relationer med beslutningstagere</li>
                </ul>

                <p className="text-gray-700 leading-relaxed mb-6">
                  Nøglen er at kombinere moderne teknologi, datadrevet targeting og dyb personalisering. Det handler ikke om at spamme tusindvis af prospects - det handler om at finde de rette 100 og give dem så personaliseret og værdifuld en oplevelse at de vil tale med dig.
                </p>

                <div className="bg-indigo-600 text-white p-8 rounded-lg mt-12">
                  <h3 className="text-2xl font-bold mb-4">Professionel outbound sales til din virksomhed</h3>
                  <p className="mb-6 text-indigo-100">
                    Nexus Marketing specialiserer sig i at bygge og drive outbound sales-motorer for danske B2B-virksomheder. Vi håndterer alt fra ICP-definition og list-building til personaliseret outreach og mødebooking. Kontakt os for en uforpligtende gennemgang af hvordan vi kan hjælpe dig med at bygge predictable revenue.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link to="/modebooking-priser" className="inline-block px-8 py-3 bg-white text-indigo-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-center">
                      Se vores outbound services
                    </Link>
                    <Link to="/kontakt" className="inline-block px-8 py-3 bg-indigo-700 text-white rounded-lg font-semibold hover:bg-indigo-800 transition-colors border-2 border-white text-center">
                      Book en demo
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <Link to="/blog" className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold">
                <ArrowLeft className="mr-2" size={20} />
                Tilbage til alle blogindlæg
              </Link>
            </div>
          </div>
        </div>
      </article>
    </>
  );
};

export default OutboundSales2026;
