// Conversion Test Component
// This component helps test conversion tracking in development

"use client";

import { useState } from 'react';
import { ConversionTracker } from '@/utils/conversionTracking';
import { phoneNumber } from '@/lib/phoneNumber';

const ConversionTest = () => {
  const [testResults, setTestResults] = useState([]);

  const addTestResult = (type, result) => {
    setTestResults(prev => [...prev, {
      id: Date.now(),
      type,
      result,
      timestamp: new Date().toLocaleTimeString()
    }]);
  };

  const testCallConversion = () => {
    try {
      ConversionTracker.trackCall(phoneNumber, 'test', 50);
      addTestResult('Call Conversion', '✅ Success - Check console for details');
    } catch (error) {
      addTestResult('Call Conversion', `❌ Error: ${error.message}`);
    }
  };

  const testWhatsAppConversion = () => {
    try {
      ConversionTracker.trackWhatsApp('Test message', 'test', 30);
      addTestResult('WhatsApp Conversion', '✅ Success - Check console for details');
    } catch (error) {
      addTestResult('WhatsApp Conversion', `❌ Error: ${error.message}`);
    }
  };

  const testContactConversion = () => {
    try {
      ConversionTracker.trackContact('test-form', 'test', 25);
      addTestResult('Contact Conversion', '✅ Success - Check console for details');
    } catch (error) {
      addTestResult('Contact Conversion', `❌ Error: ${error.message}`);
    }
  };

  // Only show in development
  if (process.env.NODE_ENV !== 'development') {
    return null;
  }

  return (
    <div className="fixed bottom-4 right-4 bg-white border-2 border-gray-300 rounded-lg p-4 shadow-lg z-50 max-w-sm">
      <h3 className="font-bold text-sm mb-3 text-gray-800">🧪 Conversion Test</h3>
      
      <div className="space-y-2 mb-3">
        <button
          onClick={testCallConversion}
          className="w-full bg-blue-500 text-white px-3 py-1 rounded text-xs hover:bg-blue-600"
        >
          Test Call Conversion
        </button>
        
        <button
          onClick={testWhatsAppConversion}
          className="w-full bg-green-500 text-white px-3 py-1 rounded text-xs hover:bg-green-600"
        >
          Test WhatsApp Conversion
        </button>
        
        <button
          onClick={testContactConversion}
          className="w-full bg-purple-500 text-white px-3 py-1 rounded text-xs hover:bg-purple-600"
        >
          Test Contact Conversion
        </button>
      </div>

      <div className="max-h-32 overflow-y-auto">
        {testResults.map((result) => (
          <div key={result.id} className="text-xs mb-1">
            <span className="text-gray-500">{result.timestamp}</span>
            <br />
            <span className="font-medium">{result.type}:</span> {result.result}
          </div>
        ))}
      </div>

      <div className="text-xs text-gray-500 mt-2">
        Check browser console for detailed logs
      </div>
    </div>
  );
};

export default ConversionTest;
