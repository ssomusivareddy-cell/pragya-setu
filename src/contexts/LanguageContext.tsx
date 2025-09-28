import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'en' | 'te' | 'hi';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  en: {
    // Header
    'header.title': 'Education AI',
    'header.english': 'English',
    'header.profile': 'Profile',
    
    // Hero Section
    'hero.title': 'Master Any Subject with AI-Powered Learning',
    'hero.subtitle': 'Personalized education that adapts to your pace, provides instant feedback, and helps you achieve your academic goals faster than ever before.',
    'hero.startLearning': 'Start Learning',
    'hero.viewDemo': 'View Demo',
    
    // Features
    'features.adaptive': 'Adaptive Learning Path',
    'features.adaptiveDesc': 'AI analyzes your learning style and creates personalized study paths that adapt to your progress and preferences.',
    'features.peer': 'Peer Learning Network',
    'features.peerDesc': 'Connect with classmates, join study groups, and learn collaboratively in our interactive community platform.',
    'features.offline': 'Offline First Design',
    'features.offlineDesc': 'Download lessons and study materials to continue learning even without internet connectivity.',
    
    // Subjects
    'subjects.mathematics': 'Mathematics',
    'subjects.science': 'Science', 
    'subjects.english': 'English',
    'subjects.viewLessons': 'View Lessons',
    'subjects.takeQuiz': 'Take Quiz',
    'subjects.studyGroup': 'Join Study Group',
    'subjects.downloadContent': 'Download Content',
    'subjects.review': 'Review',
    
    // Profile
    'profile.name': 'S Somusivareddy',
    'profile.role': 'Student',
    'profile.enrolled': 'Subjects Enrolled',
    'profile.completed': 'Completed Lessons',
    'profile.groups': 'Study Groups',
    'profile.streak': 'Learning Streak',
    'profile.days': 'days',
    
    // Contact
    'contact.title': 'Contact Information',
    'contact.address': 'Address',
    'contact.phone': 'Phone',
    'contact.email': 'Email',
    'contact.hours': 'Office Hours',
    'contact.addressValue': 'Educational AI Learning Solutions, SVCET, Chittor',
    'contact.hoursValue': 'Monday - Friday: 9:00 AM - 6:00 PM',
    
    // Voice Assistant
    'voice.title': 'Voice Assistant',
    'voice.subtitle': 'Ask me anything about your studies',
    'voice.activate': 'Activate Voice Assistant',
    'voice.listening': 'Listening...',
    'voice.help': 'Help & Commands',
    
    // Notifications
    'notification.welcome': '🎉 Welcome Back!',
    'notification.welcomeDesc': 'You have 3 new lessons available in Mathematics. Continue your learning journey!',
    'notification.studyGroup': '📚 Study Group Invitation',
    'notification.studyGroupDesc': 'Join the Physics study group for tomorrow\'s discussion on Newton\'s Laws. 5 members waiting!'
  },
  te: {
    // Header
    'header.title': 'విద్యా AI',
    'header.english': 'తెలుగు',
    'header.profile': 'ప్రొఫైల్',
    
    // Hero Section  
    'hero.title': 'AI-శక్తితో కూడిన అభ్యాసంతో ఏ విషయమైనా నేర్చుకోండి',
    'hero.subtitle': 'మీ వేగానికి అనుగుణంగా వ్యక్తిగతీకరించిన విద్య, తక్షణ ప్రతిస్పందన అందిస్తుంది మరియు మీ అకడమిక్ లక్ష్యాలను మునుపెన్నడూ లేని వేగంతో సాధించడానికి సహాయపడుతుంది.',
    'hero.startLearning': 'అభ్యాసం ప్రారంభించండి',
    'hero.viewDemo': 'డెమో చూడండి',
    
    // Features
    'features.adaptive': 'అనుకూల అభ్యాస మార్గం',
    'features.adaptiveDesc': 'AI మీ అభ్యాస శైలిని విశ్లేషిస్తుంది మరియు మీ పురోగతి మరియు ప్రాధాన్యతలకు అనుగుణంగా వ్యక్తిగతీకరించిన అధ్యయన మార్గాలను సృష్టిస్తుంది.',
    'features.peer': 'సహచర అభ్యాస నెట్‌వర్క్',
    'features.peerDesc': 'క్లాస్‌మేట్స్‌తో కనెక్ట్ అవ్వండి, అధ్యయన సమూహాలలో చేరండి మరియు మా ఇంటరాక్టివ్ కమ్యూనిటీ ప్లాట్‌ఫారమ్‌లో సహకారంతో నేర్చుకోండి.',
    'features.offline': 'ఆఫ్‌లైన్ మొదటి డిజైన్',
    'features.offlineDesc': 'ఇంటర్నెట్ కనెక్టివిటీ లేకుండా కూడా అభ్యాసం కొనసాగించడానికి పాఠాలు మరియు అధ్యయన సామగ్రిని డౌన్‌లోడ్ చేయండి.',
    
    // Subjects
    'subjects.mathematics': 'గణితం',
    'subjects.science': 'విజ్ఞానం',
    'subjects.english': 'ఆంగ్లం',
    'subjects.viewLessons': 'పాఠాలు చూడండి',
    'subjects.takeQuiz': 'క్విజ్ తీసుకోండి',
    'subjects.studyGroup': 'అధ్యయన గుంపులో చేరండి',
    'subjects.downloadContent': 'కంటెంట్ డౌన్‌లోడ్ చేయండి',
    'subjects.review': 'సమీక్ష',
    
    // Profile
    'profile.name': 'ఎస్ సోముశివారెడ్డి',
    'profile.role': 'విద్యార్థి',
    'profile.enrolled': 'నమోదు చేసిన విషయాలు',
    'profile.completed': 'పూర్తి చేసిన పాఠాలు',
    'profile.groups': 'అధ్యయన సమూహాలు',
    'profile.streak': 'అభ్యాస వరుస',
    'profile.days': 'రోజులు',
    
    // Contact
    'contact.title': 'సంప్రదింపు సమాచారం',
    'contact.address': 'చిరునామా',
    'contact.phone': 'ఫోన్',
    'contact.email': 'ఇమెయిల్',
    'contact.hours': 'కార్యాలయ సమయం',
    'contact.addressValue': 'ఎడ్యుకేషనల్ AI లెర్నింగ్ సొల్యూషన్స్, SVCET, చిత్తూర్',
    'contact.hoursValue': 'సోమవారం - శుక్రవారం: ఉదయం 9:00 - సాయంత్రం 6:00',
    
    // Voice Assistant
    'voice.title': 'వాయిస్ అసిస్టెంట్',
    'voice.subtitle': 'మీ అధ్యయనాల గురించి ఏదైనా అడగండి',
    'voice.activate': 'వాయిస్ అసిస్టెంట్‌ని సక్రియం చేయండి',
    'voice.listening': 'వింటోంది...',
    'voice.help': 'సహాయం మరియు కమాండ్‌లు',
    
    // Notifications
    'notification.welcome': '🎉 తిరిగి రావడానికి స్వాగతం!',
    'notification.welcomeDesc': 'గణితంలో మీకు 3 కొత్త పాఠాలు అందుబాటులో ఉన్నాయి. మీ అభ్యాస ప్రయాణాన్ని కొనసాగించండి!',
    'notification.studyGroup': '📚 అధ్యయన సమూహ ఆహ్వానం',
    'notification.studyGroupDesc': 'న్యూటన్ చట్టాలపై రేపటి చర్చ కోసం భౌతికశాస్త్ర అధ్యయన సమూహంలో చేరండి. 5 సభ్యులు వేచి ఉన్నారు!'
  },
  hi: {
    // Header
    'header.title': 'शिक्षा AI',
    'header.english': 'हिंदी',
    'header.profile': 'प्रोफ़ाइल',
    
    // Hero Section
    'hero.title': 'AI-संचालित शिक्षा के साथ किसी भी विषय में महारत हासिल करें',
    'hero.subtitle': 'व्यक्तिगत शिक्षा जो आपकी गति के अनुकूल होती है, तत्काल प्रतिक्रिया प्रदान करती है, और आपको पहले से कहीं तेज़ी से अपने शैक्षणिक लक्ष्य हासिल करने में मदद करती है।',
    'hero.startLearning': 'सीखना शुरू करें',
    'hero.viewDemo': 'डेमो देखें',
    
    // Features
    'features.adaptive': 'अनुकूली शिक्षण पथ',
    'features.adaptiveDesc': 'AI आपकी शिक्षण शैली का विश्लेषण करता है और व्यक्तिगत अध्ययन पथ बनाता है जो आपकी प्रगति और प्राथमिकताओं के अनुकूल होते हैं।',
    'features.peer': 'सहकर्मी शिक्षण नेटवर्क',
    'features.peerDesc': 'सहपाठियों से जुड़ें, अध्ययन समूहों में शामिल हों, और हमारे इंटरैक्टिव कम्युनिटी प्लेटफॉर्म में सहयोग से सीखें।',
    'features.offline': 'ऑफ़लाइन फर्स्ट डिज़ाइन',
    'features.offlineDesc': 'इंटरनेट कनेक्टिविटी के बिना भी सीखना जारी रखने के लिए पाठ और अध्ययन सामग्री डाउनलोड करें।',
    
    // Subjects
    'subjects.mathematics': 'गणित',
    'subjects.science': 'विज्ञान',
    'subjects.english': 'अंग्रेजी',
    'subjects.viewLessons': 'पाठ देखें',
    'subjects.takeQuiz': 'क्विज़ लें',
    'subjects.studyGroup': 'अध्ययन समूह में शामिल हों',
    'subjects.downloadContent': 'सामग्री डाउनलोड करें',
    'subjects.review': 'समीक्षा',
    
    // Profile
    'profile.name': 'एस सोमुशिवारेड्डी',
    'profile.role': 'छात्र',
    'profile.enrolled': 'नामांकित विषय',
    'profile.completed': 'पूर्ण किए गए पाठ',
    'profile.groups': 'अध्ययन समूह',
    'profile.streak': 'शिक्षण स्ट्रीक',
    'profile.days': 'दिन',
    
    // Contact
    'contact.title': 'संपर्क जानकारी',
    'contact.address': 'पता',
    'contact.phone': 'फोन',
    'contact.email': 'ईमेल',
    'contact.hours': 'कार्यालय समय',
    'contact.addressValue': 'एजुकेशनल AI लर्निंग सॉल्यूशन्स, SVCET, चित्तूर',
    'contact.hoursValue': 'सोमवार - शुक्रवार: सुबह 9:00 - शाम 6:00',
    
    // Voice Assistant
    'voice.title': 'वॉइस असिस्टेंट',
    'voice.subtitle': 'अपनी पढ़ाई के बारे में कुछ भी पूछें',
    'voice.activate': 'वॉइस असिस्टेंट सक्रिय करें',
    'voice.listening': 'सुन रहा है...',
    'voice.help': 'सहायता और कमांड',
    
    // Notifications
    'notification.welcome': '🎉 वापस स्वागत है!',
    'notification.welcomeDesc': 'गणित में आपके लिए 3 नए पाठ उपलब्ध हैं। अपनी शिक्षा की यात्रा जारी रखें!',
    'notification.studyGroup': '📚 अध्ययन समूह निमंत्रण',
    'notification.studyGroupDesc': 'न्यूटन के नियमों पर कल की चर्चा के लिए भौतिकी अध्ययन समूह में शामिल हों। 5 सदस्य प्रतीक्षा कर रहे हैं!'
  }
};

const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export { LanguageProvider };