// src/context/LanguageContext.js
import React, { createContext, useContext, useState } from 'react';

const translations = {
  fr: {
    // Navigation
    navHome: "Accueil",
    navServices: "Services",
    navPortfolio: "Portfolio",
    navContact: "Contact",
    bookConsultation: "Réserver une Consultation",
    
    // Hero Section
    heroTitle: "Créez Votre Mariage de Rêve",
    heroLocation: "à Djibouti",
    heroSubtitle: "Une fusion parfaite entre tradition et luxe pour votre jour spécial",
    viewPortfolio: "Voir le Portfolio",
    
    // Services Section
    servicesTitle: "Nos Services",
    servicesSubtitle: "Des services de planification de mariage experts pour créer votre célébration parfaite",
    
    // Service Items
    fullPlanning: "Planification Complète",
    fullPlanningDesc: "Services complets de planification de mariage du début à la fin",
    partialPlanning: "Planification Partielle",
    partialPlanningDesc: "Conseils d'experts pour des aspects spécifiques de votre mariage",
    vendorSelection: "Sélection des Prestataires",
    vendorSelectionDesc: "Accès à notre réseau de prestataires premium",
    dayCoordination: "Coordination du Jour J",
    dayCoordinationDesc: "Coordination professionnelle pour assurer la perfection de votre journée",
    entertainment: "Divertissement",
    entertainmentDesc: "Options de divertissement traditionnelles et contemporaines",
    catering: "Restauration",
    cateringDesc: "Expériences culinaires exquises avec des saveurs locales et internationales",

    // Portfolio Section
    portfolioTitle: "Célébrations en Vedette",
    portfolioSubtitle: "Découvrez nos mariages les plus mémorables",
    viewMore: "Voir Plus",

    // Testimonials Section
    testimonialsTitle: "Témoignages",
    testimonialsSubtitle: "Ce que disent nos couples",

    // Contact Section
    contactTitle: "Contactez-Nous",
    contactSubtitle: "Commençons à planifier votre jour parfait",
    name: "Nom",
    email: "Email",
    phone: "Téléphone",
    message: "Message",
    send: "Envoyer",
  },
  ar: {
    // Navigation
    navHome: "الرئيسية",
    navServices: "خدماتنا",
    navPortfolio: "معرض الأعمال",
    navContact: "اتصل بنا",
    bookConsultation: "احجز استشارة",
    
    // Hero Section
    heroTitle: "صمم زفافك المثالي",
    heroLocation: "في جيبوتي",
    heroSubtitle: "مزيج مثالي بين التقاليد والفخامة ليومك المميز",
    viewPortfolio: "مشاهدة الأعمال",
    
    // Services Section
    servicesTitle: "خدماتنا",
    servicesSubtitle: "خدمات تخطيط زفاف احترافية لإنشاء مناسبتك المثالية",
    
    // Service Items
    fullPlanning: "التخطيط الشامل",
    fullPlanningDesc: "خدمات تخطيط زفاف شاملة من البداية إلى النهاية",
    partialPlanning: "التخطيط الجزئي",
    partialPlanningDesc: "توجيهات الخبراء لجوانب محددة من زفافك",
    vendorSelection: "اختيار الموردين",
    vendorSelectionDesc: "الوصول إلى شبكتنا من الموردين المتميزين",
    dayCoordination: "تنسيق يوم الزفاف",
    dayCoordinationDesc: "تنسيق احترافي لضمان مثالية يومك",
    entertainment: "الترفيه",
    entertainmentDesc: "خيارات ترفيهية تقليدية ومعاصرة",
    catering: "خدمات الطعام",
    cateringDesc: "تجارب طهي راقية مع نكهات محلية وعالمية",

    // Portfolio Section
    portfolioTitle: "احتفالات مميزة",
    portfolioSubtitle: "اكتشف أجمل حفلات الزفاف لدينا",
    viewMore: "المزيد",

    // Testimonials Section
    testimonialsTitle: "آراء العملاء",
    testimonialsSubtitle: "ماذا يقول عملاؤنا",

    // Contact Section
    contactTitle: "اتصل بنا",
    contactSubtitle: "لنبدأ في تخطيط يومك المثالي",
    name: "الاسم",
    email: "البريد الإلكتروني",
    phone: "الهاتف",
    message: "الرسالة",
    send: "إرسال",
  },
  en: {
    // Navigation
    navHome: "Home",
    navServices: "Services",
    navPortfolio: "Portfolio",
    navContact: "Contact",
    bookConsultation: "Book Consultation",
    
    // Hero Section
    heroTitle: "Create Your Perfect Wedding",
    heroLocation: "in Djibouti",
    heroSubtitle: "Experience the perfect blend of tradition and luxury for your special day",
    viewPortfolio: "View Portfolio",
    
    // Services Section
    servicesTitle: "Our Services",
    servicesSubtitle: "Expert wedding planning services to create your perfect celebration",
    
    // Service Items
    fullPlanning: "Full Planning",
    fullPlanningDesc: "Comprehensive wedding planning services from start to finish",
    partialPlanning: "Partial Planning",
    partialPlanningDesc: "Expert guidance for specific aspects of your wedding",
    vendorSelection: "Vendor Selection",
    vendorSelectionDesc: "Access to our premium vendor network",
    dayCoordination: "Day Coordination",
    dayCoordinationDesc: "Professional coordination to ensure your wedding day runs perfectly",
    entertainment: "Entertainment",
    entertainmentDesc: "Curated entertainment options from traditional to contemporary",
    catering: "Catering",
    cateringDesc: "Exquisite culinary experiences featuring local and international cuisine",

    // Portfolio Section
    portfolioTitle: "Featured Celebrations",
    portfolioSubtitle: "Discover some of our most memorable weddings",
    viewMore: "View More",

    // Testimonials Section
    testimonialsTitle: "Testimonials",
    testimonialsSubtitle: "What our couples say",

    // Contact Section
    contactTitle: "Contact Us",
    contactSubtitle: "Let's start planning your perfect day",
    name: "Name",
    email: "Email",
    phone: "Phone",
    message: "Message",
    send: "Send",
  }
};

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState('en');

  const value = {
    language,
    setLanguage,
    t: (key) => translations[language][key] || key
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}