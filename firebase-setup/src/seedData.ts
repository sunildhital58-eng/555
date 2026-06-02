import {
  Services,
  Doctor,
  AboutUs,
  ForPatient,
  ForVisitors,
  GalleryItem,
  VideoItem,
  NewsItem,
  PriceListItem,
  ContactUsInfo,
  WebSettings,
  BookingRequest,
  TestimonialItem,
  HospitalEventItem,
  QRCodeItem,
  MachineItem
} from './types';

export const INITIAL_CATEGORIES: string[] = [
  "ORTHOPEDICS, TRAUMA & SPINE SURGERY",
  "GENERAL SURGERY",
  "NEURO SURGERY",
  "DENTAL SURGERY",
  "ORTHO DENTIST",
  "ENT HEAD & NECK SURGERY",
  "BURN, PLASTIC & COSMETIC SURGERY",
  "THORACIC, BREAST AND THYROID SURGERY",
  "CARDIO –VASCULAR SURGERY",
  "PEDIATRIC SURGERY",
  "OBSTETRICS & GYNECOLOGY",
  "INTERNAL MEDICINE",
  "GASTROENTEROLOGY & HEPATOBILIARY",
  "NEPHROLOGY",
  "MEDICAL ONCOLOGY",
  "PEDIATRICS AND ADOLESCENT MEDICINE",
  "PSYCHIATRY",
  "DERMATOLOGY & COSMETOLOGY",
  "RADIOLOGY",
  "PATHOLOGY",
  "ANESTHESIA & CRITICAL CARE",
  "PHYSIOTHERAPY",
  "PLASTIC SURGERY",
  "NEUROLOGY",
  "CARDIOLOGY",
  "DERMATOLOGY",
  "ENDOCRINOLOGY & METABOLISM",
  "OPHTHALMOLOGY",
  "IVF",
  "PAIN CLINIC",
  "GENERAL SURGERY & UROLOGY",
  "NEURO MEDICINE",
  "HEMATOLOGY",
  "CTVS",
  "PULMONOLOGY MEDICINE",
  "ORAL & MAXILLOFACIAL SURGERY",
  "DENTAL HYGIENIST & TECHNICIAN",
  "UROLOGY & ROBOTIC ONCOLOGY"
];

export const INITIAL_SERVICES: Services = {
  opd: [
    {
      id: 'opd-1',
      title: 'General Out-Patient Services',
      imageUrl: 'https://images.unsplash.com/photo-1579684389782-64d84b5e901a?auto=format&fit=crop&w=800&q=80',
      pdfUrl: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf'
    },
    {
      id: 'opd-2',
      title: 'Consultation & Diagnostics Packages',
      imageUrl: 'https://images.unsplash.com/photo-1504813184591-01552661c88c?auto=format&fit=crop&w=800&q=80',
      pdfUrl: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf'
    }
  ],
  ipd: [
    {
      id: 'ipd-1',
      title: 'In-Patient Wards & ICU Care',
      imageUrl: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=800&q=80',
      pdfUrl: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf'
    },
    {
      id: 'ipd-2',
      title: 'Maternity Ward & post operative facilities',
      imageUrl: 'https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=800&q=80',
      pdfUrl: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf'
    }
  ],
  emergency: [
    {
      id: 'em-1',
      title: 'Emergency Response Unit 24/7',
      imageUrl: 'https://images.unsplash.com/photo-1583324113626-70df0f4cedf2?auto=format&fit=crop&w=800&q=80',
      text: 'Dhading Hospital Urgent Care is open 24 hours a day, 365 days a year. Equipped with life support facilities and standby ambulances, our critical recovery room is managed by senior emergency physicians & trauma coordinators.'
    }
  ],
  labPathology: [
    {
      id: 'lab-1',
      title: 'Central Pathology Laboratory',
      pdfUrl: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
      text: 'Our central pathology operates 24/7. Fully automated clinical diagnostics, state of the art immunoassay systems, hematology analyzers, and highly structured microbiology setups to ensure exact reports.'
    }
  ],
  radiology: [
    {
      id: 'rad-1',
      title: 'Digital Computed Tomography & X-Ray',
      imageUrl: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=800&q=80',
      pdfUrl: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf'
    }
  ],
  cashReception: [
    {
      id: 'cash-1',
      title: 'Billing & Cash Services Counter',
      imageUrl: 'https://images.unsplash.com/photo-1556742044-3c52d6e88c62?auto=format&fit=crop&w=800&q=80',
      pdfUrl: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf'
    }
  ],
  pharmacy: [
    {
      id: 'ph-1',
      title: '24-Hour Express In-Hospital Pharmacy',
      imageUrl: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80',
      pdfUrl: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf'
    }
  ],
  ambulance: [
    {
      id: 'amb-1',
      title: 'Rapid Ambulance Network',
      imageUrl: 'https://images.unsplash.com/photo-1583324113626-70df0f4cedf2?auto=format&fit=crop&w=800&q=80',
      pdfUrl: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf'
    }
  ],
  preventiveHealth: [
    {
      id: 'prev-1',
      title: 'GROUP A: EXECUTIVE HEALTH CHECKUP PACKAGE PLAN (EHP)',
      imageUrl: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=800&q=80',
      pdfUrl: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
      text: "Price: Rs. 12,000/-\nDoctor's Consultation (Physician Specialist)\nComplete Blood Count (CBC, ESR, HB)\nBlood Sugar Fasting & PP\nLipid Profile (Cholesterol, TG, HDL, LDL)\nRenal Function Test (RFT - Urea, Creatinine, Uric Acid)\nLiver Function Test (LFT - SGOT, SGPT, Bilirubin, Alk Phos)\nThyroid Function Test (TFT - T3, T4, TSH)\nUrine Routine & Microscopic Examination\nStool Routine & Occult Blood Test\nElectrocardiogram (ECG)\nEchocardiogram (ECHO Heart Scan)\nChest X-Ray PA View\nUltrasound Abdomen & Pelvis (USG)"
    },
    {
      id: 'prev-2',
      title: 'GROUP B: COMPREHENSIVE MEDICAL CHECKUP PACKAGE PLAN (CMC)',
      imageUrl: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=800&q=80',
      pdfUrl: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
      text: "Price: Rs. 7,499/-\nMedical Specialist General Consultation\nComplete Blood Count (CBC / ESR / Hb)\nBlood Sugar Fasting\nLipid Profile (Total Cholesterol)\nRenal Function Test (Uric Acid, Serum Creatinine)\nLiver Function Test (Bilirubin, SGPT)\nUrine Routine Analysis\nElectrocardiogram (ECG)\nChest X-Ray PA View\nUltrasound Abdomen & Pelvis (USG)"
    },
    {
      id: 'prev-3',
      title: 'GROUP E: CHILD HEALTH WELLNESS PACKAGE (CHP)',
      imageUrl: 'https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?auto=format&fit=crop&w=800&q=80',
      pdfUrl: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
      text: "Price: Rs. 3,500/-\nSenior Consultant Pediatrician Consultation\nComplete Blood Count (CBC with Hb)\nBlood Grouping & Rh Factor Typing\nUrine Routine & Microscopic\nStool Routine & Parasite Screen\nBlood Glucose Random\nGeneral Growth & Development Assessment"
    }
  ]
};

export const INITIAL_DOCTORS: Doctor[] = [
  {
    id: 'dr1',
    name: 'Prof. Dr. Geha Raj Dahal',
    experience: '18 Years of Experience',
    category: 'Orthopedics, Trauma & Spine Surgery',
    level: 'Senior Consultant Orthopedic Surgeon',
    facebook: 'https://facebook.com',
    twitter: 'https://twitter.com',
    linkedin: 'https://linkedin.com',
    number: '+977-9851000000',
    profilePicUrl: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 'dr2',
    name: 'Dr. Romeo Kansakar',
    experience: '12 Years of Experience',
    category: 'General Surgery',
    level: 'Medical Director / Consultant Surgeon',
    facebook: 'https://facebook.com',
    twitter: 'https://twitter.com',
    linkedin: 'https://linkedin.com',
    number: '+977-9841223344',
    profilePicUrl: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 'dr3',
    name: 'Dr. Rupa Jha',
    experience: '10 Years of Experience',
    category: 'Obstetrics & Gynecology',
    level: 'Senior Gynecologist',
    facebook: 'https://facebook.com',
    linkedin: 'https://linkedin.com',
    number: '+977-9818456123',
    profilePicUrl: 'https://images.unsplash.com/photo-1594824813573-24643433b96f?auto=format&fit=crop&w=400&q=80'
  }
];

export const INITIAL_ABOUT_US: AboutUs = {
  introduction: {
    photoUrl: 'https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?auto=format&fit=crop&w=1200&q=80',
    details: 'Dhading Hospital Pvt. Ltd. is a leading private multi-specialty healthcare facility located at Dhading, Nepal. Directed by a dedicated panel of compassionate specialists, standard certified medical workers, and diagnostics engineers, our aim is standard medical delivery with high efficacy and maximum affordability. Spread across spacious architectural space, we contain 100 fully loaded beds including ICU counters, clean digital X-rays, and highly accurate laboratory installations, operating 24 hours a day, 7 days a week.'
  },
  boardOfDirectors: [
    {
      id: 'bod-1',
      name: 'Bikash Sapkota',
      role: 'Chairman',
      photoUrl: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80'
    },
    {
      id: 'bod-2',
      name: 'Dr. Prakash Poudel',
      role: 'Board Member',
      photoUrl: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=400&q=80'
    },
    {
      id: 'bod-3',
      name: 'Devendra Bahadur Shrestha',
      role: 'Board Member',
      photoUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80'
    }
  ],
  chairmanMessage: {
    name: 'Bikash Sapkota',
    details: 'Welcome to Dhading Hospital. Our ultimate aspiration is to nurture standard health infrastructure for residents and rural neighborhoods. By delivering economical solutions, cutting-edge therapies, and empathetic service, we hope to enrich lives for years to come. Available 24x7 hrs at mobile/whatsapp no: 9851451956.',
    whatsappNumber: '9851451956',
    photoUrl: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80'
  },
  hospitalWorkingTeam: [
    {
      id: 'team-1',
      name: 'Mr. Shree Krishna Bidari',
      role: 'Marketing Officer',
      photoUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80'
    },
    {
      id: 'team-2',
      name: 'Mrs. Sajina Dahal',
      role: 'Nursing Director',
      photoUrl: 'https://images.unsplash.com/photo-1594824813573-24643433b96f?auto=format&fit=crop&w=400&q=80'
    },
    {
      id: 'team-3',
      name: 'Mrs. Dhana Pudasaini',
      role: 'Account Officer',
      photoUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80'
    },
    {
      id: 'team-4',
      name: 'Mrs. Ganga Humaghai',
      role: 'Nursing and Supportive service Chief',
      photoUrl: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80'
    },
    {
      id: 'team-5',
      name: 'Mr. Om Bikash Niraula',
      role: 'Account Officer',
      photoUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80'
    },
    {
      id: 'team-6',
      name: 'Mr. Narayan Krishna Shrestha',
      role: 'IT Officer',
      photoUrl: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80'
    }
  ],
  careersText: 'Join the premier healthcare provider in Dhading! We are currently looking for Senior Pathology Coordinators, Critical Care Unit Nurses (ICU/NICU), and Diagnostic Radiologists. Send your resume to careers@dhadinghospital.com.np or upload via our portal.'
};

export const INITIAL_FOR_PATIENT: ForPatient = {
  admissionDeskText: 'Patient Admission Desk operates 24/7. When coming for admission, please bring your national identification card, insurance details, reference doctors guide, and prior laboratory diagnostics results. For advanced booking, call our cash desk directly.',
  appointment: [
    {
      id: 'apt-info-1',
      title: 'Interactive Appointment Booking Guidelines & Hospital Fees',
      imageUrl: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80',
      pdfUrl: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf'
    }
  ]
};

export const INITIAL_FOR_VISITORS: ForVisitors = {
  visitHour: [
    {
      id: 'vh-1',
      title: 'Visiting Hours Protocol Graphic',
      imageUrl: 'https://images.unsplash.com/photo-1527613426441-4da17471b66d?auto=format&fit=crop&w=800&q=80'
    }
  ],
  dosAndDonts: [
    {
      id: 'dd-1',
      title: 'Hygiene & Cleanliness regulations for Critical Care wards',
      imageUrl: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=800&q=80',
      pdfUrl: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf'
    }
  ],
  parking: [
    {
      id: 'pk-1',
      title: 'Emergency and Visitor Ambulance Access & Parking Spaces',
      imageUrl: 'https://images.unsplash.com/photo-1506015391300-4802dc74de2e?auto=format&fit=crop&w=800&q=80'
    }
  ]
};

export const INITIAL_GALLERY: GalleryItem[] = [
  {
    id: "gal-1780319997394",
    title: "Dhading Hospital Event",
    imageUrl: "https://i.postimg.cc/tJytKZQf/Whats-App-Image-2026-05-31-at-11-44-16-PM-(2).jpg"
  },
  {
    id: "gal-1780320010369",
    title: "Dhading Hospital Event",
    imageUrl: "https://i.postimg.cc/L5RBcYKw/Whats-App-Image-2026-05-31-at-11-44-16-PM-(1).jpg"
  },
  {
    id: "gal-1780320029282",
    title: "Dhading Hospital Event",
    imageUrl: "https://i.postimg.cc/wMHcCy8n/Whats-App-Image-2026-05-31-at-11-44-16-PM.jpg"
  },
  {
    id: "gal-1780320053713",
    title: "Dhading Hospital Event",
    imageUrl: "https://i.postimg.cc/hvgbkzWH/Whats-App-Image-2026-05-31-at-11-44-15-PM-(1).jpg"
  },
  {
    id: "gal-1780320180489",
    title: "Dhading Hospital Event",
    imageUrl: "https://i.postimg.cc/Cx1Tydwx/Whats-App-Image-2026-05-31-at-10-52-50-PM.jpg"
  },
  {
    id: "gal-1780320211010",
    title: "Dhading Hospital Event",
    imageUrl: "https://i.postimg.cc/sf9tv52t/Whats-App-Image-2026-05-31-at-10-52-48-PM.jpg"
  },
  {
    id: "gal-1780320243177",
    title: "Dhading Hospital Event",
    imageUrl: "https://i.postimg.cc/WzXWS6FJ/Whats-App-Image-2026-05-31-at-10-52-46-PM.jpg"
  },
  {
    id: "gal-1780320262760",
    title: "Dhading Hospital Event",
    imageUrl: "https://i.postimg.cc/nLB3Nt9x/Whats-App-Image-2026-05-31-at-10-52-45-PM.jpg"
  },
  {
    id: "gal-1780320415177",
    title: "Dhading Hospital Event",
    imageUrl: "https://i.postimg.cc/zvjS8z8Q/Whats-App-Image-2026-05-31-at-11-44-14-PM-(1).jpg"
  }
];

export const INITIAL_VIDEOS: VideoItem[] = [
  {
    id: 'vdo-1',
    title: 'Hospital Walkthrough and Specialities Intro',
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
  },
  {
    id: 'vdo-2',
    title: 'Free Health Camp Highlights - Dhading District',
    videoUrl: 'https://www.tiktok.com'
  }
];

export const INITIAL_NEWS: NewsItem[] = [
  {
    id: "news-1780321798376",
    title: "Event with Nepal Police",
    detail: "Joint community health awareness event organized with Nepal Police.",
    timeDate: "2026-06-03",
    imageUrl: "https://i.postimg.cc/BnXYcVTg/Whats-App-Image-2026-05-31-at-10-52-37-PM.jpg",
    images: []
  }
];

export const INITIAL_PRICE_LIST: PriceListItem[] = [
  {
    id: 'price-1',
    title: 'OPD, Lab Pathology, & Radiology Billing Price Guide 2026',
    pdfUrl: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf'
  }
];

export const INITIAL_CONTACT: ContactUsInfo = {
  phone: "+977-10-520111",
  secondaryPhone: "+977-10-520222",
  ambulancePhone: "+977-9851000102",
  ambulancePicUrl: "https://i.postimg.cc/FsZzgPrz/Whats-App-Image-2026-06-01-at-1-28-10-AM.jpg",
  whatsappNumber: "9851451956",
  email: "info@dhadinghospital.com.np",
  address: "Besi I, Dhading, Nepal",
  workingHours: "OPD Hours: Mon - Fri: 7am - 8pm | Sat - Sun: 10am - 5pm | Emergency 24/7",
  mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14101.401037599553!2d84.91891961621528!3d27.921822830605923!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb00dcfbebe543%3A0xc3fa5e966c891398!2sDhading%20Besi!5e0!3m2!1sne!2snp!4v1654317602082",
  facebookUrl: "https://facebook.com",
  youtubeUrl: "https://youtube.com",
  instagramUrl: "https://instagram.com"
};

export const INITIAL_SETTINGS: WebSettings = {
  webName: "Dhading Hospital Pvt Ltd",
  logoUrl: "https://i.postimg.cc/Gpvz8KXz/Whats-App-Image-2026-05-31-at-3-22-33-AM.jpg",
  banners: [
    {
      id: "b-1780320833592",
      title: "Welcome to Dhading Hospital Pvt Ltd",
      subtitle: "",
      imageUrl: "https://i.postimg.cc/G2LR7Kg3/Whats-App-Image-2026-06-01-at-12-34-01-AM.jpg"
    },
    {
      id: "b-1780320904183",
      title: "Our Doctors",
      subtitle: "",
      imageUrl: "https://i.postimg.cc/pdMN6vXB/Whats-App-Image-2026-05-31-at-10-50-20-PM.jpg"
    },
    {
      id: "b-1780320966115",
      title: "Our Hospital",
      subtitle: "",
      imageUrl: "https://i.postimg.cc/rFRPXHb2/Whats-App-Image-2026-05-31-at-10-52-50-PM(1).jpg"
    },
    {
      id: "b-1780321123287",
      title: "Services",
      subtitle: "",
      imageUrl: "https://i.postimg.cc/fRB2xhSC/Whats-App-Image-2026-05-31-at-10-52-43-PM(1).jpg"
    },
    {
      id: "b-1780321155768",
      title: "Services",
      subtitle: "",
      imageUrl: "https://i.postimg.cc/R02TRCSm/Whats-App-Image-2026-05-31-at-10-52-43-PM.jpg"
    }
  ],
  welcomeTitle: "Welcome to Dhading Hospital Pvt. Ltd.",
  welcomeText: "Dhading Hospital is a well equipped multi-speciality private hospital located in Dhading Besi. Led by a team of highly-trained doctors, nurses and tech specialists, we deliver state of the art diagnostics and ethical procedures. Our 100-bed unit hosts critical care setups, intensive ICU centers, interactive diagnostics, and a 24/7 pathology counter.",
  welcomeImage: "https://i.postimg.cc/G2LR7Kg3/Whats-App-Image-2026-06-01-at-12-34-01-AM.jpg",
  mapLink: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14101.401037599553!2d84.91891961621528!3d27.921822830605923!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb00dcfbebe543%3A0xc3fa5e966c891398!2sDhading%20Besi!5e0!3m2!1sne!2snp!4v1654317602082",
  number: "9761290500",
  seoDescription: "Dhading Hospital Pvt. Ltd. represents multi-speciality diagnosis, ICU beds, pediatric surgeons, gynecology, and rapid 24/7 emergency response networks in Dhading."
};

export const INITIAL_BOOKINGS: BookingRequest[] = [
  {
    id: 'b-mock-1',
    patientName: 'Ram Bahadur Shrestha',
    patientEmail: 'ram.shrestha@gmail.com',
    patientNumber: '9841334455',
    doctorType: 'Orthopedics, Trauma & Spine Surgery',
    doctorName: 'Prof. Dr. Geha Raj Dahal',
    day: 'Sunday',
    time: 'Morning - 9 AM',
    message: 'I have severe lower back spine discomfort after lifting heavy loads. Requesting examination.',
    createdAt: '2026-05-31 01:00 AM'
  }
];

export const INITIAL_TESTIMONIALS: TestimonialItem[] = [
  {
    id: "testi-1",
    name: "Parash Acharya",
    address: "Bhairahawa",
    comment: "Economical medical treatment. I am very happy about the services provided by this hospital especially Dr. Geha Raj Dahal. In my opinion, Dhading Hospital provides very good facilities in affordable price. Thank you."
  },
  {
    id: "testi-2",
    name: "Januka Oli",
    address: "Gorkha",
    comment: "The services and the medical attention received was top grade. The surgical procedures are affordable and handled with care."
  }
];

export const INITIAL_EVENTS: HospitalEventItem[] = [
  {
    id: "event-1",
    day: "11th",
    monthYear: "Dec 2016",
    title: "Health camp in Nuwakot",
    subtitle: "Completed 3 Days of Free Health Camp in Dupchesor Mahadevsthan, Nuwakot",
    imageUrl: "https://i.postimg.cc/DZ966vcx/Whats-App-Image-2026-05-31-at-11-44-12-PM.jpg"
  }
];

export const INITIAL_MACHINES: MachineItem[] = [
  {
    id: 'mach-1',
    title: 'High-Resolution 4D Ultrasound (USG) Machine',
    imageUrl: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=800&q=80',
    description: 'Our high-resolution 4D Ultrasound is equipped with advanced Doppler imaging technology. It provides real-time anatomical detail for obstetrics, gynecology, cardiology, and abdominal diagnostic studies.'
  },
  {
    id: 'mach-2',
    title: 'Fully Automated Hematology Analyzer',
    imageUrl: 'https://images.unsplash.com/photo-1579154204601-01588f351167?auto=format&fit=crop&w=800&q=80',
    description: 'This is our next-generation laboratory analyzer. It offers 5-part white blood cell differential counts, giving accurate CBC reports within minutes, reducing patient wait-times significantly.'
  },
  {
    id: 'mach-3',
    title: 'Digital Computed Radiography (X-Ray) System',
    imageUrl: 'https://images.unsplash.com/photo-1530497610245-94d3c16cda28?auto=format&fit=crop&w=800&q=80',
    description: 'A low-radiation digital radiography system offering crystal clear diagnostic skeletal imaging. Immediate image acquisition allows our surgeons and emergency team to assess traumas swiftly.'
  }
];

export const INITIAL_QR_CODES: QRCodeItem[] = [
  {
    id: 'qr-default-1',
    title: 'Dhading Hospital official QR (Nabil Bank Ltd Fonepay)',
    imageUrl: 'https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&w=400&q=80'
  }
];

