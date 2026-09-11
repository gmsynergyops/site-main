const fs = require('fs');
const path = require('path');

// Load hi.json
const hiJsonPath = path.join(__dirname, '..', 'data', 'messages', 'hi.json');
const hiData = JSON.parse(fs.readFileSync(hiJsonPath, 'utf8'));

// Define replacement mappings
const replacements = [
  // Navigation & Menu
  { old: 'स्वास्थ्य पुस्तकालय', new: 'हेल्थ लाइब्रेरी' },
  { old: 'कैंसर से बचे लोग', new: 'कैंसर सर्वाइवर्स' },
  { old: 'सिनर्जी की खोज', new: 'डिस्कवर सिनर्जी' },
  { old: 'निवारक ऑन्कोलॉजी', new: 'प्रिवेंटिव ऑन्कोलॉजी' },
  { old: 'विकिरण ऑन्कोलॉजी', new: 'रेडिएशन ऑन्कोलॉजी' },

  // Cancer Types
  { old: 'लार ग्रंथि का कैंसर', new: 'सलाइवरी ग्लैंड कैंसर' },
  { old: 'गर्भाशय ग्रीवा का कैंसर', new: 'सर्वाइकल कैंसर' },
  { old: 'पित्ताशय का कैंसर', new: 'गॉलब्लैडर कैंसर' },
  { old: 'ग्रासनली का कैंसर', new: 'एसोफैगल कैंसर' },
  { old: 'अग्नाशय का कैंसर', new: 'पैंक्रियाटिक कैंसर' },
  { old: 'पित्त नली का कैंसर', new: 'बाइल डक्ट कैंसर' },
  { old: 'मूत्राशय का कैंसर', new: 'ब्लैडर कैंसर' },
  { old: 'रक्त कैंसर', new: 'ब्लड कैंसर' },
  { old: 'हड्डी का कैंसर', new: 'बोन कैंसर' },
  { old: 'मस्तिष्क कैंसर', new: 'ब्रेन कैंसर' },
  { old: 'स्तन कैंसर', new: 'ब्रेस्ट कैंसर' },
  { old: 'पुरुषों में स्तन कैंसर', new: 'पुरुषों में ब्रेस्ट कैंसर' },
  { old: 'कोलन/मलाशय कैंसर', new: 'कोलोरेक्टल कैंसर' },
  { old: 'सिर और गर्दन का कैंसर', new: 'हेड एंड नेक कैंसर' },
  { old: 'स्वरयंत्र कैंसर', new: 'लैरिंजियल कैंसर' },
  { old: 'यकृत कैंसर', new: 'लिवर कैंसर' },
  { old: 'फेफड़ों का कैंसर', new: 'लंग कैंसर' },
  { old: 'मुंह का कैंसर', new: 'ओरल कैंसर' },
  { old: 'अंडाशय का कैंसर', new: 'ओवेरियन कैंसर' },
  { old: 'शिश्न कैंसर', new: 'पेनाइल कैंसर' },
  { old: 'त्वचा कैंसर', new: 'स्किन कैंसर' },
  { old: 'पेट का कैंसर', new: 'स्टमक कैंसर' },
  { old: 'गर्भाशय का कैंसर', new: 'यूटरिन कैंसर' },
  { old: 'गुदा कैंसर', new: 'एनल कैंसर' },
  { old: 'आंख का कैंसर', new: 'आई कैंसर' },

  // Medical Treatments & Procedures
  { old: 'रसायन चिकित्सा', new: 'कीमोथेरेपी' },
  { old: 'केमोथेरेपी', new: 'कीमोथेरेपी' },
  { old: 'विकिरण चिकित्सा', new: 'रेडिएशन थेरेपी' },
  { old: 'विकिरण', new: 'रेडिएशन' },
  { old: 'शल्य चिकित्सा', new: 'सर्जरी' },
  { old: 'शल्यक्रिया', new: 'सर्जरी' },
  { old: 'शल्य-हटाई', new: 'सर्जिकल रिमूवल' },
  { old: 'अस्थि मज्जा प्रत्यारोपण', new: 'बोन मैरो ट्रांसप्लांट' },
  { old: 'स्टेम सेल प्रत्यारोपण', new: 'स्टेम सेल ट्रांसप्लांट' },
  { old: 'रक्त आधान', new: 'ब्लड ट्रांसफ्यूजन' },
  { old: 'उपशामक देखभाल', new: 'पैलिएटिव केयर' },

  // Additional anatomy terms
  { old: 'गर्भाशय ग्रीवा', new: 'सर्वाइकल' },
  { old: 'ग्रासनली', new: 'एसोफैगस' },
  { old: 'अग्नाशय', new: 'पैंक्रियाज' },
  { old: 'पित्ताशय', new: 'गॉलब्लैडर' },
  { old: 'पित्त नली', new: 'बाइल डक्ट' },
  { old: 'मूत्राशय', new: 'ब्लैडर' },
  { old: 'यकृत', new: 'लिवर' },
  { old: 'स्वरयंत्र', new: 'लारिंक्स' },
  { old: 'अंडाशय', new: 'ओवरी' },
];

// Recursive function to replace strings in nested objects
function replaceInObject(obj) {
  if (typeof obj === 'string') {
    let result = obj;
    for (const { old, new: newVal } of replacements) {
      result = result.replace(new RegExp(old, 'g'), newVal);
    }
    return result;
  }

  if (Array.isArray(obj)) {
    return obj.map(replaceInObject);
  }

  if (obj !== null && typeof obj === 'object') {
    const newObj = {};
    for (const [key, value] of Object.entries(obj)) {
      newObj[key] = replaceInObject(value);
    }
    return newObj;
  }

  return obj;
}

// Apply replacements
const updatedData = replaceInObject(hiData);

// Write back to file
fs.writeFileSync(hiJsonPath, JSON.stringify(updatedData, null, 2), 'utf8');

console.log('✅ Hindi translations refined successfully!');
console.log('📝 Updated file: data/messages/hi.json');
