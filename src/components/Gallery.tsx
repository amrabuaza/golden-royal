import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { useTranslation } from "react-i18next";

interface Car {
  id: string;
  title: string;
  category: string;
  images: string[];
  coverImage: string;
}

export default function Gallery() {
  const [selectedCar, setSelectedCar] = useState<Car | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const { t } = useTranslation();

  const cars: Car[] = [
       {
      id: "e200",
      title: "Mercedes E200",
      category: t("gallery.used"),
      images: [
        "/assets/e200/e200(1).jpeg",
        "/assets/e200/e200(2).jpeg",
        "/assets/e200/e200(3).jpeg",
        "/assets/e200/e200(4).jpeg",
        "/assets/e200/e200(5).jpeg",
        "/assets/e200/e200(6).jpeg",
        "/assets/e200/e200(7).jpeg",
        "/assets/e200/e200(8).jpeg",
        "/assets/e200/e200(9).jpeg",
        "/assets/e200/e200(10).jpeg",
      ],
      coverImage: "/assets/e200/e200(10).jpeg",
    },
    {
      id: "e200-white",
      title: "Mercedes E200 White",
      category: t("gallery.used"),
      images: [
        "/assets/e200-white/e200-white(1).jpeg",
        "/assets/e200-white/e200-white(2).jpeg",
        "/assets/e200-white/e200-white(3).jpeg",
        "/assets/e200-white/e200-white(4).jpeg",
        "/assets/e200-white/e200-white(5).jpeg",
        "/assets/e200-white/e200-white(6).jpeg",
      ],
      coverImage: "/assets/e200-white/e200-white(6).jpeg",
    },
        {
      id: "bmwx4",
      title: "BMW X4",
      category: t("gallery.used"),
      images: [
        "/assets/bmwx4/bmwx4(1).jpeg",
        "/assets/bmwx4/bmwx4(2).jpeg",
        "/assets/bmwx4/bmwx4(3).jpeg",
        "/assets/bmwx4/bmwx4(4).jpeg",
        "/assets/bmwx4/bmwx4(5).jpeg",
        "/assets/bmwx4/bmwx4(6).jpeg",
      ],
      coverImage: "/assets/bmwx4/bmwx4(4).jpeg",
    },
    {
      id: "black-bmw",
      title: "Black BMW",
      category: t("gallery.used"),
      images: [
        "/assets/black-bmw/black-bmw(1).jpeg",
        "/assets/black-bmw/black-bmw(2).jpeg",
        "/assets/black-bmw/black-bmw(3).jpeg",
        "/assets/black-bmw/black-bmw(4).jpeg",
      ],
      coverImage: "/assets/black-bmw/black-bmw(3).jpeg",
    },
    {
      id: "black-range-rover",
      title: "Black Range Rover",
      category: t("gallery.used"),
      images: [
        "/assets/black-range-rover/black-range-rover(1).jpeg",
        "/assets/black-range-rover/black-range-rover(2).jpeg",
        "/assets/black-range-rover/black-range-rover(3).jpeg",
        "/assets/black-range-rover/black-range-rover(4).jpeg",
        "/assets/black-range-rover/black-range-rover(5).jpeg",
        "/assets/black-range-rover/black-range-rover(6).jpeg",
        "/assets/black-range-rover/black-range-rover(7).jpeg",
        "/assets/black-range-rover/black-range-rover(8).jpeg",
        "/assets/black-range-rover/black-range-rover(9).jpeg",
        "/assets/black-range-rover/black-range-rover(10).jpeg",
        "/assets/black-range-rover/black-range-rover(11).jpeg",
      ],
      coverImage: "/assets/black-range-rover/black-range-rover(10).jpeg",
    },
    {
      id: "black-range-rover-2025",
      title: "Black Range Rover 2025",
      category: t("gallery.new"),
      images: [
        "/assets/black-range-rover-2025/black-range-rover-2025(1).jpeg",
        "/assets/black-range-rover-2025/black-range-rover-2025(2).jpeg",
        "/assets/black-range-rover-2025/black-range-rover-2025(3).jpeg",
        "/assets/black-range-rover-2025/black-range-rover-2025(4).jpeg",
        "/assets/black-range-rover-2025/black-range-rover-2025(5).jpeg",
        "/assets/black-range-rover-2025/black-range-rover-2025(6).jpeg",
        "/assets/black-range-rover-2025/black-range-rover-2025(7).jpeg",
        "/assets/black-range-rover-2025/black-range-rover-2025(8).jpeg",
      ],
      coverImage: "/assets/black-range-rover-2025/black-range-rover-2025(4).jpeg",
    },
    {
      id: "range-rover-discovery",
      title: "Range Rover Discovery",
      category: t("gallery.used"),
      images: [
        "/assets/range-rover-discovery/range-rover-discovery(1).jpeg",
        "/assets/range-rover-discovery/range-rover-discovery(2).jpeg",
        "/assets/range-rover-discovery/range-rover-discovery(3).jpeg",
        "/assets/range-rover-discovery/range-rover-discovery(4).jpeg",
        "/assets/range-rover-discovery/range-rover-discovery(5).jpeg",
        "/assets/range-rover-discovery/range-rover-discovery(6).jpeg",
        "/assets/range-rover-discovery/range-rover-discovery(7).jpeg",
        "/assets/range-rover-discovery/range-rover-discovery(8).jpeg",
        "/assets/range-rover-discovery/range-rover-discovery(9).jpeg",
        "/assets/range-rover-discovery/range-rover-discovery(10).jpeg",
        "/assets/range-rover-discovery/range-rover-discovery(11).jpeg",
      ],
      coverImage: "/assets/range-rover-discovery/range-rover-discovery(1).jpeg",
    },
    {
      id: "range-svr",
      title: "Range SVR",
      category: t("gallery.new"),
      images: [
        "/assets/range-svr/range-svr(1).jpeg",
        "/assets/range-svr/range-svr(2).jpeg",
        "/assets/range-svr/range-svr(3).jpeg",
        "/assets/range-svr/range-svr(4).jpeg",
        "/assets/range-svr/range-svr(5).jpeg",
        "/assets/range-svr/range-svr(6).jpeg",
        "/assets/range-svr/range-svr(7).jpeg",
        "/assets/range-svr/range-svr(8).jpeg",
        "/assets/range-svr/range-svr(9).jpeg",
        "/assets/range-svr/range-svr(10).jpeg",
        "/assets/range-svr/range-svr(11).jpeg",
        "/assets/range-svr/range-svr(12).jpeg",
        "/assets/range-svr/range-svr(13).jpeg",
        "/assets/range-svr/range-svr(14).jpeg",
        "/assets/range-svr/range-svr(15).jpeg",
        "/assets/range-svr/range-svr(16).jpeg",
        "/assets/range-svr/range-svr(17).jpeg",
      ],
      coverImage: "/assets/range-svr/range-svr(13).jpeg",
    },
    {
      id: "silver-range-rover",
      title: "Silver Range Rover",
      category: t("gallery.used"),
      images: [
        "/assets/silver-range-rover/silver-range-rover(1).jpeg",
        "/assets/silver-range-rover/silver-range-rover(2).jpeg",
        "/assets/silver-range-rover/silver-range-rover(3).jpeg",
        "/assets/silver-range-rover/silver-range-rover(4).jpeg",
        "/assets/silver-range-rover/silver-range-rover(5).jpeg",
        "/assets/silver-range-rover/silver-range-rover(6).jpeg",
        "/assets/silver-range-rover/silver-range-rover(7).jpeg",
        "/assets/silver-range-rover/silver-range-rover(8).jpeg",
        "/assets/silver-range-rover/silver-range-rover(9).jpeg",
        "/assets/silver-range-rover/silver-range-rover(10).jpeg",
        "/assets/silver-range-rover/silver-range-rover(11).jpeg",
        "/assets/silver-range-rover/silver-range-rover(12).jpeg",
        "/assets/silver-range-rover/silver-range-rover(13).jpeg",
      ],
      coverImage: "/assets/silver-range-rover/silver-range-rover(9).jpeg",
    },
    {
      id: "white-porsche",
      title: "White Porsche",
      category: t("gallery.new"),
      images: [
        "/assets/white-porsche/white-porsche(1).jpeg",
        "/assets/white-porsche/white-porsche(2).jpeg",
        "/assets/white-porsche/white-porsche(3).jpeg",
        "/assets/white-porsche/white-porsche(4).jpeg",
        "/assets/white-porsche/white-porsche(5).jpeg",
        "/assets/white-porsche/white-porsche(6).jpeg",
        "/assets/white-porsche/white-porsche(7).jpeg",
        "/assets/white-porsche/white-porsche(8).jpeg",
        "/assets/white-porsche/white-porsche(9).jpeg",
        "/assets/white-porsche/white-porsche(10).jpeg",
        "/assets/white-porsche/white-porsche(11).jpeg",
      ],
      coverImage: "/assets/white-porsche/white-porsche(5).jpeg",
    },
    {
      id: "white-range-rover",
      title: "White Range Rover",
      category: t("gallery.used"),
      images: [
        "/assets/white-range-rover/white-range-rover(1).jpeg",
        "/assets/white-range-rover/white-range-rover(2).jpeg",
        "/assets/white-range-rover/white-range-rover(3).jpeg",
        "/assets/white-range-rover/white-range-rover(4).jpeg",
        "/assets/white-range-rover/white-range-rover(5).jpeg",
        "/assets/white-range-rover/white-range-rover(6).jpeg",
        "/assets/white-range-rover/white-range-rover(7).jpeg",
        "/assets/white-range-rover/white-range-rover(8).jpeg",
        "/assets/white-range-rover/white-range-rover(9).jpeg",
        "/assets/white-range-rover/white-range-rover(10).jpeg",
        "/assets/white-range-rover/white-range-rover(11).jpeg",
        "/assets/white-range-rover/white-range-rover(12).jpeg",
        "/assets/white-range-rover/white-range-rover(13).jpeg",
        "/assets/white-range-rover/white-range-rover(14).jpeg",
        "/assets/white-range-rover/white-range-rover(15).jpeg",
      ],
      coverImage: "/assets/white-range-rover/white-range-rover(2).jpeg",
    },
    {
      id: "black-range",
      title: "Black Range Rover",
      category: t("gallery.used"),
      images: [
        "/assets/black-range/black-range(1).jpeg",
        "/assets/black-range/black-range(2).jpeg",
        "/assets/black-range/black-range(3).jpeg",
        "/assets/black-range/black-range(4).jpeg",
        "/assets/black-range/black-range(5).jpeg",
        "/assets/black-range/black-range(6).jpeg",
        "/assets/black-range/black-range(7).jpeg",
        "/assets/black-range/black-range(8).jpeg",
        "/assets/black-range/black-range(9).jpeg",
        "/assets/black-range/black-range(10).jpeg",
        "/assets/black-range/black-range(11).jpeg",
        "/assets/black-range/black-range(12).jpeg",
        "/assets/black-range/black-range(13).jpeg",
      ],
      coverImage: "/assets/black-range/black-range(13).jpeg",
    },
  ];

  const handleCarClick = (car: Car) => {
    setSelectedCar(car);
    setCurrentImageIndex(0);
  };

  const handleCloseGallery = () => {
    setSelectedCar(null);
    setCurrentImageIndex(0);
  };

  const handleNextImage = () => {
    if (selectedCar && currentImageIndex < selectedCar.images.length - 1) {
      setCurrentImageIndex(currentImageIndex + 1);
    }
  };

  const handlePrevImage = () => {
    if (currentImageIndex > 0) {
      setCurrentImageIndex(currentImageIndex - 1);
    }
  };

  return (
    <section
      id="gallery"
      className="py-20 bg-gradient-to-br from-white via-gray-50 to-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 animate-fade-in-up">
            {t("gallery.title")}
          </h2>
          <div className="w-24 h-1 bg-gold-600 mx-auto mb-6 animate-slide-in-right"></div>
          <p
            className="text-xl text-gray-700 max-w-3xl mx-auto animate-fade-in-up"
            style={{ animationDelay: "0.1s" }}
          >
            {t("gallery.description")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cars.map((car, index) => (
            <div
              key={car.id}
              className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer hover:-translate-y-2 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => handleCarClick(car)}
            >
              <div className="aspect-[4/3] overflow-hidden bg-gray-200">
                <img
                  src={car.coverImage}
                  alt={car.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                />
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 right-0 left-0 p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <div className="flex justify-between items-end">
                    <div>
                      <h3 className="text-white text-xl font-bold mb-2">
                        {car.title}
                      </h3>
                      <div className="flex items-center gap-2">
                        <span className="inline-block bg-gradient-to-r from-[#D4AF37] to-[#B8860B] text-white px-3 py-1 rounded-full text-sm font-medium shadow-lg">
                          {car.category}
                        </span>
                        <span className="inline-block bg-white/20 text-white px-3 py-1 rounded-full text-sm font-medium">
                          {car.images.length} {t("gallery.photos")}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-br from-gray-50 to-white p-8 rounded-xl border-2 border-gray-200 hover:border-gold-500 transition-all duration-500 shadow-lg animate-fade-in-up">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              {t("gallery.searchTitle")}
            </h3>
            <p className="text-gray-600 text-lg mb-6">
              {t("gallery.searchDescription")}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="bg-white px-6 py-3 rounded-lg shadow-md border-2 border-gray-200 hover:border-gold-500 hover:scale-105 transition-all duration-300">
                <p className="text-sm text-gray-600">{t("gallery.phone")}</p>
                <a
                  className="text-lg font-bold text-gold-600 text-left"
                  href="tel:(+971)65207204"
                  dir="ltr"
                >
                  (+971) 6520 7204
                </a>
              </div>
              <div className="bg-white px-6 py-3 rounded-lg shadow-md border-2 border-gray-200 hover:border-gold-500 hover:scale-105 transition-all duration-300">
                <p className="text-sm text-gray-600">{t("gallery.email")}</p>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg font-bold text-gold-600 hover:text-gold-700 transition-colors"
                  href="mailto:info@unitedint-uae.com"
                >
                  info@unitedint-uae.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {selectedCar && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 animate-fade-in"
          onClick={handleCloseGallery}
        >
          {/* Close Button */}
          <button
            className="absolute top-4 right-4 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full transition-all duration-300 hover:scale-110 z-10"
            onClick={handleCloseGallery}
          >
            <X className="w-8 h-8" />
          </button>

          {/* Car Info */}
          <div className="absolute top-4 left-4 bg-black/50 backdrop-blur-sm text-white p-4 rounded-lg z-10">
            <h3 className="text-2xl font-bold mb-1">{selectedCar.title}</h3>
            <div className="flex items-center gap-2">
              <span className="bg-gradient-to-r from-[#D4AF37] to-[#B8860B] px-3 py-1 rounded-full text-sm font-medium">
                {selectedCar.category}
              </span>
              <span className="bg-white/20 px-3 py-1 rounded-full text-sm">
                {currentImageIndex + 1} / {selectedCar.images.length}
              </span>
            </div>
          </div>

          {/* Previous Button */}
          {currentImageIndex > 0 && (
            <button
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full transition-all duration-300 hover:scale-110 z-10"
              onClick={(e) => {
                e.stopPropagation();
                handlePrevImage();
              }}
            >
              <ChevronLeft className="w-8 h-8" />
            </button>
          )}

          {/* Next Button */}
          {currentImageIndex < selectedCar.images.length - 1 && (
            <button
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full transition-all duration-300 hover:scale-110 z-10"
              onClick={(e) => {
                e.stopPropagation();
                handleNextImage();
              }}
            >
              <ChevronRight className="w-8 h-8" />
            </button>
          )}

          {/* Main Image */}
          <div className="max-w-5xl max-h-[80vh] flex items-center justify-center">
            <img
              src={selectedCar.images[currentImageIndex]}
              alt={`${selectedCar.title} - ${currentImageIndex + 1}`}
              className="max-w-full max-h-full object-contain animate-scale-in"
              onClick={(e) => e.stopPropagation()}
            />
          </div>

          {/* Thumbnail Navigation */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 bg-black/50 backdrop-blur-sm p-3 rounded-lg max-w-[90vw] overflow-x-auto">
            {selectedCar.images.map((image, index) => (
              <button
                key={index}
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrentImageIndex(index);
                }}
                className={`flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden transition-all duration-300 ${
                  index === currentImageIndex
                    ? "ring-2 ring-gold-500 scale-110"
                    : "opacity-50 hover:opacity-100"
                }`}
              >
                <img
                  src={image}
                  alt={`Thumbnail ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
