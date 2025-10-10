// Google Analytics and Google Ads Setup Component
// This component loads Google Analytics and Google Ads tracking scripts
// EDIT THESE VALUES DIRECTLY IN THIS FILE

import Script from 'next/script';
import { GOOGLE_ADS_CONFIG } from '../config/googleAds';

const GoogleAnalytics = () => {
  // EDIT THESE VALUES - Replace with your actual IDs
  const GA_MEASUREMENT_ID = 'G-9L8P0F5PEW'; // Replace with your Google Analytics ID
  const GOOGLE_ADS_ID = 'AW-17604715721'; // Replace with your Google Ads ID

  // Don't render if no GA ID is provided
  if (!GA_MEASUREMENT_ID || GA_MEASUREMENT_ID === 'G-XXXXXXXXXX') {
    console.warn('Google Analytics ID not configured. Please update GA_MEASUREMENT_ID in GoogleAnalytics.jsx');
    return null;
  }

  return (
    <>
      {/* Google Analytics */}
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}', {
              page_title: document.title,
              page_location: window.location.href,
            });
            
            // Google Ads configuration
            ${GOOGLE_ADS_ID ? `gtag('config', '${GOOGLE_ADS_ID}');` : ''}
            
            // Enhanced conversion tracking
            gtag('config', '${GA_MEASUREMENT_ID}', {
              custom_map: {
                'custom_parameter_1': 'conversion_type',
                'custom_parameter_2': 'conversion_value',
                'custom_parameter_3': 'conversion_location'
              }
            });
          `,
        }}
      />
    </>
  );
};

export default GoogleAnalytics;
