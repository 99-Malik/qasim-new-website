# Google Ads Conversion Tracking Setup Guide

This guide will help you set up Google Ads conversion tracking for your appliance repair website. All call and WhatsApp button clicks will be tracked as conversions.

**📝 IMPORTANT: All configuration is done directly in the code files - no environment variables needed!**

## 🎯 What You Need to Get

### 1. Google Analytics 4 (GA4) Measurement ID
- Go to [Google Analytics](https://analytics.google.com/)
- Create a new GA4 property for your website
- Get your **Measurement ID** (format: `G-XXXXXXXXXX`)

### 2. Google Ads Conversion IDs and Labels
- Go to [Google Ads](https://ads.google.com/)
- Navigate to **Tools & Settings** > **Conversions**
- Create **3 separate conversions**:

#### Conversion 1: Phone Calls
- **Conversion Name**: "Phone Call Conversions"
- **Category**: "Phone call leads"
- **Value**: $50 (or your average call value)
- **Count**: "One"
- **Conversion window**: 30 days
- **View-through conversion window**: 1 day
- **Include in "Conversions"**: Yes
- **Attribution model**: "Last click"

#### Conversion 2: WhatsApp Messages
- **Conversion Name**: "WhatsApp Message Conversions"
- **Category**: "Message leads"
- **Value**: $30 (or your average WhatsApp lead value)
- **Count**: "One"
- **Conversion window**: 30 days
- **View-through conversion window**: 1 day
- **Include in "Conversions"**: Yes
- **Attribution model**: "Last click"

#### Conversion 3: Contact Form Submissions
- **Conversion Name**: "Contact Form Conversions"
- **Category**: "Contact form leads"
- **Value**: $25 (or your average contact form value)
- **Count**: "One"
- **Conversion window**: 30 days
- **View-through conversion window**: 1 day
- **Include in "Conversions"**: Yes
- **Attribution model**: "Last click"

### 3. Get Your Conversion IDs and Labels
After creating each conversion:
1. Click on the conversion name
2. Go to **Tag setup** tab
3. Choose **Use Google Tag Manager** or **Install the tag yourself**
4. Copy the **Conversion ID** (format: `AW-XXXXXXXXX`)
5. Copy the **Conversion Label** (format: `XXXXXXXXX`)

## 🔧 Direct Code Configuration

**No environment variables needed!** All configuration is done directly in the code files.

### Step 1: Update Google Analytics ID
Edit `src/components/GoogleAnalytics.jsx`:
```javascript
// Line 10: Replace with your actual Google Analytics ID
const GA_MEASUREMENT_ID = 'G-XXXXXXXXXX'; // Replace with your Google Analytics ID

// Line 11: Replace with your actual Google Ads ID  
const GOOGLE_ADS_ID = 'AW-XXXXXXXXX'; // Replace with your Google Ads ID
```

### Step 2: Update Conversion IDs and Labels
Edit `src/config/googleAds.js`:
```javascript
// Lines 10-19: Replace with your actual conversion IDs and labels
CONVERSION_IDS: {
  // Primary conversion for calls
  CALL_CONVERSION_ID: 'AW-XXXXXXXXX', // Replace with your call conversion ID
  CALL_CONVERSION_LABEL: 'XXXXXXXXX', // Replace with your call conversion label
  
  // Secondary conversion for WhatsApp
  WHATSAPP_CONVERSION_ID: 'AW-XXXXXXXXX', // Replace with your WhatsApp conversion ID
  WHATSAPP_CONVERSION_LABEL: 'XXXXXXXXX', // Replace with your WhatsApp conversion label
  
  // General contact conversion
  CONTACT_CONVERSION_ID: 'AW-XXXXXXXXX', // Replace with your contact conversion ID
  CONTACT_CONVERSION_LABEL: 'XXXXXXXXX', // Replace with your contact conversion label
},
```

### Step 3: Adjust Conversion Values (Optional)
Edit `src/config/googleAds.js`:
```javascript
// Lines 24-26: Adjust these values based on your business
CONVERSION_VALUES: {
  CALL_VALUE: 50, // Your average call value
  WHATSAPP_VALUE: 30, // Your average WhatsApp lead value
  CONTACT_VALUE: 25, // Your average contact form value
},
```

## 🚀 How It Works

### Automatic Conversion Tracking
The system automatically tracks conversions when users click on:

1. **Phone Call Buttons**:
   - Header "Hire us" button
   - Main banner "Call Us" button
   - Emergency service button
   - Any other call buttons

2. **WhatsApp Buttons**:
   - Main banner "WhatsApp" button
   - Contact section WhatsApp buttons
   - Any other WhatsApp buttons

3. **Contact Forms**:
   - Contact form submissions
   - Lead generation forms

### Conversion Values
- **Phone Calls**: $50 (configurable)
- **WhatsApp Messages**: $30 (configurable)
- **Contact Forms**: $25 (configurable)
- **Emergency Calls**: $75 (higher value for urgent leads)

### Location Tracking
Each conversion includes location data:
- `header` - Header button clicks
- `main-banner` - Main banner button clicks
- `emergency-service` - Emergency service button clicks
- `contact-section` - Contact section button clicks

## 🧪 Testing Your Setup

### 1. Test in Development
1. Open browser console
2. Click on call/WhatsApp buttons
3. Check console for conversion tracking logs
4. Use the test component in bottom-right corner

### 2. Test in Production
1. Deploy your website
2. Use Google Ads conversion tracking test tool
3. Click on buttons and verify conversions appear in Google Ads

### 3. Verify in Google Ads
1. Go to **Tools & Settings** > **Conversions**
2. Check if conversions are being recorded
3. Wait 24-48 hours for data to appear

## 🔍 Troubleshooting

### Common Issues

1. **Conversions not showing**:
   - Check if conversion IDs and labels are correct in `src/config/googleAds.js`
   - Verify Google Analytics ID is correct in `src/components/GoogleAnalytics.jsx`
   - Ensure website is deployed with updated code

2. **Console errors**:
   - Check if Google Analytics is loaded
   - Verify gtag function is available
   - Check network tab for failed requests

3. **Wrong conversion values**:
   - Update values in `src/config/googleAds.js`
   - Redeploy website with new values

### Debug Mode
Debug mode is enabled by default. Set `DEBUG: false` in `src/config/googleAds.js` for production.

## 📊 Conversion Data You'll See

In Google Ads, you'll see:
- **Conversion count** for each type
- **Conversion value** (total revenue attributed)
- **Cost per conversion**
- **Conversion rate**
- **Location data** for each conversion

## 🎯 Next Steps

1. **Set up your Google Analytics and Google Ads accounts**
2. **Create the 3 conversions as described above**
3. **Update the IDs directly in the code files:**
   - `src/components/GoogleAnalytics.jsx` (Google Analytics & Google Ads IDs)
   - `src/config/googleAds.js` (Conversion IDs and labels)
4. **Deploy your website**
5. **Test the conversion tracking**
6. **Start your Google Ads campaigns**

## 📞 Support

If you need help with the setup:
1. Check the console for error messages
2. Verify all IDs are correctly updated in the code files
3. Test in both development and production
4. Check Google Ads conversion tracking documentation

---

**Note**: All configuration is now done directly in the code files - no environment variables needed!
