import React, { ComponentPropsWithoutRef,  } from "react"
import { IconType } from "react-icons/lib"


interface link  {
    label: string
    href: string
}

export interface TestimonialCardProps {
    imgSrc: string | React.ReactNode
    imgAlt: string
    description: string
    titleNumber: string
    titleText: string
}

export interface MenuItemProps {
    label: string,
    pages: NavigationMenuStructureProps[]
}

export interface NavigationMenuStructureProps {
    name: string;
    links: link []
}


export type WrittenTestimonial = {
    type: "written";
    name: string;
    description: string;
    image: string;
  };

  type VideoTestimonial = {
    type: "video";
    image: string;
    videoUrl: string;
  };

  export type TestimonialItem = WrittenTestimonial | VideoTestimonial;

  export interface PatientTestimonialMarqueeProps extends ComponentPropsWithoutRef<"div"> {
    marqueeArray: TestimonialItem[];
  }

export  interface VideoModalTriggerProps  extends ComponentPropsWithoutRef<"div"> {
    image?: string;
    children?: React.ReactNode;
    videoUrl: string;
  }

  export type ActionItem = {
    className: string;
    icon?:  string;
    label: string;
    onClick?: () => void;
    component?: React.ReactNode; // Optional field for custom components
  };


  export interface LeaderCardProps {
    image: string
    name: string
    role: string
    description: string
    onReadMore?: string
    className?: string
    onDownload?: string
  }

  export interface LeaderPageProps extends LeaderCardProps {
    customFirstHeading: string
    theirStory: string[]
    customSecondHeading: string
    secondImage: string
    secondSectionDescription: string[]
    thirdImage: string
    thirdSectionDescription: string[]
    fourthSectionDescription: string[]
    fifthSectionDescription: string
    journeyHeading:string
    videoModalForJourney: {
      image: string
      videoUrl: string
    }
  }

 export interface DownloadItem {
    name: string;
    url: string;
  }


export  interface PressRelease {
    id: string;
    date: string;
    title: string;
    type: 'innovation' | 'partnership' | 'award' | 'research';
    summary: string;
    link: string;
    content: string;
    videoPreview?: string;
    downloads?: DownloadItem[];
    pdf?: string;
    images?: string[];
  }


export interface DepartmentData {
    id: string;
    index: number;
    name: string;
    slug: string;
    heroImage: string;
    bannerImage: string;
    heroTitle: string;
    heroSubtitle: string;
    isFeatured: boolean;
    themeBgClass?: string;
    overview: {
      title: string;
      description: string[];
      whyChooseUs?: string[]; 
      additionalSections?: { 
        title: string; 
        items: string[]; 
      }[];
    };
    treatments: {
      title: string;
      items: {
        title: string;
        description: string;
      }[];
    };
    stats: {
      title: string;
      items: {
        value: string;
        label: string;
      }[];
    };
    team: {
      title: string;
      members: {
        name: string;
        role: string;
        credentials: string;
        image: string;
        specialty: string;
      }[];
    };
    facilities: {
      title: string;
      description: string;
      features: string[];
      image: string;
    };
    research: {
      title: string;
      items: {
        title: string;
        content: string;
        icon: string;
      }[];
    };
    testimonials: {
      title: string;
      items: {
        quote: string;
        author: string;
        image: string;
      }[];
    };
    cta: {
      title: string;
      subtitle: string;
      buttons: {
        text: string;
        isPrimary: boolean;
      }[];
    };
  }


export  interface Service {
    id: string
    title: string
    description: string
    icon: string
    details: string
    commonUses: string[]
}

export interface SupportServiceProps {
    heroImage: string;
    title: string;
    description: string;
    services: {
        id: string;
        icon: IconType;
        title: string;
        description: string;
        details: string;
        commonUses: string[];
    }[];
    preparationTips: string[];
    whyChoose: {
        title: string;
        items: {
            badge: string;
            title: string;
            description: string;
        }[];
    };
    faqs: {
        question: string;
        answer: string;
    }[];
    cta: {
        title: string;
        description: string;
        buttons: {
            text: string;
            variant: string;
            onClick: () => void;
        }[];
    };
}

export interface CancerTypeData {
    typeName: string;
    heroSection: {
      Image: string;
      title: string;
      description: string;
    };
    overviewSection: {
      Image: string;
      h2: string;
      paragraphs: string[];
    };
    symptomsSection: {
      h2: string;
      symptoms: {
        title: string;
        description: string;
      }[];
    };
    diagnosisSection: {
      h2: string;
      diagnosis: {
        index: string;
        h3: string;
        paragraph: string;
      }[];
      Image: string;
    };
    treatementOptionsSection: {
      h2: string;
      options: {
        h3: {
          span: string;
          copy: string;
        };
        p: string;
        Image?: string;
      }[];
    };
    prognosisSection: {
      h2: string;
      paragraph: string;
      table?: {
        headers: [string, string, string];
        rows: {
          stage: string;
          description: string;
          survival: string;
        }[];
      };
    };
  }

  export interface DoctorAvailability {
    day: string;
    time: string;
  }

  export interface Doctor {
    id: number;
    name: string;
    qualification: string;
    department: string;
    experience: string;
    image: string;
    availability: DoctorAvailability[];
    isSenior: boolean;
  }

  // types.ts
export interface DoctorPeripheralOPD {
    name: string;
    imageUrl?: string; // Can be optional if some doctors don't have images
    qualifications: string[];
    experience: string;
    specialization?: string;
  }

export interface OPD {
    id: number;
    place: string;
    hospitalName: string;
    hospitalAddress: string;
    hospitalAddressLink: string;
    doctors: DoctorPeripheralOPD[];
    day: string;
    time: string;
    district: string;
  }

  export const districts = [
    "All",
    "Ayodhya",
    "Siddharth Nagar",
    "Barhalganj",
    "Azamgarh",
    "Deoria",
    "Salempur",
    "Maharaiganj",
    "Kasiya",
    "Siwan Bihar",
    "Gopalganj Bihar"
  ];
