// Google Analytics and Google Ads Setup Component
// This component loads Google Analytics and Google Ads tracking scripts
// EDIT THESE VALUES DIRECTLY IN THIS FILE

import Script from 'next/script';
import { GOOGLE_ADS_CONFIG } from '../config/googleAds';

const GoogleAnalytics = () => {
  // EDIT THESE VALUES - Replace with your actual IDs
  const GOOGLE_ADS_ID = 'AW-17604715721';

  return (
    <>
      {/* Google Ads tag */}
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ADS_ID}`}
      />
      <Script
        id="google-ads"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GOOGLE_ADS_ID}');
          `,
        }}
      />
    </>
  );
};

export default GoogleAnalytics;
