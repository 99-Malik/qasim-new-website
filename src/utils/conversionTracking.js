// Conversion Tracking Utilities
// This file provides easy-to-use functions for tracking conversions across the website

import { trackCallConversion, trackWhatsAppConversion, trackContactConversion, trackConversionWithData } from '../config/googleAds';

// Enhanced conversion tracking with error handling and logging
export const ConversionTracker = {
  // Track phone call conversions
  trackCall: (phoneNumber = '', location = '', value = null) => {
    try {
      // Track the conversion
      if (value) {
        trackCallConversion(value);
      } else {
        trackCallConversion();
      }

      // Log additional data for analytics
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'phone_call', {
          'phone_number': phoneNumber,
          'location': location,
          'event_category': 'conversion',
          'event_label': 'phone_call_click',
        });
      }

      // Console log for debugging
      console.log('Call conversion tracked:', { phoneNumber, location, value });
    } catch (error) {
      console.error('Error tracking call conversion:', error);
    }
  },

  // Track WhatsApp conversions
  trackWhatsApp: (message = '', location = '', value = null) => {
    try {
      // Track the conversion
      if (value) {
        trackWhatsAppConversion(value);
      } else {
        trackWhatsAppConversion();
      }

      // Log additional data for analytics
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'whatsapp_click', {
          'message': message,
          'location': location,
          'event_category': 'conversion',
          'event_label': 'whatsapp_click',
        });
      }

      // Console log for debugging
      console.log('WhatsApp conversion tracked:', { message, location, value });
    } catch (error) {
      console.error('Error tracking WhatsApp conversion:', error);
    }
  },

  // Track contact form conversions
  trackContact: (formType = '', location = '', value = null) => {
    try {
      // Track the conversion
      if (value) {
        trackContactConversion(value);
      } else {
        trackContactConversion();
      }

      // Log additional data for analytics
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'contact_form', {
          'form_type': formType,
          'location': location,
          'event_category': 'conversion',
          'event_label': 'contact_form_submit',
        });
      }

      // Console log for debugging
      console.log('Contact conversion tracked:', { formType, location, value });
    } catch (error) {
      console.error('Error tracking contact conversion:', error);
    }
  },

  // Track custom conversions
  trackCustom: (type, data = {}) => {
    try {
      trackConversionWithData(type, data.value || 0, data);
      console.log('Custom conversion tracked:', { type, data });
    } catch (error) {
      console.error('Error tracking custom conversion:', error);
    }
  },
};

// Hook for React components
export const useConversionTracking = () => {
  return {
    trackCall: ConversionTracker.trackCall,
    trackWhatsApp: ConversionTracker.trackWhatsApp,
    trackContact: ConversionTracker.trackContact,
    trackCustom: ConversionTracker.trackCustom,
  };
};

// Utility function to get phone number from company data
export const getPhoneNumber = (company) => {
  if (!company) return '';
  
  // Remove any non-digit characters and format
  const phone = company.phone?.replace(/\D/g, '') || '';
  return phone;
};

// Utility function to get WhatsApp message
export const getWhatsAppMessage = (company, service = '') => {
  if (!company) return '';
  
  const baseMessage = `Hi! I'm interested in your ${company.name || 'appliance repair'} services.`;
  const serviceMessage = service ? ` I need help with ${service}.` : '';
  const locationMessage = company.location ? ` I'm located in ${company.location}.` : '';
  
  return encodeURIComponent(baseMessage + serviceMessage + locationMessage);
};

// Utility function to get WhatsApp URL
export const getWhatsAppURL = (company, message = '') => {
  if (!company?.phone) return '#';
  
  const phone = getPhoneNumber(company);
  const defaultMessage = getWhatsAppMessage(company);
  const finalMessage = message || defaultMessage;
  
  return `https://wa.me/${phone}?text=${finalMessage}`;
};

// Utility function to get phone URL
export const getPhoneURL = (company) => {
  if (!company?.phone) return '#';
  
  const phone = getPhoneNumber(company);
  return `tel:${phone}`;
};

export default ConversionTracker;
