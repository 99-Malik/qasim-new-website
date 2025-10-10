// Call Button Component with Conversion Tracking
// This component creates a call button that tracks conversions when clicked

"use client";

import { ConversionTracker, getPhoneURL } from '../utils/conversionTracking';

const CallButton = ({ 
  company, 
  className = '', 
  children, 
  phoneNumber = '', 
  location = '',
  conversionValue = null,
  ...props 
}) => {
  const handleCallClick = () => {
    // Track the conversion
    ConversionTracker.trackCall(
      phoneNumber || company?.phone, 
      location, 
      conversionValue
    );
  };

  const phoneURL = getPhoneURL(company);
  const displayPhone = phoneNumber || company?.phone || '';

  return (
    <a
      href={phoneURL}
      onClick={handleCallClick}
      className={className}
      {...props}
    >
      {children || `Call ${displayPhone}`}
    </a>
  );
};

export default CallButton;
