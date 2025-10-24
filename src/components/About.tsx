import { Building2, FileText, Calendar, Shield, Download } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function About() {
  const { t } = useTranslation();

  const companyDetails = [
    {
      icon: Building2,
      title: t("about.legalForm"),
      value: t("about.legalFormValue"),
      subtitle: t("about.legalFormSubtitle"),
    },
    {
      icon: FileText,
      title: t("about.licenseNumber"),
      value: t("about.licenseNumberValue"),
      subtitle: t("about.licenseNumberSubtitle"),
    },
    {
      icon: Calendar,
      title: t("about.establishmentDate"),
      value: t("about.establishmentDateValue"),
      subtitle: t("about.establishmentDateSubtitle"),
    },
    {
      icon: Shield,
      title: t("about.authorizedCapital"),
      value: t("about.authorizedCapitalValue"),
      subtitle: t("about.authorizedCapitalSubtitle"),
    },
  ];

  const handleDownload = (filename: string) => {
    const link = document.createElement('a');
    link.href = "https://d3b0v1su6mtr8p.cloudfront.net/Golden-Royal-Commercial-Registry-In-Details.pdf";
    link.download = filename;
    link.target = '_blank';
    link.click();
  };

  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-br from-white via-gray-50 to-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 animate-fade-in-up">
            {t("about.title")}
          </h2>
          <div className="w-24 h-1 bg-gold-600 mx-auto mb-6 animate-slide-in-right"></div>
          <p
            className="text-xl text-gray-700 max-w-3xl mx-auto animate-fade-in-up"
            style={{ animationDelay: "0.1s" }}
          >
            {t("about.description")}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {companyDetails.map((detail, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-lg border-2 border-gray-200 hover:border-gold-500 transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start gap-6">
                <div className="bg-gradient-to-br from-[#D4AF37] to-[#B8860B] p-4 rounded-lg flex-shrink-0 shadow-lg">
                  <detail.icon className="w-8 h-8 text-white" />
                </div>
                <div className="flex-grow">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {detail.title}
                  </h3>
                  <p className="text-xl text-gold-600 font-semibold mb-1">
                    {detail.value}
                  </p>
                  <p className="text-sm text-gray-600">{detail.subtitle}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-br from-gray-800 via-gray-900 to-gray-800 rounded-2xl p-8 md:p-12 shadow-2xl mb-16 animate-scale-in relative overflow-hidden">
          <div className="absolute inset-0 opacity-5">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage:
                  "radial-gradient(circle, #8B6F3F 1px, transparent 1px)",
                backgroundSize: "30px 30px",
              }}
            ></div>
          </div>

          <div className="text-center mb-8 relative">
            <h3 className="text-3xl font-bold text-white mb-4">
              {t("about.visionMission.title")}
            </h3>
            <div className="w-24 h-1 bg-gold-500 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105">
              <h4 className="text-xl font-bold text-white mb-4">
                {t("about.visionMission.vision.title")}
              </h4>
              <p className="text-gray-200 leading-relaxed">
                {t("about.visionMission.vision.description")}
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105">
              <h4 className="text-xl font-bold text-white mb-4">
                {t("about.visionMission.mission.title")}
              </h4>
              <p className="text-gray-200 leading-relaxed">
                {t("about.visionMission.mission.description")}
              </p>
            </div>
          </div>
        </div>

                <div className="bg-white rounded-2xl p-8 md:p-12 shadow-xl border-2 border-gold-200">
          <div className="text-center mb-8">
            <FileText className="w-16 h-16 text-gold-500 mx-auto mb-4" />
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              {t('about.documents.title')}
            </h3>
            <p className="text-gray-600 text-lg">
              {t('about.documents.description')}
            </p>
          </div>

          <div className="grid place-items-center max-w-4xl mx-auto">
            <button
              onClick={() => handleDownload('Golden-Royal-Commercial-Registry-In-Details.pdf')}
              className="group bg-gradient-to-br from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col items-center w-full"
            >
              <Download className="w-12 h-12 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                     <h4 className="text-xl font-bold mb-2">{t('about.documents.businessLicense')}</h4>
              <p className="text-gray-100 mb-4">{t('about.documents.businessLicenseSubtitle')}</p>
              <div className="bg-white/20 px-4 py-2 rounded-lg inline-block">
                                <span className="text-sm font-medium">{t('about.documents.downloadPdf')}</span>

              </div>
            </button>
          </div>
        </div>
        

        <div className="mt-16 bg-gradient-to-r from-gray-50 via-white to-gray-50 p-8 rounded-xl border-2 border-gray-200 hover:border-gold-500 transition-all duration-500 animate-fade-in-up shadow-lg">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              {t("about.contactInfo.title")}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="hover:scale-105 transition-transform duration-300">
                <p className="text-gray-600 mb-2">
                  {t("about.contactInfo.address")}
                </p>
                <p className="font-bold text-gold-600">
                  {t("about.contactInfo.addressValue")}
                </p>
              </div>
              <div className="hover:scale-105 transition-transform duration-300">
                <p className="text-gray-600 mb-2">
                  {t("about.contactInfo.phone")}
                </p>
                <a
                  className="font-bold text-gold-600 text-center"
                  href="tel:(+971)65207204"
                  dir="ltr"
                >
                  (+971) 6520 7204
                </a>
              </div>
              <div className="hover:scale-105 transition-transform duration-300">
                <p className="text-gray-600 mb-2">
                  {t("about.contactInfo.email")}
                </p>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-gold-600"
                  href="mailto:info@unitedint-uae.com"
                >
                  info@unitedint-uae.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
