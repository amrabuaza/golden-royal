import { MapPin, Phone, Mail } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import Logo from './Logo';

export default function Footer() {
  const { t } = useTranslation();
  
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle, #8B6F3F 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div className="animate-fade-in-up">
            <div className="flex items-center gap-3 mb-4">
              <Logo className="w-12 h-12" />
              <div>
                <h3 className="text-xl font-bold text-gold-400">{t('footer.company')}</h3>
                <p className="text-sm text-gray-400"> GOLDE ROYAL E.Z.FE</p>
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed">
              {t('footer.description')}
            </p>
          </div>

          <div className="animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            <h4 className="text-lg font-bold text-gold-400 mb-4">{t('footer.companyInfo')}</h4>
            <ul className="space-y-2 text-gray-400">
              <li className="hover:text-gold-400 transition-colors">{t('footer.licenseNumber')}: 37744</li>
              <li className="hover:text-gold-400 transition-colors">{t('footer.registrationNumber')}: 37744</li>
              <li className="hover:text-gold-400 transition-colors">{t('footer.freeZoneEstablishment')}</li>
              <li className="hover:text-gold-400 transition-colors">{t('footer.capital')}: 10,000,000 AED</li>
            </ul>
          </div>

          <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <h4 className="text-lg font-bold text-gold-400 mb-4">{t('footer.contactUs')}</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 hover:text-gold-400 transition-colors">
                <MapPin className="w-5 h-5 text-gold-500 flex-shrink-0 mt-1" />
                <span className="text-gray-400">
                  {t('footer.address')}<br />
                </span>
              </li>
              <li className="flex items-center gap-3 hover:text-gold-400 transition-colors">
                <Phone className="w-5 h-5 text-gold-500 flex-shrink-0" />
                <a href="tel:(+971)65207204" className="text-gray-400 hover:text-gold-400 transition-colors" dir="ltr">(+971) 6520 7204</a>
              </li>
              <li className="flex items-center gap-3 hover:text-gold-400 transition-colors">
                <Mail className="w-5 h-5 text-gold-500 flex-shrink-0" />
                <a href="mailto:info@unitedint-uae.com" className="text-gray-400 hover:text-gold-400 transition-colors">info@unitedint-uae.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-center md:text-right">
              © 2025 {t('footer.company')}. {t('footer.rights')}.
            </p>
            <p className="text-gray-500 text-center md:text-left">
              {t('footer.licensedBy')}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
