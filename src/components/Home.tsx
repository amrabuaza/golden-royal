import { Car, Package, Truck, Wrench, FileCheck } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import Logo from './Logo';

export default function Home() {
  const { t } = useTranslation();
  
  const services = [
    {
      icon: Car,
      title: t('home.newCars.title'),
      subtitle: t('home.newCars.subtitle'),
      description: t('home.newCars.description'),
    },
    {
      icon: FileCheck,
      title: t('home.customsClearance.title'),
      subtitle: t('home.customsClearance.subtitle'),
      description: t('home.customsClearance.description'),
    },
    {
      icon: Package,
      title: t('home.carAccessories.title'),
      subtitle: t('home.carAccessories.subtitle'),
      description: t('home.carAccessories.description'),
    },
    {
      icon: Truck,
      title: t('home.usedCars.title'),
      subtitle: t('home.usedCars.subtitle'),
      description: t('home.usedCars.description'),
    },
    {
      icon: Wrench,
      title: t('home.spareParts.title'),
      subtitle: t('home.spareParts.subtitle'),
      description: t('home.spareParts.description'),
    },
  ];

  return (
    <section id="home" className="pt-20">
      <div className="relative bg-gradient-to-br from-gray-50 via-white to-gold-50 overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle, #8B6F3F 1px, transparent 1px)',
            backgroundSize: '40px 40px'
          }}></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="text-center">
            <div className="inline-block mb-6 animate-scale-in">
              <Logo className="w-24 h-24 mx-auto drop-shadow-xl hover:scale-110 transition-transform duration-500" />
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4 animate-fade-in-up">
              {t('home.title')}
            </h1>
            <p className="text-2xl md:text-3xl text-gold-600 font-semibold mb-6 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              {t('home.subtitle')}
            </p>

            <div className="max-w-3xl mx-auto mb-8 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                {t('home.description')}
              </p>
              <p className="text-base md:text-lg text-gray-600 mt-2">
                {t('home.subDescription')}
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-4 mb-12 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              <div className="bg-white px-6 py-3 rounded-lg shadow-md border-2 border-gold-300 hover:border-gold-500 hover:shadow-xl transition-all duration-300 hover:scale-105">
                <p className="text-sm text-gray-600">{t('home.licenseNumber')}</p>
                <p className="text-lg font-bold text-gold-600">37744</p>
              </div>
              <div className="bg-white px-6 py-3 rounded-lg shadow-md border-2 border-gold-300 hover:border-gold-500 hover:shadow-xl transition-all duration-300 hover:scale-105">
                <p className="text-sm text-gray-600">{t('home.location')}</p>
                <p className="text-lg font-bold text-gold-600">Ajman Free Zone</p>
              </div>
              <div className="bg-white px-6 py-3 rounded-lg shadow-md border-2 border-gold-300 hover:border-gold-500 hover:shadow-xl transition-all duration-300 hover:scale-105">
                <p className="text-sm text-gray-600">{t('home.established')}</p>
                <p className="text-lg font-bold text-gold-600">2024</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 animate-fade-in-up">
              {t('home.services')}
            </h2>
            <div className="w-24 h-1 bg-gold-600 mx-auto animate-slide-in-right"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-200 hover:border-gold-500 group hover:-translate-y-2 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="bg-gradient-to-br from-[#D4AF37] to-[#B8860B] w-16 h-16 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-gold-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm text-gold-600 font-medium mb-3">
                  {service.subtitle}
                </p>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-br from-gray-800 via-gray-900 to-gray-800 py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'linear-gradient(45deg, #8B6F3F 25%, transparent 25%, transparent 75%, #8B6F3F 75%, #8B6F3F), linear-gradient(45deg, #8B6F3F 25%, transparent 25%, transparent 75%, #8B6F3F 75%, #8B6F3F)',
            backgroundSize: '60px 60px',
            backgroundPosition: '0 0, 30px 30px'
          }}></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 animate-fade-in-up">
            {t('home.inquiry.title')}
          </h2>
          <p className="text-xl text-gray-300 mb-8 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            {t('home.inquiry.description')}
          </p>
          <div className="flex flex-wrap justify-center gap-4 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="bg-white px-8 py-4 rounded-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300">
              <p className="text-sm text-gray-600">{t('home.inquiry.phone')}</p>
              <a className="text-lg font-bold text-gold-600 text-left" href="tel:(+971)65207204" dir="ltr">(+971) 6520 7204</a>
            </div>
            <div className="bg-white px-8 py-4 rounded-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300">
              <p className="text-sm text-gray-600">{t('home.inquiry.email')}</p>
              <a target="_blank" rel="noopener noreferrer" className="text-lg font-bold text-gold-600 hover:text-gold-700 transition-colors" href="mailto:info@unitedint-uae.com">info@unitedint-uae.com</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
