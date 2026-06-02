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
  MachineItem,
  MailBox,
  HospitalMailSystem,
  StaffMember
} from './types';

export const INITIAL_CATEGORIES: string[] = [
  "ORTHOPEDICS, TRAUMA & SPINE SURGERY",
  "GENERAL SURGERY",
  "DENTAL SURGERY",
  "ORTHO DENTIST",
  "ENT HEAD & NECK SURGERY",
  "PEDIATRIC SURGERY",
  "OBSTETRICS & GYNECOLOGY",
  "INTERNAL MEDICINE",
  "GASTROENTEROLOGY & HEPATOBILIARY",
  "NEPHROLOGY",
  "PEDIATRICS AND ADOLESCENT MEDICINE",
  "PSYCHIATRY",
  "DERMATOLOGY & COSMETOLOGY",
  "RADIOLOGY",
  "PATHOLOGY",
  "PHYSIOTHERAPY",
  "PLASTIC SURGERY",
  "NEUROLOGY",
  "CARDIOLOGY",
  "DERMATOLOGY",
  "PAIN CLINIC",
  "GENERAL SURGERY & UROLOGY",
  "NEURO MEDICINE",
  "ORAL & MAXILLOFACIAL SURGERY",
  "DENTAL HYGIENIST & TECHNICIAN"
];

export const INITIAL_SERVICES: Services = {
  visitTime: [
    {
      id: 'visit-1',
      title: 'OPD Visiting Hours',
      text: 'Monday - Friday: 7:00 AM - 8:00 PM\nSaturday - Sunday: 10:00 AM - 5:00 PM',
      imageUrl: 'https://i.postimg.cc/k4W5ZcdV/Screenshot-20260602-185627.jpg'
    },
    {
      id: 'visit-2',
      title: 'Emergency 24/7',
      text: 'Available round the clock for urgent medical needs',
      imageUrl: 'https://i.postimg.cc/rsQqXZZp/Screenshot-20260602-185637.jpg'
    }
  ],
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
      imageUrl: 'https://i.postimg.cc/4dGGKRrb/Screenshot-20260602-185644.jpg',
      pdfUrl: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
      text: 'Fully equipped in-patient wards with modern facilities and ICU care services'
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
      imageUrl: 'https://i.postimg.cc/fyb6Xz5W/Screenshot-20260602-185657.jpg',
      text: 'Dhading Hospital Urgent Care is open 24 hours a day, 365 days a year. Equipped with life support facilities and standby ambulances, our critical recovery room is managed by senior emergency physicians & trauma coordinators.'
    }
  ],
  labPathology: [
    {
      id: 'lab-1',
      title: 'Central Pathology Laboratory',
      pdfUrl: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
      imageUrl: 'https://i.postimg.cc/L4ffKtVG/Screenshot-20260602-184935.jpg',
      text: 'Our central pathology operates 24/7. Fully automated clinical diagnostics, state of the art immunoassay systems, hematology analyzers, and highly structured microbiology setups to ensure exact reports.\n\nPathology Department Contact:\nEmail: pathology@dhadinghospital.com.np\nPhone: +977-10-520111\n\nChairman - Pathology Department:\nEmail: chairman@dhadinghospital.com.np\nPhone: +977-9851451956'
    }
  ],
  radiology: [
    {
      id: 'rad-1',
      title: 'Digital Computed Tomography & X-Ray',
      imageUrl: 'https://i.postimg.cc/rsQqXZZp/Screenshot-20260602-185637.jpg',
      pdfUrl: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
      text: 'Advanced radiology services with digital CT and X-Ray technology for precise diagnostics'
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
    photoUrl: 'https://i.postimg.cc/zv9KFyDX/Whats-App-Image-2026-05-31-at-11-51-02-PM.jpg',
    email: 'chairman@dhadinghospital.com.np'
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
  { id: "gal-1", title: "Dhading Hospital Event", imageUrl: "https://i.postimg.cc/dZhT9K7n/Whats-App-Image-2026-05-31-at-11-44-14-PM.jpg" },
  { id: "gal-2", title: "Dhading Hospital Event", imageUrl: "https://i.postimg.cc/0KzJCq6G/Whats-App-Image-2026-05-31-at-11-44-14-PM-(1).jpg" },
  { id: "gal-3", title: "Dhading Hospital Event", imageUrl: "https://i.postimg.cc/N9JHT00P/Whats-App-Image-2026-05-31-at-11-44-14-PM-(2).jpg" },
  { id: "gal-4", title: "Dhading Hospital Event", imageUrl: "https://i.postimg.cc/G87yYppq/Whats-App-Image-2026-05-31-at-11-44-15-PM.jpg" },
  { id: "gal-5", title: "Dhading Hospital Event", imageUrl: "https://i.postimg.cc/S2TM8KKr/Whats-App-Image-2026-05-31-at-11-44-15-PM-(1).jpg" },
  { id: "gal-6", title: "Dhading Hospital Event", imageUrl: "https://i.postimg.cc/BLYKDvvC/Whats-App-Image-2026-05-31-at-11-44-16-PM.jpg" },
  { id: "gal-7", title: "Dhading Hospital Event", imageUrl: "https://i.postimg.cc/8JK6WCCm/Whats-App-Image-2026-05-31-at-11-44-16-PM-(1).jpg" },
  { id: "gal-8", title: "Dhading Hospital Event", imageUrl: "https://i.postimg.cc/0MWwmNNd/Whats-App-Image-2026-05-31-at-11-44-16-PM-(2).jpg" }
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

export const INITIAL_BOOKINGS: BookingRequest[] = [];

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
  { id: "mach-1", title: "Machine 1", imageUrl: "https://i.postimg.cc/G8McdsHW/Whats-App-Image-2026-05-31-at-10-52-55-PM.jpg", description: "Hospital medical equipment" },
  { id: "mach-2", title: "Machine 2", imageUrl: "https://i.postimg.cc/HcSpd7VP/Whats-App-Image-2026-05-31-at-10-52-55-PM-(1).jpg", description: "Hospital medical equipment" },
  { id: "mach-3", title: "Machine 3", imageUrl: "https://i.postimg.cc/474JD1NV/Whats-App-Image-2026-05-31-at-10-52-56-PM.jpg", description: "Hospital medical equipment" },
  { id: "mach-4", title: "Machine 4", imageUrl: "https://i.postimg.cc/7GPxFNYs/Whats-App-Image-2026-05-31-at-10-52-56-PM-(1).jpg", description: "Hospital medical equipment" },
  { id: "mach-5", title: "Machine 5", imageUrl: "https://i.postimg.cc/JDT1MBsm/Whats-App-Image-2026-05-31-at-10-52-56-PM-(2).jpg", description: "Hospital medical equipment" },
  { id: "mach-6", title: "Machine 6", imageUrl: "https://i.postimg.cc/478JshYR/Whats-App-Image-2026-05-31-at-10-52-57-PM.jpg", description: "Hospital medical equipment" },
  { id: "mach-7", title: "Machine 7", imageUrl: "https://i.postimg.cc/ZvCJRKNt/Whats-App-Image-2026-05-31-at-10-52-57-PM-(1).jpg", description: "Hospital medical equipment" },
  { id: "mach-8", title: "Machine 8", imageUrl: "https://i.postimg.cc/sQnVsZMR/Whats-App-Image-2026-05-31-at-10-52-57-PM-(2).jpg", description: "Hospital medical equipment" },
  { id: "mach-9", title: "Machine 9", imageUrl: "https://i.postimg.cc/64yB35Zp/Whats-App-Image-2026-05-31-at-10-52-58-PM.jpg", description: "Hospital medical equipment" },
  { id: "mach-10", title: "Machine 10", imageUrl: "https://i.postimg.cc/PvPdxrDt/Whats-App-Image-2026-05-31-at-10-52-58-PM-(1).jpg", description: "Hospital medical equipment" },
  { id: "mach-11", title: "Machine 11", imageUrl: "https://i.postimg.cc/vxcGBHn8/Whats-App-Image-2026-05-31-at-10-52-58-PM-(2).jpg", description: "Hospital medical equipment" },
  { id: "mach-12", title: "Machine 12", imageUrl: "https://i.postimg.cc/m1tTD29r/Whats-App-Image-2026-05-31-at-10-52-59-PM.jpg", description: "Hospital medical equipment" },
  { id: "mach-13", title: "Machine 13", imageUrl: "https://i.postimg.cc/MfvzTKBj/Whats-App-Image-2026-05-31-at-10-52-59-PM-(1).jpg", description: "Hospital medical equipment" },
  { id: "mach-14", title: "Machine 14", imageUrl: "https://i.postimg.cc/SjsSVVPq/Whats-App-Image-2026-05-31-at-10-52-59-PM-(2).jpg", description: "Hospital medical equipment" },
  { id: "mach-15", title: "Machine 15", imageUrl: "https://i.postimg.cc/8s5pwwYN/Whats-App-Image-2026-05-31-at-10-53-00-PM.jpg", description: "Hospital medical equipment" },
  { id: "mach-16", title: "Machine 16", imageUrl: "https://i.postimg.cc/DmZv55N7/Whats-App-Image-2026-05-31-at-10-53-00-PM-(1).jpg", description: "Hospital medical equipment" },
  { id: "mach-17", title: "Machine 17", imageUrl: "https://i.postimg.cc/xqCfggZf/Whats-App-Image-2026-05-31-at-10-53-00-PM-(2).jpg", description: "Hospital medical equipment" },
  { id: "mach-18", title: "Machine 18", imageUrl: "https://i.postimg.cc/BtVqzHWH/Whats-App-Image-2026-05-31-at-10-53-01-PM.jpg", description: "Hospital medical equipment" },
  { id: "mach-19", title: "Machine 19", imageUrl: "https://i.postimg.cc/qg5kFyfn/Whats-App-Image-2026-05-31-at-10-53-01-PM-(1).jpg", description: "Hospital medical equipment" },
  { id: "mach-20", title: "Machine 20", imageUrl: "https://i.postimg.cc/8s01YM8d/Whats-App-Image-2026-05-31-at-10-53-01-PM-(2).jpg", description: "Hospital medical equipment" },
  { id: "mach-21", title: "Machine 21", imageUrl: "https://i.postimg.cc/t7MXcW0t/Whats-App-Image-2026-05-31-at-10-53-02-PM.jpg", description: "Hospital medical equipment" },
  { id: "mach-22", title: "Machine 22", imageUrl: "https://i.postimg.cc/PPvtnJh1/Whats-App-Image-2026-05-31-at-10-53-02-PM-(1).jpg", description: "Hospital medical equipment" },
  { id: "mach-23", title: "Machine 23", imageUrl: "https://i.postimg.cc/Whq2czjG/Whats-App-Image-2026-05-31-at-10-53-03-PM.jpg", description: "Hospital medical equipment" },
  { id: "mach-24", title: "Machine 24", imageUrl: "https://i.postimg.cc/D84230FQ/Whats-App-Image-2026-05-31-at-10-53-03-PM-(1).jpg", description: "Hospital medical equipment" },
  { id: "mach-25", title: "Machine 25", imageUrl: "https://i.postimg.cc/jLnsY2Kh/Whats-App-Image-2026-05-31-at-10-53-03-PM-(2).jpg", description: "Hospital medical equipment" },
  { id: "mach-26", title: "Machine 26", imageUrl: "https://i.postimg.cc/XpBV6q3L/Whats-App-Image-2026-05-31-at-10-53-04-PM.jpg", description: "Hospital medical equipment" }
];

export const INITIAL_QR_CODES: QRCodeItem[] = [
  {
    id: 'qr-1',
    title: 'Dhading Hospital QR Code',
    imageUrl: 'https://i.postimg.cc/GtJ0YYh2/DHADING-HOSPITAL-PVT-LTD-default-terminal-Qr-4-39-5-98-1.png'
  }
];

export const INITIAL_MAIL_SYSTEM: HospitalMailSystem = {
  mailboxes: [
    {
      id: 'mb-1',
      name: 'Hospital Mailbox',
      email: 'info@dhadinghospital.com.np',
      password: 'Dhading@123',
      messages: [],
      createdAt: Date.now()
    },
    {
      id: 'mb-2',
      name: 'Chairman Mailbox',
      email: 'chairman@dhadinghospital.com.np',
      password: 'H3llo2u1',
      messages: [],
      createdAt: Date.now()
    },
    {
      id: 'mb-3',
      name: 'Reception Mailbox',
      email: 'reception@dhadinghospital.com.np',
      password: 'Dhading@123',
      messages: [],
      createdAt: Date.now()
    },
    {
      id: 'mb-4',
      name: 'Account Mailbox',
      email: 'account@dhadinghospital.com.np',
      password: 'Dhading@123',
      messages: [],
      createdAt: Date.now()
    },
    {
      id: 'mb-5',
      name: 'Pathology Mailbox',
      email: 'pathology@dhadinghospital.com.np',
      password: 'Dhading@123',
      messages: [],
      createdAt: Date.now()
    },
    {
      id: 'mb-6',
      name: 'Medical Director Mailbox',
      email: 'medicaldirector@dhadinghospital.com.np',
      password: 'Dhading@123',
      messages: [],
      createdAt: Date.now()
    }
  ],
  defaultMailboxes: {
    hospital: 'info@dhadinghospital.com.np',
    chairman: 'chairman@dhadinghospital.com.np',
    reception: 'reception@dhadinghospital.com.np',
    account: 'account@dhadinghospital.com.np',
    pathology: 'pathology@dhadinghospital.com.np',
    medicalDirector: 'medicaldirector@dhadinghospital.com.np'
  }
};

export const INITIAL_GIRLS_STAFF: StaffMember[] = [
  {
    id: 'girl-staff-1',
    name: 'Mrs. Sajina Dahal',
    position: 'Nursing Director',
    department: 'Nursing',
    photoUrl: 'https://images.unsplash.com/photo-1594824813573-24643433b96f?auto=format&fit=crop&w=400&q=80',
    bio: 'Experienced nursing director with 12+ years in healthcare management',
    phone: '+977-9851234567',
    createdAt: Date.now()
  },
  {
    id: 'girl-staff-2',
    name: 'Mrs. Dhana Pudasaini',
    position: 'Account Officer',
    department: 'Finance',
    photoUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80',
    bio: 'Expert in hospital accounting and financial management',
    phone: '+977-9851345678',
    createdAt: Date.now()
  },
  {
    id: 'girl-staff-3',
    name: 'Mrs. Ganga Humaghai',
    position: 'Nursing & Support Chief',
    department: 'Support Services',
    photoUrl: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80',
    bio: 'Chief of nursing and supportive service operations',
    phone: '+977-9851456789',
    createdAt: Date.now()
  },
  {
    id: 'girl-staff-4',
    name: 'Dr. Rupa Jha',
    position: 'Senior Gynecologist',
    department: 'Obstetrics & Gynecology',
    photoUrl: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=400&q=80',
    bio: 'Senior gynecologist with 10 years of clinical experience',
    phone: '+977-9851567890',
    createdAt: Date.now()
  }
];
