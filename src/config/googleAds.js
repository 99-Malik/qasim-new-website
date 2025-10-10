// Google Ads Conversion Tracking Configuration
// This file contains all the conversion tracking setup for Google Ads
// EDIT THESE VALUES DIRECTLY IN THIS FILE

export const GOOGLE_ADS_CONFIG = {
  // Google Ads Conversion IDs and Labels
  // Replace these with your actual values from Google Ads
  CONVERSION_IDS: {
    // Primary conversion for calls
    CALL_CONVERSION_ID: 'AW-17604715721', // Replace with your call conversion ID
    CALL_CONVERSION_LABEL: 'SNLjCMHg4aobEMnJyspB', // Replace with your call conversion label
    
    // Secondary conversion for WhatsApp
    WHATSAPP_CONVERSION_ID: 'AW-17604715721', // Replace with your WhatsApp conversion ID
    WHATSAPP_CONVERSION_LABEL: 'y-92CKzR06obEMnJyspB', // Replace with your WhatsApp conversion label
    
    // General contact conversion
    CONTACT_CONVERSION_ID: 'AW-17604715721', // Replace with your contact conversion ID
    CONTACT_CONVERSION_LABEL: 's27hCNKy06obEMnJyspB', // Replace with your contact conversion label
  },

  // Conversion values (in your currency)
  CONVERSION_VALUES: {
    CALL_VALUE: 50, // Adjust based on your average call value
    WHATSAPP_VALUE: 30, // Adjust based on your average WhatsApp lead value
    CONTACT_VALUE: 25, // Adjust based on your average contact form value
  },

  // Currency code
  CURRENCY: 'USD', // Change to your currency (USD, EUR, GBP, etc.)

  // Debug mode (set to false in production)
  DEBUG: true, // Set to false when you're ready for production
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

export const trackContactConversion = (value = GOOGLE_ADS_CONFIG.CONVERSION_VALUES.CONTACT_VALUE) => {
  const { CONTACT_CONVERSION_ID, CONTACT_CONVERSION_LABEL } = GOOGLE_ADS_CONFIG.CONVERSION_IDS;
  
  if (CONTACT_CONVERSION_ID && CONTACT_CONVERSION_LABEL) {
    trackConversion(CONTACT_CONVERSION_ID, CONTACT_CONVERSION_LABEL, value, GOOGLE_ADS_CONFIG.CURRENCY);
  } else {
    console.warn('Contact conversion tracking not configured');
  }
};

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
    case 'contact':
      trackContactConversion(value);
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
