import { IconType } from "react-icons/lib";
import { AiFillYoutube } from "react-icons/ai";
import { FaFacebookSquare, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { MdOutlineAlternateEmail } from "react-icons/md";

export interface ContactLocation {
  id: string;
  label: string;
  tag: string;
  address: string;
  mapURL: string;
  directMapURL: string;
  accent: string;
  bg: string;
  text: string;
  border: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: IconType;
  description: string;
  color: string;
}

export const CONTACT_INFO = {
  hospitalName: "Synergy Superspeciality Hospital & Cancer Institute",
  email: "synergycancer1@gmail.com",
  phoneNumbers: {
    primary: "+917234006595",
    primaryFormatted: "+91 7234006595",
    secondary: "+917234006597",
    secondaryFormatted: "+91 7234006597",
    emergency: "18005706595",
    emergencyFormatted: "1800-570-6595",
    ambulance: "+917234006597",
    ambulanceFormatted: "+91-7234006597",
    admissionDesk: "+917234001617",
    admissionDeskFormatted: "+91 7234001617",
  },
  whatsapp: {
    number: "917234006595",
    url: "https://wa.me/917234006595",
  },
  socialUrls: {
    instagram: "https://www.instagram.com/synergycancergkp/",
    youtube: "https://www.youtube.com/@Synergycancer1",
    facebook: "https://www.facebook.com/synergysuperspecialityhospital",
    googleMaps: "https://maps.app.goo.gl/MXM5snovbSDPidJy5",
  },
  locations: [
    {
      id: "main-hospital",
      label: "Synergy Superspeciality Hospital & Cancer Institute",
      tag: "OPD · IPD · Surgery",
      address: "Chhatrasangh Chauraha, Gorakhpur, 273001",
      mapURL:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4606.804128672125!2d83.37676587624873!3d26.745450367257032!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399145b0d013cef1%3A0xc7d8e7bab401f8fe!2sSynergy%20Superspeciality%20Hospital%20and%20Cancer%20Institute!5e1!3m2!1sen!2sin!4v1785839951905!5m2!1sen!2sin",
      directMapURL:
        "https://www.google.com/maps/place/Synergy+Superspeciality+Hospital+and+Cancer+Institute/@26.7450524,83.3793673,17.1z/data=!4m15!1m8!3m7!1s0x399145b0d013cef1:0xc7d8e7bab401f8fe!2sSynergy+Superspeciality+Hospital+and+Cancer+Institute!8m2!3d26.7452875!4d83.3791698!10e5!16s%2Fg%2F11qg18_33b!3m5!1s0x399145b0d013cef1:0xc7d8e7bab401f8fe!8m2!3d26.7452875!4d83.3791698!16s%2Fg%2F11qg18_33b?entry=ttu&g_ep=EgoyMDI1MDQyOC4wIKXMDSoJLDEwMjExNDUzSAFQAw%3D%3D",
      accent: "synergy-blue",
      bg: "bg-synergy-blue/15",
      text: "text-synergy-blue",
      border: "border-l-synergy-blue",
    },
    {
      id: "cancer-care",
      label: "Synergy Cancer Care - Radiation Center & Day Care",
      tag: "GNFT Tower · 1st Floor",
      address: "Khajanchi Chauraha, Gorakhpur, 273001",
      mapURL:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4604.753588999132!2d83.38487609678955!3d26.796013099999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399145006280f7e9%3A0xae494a8b47b69ad3!2sSynergy%20Cancer%20Care!5e1!3m2!1sen!2sin!4v1785840069439!5m2!1sen!2sin",
      directMapURL: "https://maps.app.goo.gl/MXM5snovbSDPidJy5",
      accent: "synergy-pink",
      bg: "bg-synergy-pink/15",
      text: "text-synergy-pink",
      border: "border-l-synergy-pink",
    },
  ] as ContactLocation[],
};

export const SOCIAL_LINKS: SocialLink[] = [
  {
    name: "Instagram",
    url: CONTACT_INFO.socialUrls.instagram,
    icon: FaInstagram,
    description: "Behind the scenes, projects & creative inspiration.",
    color: "#E1306C",
  },
  {
    name: "YouTube",
    url: CONTACT_INFO.socialUrls.youtube,
    icon: AiFillYoutube,
    description: "Case studies, tutorials & creative showcases.",
    color: "#FF0000",
  },
  {
    name: "Facebook",
    url: CONTACT_INFO.socialUrls.facebook,
    icon: FaFacebookSquare,
    description: "Follow our community and latest announcements.",
    color: "#1877F2",
  },
  {
    name: "WhatsApp",
    url: CONTACT_INFO.whatsapp.url,
    icon: FaWhatsapp,
    description: "Chat with our team for a quick consultation.",
    color: "#25D366",
  },
  {
    name: "Email",
    url: `mailto:${CONTACT_INFO.email}`,
    icon: MdOutlineAlternateEmail,
    description: "Reach us for business enquiries and collaborations.",
    color: "#777777",
  },
];
