// data/mediaCenterData.ts
// Centralized Bilingual Data Layer for Media Center (CMS & Database Ready)

export interface NewsVideoItem {
    id: string;
    title: string;
    channel: string;
    date: string;
    thumbnail: string;
    videoUrl: string;
    duration?: string;
    summary?: string;
    tag?: string;
    featured?: boolean;
}

export interface PressReleaseItem {
    id: string;
    title: string;
    type: 'innovation' | 'partnership' | 'award' | 'research' | 'community';
    date: string;
    summary: string;
    content: string;
    image: string;
    author: string;
    location: string;
    pdfUrl?: string;
    videoPreview?: string;
    keyHighlights: string[];
    tags?: string[];
}

export interface GalleryMediaItem {
    id: string;
    title: string;
    category: 'Facilities & Infrastructure' | 'Advanced Medical Tech' | 'Events & Camps' | 'Doctors & Surgeries' | 'Community Outreach' | 'Patient Care';
    type: 'image' | 'video';
    src: string;
    thumbnail?: string;
    videoUrl?: string;
    date?: string;
    description?: string;
}

// -------------------------------------------------------------
// 1. Synergy in the News Videos (English & Hindi)
// -------------------------------------------------------------
export const newsVideosDataEn: NewsVideoItem[] = [
    {
        id: 'news-video-1',
        title: 'Purvaanchal’s First Advanced Linear Accelerator Inaugurated at Synergy Hospital',
        channel: 'Dainik Jagran & Doordarshan UP',
        date: '2024-04-12',
        thumbnail: '/department/radiation-oncology-banner.png',
        videoUrl: '/videos/homepage-main/m1v.mp4',
        duration: '4:15',
        summary: 'Synergy Super Speciality Hospital launches cutting-edge radiotherapy unit, bringing world-class cancer treatment to Gorakhpur.',
        tag: 'Cancer Breakthrough',
        featured: true,
    },
    {
        id: 'news-video-2',
        title: 'Synergy Doctors Successfully Perform Complex Minimally Invasive Onco-Surgery',
        channel: 'Amar Ujala Health Desk',
        date: '2024-03-28',
        thumbnail: '/department/surgical-oncology-facilities.webp',
        videoUrl: '/videos/testimonials/mahaveeram.mp4',
        duration: '3:50',
        summary: 'A landmark surgical oncology procedure saving high-risk cancer patient through advanced laparoscopy and multi-disciplinary care.',
        tag: 'Surgical Excellence',
    },
    {
        id: 'news-video-3',
        title: 'Special Health Bulletin: Comprehensive Cancer Awareness & Early Detection Drive',
        channel: 'Zee News Uttar Pradesh',
        date: '2024-03-10',
        thumbnail: '/media/media_g_2.jpg',
        videoUrl: '/videos/testimonials/kalavati-devi.mp4',
        duration: '5:10',
        summary: 'Director Dr. Alok Tiwari and Chief Oncologist Dr. Saurabh Mishra share crucial guidance on symptoms, early screening, and modern therapies.',
        tag: 'Health Awareness',
    },
    {
        id: 'news-video-4',
        title: 'Synergy Expands Critical Care & 24x7 Emergency Services with 50-Bed ICU Wing',
        channel: 'Gorakhpur Live',
        date: '2024-02-18',
        thumbnail: '/department/emergency-and-critical-care-banner.png',
        videoUrl: '/videos/testimonials/mr-naresh-ram.mp4',
        duration: '3:20',
        summary: 'Equipped with ultra-modern ventilators, dialysis support, and dedicated trauma team for rapid golden-hour interventions.',
        tag: 'Emergency Care',
    },
    {
        id: 'news-video-5',
        title: 'Ayushman Bharat Beneficiaries Praise Cashless Cancer Care at Synergy Hospital',
        channel: 'ETV Bharat UP',
        date: '2024-01-25',
        thumbnail: '/media/media_g_3.jpg',
        videoUrl: '/videos/testimonials/mrs-neetu.mp4',
        duration: '4:45',
        summary: 'Over 5,000 underprivileged patients successfully treated under PM-JAY Ayushman Card scheme with zero out-of-pocket expenses.',
        tag: 'Patient Story',
    },
    {
        id: 'news-video-6',
        title: 'Siwan & Bihar Regional Medical Outreach Camp by Synergy Super Speciality Team',
        channel: 'Prabhat Khabar',
        date: '2024-01-10',
        thumbnail: '/media/media_g_1.jpg',
        videoUrl: '/videos/testimonials/mrs-saroj-devi.mp4',
        duration: '3:30',
        summary: 'Free multi-speciality OPD consultations and on-spot diagnostic tests provided to over 1,200 rural families.',
        tag: 'Community Impact',
    },
];

export const newsVideosDataHi: NewsVideoItem[] = [
    {
        id: 'news-video-1',
        title: 'पूर्वांचल के पहले अत्याधुनिक लीनियर एक्सेलरेटर का सिनर्जी अस्पताल में शुभारंभ',
        channel: 'दैनिक जागरण एवं दूरदर्शन उत्तर प्रदेश',
        date: '2024-04-12',
        thumbnail: '/department/radiation-oncology-banner.png',
        videoUrl: '/videos/homepage-main/m1v.mp4',
        duration: '4:15',
        summary: 'सिनर्जी सुपर स्पेशियलिटी अस्पताल ने गोरखपुर में विश्वस्तरीय कैंसर रेडियोथेरेपी सुविधा शुरू की।',
        tag: 'कैंसर उपचार में नई क्रांति',
        featured: true,
    },
    {
        id: 'news-video-2',
        title: 'सिनर्जी के डॉक्टरों ने जटिल मिनिमली इनवेसिव ओंको-सर्जरी सफलतापूर्वक की',
        channel: 'अमर उजाला हेल्थ डेस्क',
        date: '2024-03-28',
        thumbnail: '/department/surgical-oncology-facilities.webp',
        videoUrl: '/videos/testimonials/mahaveeram.mp4',
        duration: '3:50',
        summary: 'उन्नत लेप्रोस्कोपी और बहु-विषयक चिकित्सा टीम द्वारा उच्च जोखिम वाले कैंसर मरीज की सफल जान बचाई गई।',
        tag: 'सर्जिकल उत्कृष्टता',
    },
    {
        id: 'news-video-3',
        title: 'विशेष स्वास्थ्य बुलेटिन: व्यापक कैंसर जागरूकता एवं प्रारंभिक जांच अभियान',
        channel: 'ज़ी न्यूज़ उत्तर प्रदेश',
        date: '2024-03-10',
        thumbnail: '/media/media_g_2.jpg',
        videoUrl: '/videos/testimonials/kalavati-devi.mp4',
        duration: '5:10',
        summary: 'निदेशक डॉ. आलोक तिवारी एवं वरिष्ठ ओंकोलॉजिस्ट डॉ. सौरभ मिश्रा ने कैंसर के शुरुआती लक्षण और आधुनिक उपचार पद्धतियों पर दी महत्वपूर्ण जानकारी।',
        tag: 'स्वास्थ्य जागरूकता',
    },
    {
        id: 'news-video-4',
        title: 'सिनर्जी ने 50-बेड आईसीयू विंग के साथ क्रिटिकल केयर और 24x7 आपातकालीन सेवाओं का किया विस्तार',
        channel: 'गोरखपुर लाइव',
        date: '2024-02-18',
        thumbnail: '/department/emergency-and-critical-care-banner.png',
        videoUrl: '/videos/testimonials/mr-naresh-ram.mp4',
        duration: '3:20',
        summary: 'अति-आधुनिक वेंटिलेटर, डायलिसिस सहायता और गोल्डन-ऑवर ट्रॉमा टीम से सुसज्जित नई इमरजेंसी यूनिट।',
        tag: 'आपातकालीन देखभाल',
    },
    {
        id: 'news-video-5',
        title: 'आयुष्मान भारत लाभार्थियों को सिनर्जी अस्पताल में मिला पूर्णतः कैशलेस कैंसर उपचार',
        channel: 'ईटीवी भारत यूपी',
        date: '2024-01-25',
        thumbnail: '/media/media_g_3.jpg',
        videoUrl: '/videos/testimonials/mrs-neetu.mp4',
        duration: '4:45',
        summary: 'पीएम-जय आयुष्मान योजना के अंतर्गत 5,000 से अधिक जरूरतमंद मरीजों को बिना किसी खर्च के मिला सर्वोत्तम उपचार।',
        tag: 'मरीज की कहानी',
    },
    {
        id: 'news-video-6',
        title: 'सिवान एवं बिहार क्षेत्रीय आउटरीच कैंप: सिनर्जी सुपर स्पेशियलिटी डॉक्टरों की टीम द्वारा निशुल्क परामर्श',
        channel: 'प्रभात खबर',
        date: '2024-01-10',
        thumbnail: '/media/media_g_1.jpg',
        videoUrl: '/videos/testimonials/mrs-saroj-devi.mp4',
        duration: '3:30',
        summary: '1,200 से अधिक ग्रामीण परिवारों को निशुल्क सुपर-स्पेशियलिटी ओपीडी परामर्श और जांच की सुविधा दी गई।',
        tag: 'सामुदायिक सेवा',
    },
];

export const newsVideosData = newsVideosDataEn;

// -------------------------------------------------------------
// 2. Press Releases Data (English & Hindi)
// -------------------------------------------------------------
export const featuredPressReleaseDataEn: PressReleaseItem = {
    id: 'annual-medical-innovation-report-2024',
    title: 'Synergy Super Speciality Hospital Releases Annual Clinical Excellence & Medical Innovation Report 2024',
    type: 'innovation',
    date: '2024-04-15',
    summary: 'Report highlights over 12,000 successful oncological and multi-speciality procedures, 98.4% clinical satisfaction score, and Purvaanchal’s fastest trauma response protocol.',
    content: `GORAKHPUR, UTTAR PRADESH — Synergy Super Speciality Hospital today formally released its Annual Clinical Excellence & Medical Innovation Report 2024. The comprehensive report details significant clinical milestones, technological integrations, and patient care improvements achieved over the past fiscal year.

Key highlights from the 2024 report include:
• Treatment of over 25,000 patients across oncology, cardiology, neurology, and critical care specialties.
• Deployment of high-precision Linear Accelerator with Volumetric Modulated Arc Therapy (VMAT) for pin-point cancer radiation with zero damage to surrounding healthy organs.
• Expansion of 24x7 Emergency & Trauma Center with a certified average triage response time under 4 minutes.
• Seamless cashless treatment provided to more than 6,500 beneficiaries under Ayushman Bharat (PM-JAY) and leading TPA partners.

"Our relentless commitment has always been to make world-class, multi-disciplinary tertiary healthcare accessible right here in Gorakhpur, saving families from the distress of traveling to Delhi or Mumbai," said Dr. Alok Tiwari, Medical Director.

The full report is available for digital download in PDF format or via our media communications office.`,
    image: '/department/radiation-oncology-banner.png',
    author: 'Synergy Media & Communications Desk',
    location: 'Gorakhpur, Uttar Pradesh',
    pdfUrl: '#',
    keyHighlights: [
        'Over 25,000 patients treated with 98.4% clinical satisfaction',
        'Purvaanchal’s first high-precision VMAT Linear Accelerator in operation',
        'Average emergency triage response time under 4 minutes',
        'Over 6,500 Ayushman Bharat cashless treatments administered',
    ],
    tags: ['Annual Report', 'Oncology', 'Clinical Quality', 'Ayushman Bharat'],
};

export const featuredPressReleaseDataHi: PressReleaseItem = {
    id: 'annual-medical-innovation-report-2024',
    title: 'सिनर्जी सुपर स्पेशियलिटी अस्पताल ने जारी की वार्षिक क्लिनिकल उत्कृष्टता एवं चिकित्सा नवाचार रिपोर्ट 2024',
    type: 'innovation',
    date: '2024-04-15',
    summary: 'रिपोर्ट में 12,000 से अधिक सफल ओंकोलॉजिकल और सुपर-स्पेशियलिटी प्रक्रियाएं, 98.4% क्लिनिकल संतुष्टि दर, और पूर्वांचल का सबसे तेज़ ट्रॉमा रिस्पॉन्स प्रोटोकॉल शामिल।',
    content: `गोरखपुर, उत्तर प्रदेश — सिनर्जी सुपर स्पेशियलिटी अस्पताल ने आज औपचारिक रूप से अपनी वार्षिक क्लिनिकल उत्कृष्टता एवं चिकित्सा नवाचार रिपोर्ट 2024 जारी की। यह व्यापक रिपोर्ट पिछले वित्तीय वर्ष में हासिल किए गए महत्वपूर्ण क्लिनिकल मील के पत्थरों, तकनीकी एकीकरण और रोगी देखभाल में सुधार का विवरण देती है।

2024 की रिपोर्ट की मुख्य विशेषताएं:
• ओंकोलॉजी, कार्डियोलॉजी, न्यूरोलॉजी और क्रिटिकल केयर में 25,000 से अधिक मरीजों का सफल उपचार।
• वॉल्ट्यूमेट्रिक मॉड्यूलेटेड आर्क थेरेपी (VMAT) युक्त उच्च-सटीक लीनियर एक्सेलरेटर की स्थापना, जिससे स्वस्थ अंगों को नुकसान पहुंचाए बिना कैंसर कोशिकाओं पर सटीक वार संभव हुआ।
• 24x7 इमरजेंसी एवं ट्रॉमा सेंटर का विस्तार, जिसमें औसत ट्रायज रिस्पॉन्स समय 4 मिनट से भी कम दर्ज किया गया।
• आयुष्मान भारत (PM-JAY) और प्रमुख बीमा कंपनियों के तहत 6,500 से अधिक मरीजों को कैशलेस उपचार प्रदान किया गया।

चिकित्सा निदेशक डॉ. आलोक तिवारी ने कहा: "हमारा निरंतर प्रयास रहा है कि गोरखपुर और पूर्वांचल के लोगों को विश्वस्तरीय, बहु-विषयक तृतीयक स्वास्थ्य सेवा यहीं मिले, जिससे परिवारों को दिल्ली या मुंबई जाने की परेशानी से मुक्ति मिल सके।"

यह पूरी रिपोर्ट पीडीएफ प्रारूप में डाउनलोड के लिए उपलब्ध है।`,
    image: '/department/radiation-oncology-banner.png',
    author: 'सिनर्जी मीडिया एवं संचार कार्यालय',
    location: 'गोरखपुर, उत्तर प्रदेश',
    pdfUrl: '#',
    keyHighlights: [
        '98.4% मरीज संतुष्टि के साथ 25,000+ मरीजों का सफल उपचार',
        'पूर्वांचल का पहला हाई-प्रिसिजन VMAT लीनियर एक्सेलरेटर चालू',
        'औसत इमरजेंसी रिस्पॉन्स समय 4 मिनट से कम',
        '6,500+ आयुष्मान भारत कैशलेस उपचार सफलतापूर्वक संपन्न',
    ],
    tags: ['वार्षिक रिपोर्ट', 'कैंसर देखभाल', 'गुणवत्ता मानक', 'आयुष्मान भारत'],
};

export const featuredPressReleaseData = featuredPressReleaseDataEn;

export const pressReleasesDataEn: PressReleaseItem[] = [
    {
        id: 'ai-driven-precision-diagnostics',
        title: 'Synergy Hospital Launches AI-Integrated Digital Pathology & 128-Slice CT Imaging Wing',
        type: 'innovation',
        date: '2024-04-02',
        summary: 'New diagnostic infrastructure enables sub-millimeter lesion detection and rapid tumor staging with 98% diagnostic accuracy.',
        content: `GORAKHPUR — In a major boost to regional diagnostics, Synergy Super Speciality Hospital has unveiled its upgraded Diagnostic Imaging and AI-assisted Pathology Wing.

The new facility features an ultra-fast 128-slice CT scanner with specialized cardiac and oncological imaging protocols, cutting scan times by 60% while reducing radiation dose for pediatric and elderly patients. The integration of AI algorithms assists radiologists in identifying early-stage lung nodules, liver lesions, and intracranial micro-hemorrhages with unmatched precision.

Dr. Saurabh Mishra, Senior Consultant & Lead Radiologist, stated: "Time is vital in critical and oncology cases. With this AI-powered diagnostic capability, our doctors receive actionable multi-slice 3D reconstructions in minutes, enabling faster surgical planning and targeted medical interventions."`,
        image: '/department/diagnostic-imaging-banner.png',
        author: 'Synergy Department of Radiology',
        location: 'Gorakhpur, Uttar Pradesh',
        pdfUrl: '#',
        keyHighlights: [
            'Sub-millimeter 128-slice rapid CT imaging',
            'AI-assisted tumor mapping & stroke protocol',
            '60% faster acquisition with low-dose radiation mode',
            '24x7 emergency diagnostic reporting',
        ],
        tags: ['Diagnostic Imaging', 'AI Healthcare', 'Radiology', 'Pathology'],
    },
    {
        id: 'nabh-accreditation-excellence-award',
        title: 'Synergy Hospital Awarded Prestigious National NABH Excellence Accreditation',
        type: 'award',
        date: '2024-03-20',
        summary: 'Synergy achieves highest national benchmark for patient safety, infection control, and clinical governance protocols.',
        content: `GORAKHPUR — Synergy Super Speciality Hospital has officially received full accreditation from the National Accreditation Board for Hospitals & Healthcare Providers (NABH), representing the highest quality standard in Indian healthcare.

The rigorous multi-stage audit assessed over 600 stringent safety and clinical governance parameters, including infection prevention, patient rights, pharmaceutical safety, OT sterility, and biomedical waste management.

"This NABH recognition is a testament to the tireless dedication of our doctors, nurses, paramedics, and support staff. It reassures every patient that their care meets global safety protocols," remarked the Quality Assurance Directorate.`,
        image: '/nabh-logo.png',
        author: 'Quality & Clinical Governance Board',
        location: 'Gorakhpur, Uttar Pradesh',
        pdfUrl: '#',
        keyHighlights: [
            'Full compliance across 600+ patient safety standards',
            'Zero-compromise infection control & OT air sterilization protocols',
            'Standardized emergency and patient rights compliance',
        ],
        tags: ['NABH', 'Patient Safety', 'National Quality Award'],
    },
    {
        id: 'clinical-research-gi-cancers',
        title: 'Synergy Oncology Research Unit Publishes Landmark Study on Gastrointestinal Cancers in Purvaanchal',
        type: 'research',
        date: '2024-03-05',
        summary: 'Five-year retrospective study examines demographic patterns and targeted multi-modality chemotherapy outcomes in over 1,800 patients.',
        content: `GORAKHPUR — The Clinical Research & Oncology Division of Synergy Hospital has published a peer-reviewed research study analyzing the demographic trends, risk factors, and therapeutic outcomes of gastrointestinal malignancies in Eastern UP and Western Bihar.

The study, spanning data from 2019 to 2024, reveals that early neoadjuvant chemoradiation combined with minimally invasive laparoscopic resection delivered a 34% improvement in disease-free 3-year survival rates compared to conventional pathways.

Lead investigator Dr. Alok Tiwari noted: "Regional clinical data is critical to tailoring targeted treatment regimens. Our findings provide valuable insights into diet, genetic predisposition, and optimal intervention timelines for patients across Eastern UP."`,
        image: '/department/medical-oncology-banner.jpeg',
        author: 'Synergy Clinical Research Division',
        location: 'Gorakhpur, Uttar Pradesh',
        pdfUrl: '#',
        keyHighlights: [
            'Cohort study of 1,800+ patients across Purvaanchal',
            '34% higher 3-year disease-free survival with neoadjuvant protocols',
            'Peer-reviewed and presented at National Oncology Forum',
        ],
        tags: ['Clinical Research', 'Medical Oncology', 'GI Cancers', 'Publications'],
    },
    {
        id: 'siwan-bihar-healthcare-partnership',
        title: 'Synergy Inks Strategic Healthcare Partnership with Siwan Medical Network to Expand Outstation Support',
        type: 'partnership',
        date: '2024-02-14',
        summary: 'Cross-border collaboration enables weekly specialist peripheral OPDs, tele-oncology consults, and priority ambulance transfers.',
        content: `SIWAN / GORAKHPUR — To bridge the gap in tertiary cancer and surgical care, Synergy Super Speciality Hospital has entered into a strategic memorandum with leading clinical centers in Siwan and Gopalganj, Bihar.

Under this pact, senior oncologists, cardiologists, and neurologists from Synergy Gorakhpur will conduct weekly on-site specialized OPDs in Siwan, providing local follow-ups, chemotherapy supervision, and digital tele-consultations. Patients requiring emergency surgical interventions will benefit from dedicated green-corridor ambulance transfers.

"Patients in Western Bihar no longer need to undertake grueling 800km journeys to metro cities. High-standard tertiary expertise is now accessible within a short drive," announced the joint coordination committee.`,
        image: '/media/media_g_3.jpg',
        author: 'Synergy Outstation Outreach Wing',
        location: 'Siwan & Gorakhpur',
        pdfUrl: '#',
        keyHighlights: [
            'Weekly on-site specialist OPDs in Siwan & Gopalganj',
            'Tele-consultation portal for real-time second opinions',
            'Rapid priority transfer ambulance fleet',
        ],
        tags: ['Partnership', 'Bihar Outreach', 'Tele-Consultation', 'Peripheral OPD'],
    },
    {
        id: 'pink-hope-rural-screening-drive',
        title: 'Synergy Launches ‘Pink Hope’ Mission: 10,000 Free Rural Cancer Screenings Across Eastern UP',
        type: 'community',
        date: '2024-01-20',
        summary: 'Mobile diagnostic mammography van and medical teams tour Deoria, Maharajganj, and Kushinagar for early cancer detection.',
        content: `GORAKHPUR — In observance of National Cancer Awareness initiatives, Synergy Super Speciality Hospital has launched ‘Mission Pink Hope’, an ambitious community health campaign aimed at screening 10,000 women in rural and semi-urban districts.

Equipped with a state-of-the-art mobile diagnostic bus featuring digital mammography, ultrasound, and cervical pap smear testing, the mobile medical squad is delivering free on-site screening and cancer literacy workshops directly to village panchayats.

Dr. Anjali Jain commented: "Early detection transforms cancer from a life-threatening crisis into a highly curable condition. Mission Pink Hope breaks social taboos and brings screening directly to the doorstep of rural women."`,
        image: '/media/media_g_2.jpg',
        author: 'Community Health & CSR Directorate',
        location: 'Eastern UP Districts',
        pdfUrl: '#',
        keyHighlights: [
            'Mobile bus with digital mammography & ultrasound',
            'Targeting 10,000 free screenings across 5 districts',
            'Instant doctor consultations & counseling',
        ],
        tags: ['CSR', 'Community Health', 'Breast Cancer Awareness', 'Screening'],
    },
];

export const pressReleasesDataHi: PressReleaseItem[] = [
    {
        id: 'ai-driven-precision-diagnostics',
        title: 'सिनर्जी अस्पताल ने एआई-एकीकृत डिजिटल पैथोलॉजी एवं 128-स्लाइस सीटी इमेजिंग विंग का किया शुभारंभ',
        type: 'innovation',
        date: '2024-04-02',
        summary: 'नई डायग्नोस्टिक तकनीक से 98% सटीकता के साथ माइक्रो-ट्यूमर का शुरुआती स्तर पर ही पता लगाना संभव।',
        content: `गोरखपुर — क्षेत्रीय डायग्नोस्टिक्स को बढ़ावा देते हुए, सिनर्जी सुपर स्पेशियलिटी अस्पताल ने अपनी अपग्रेडेड डायग्नोस्टिक इमेजिंग और एआई-असिस्टेड पैथोलॉजी विंग का अनावरण किया है।

इस नई सुविधा में कार्डियक और ओंकोलॉजिकल स्कैन के लिए 128-स्लाइस सीटी स्कैनर लगाया गया है, जो स्कैनिंग समय को 60% तक कम करता है और मरीजों को न्यूनतम रेडिएशन में सटीक 3D इमेज प्रदान करता है। एआई एल्गोरिदम की मदद से फेफड़ों, लिवर और मस्तिष्क के सूक्ष्म घावों का समय पर पता लगाना संभव होता है।

वरिष्ठ रेडियोलॉजिस्ट डॉ. सौरभ मिश्रा ने कहा: "क्रिटिकल और कैंसर मामलों में समय अत्यंत महत्वपूर्ण होता है। इस एआई-सक्षम तकनीक से हमारे सर्जनों को तुरंत सटीक 3D रिपोर्ट मिलती है, जिससे त्वरित और लक्षित उपचार संभव होता है।"`,
        image: '/department/diagnostic-imaging-banner.png',
        author: 'सिनर्जी रेडियोलॉजी विभाग',
        location: 'गोरखपुर, उत्तर प्रदेश',
        pdfUrl: '#',
        keyHighlights: [
            '128-स्लाइस अल्ट्रा-फास्ट सीटी इमेजिंग',
            'एआई-सक्षम ट्यूमर मैपिंग व स्ट्रोक प्रोटोकॉल',
            '60% कम समय में लो-डोज़ सुरक्षित स्कैन',
            '24x7 इमरजेंसी डायग्नोस्टिक रिपोर्टिंग',
        ],
        tags: ['डायग्नोस्टिक्स', 'एआई हेल्थकेयर', 'रेडियोलॉजी', 'पैथोलॉजी'],
    },
    {
        id: 'nabh-accreditation-excellence-award',
        title: 'सिनर्जी अस्पताल को मिला प्रतिष्ठित राष्ट्रीय एनएबीएच (NABH) उत्कृष्टता प्रत्यायन',
        type: 'award',
        date: '2024-03-20',
        summary: 'मरीज सुरक्षा, संक्रमण नियंत्रण और क्लिनिकल मानकों के लिए देश का सर्वोच्च मान्यता प्राप्त दर्जा।',
        content: `गोरखपुर — सिनर्जी सुपर स्पेशियलिटी अस्पताल को नेशनल एक्रीडिटेशन बोर्ड फॉर हॉस्पिटल्स एंड हेल्थकेयर प्रोवाइडर्स (NABH) द्वारा पूर्ण मान्यता प्रदान की गई है, जो भारतीय स्वास्थ्य सेवा में गुणवत्ता का सर्वोच्च मानक है।

यह प्रत्यायन 600 से अधिक कड़े सुरक्षा और क्लिनिकल प्रोटोकॉल के गहन ऑडिट के बाद दिया गया है, जिसमें संक्रमण नियंत्रण, मरीज अधिकार, दवा सुरक्षा और बायोमेडिकल कचरा प्रबंधन शामिल हैं।

गुणवत्ता आश्वासन निदेशालय ने कहा: "यह मान्यता हमारे डॉक्टरों, नर्सों और स्वास्थ्य कर्मियों के समर्पण का प्रमाण है। यह हर मरीज को आश्वस्त करता है कि उनका उपचार वैश्विक सुरक्षा मानकों के अनुरूप है।"`,
        image: '/nabh-logo.png',
        author: 'गुणवत्ता एवं क्लिनिकल बोर्ड',
        location: 'गोरखपुर, उत्तर प्रदेश',
        pdfUrl: '#',
        keyHighlights: [
            '600+ मरीज सुरक्षा मानकों का पूर्ण अनुपालन',
            'शून्य-समझौता संक्रमण नियंत्रण और ओटी नसबंदी प्रोटोकॉल',
            'प्रमाणित आपातकालीन एवं मरीज अधिकार सुरक्षा',
        ],
        tags: ['एनएबीएच', 'मरीज सुरक्षा', 'राष्ट्रीय गुणवत्ता पुरस्कार'],
    },
    {
        id: 'clinical-research-gi-cancers',
        title: 'सिनर्जी ओंकोलॉजी रिसर्च यूनिट ने पूर्वांचल में गैस्ट्रोइंटेस्टाइनल कैंसर पर ऐतिहासिक शोध पत्र प्रकाशित किया',
        type: 'research',
        date: '2024-03-05',
        summary: '1,800 से अधिक मरीजों के 5-वर्षीय डेटा पर आधारित शोध में कीमोथेरेपी और न्यूनतम इनवेसिव सर्जरी के बेहतर परिणाम सामने आए।',
        content: `गोरखपुर — सिनर्जी अस्पताल के क्लिनिकल रिसर्च व ओंकोलॉजी विभाग ने पूर्वी उत्तर प्रदेश और पश्चिमी बिहार में गैस्ट्रोइंटेस्टाइनल कैंसर के जोखिम कारकों और उपचार परिणामों पर एक पीयर-रिव्यूड अध्ययन प्रकाशित किया है।

2019 से 2024 तक के डेटा से स्पष्ट हुआ है कि आधुनिक कीमोरेडिएशन और लेप्रोस्कोपिक सर्जरी के संयोजन से 3-वर्षीय रोग-मुक्त सर्वाइवल दर में 34% सुधार हुआ है।

वरिष्ठ ओंकोलॉजिस्ट डॉ. आलोक तिवारी ने बताया: "स्थानीय क्लिनिकल डेटा से लक्षित उपचार योजना बनाना आसान होता है। हमारे निष्कर्ष पूर्वांचल के मरीजों के लिए अत्यंत उपयोगी हैं।"`,
        image: '/department/medical-oncology-banner.jpeg',
        author: 'सिनर्जी क्लिनिकल रिसर्च विभाग',
        location: 'गोरखपुर, उत्तर प्रदेश',
        pdfUrl: '#',
        keyHighlights: [
            'पूर्वांचल के 1,800+ मरीजों पर आधारित अध्ययन',
            'नियोएडजुवेंट प्रोटोकॉल के साथ 3-वर्षीय सर्वाइवल में 34% सुधार',
            'राष्ट्रीय ओंकोलॉजी फोरम में प्रस्तुत एवं प्रशंसित',
        ],
        tags: ['क्लिनिकल रिसर्च', 'मेडिकल ओंकोलॉजी', 'कैंसर शोध', 'प्रकाशन'],
    },
    {
        id: 'siwan-bihar-healthcare-partnership',
        title: 'सिनर्जी ने सिवान मेडिकल नेटवर्क के साथ की रणनीतिक साझेदारी, बिहार में आउटस्टेशन सेवाएं विस्तारित',
        type: 'partnership',
        date: '2024-02-14',
        summary: 'साझेदारी के तहत सिवान में साप्ताहिक विशेषज्ञ ओपीडी, टेली-ओंकोलॉजी परामर्श और प्राथमिकता एम्बुलेंस सेवा शुरू।',
        content: `सिवान / गोरखपुर — बेहतर तृतीयक कैंसर एवं सर्जिकल देखभाल प्रदान करने के लिए सिनर्जी अस्पताल ने सिवान और गोपालगंज के प्रमुख चिकित्सा केंद्रों के साथ समझौता ज्ञापन पर हस्ताक्षर किए हैं।

इसके अंतर्गत गोरखपुर के वरिष्ठ कैंसर, हृदय और न्यूरो विशेषज्ञ सिवान में नियमित साप्ताहिक ओपीडी आयोजित करेंगे और टेली-कंसल्टेशन के माध्यम से मरीजों की निगरानी करेंगे।

समन्वय समिति ने कहा: "पश्चिमी बिहार के मरीजों को अब बड़े शहरों की लंबी यात्रा करने की आवश्यकता नहीं होगी। उच्चस्तरीय सुपर-स्पेशियलिटी सेवा अब उनके निकट उपलब्ध है।"`,
        image: '/media/media_g_3.jpg',
        author: 'सिनर्जी आउटरीच विंग',
        location: 'सिवान एवं गोरखपुर',
        pdfUrl: '#',
        keyHighlights: [
            'सिवान एवं गोपालगंज में साप्ताहिक विशेषज्ञ ओपीडी',
            'रियल-टाइम सेकंड ओपिनियन हेतु टेली-कंसल्टेशन पोर्टल',
            'प्राथमिकता ग्रीन-कॉरिडोर एम्बुलेंस सुविधा',
        ],
        tags: ['साझेदारी', 'बिहार आउटरीच', 'टेली-कंसल्टेशन', 'पेरिफेरल ओपीडी'],
    },
    {
        id: 'pink-hope-rural-screening-drive',
        title: 'सिनर्जी ने शुरू किया ‘पिंक होप’ मिशन: पूर्वी उत्तर प्रदेश के ग्रामीण क्षेत्रों में 10,000 निशुल्क कैंसर जांच',
        type: 'community',
        date: '2024-01-20',
        summary: 'डिजिटल मैमोग्राफी वैन और डॉक्टर टीमों द्वारा देवरिया, महराजगंज और कुशीनगर में मुफ्त जांच शिविर आयोजित।',
        content: `गोरखपुर — कैंसर जागरूकता अभियान के तहत सिनर्जी अस्पताल ने ‘मिशन पिंक होप’ की शुरुआत की है, जिसके अंतर्गत 10,000 महिलाओं की निशुल्क मैमोग्राफी और प्रारंभिक कैंसर जांच की जाएगी।

मोबाइल डायग्नोस्टिक वैन में डिजिटल मैमोग्राफी, अल्ट्रासाउंड और पैप स्मीयर परीक्षण की आधुनिक व्यवस्था है, जो सीधे ग्रामीण क्षेत्रों तक पहुंच रही है।

डॉ. अंजलि जैन ने कहा: "शुरुआती चरण में पहचान होने पर कैंसर पूरी तरह साध्य हो सकता है। मिशन पिंक होप सामाजिक संकोच को दूर कर महिलाओं तक जांच पहुंचा रहा है।"`,
        image: '/media/media_g_2.jpg',
        author: 'सामुदायिक स्वास्थ्य एवं सीएसआर विभाग',
        location: 'पूर्वी उत्तर प्रदेश जिले',
        pdfUrl: '#',
        keyHighlights: [
            'डिजिटल मैमोग्राफी युक्त मोबाइल डायग्नोस्टिक बस',
            '5 जिलों में 10,000 निशुल्क जांच का लक्ष्य',
            'मौके पर विशेषज्ञ परामर्श व मार्गदर्शन',
        ],
        tags: ['सीएसआर', 'सामुदायिक स्वास्थ्य', 'ब्रेस्ट कैंसर जागरूकता', 'निशुल्क जांच'],
    },
];

export const pressReleasesData = pressReleasesDataEn;

// -------------------------------------------------------------
// 3. Media Gallery Data (English & Hindi)
// -------------------------------------------------------------
export const galleryMediaDataEn: GalleryMediaItem[] = [
    {
        id: 'gal-1',
        title: 'State-of-the-Art TrueBeam Linear Accelerator Radiation Suite',
        category: 'Advanced Medical Tech',
        type: 'image',
        src: '/department/radiation-oncology-banner.png',
        date: '2024',
        description: 'Sub-millimeter precision radiation oncology suite equipped for IMRT, IGRT, and SRS treatments.',
    },
    {
        id: 'gal-2',
        title: 'Modular Laminar Flow Operation Theatres for Complex Onco-Surgeries',
        category: 'Facilities & Infrastructure',
        type: 'image',
        src: '/department/surgical-oncology-facilities.webp',
        date: '2024',
        description: 'Ultra-sterile positive pressure OT suites featuring HEPA air filtration and high-definition laparoscopy towers.',
    },
    {
        id: 'gal-3',
        title: 'Free Cancer Awareness & Community Screening Mega Camp',
        category: 'Events & Camps',
        type: 'image',
        src: '/media/media_g_2.jpg',
        date: '2024',
        description: 'Doctors and oncology team conducting free consultations and mammography screenings.',
    },
    {
        id: 'gal-4',
        title: '24x7 Fully Equipped Emergency, Critical Care & Trauma Center',
        category: 'Facilities & Infrastructure',
        type: 'image',
        src: '/department/emergency-and-critical-care-banner.png',
        date: '2024',
        description: 'Dedicated triage beds, multi-parameter monitors, and rapid resuscitation equipment.',
    },
    {
        id: 'gal-5',
        title: 'Advanced 128-Slice CT & Digital Diagnostic Imaging Wing',
        category: 'Advanced Medical Tech',
        type: 'image',
        src: '/department/diagnostic-imaging-banner.png',
        date: '2024',
        description: 'High-speed radiological imaging unit enabling comprehensive whole-body angiographies and 3D tumor mapping.',
    },
    {
        id: 'gal-6',
        title: 'Regional Healthcare Expansion: Synergy Outreach Center in Siwan',
        category: 'Events & Camps',
        type: 'image',
        src: '/media/media_g_3.jpg',
        date: '2024',
        description: 'Inauguration of peripheral consultation center bringing super-specialist consultations to Bihar.',
    },
    {
        id: 'gal-7',
        title: 'Round-the-Clock Blood Bank & Component Separation Unit',
        category: 'Facilities & Infrastructure',
        type: 'image',
        src: '/department/blood-bank-banner.png',
        date: '2024',
        description: 'Licensed blood component center offering platelets, PRBC, and FFP with automated cross-matching.',
    },
    {
        id: 'gal-8',
        title: 'Doctor Special: Expert Panel on Modern Cancer Therapies',
        category: 'Doctors & Surgeries',
        type: 'video',
        src: '/media/media_g_5.jpg',
        videoUrl: '/videos/testimonials/mahaveeram.mp4',
        date: '2024',
        description: 'Senior medical oncologists discussing personalized targeted therapies and immunotherapy advances.',
    },
    {
        id: 'gal-9',
        title: 'Tele-Consultation & Digital Outstation Patient Support Center',
        category: 'Patient Care',
        type: 'image',
        src: '/media/media_g_1.jpg',
        date: '2024',
        description: 'Dedicated tele-health suite connecting remote patients directly with senior super-specialists.',
    },
    {
        id: 'gal-10',
        title: 'Ayodhya & Purvaanchal Health Mission Outreach Camp',
        category: 'Community Outreach',
        type: 'image',
        src: '/media/media_g_0.jpg',
        date: '2024',
        description: 'Community medical outreach providing free health checkups and medications to over 800 citizens.',
    },
    {
        id: 'gal-11',
        title: 'Modern Dialysis Center with Advanced RO Water Purification',
        category: 'Facilities & Infrastructure',
        type: 'image',
        src: '/department/dialysis-unit-banner.png',
        date: '2024',
        description: 'Multi-bed hemodialysis wing with dedicated isolation units for hepatitis-positive patients.',
    },
    {
        id: 'gal-12',
        title: 'Annual Healthcare Excellence & Staff Recognition Ceremony',
        category: 'Events & Camps',
        type: 'image',
        src: '/media/media_g_4.jpg',
        date: '2024',
        description: 'Celebrating the compassionate care and dedication of Synergy healthcare workers and doctors.',
    },
];

export const galleryMediaDataHi: GalleryMediaItem[] = [
    {
        id: 'gal-1',
        title: 'अत्याधुनिक ट्रू-बीम लीनियर एक्सेलरेटर रेडिएशन सुइट',
        category: 'Advanced Medical Tech',
        type: 'image',
        src: '/department/radiation-oncology-banner.png',
        date: '2024',
        description: 'सब-मिलीमीटर सटीकता युक्त आईएमआरटी (IMRT), आईजीआरटी (IGRT) और एसआरएस उपचार सुविधा।',
    },
    {
        id: 'gal-2',
        title: 'जटिल कैंसर सर्जरी हेतु मॉड्यूलर लेमिनार फ्लो ऑपरेशन थिएटर',
        category: 'Facilities & Infrastructure',
        type: 'image',
        src: '/department/surgical-oncology-facilities.webp',
        date: '2024',
        description: 'हेपा (HEPA) एयर फिल्ट्रेशन और हाई-डेफिनिशन लेप्रोस्कोपी टॉवर से सुसज्जित अल्ट्रा-स्टेराइल ओटी।',
    },
    {
        id: 'gal-3',
        title: 'निशुल्क कैंसर जागरूकता एवं सामुदायिक स्वास्थ्य जांच महा-शिविर',
        category: 'Events & Camps',
        type: 'image',
        src: '/media/media_g_2.jpg',
        date: '2024',
        description: 'वरिष्ठ डॉक्टरों द्वारा निशुल्क परामर्श और मैमोग्राफी कैंसर जांच।',
    },
    {
        id: 'gal-4',
        title: '24x7 पूर्ण सुसज्जित आपातकालीन, क्रिटिकल केयर एवं ट्रॉमा सेंटर',
        category: 'Facilities & Infrastructure',
        type: 'image',
        src: '/department/emergency-and-critical-care-banner.png',
        date: '2024',
        description: 'समर्पित ट्रायज बेड, मल्टी-पैरामीटर मॉनिटर और त्वरित रिससिटेशन उपकरण।',
    },
    {
        id: 'gal-5',
        title: 'उन्नत 128-स्लाइस सीटी एवं डिजिटल डायग्नोस्टिक इमेजिंग विंग',
        category: 'Advanced Medical Tech',
        type: 'image',
        src: '/department/diagnostic-imaging-banner.png',
        date: '2024',
        description: 'हाई-स्पीड रेडियोलॉजिकल इमेजिंग यूनिट द्वारा संपूर्ण शरीर की एंजियोग्राफी व 3D ट्यूमर मैपिंग।',
    },
    {
        id: 'gal-6',
        title: 'क्षेत्रीय स्वास्थ्य विस्तार: सिवान में सिनर्जी आउटरीच सेंटर का उद्घाटन',
        category: 'Events & Camps',
        type: 'image',
        src: '/media/media_g_3.jpg',
        date: '2024',
        description: 'बिहार के मरीजों के लिए नियमित सुपर-स्पेशियलिटी परामर्श केंद्र का शुभारंभ।',
    },
    {
        id: 'gal-7',
        title: '24 घंटे ब्लड बैंक एवं कंपोनेंट सेपरेशन यूनिट',
        category: 'Facilities & Infrastructure',
        type: 'image',
        src: '/department/blood-bank-banner.png',
        date: '2024',
        description: 'प्लेटलेट्स, पीआरबीसी और एफएफपी की 24x7 उपलब्धता व स्वचालित क्रॉस-मैचिंग।',
    },
    {
        id: 'gal-8',
        title: 'डॉक्टर विशेष चर्चा: आधुनिक कैंसर उपचार पद्धतियों पर विशेषज्ञ पैनल',
        category: 'Doctors & Surgeries',
        type: 'video',
        src: '/media/media_g_5.jpg',
        videoUrl: '/videos/testimonials/mahaveeram.mp4',
        date: '2024',
        description: 'वरिष्ठ ओंकोलॉजिस्ट द्वारा पर्सनलाइज़्ड टारगेटेड थेरेपी और इम्यूनोथेरेपी पर विस्तृत मार्गदर्शन।',
    },
    {
        id: 'gal-9',
        title: 'टेली-कंसल्टेशन एवं डिजिटल आउटस्टेशन मरीज सहायता केंद्र',
        category: 'Patient Care',
        type: 'image',
        src: '/media/media_g_1.jpg',
        date: '2024',
        description: 'दूरदराज के मरीजों को सीधे वरिष्ठ विशेषज्ञों से जोड़ने वाला टेली-हेल्थ सेंटर।',
    },
    {
        id: 'gal-10',
        title: 'अयोध्या एवं पूर्वांचल स्वास्थ्य मिशन: ग्रामीण निशुल्क चिकित्सा शिविर',
        category: 'Community Outreach',
        type: 'image',
        src: '/media/media_g_0.jpg',
        date: '2024',
        description: '800 से अधिक नागरिकों को निशुल्क स्वास्थ्य परीक्षण और दवा वितरण।',
    },
    {
        id: 'gal-11',
        title: 'उन्नत आरओ वाटर प्यूरिफिकेशन युक्त आधुनिक डायलिसिस सेंटर',
        category: 'Facilities & Infrastructure',
        type: 'image',
        src: '/department/dialysis-unit-banner.png',
        date: '2024',
        description: 'हेपेटाइटिस-पॉजिटिव मरीजों के लिए समर्पित आइसोलेशन यूनिट युक्त हीमोडायलिसिस विंग।',
    },
    {
        id: 'gal-12',
        title: 'वार्षिक स्वास्थ्य सेवा उत्कृष्टता एवं कर्मचारी सम्मान समारोह',
        category: 'Events & Camps',
        type: 'image',
        src: '/media/media_g_4.jpg',
        date: '2024',
        description: 'सिनर्जी स्वास्थ्य कर्मियों और डॉक्टरों की करुणामय सेवा व समर्पण का उत्सव।',
    },
];

export const galleryMediaData = galleryMediaDataEn;

// -------------------------------------------------------------
// Locale-Aware Future-Proof Helper Functions
// -------------------------------------------------------------
export const getLocalizedNewsVideos = (locale: string = 'en'): NewsVideoItem[] => {
    return locale === 'hi' ? newsVideosDataHi : newsVideosDataEn;
};

export const getLocalizedPressReleases = (
    locale: string = 'en',
    filter?: string
): PressReleaseItem[] => {
    const list = locale === 'hi' ? pressReleasesDataHi : pressReleasesDataEn;
    if (!filter || filter === 'all') return list;
    return list.filter((pr) => pr.type.toLowerCase() === filter.toLowerCase());
};

export const getLocalizedFeaturedPressRelease = (locale: string = 'en'): PressReleaseItem => {
    return locale === 'hi' ? featuredPressReleaseDataHi : featuredPressReleaseDataEn;
};

export const getLocalizedGalleryMedia = (
    locale: string = 'en',
    category?: string
): GalleryMediaItem[] => {
    const list = locale === 'hi' ? galleryMediaDataHi : galleryMediaDataEn;
    if (!category || category === 'All') return list;
    return list.filter((item) => item.category === category);
};

export const getLocalizedPressReleaseById = (
    id: string,
    locale: string = 'en'
): PressReleaseItem | undefined => {
    const featured = getLocalizedFeaturedPressRelease(locale);
    if (featured.id === id) return featured;
    const list = getLocalizedPressReleases(locale);
    return list.find((item) => item.id === id);
};
