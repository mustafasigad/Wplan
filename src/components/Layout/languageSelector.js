// src/context/LanguageContext.js
import React, { createContext, useContext, useState } from 'react';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en');

  const t = (key) => {
    const translations = {
      en: {
        navServices: 'Services',
        navPortfolio: 'Portfolio',
        navContact: 'Contact',
        fullPlanning: 'Full Planning',
        partialPlanning: 'Partial Planning',
        vendorSelection: 'Vendor Selection',
        dayCoordination: 'Day Coordination',
        fullPlanningDesc: 'Complete wedding planning service',
        partialPlanningDesc: 'Partial wedding planning assistance',
        vendorSelectionDesc: 'Help choosing the right vendors',
        dayCoordinationDesc: 'Coordination on your wedding day',
        bookConsultation: 'Book Consultation',
        followUs: 'Follow Us',
        luxuryWeddings: 'Luxury Weddings',
        destinationWeddings: 'Destination Weddings',
        traditionalWeddings: 'Traditional Weddings'
      },
      fr: {
        navServices: 'Services',
        navPortfolio: 'Portfolio',
        navContact: 'Contact',
        fullPlanning: 'Planification Complète',
        partialPlanning: 'Planification Partielle',
        vendorSelection: 'Sélection des Prestataires',
        dayCoordination: 'Coordination du Jour J',
        fullPlanningDesc: 'Service complet de planification de mariage',
        partialPlanningDesc: 'Assistance partielle à la planification',
        vendorSelectionDesc: 'Aide au choix des prestataires',
        dayCoordinationDesc: 'Coordination le jour de votre mariage',
        bookConsultation: 'Réserver une Consultation',
        followUs: 'Suivez-nous',
        luxuryWeddings: 'Mariages de Luxe',
        destinationWeddings: 'Mariages de Destination',
        traditionalWeddings: 'Mariages Traditionnels'
      },
      ar: {
        navServices: 'خدمات',
        navPortfolio: 'معرض الأعمال',
        navContact: 'اتصل بنا',
        fullPlanning: 'تخطيط كامل',
        partialPlanning: 'تخطيط جزئي',
        vendorSelection: 'اختيار الموردين',
        dayCoordination: 'تنسيق يوم الزفاف',
        fullPlanningDesc: 'خدمة تخطيط الزفاف الكاملة',
        partialPlanningDesc: 'مساعدة في تخطيط الزفاف',
        vendorSelectionDesc: 'المساعدة في اختيار الموردين المناسبين',
        dayCoordinationDesc: 'التنسيق في يوم زفافك',
        bookConsultation: 'احجز استشارة',
        followUs: 'تابعنا',
        luxuryWeddings: 'حفلات زفاف فاخرة',
        destinationWeddings: 'حفلات زفاف في وجهات مميزة',
        traditionalWeddings: 'حفلات زفاف تقليدية'
      }
    };

    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};