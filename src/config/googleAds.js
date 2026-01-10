// Google Ads Conversion Tracking Configuration
// This file contains all the conversion tracking setup for Google Ads
// EDIT THESE VALUES DIRECTLY IN THIS FILE

export const GOOGLE_ADS_CONFIG = {
  // Google Ads Conversion IDs and Labels
  // Replace these with your actual values from Google Ads
  CONVERSION_IDS: {
    // Primary conversion for calls (from Google Ads)
    CALL_CONVERSION_ID: 'AW-17604715721', // Your Google Ads account ID
    CALL_CONVERSION_LABEL: 'YNwmCKLWxOAbEMnJyspB', // Your call conversion label from Google Ads
    
    // Secondary conversion for WhatsApp (from Google Ads)
    WHATSAPP_CONVERSION_ID: 'AW-17604715721', // Same Google Ads account ID
    WHATSAPP_CONVERSION_LABEL: 'EUPvCMKl3cYbEMnJyspB', // Your WhatsApp conversion label from Google Ads
  },

  // Conversion values (in your currency)
  CONVERSION_VALUES: {
    CALL_VALUE: 15.0, // Value from your Google Ads conversion (15.0)
    WHATSAPP_VALUE: 15.0, // Set same or different value for WhatsApp
  },

  // Currency code
  CURRENCY: 'USD', // Change to your currency (USD, EUR, GBP, etc.)

  // Debug mode (set to false in production)
  DEBUG: false, // Set to false when you're ready for production
};

// Conversion tracking functions
export const trackConversion = (conversionId, conversionLabel, value, currency = 'USD') => {
  if (typeof window === 'undefined') return; // Server-side check

  // Check if gtag is available
  if (typeof window.gtag === 'undefined') {
    console.warn('Google Analytics gtag not loaded');
    return;
  }

  // Track the conversion
  window.gtag('event', 'conversion', {
    'send_to': `${conversionId}/${conversionLabel}`,
    'value': value,
    'currency': currency,
  });

  // Log for debugging
  if (GOOGLE_ADS_CONFIG.DEBUG) {
    console.log('Conversion tracked:', {
      conversionId,
      conversionLabel,
      value,
      currency,
    });
  }
};

// Specific conversion tracking functions
export const trackCallConversion = (value = GOOGLE_ADS_CONFIG.CONVERSION_VALUES.CALL_VALUE) => {
  const { CALL_CONVERSION_ID, CALL_CONVERSION_LABEL } = GOOGLE_ADS_CONFIG.CONVERSION_IDS;
  
  if (CALL_CONVERSION_ID && CALL_CONVERSION_LABEL) {
    trackConversion(CALL_CONVERSION_ID, CALL_CONVERSION_LABEL, value, GOOGLE_ADS_CONFIG.CURRENCY);
  } else {
    console.warn('Call conversion tracking not configured');
  }
};

export const trackWhatsAppConversion = (value = GOOGLE_ADS_CONFIG.CONVERSION_VALUES.WHATSAPP_VALUE) => {
  const { WHATSAPP_CONVERSION_ID, WHATSAPP_CONVERSION_LABEL } = GOOGLE_ADS_CONFIG.CONVERSION_IDS;
  
  if (WHATSAPP_CONVERSION_ID && WHATSAPP_CONVERSION_LABEL) {
    trackConversion(WHATSAPP_CONVERSION_ID, WHATSAPP_CONVERSION_LABEL, value, GOOGLE_ADS_CONFIG.CURRENCY);
  } else {
    console.warn('WhatsApp conversion tracking not configured');
  }
};

// Contact conversion removed - only using Call and WhatsApp

// Enhanced tracking with additional data
export const trackConversionWithData = (type, value, additionalData = {}) => {
  // Track the conversion
  switch (type) {
    case 'call':
      trackCallConversion(value);
      break;
    case 'whatsapp':
      trackWhatsAppConversion(value);
      break;
    default:
      console.warn('Unknown conversion type:', type);
  }

  // Track additional data if gtag is available
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'conversion_enhanced', {
      'conversion_type': type,
      'conversion_value': value,
      'conversion_currency': GOOGLE_ADS_CONFIG.CURRENCY,
      ...additionalData,
    });
  }
};

export default GOOGLE_ADS_CONFIG;
