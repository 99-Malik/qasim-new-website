// WhatsApp Button Component with Conversion Tracking
// This component creates a WhatsApp button that tracks conversions when clicked

"use client";

import { ConversionTracker, getWhatsAppURL, getWhatsAppMessage } from '../utils/conversionTracking';

const WhatsAppButton = ({ 
  company, 
  className = '', 
  children, 
  message = '', 
  location = '',
  service = '',
  conversionValue = null,
  ...props 
}) => {
  const handleWhatsAppClick = () => {
    // Track the conversion
    ConversionTracker.trackWhatsApp(
      message || getWhatsAppMessage(company, service), 
      location, 
      conversionValue
    );
  };

  const whatsappURL = getWhatsAppURL(company, message);
  const displayMessage = message || getWhatsAppMessage(company, service);

  return (
    <a
      href={whatsappURL}
      onClick={handleWhatsAppClick}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      {...props}
    >
      {children || 'WhatsApp Us'}
    </a>
  );
};

export default WhatsAppButton;
