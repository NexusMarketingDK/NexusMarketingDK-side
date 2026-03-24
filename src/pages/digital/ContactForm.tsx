import React, { useState } from 'react';
import { CheckCircle, ArrowLeft } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import SEO from '../../components/SEO';

const ContactForm: React.FC = () => {
  const location = useLocation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    projectType: '',
    budget: '',
    timeline: '',
    message: '',
  });
  
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const projectTypes = [
    { value: 'web-development', label: 'Webudvikling' },
    { value: 'api-saas', label: 'API & SaaS Udvikling' },
    { value: 'websites', label: 'Hjemmeside' },
    { value: 'ai-integration', label: 'AI Integration' }
  ];

  const budgetRanges = [
    { value: '10000-25000', label: '10.000 - 25.000 kr.' },
    { value: '25000-50000', label: '25.000 - 50.000 kr.' },
    { value: '50000-100000', label: '50.000 - 100.000 kr.' },
    { value: '100000+', label: 'Over 100.000 kr.' }
  ];

  const timelines = [
    { value: 'asap', label: 'Hurtigst muligt' },
    { value: '1-3-months', label: '1-3 måneder' },
    { value: '3-6-months', label: '3-6 måneder' },
    { value: '6-plus-months', label: '6+ måneder' }
  ];
  
  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Navn er påkrævet';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email er påkrævet';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email er ikke gyldig';
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = 'Telefonnummer er påkrævet';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Projektbeskrivelse er påkrævet';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      setSubmitting(true);
      
      setTimeout(() => {
        setSubmitting(false);
        setSubmitted(true);
        
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          projectType: '',
          budget: '',
          timeline: '',
          message: '',
        });
        
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 1500);
    }
  };

  const getPageTitle = () => {
    const path = location.pathname;
    if (path.includes('web-development')) return 'Webudvikling';
    if (path.includes('api-saas')) return 'API & SaaS';
    if (path.includes('websites')) return 'Hjemmeside';
    if (path.includes('ai-integration')) return 'AI Integration';
    return 'Digitalt Projekt';
  };

  return (
    <>
      <SEO 
        title={`Få tilbud på ${getPageTitle()} | Nexus Marketing`}
        description="Få et uforpligtende tilbud på dit digitale projekt. Vi hjælper med professionel udvikling af websites, apps, API'er og AI-integrationer."
        canonical={location.pathname}
      />
      
      <div className="min-h-screen bg-gray-50 pt-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Back button */}
          <div className="mb-8">
            <Link to={location.pathname.replace('/contact', '')} className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium">
              <ArrowLeft size={16} className="mr-2" /> Tilbage
            </Link>
          </div>
          
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h1 className="text-4xl font-bold mb-4">Få tilbud på {getPageTitle()}</h1>
            <p className="text-lg text-gray-600">
              Fortæl os om dit projekt, så vender vi tilbage med et uforpligtende tilbud tilpasset dine behov.
            </p>
          </div>
          
          {/* Success Message */}
          {submitted && (
            <div className="max-w-3xl mx-auto mb-12 bg-green-100 border border-green-200 text-green-800 rounded-lg p-6 fade-in">
              <div className="flex items-center mb-4">
                <CheckCircle className="text-green-500 mr-3" size={24} />
                <h3 className="text-xl font-semibold">Tak for din henvendelse!</h3>
              </div>
              <p className="mb-4">
                Vi har modtaget din projektforespørgsel og vil kontakte dig hurtigst muligt, typisk inden for 1-2 arbejdsdage.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="text-green-700 font-medium hover:text-green-800"
              >
                Send en ny forespørgsel
              </button>
            </div>
          )}
          
          {/* Contact Form */}
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-lg shadow-md p-8">
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Navn*
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full p-3 border ${errors.name ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
                    />
                    {errors.name && (
                      <p className="mt-1 text-red-500 text-sm">{errors.name}</p>
                    )}
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email*
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full p-3 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
                    />
                    {errors.email && (
                      <p className="mt-1 text-red-500 text-sm">{errors.email}</p>
                    )}
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Telefon*
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className={`w-full p-3 border ${errors.phone ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
                    />
                    {errors.phone && (
                      <p className="mt-1 text-red-500 text-sm">{errors.phone}</p>
                    )}
                  </div>
                  
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                      Virksomhed
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                  <div>
                    <label htmlFor="projectType" className="block text-sm font-medium text-gray-700 mb-2">
                      Projekttype
                    </label>
                    <select
                      id="projectType"
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleChange}
                      className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="">Vælg type</option>
                      {projectTypes.map(type => (
                        <option key={type.value} value={type.value}>{type.label}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-2">
                      Budget
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="">Vælg budget</option>
                      {budgetRanges.map(range => (
                        <option key={range.value} value={range.value}>{range.label}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="timeline" className="block text-sm font-medium text-gray-700 mb-2">
                      Tidshorisont
                    </label>
                    <select
                      id="timeline"
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleChange}
                      className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="">Vælg tidshorisont</option>
                      {timelines.map(time => (
                        <option key={time.value} value={time.value}>{time.label}</option>
                      ))}
                    </select>
                  </div>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Projektbeskrivelse*
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Beskriv dit projekt, dine ønsker og eventuelle specifikke krav..."
                    className={`w-full p-3 border ${errors.message ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
                  ></textarea>
                  {errors.message && (
                    <p className="mt-1 text-red-500 text-sm">{errors.message}</p>
                  )}
                </div>
                
                <div className="flex justify-end">
                  <button
                    type="submit"
                    disabled={submitting}
                    className={`btn btn-primary inline-flex items-center ${submitting ? 'opacity-75 cursor-not-allowed' : ''}`}
                  >
                    {submitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sender...
                      </>
                    ) : (
                      'Send forespørgsel'
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactForm;