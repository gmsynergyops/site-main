import { Doctor } from "@/types";

  // Sample doctor data
export  const doctors: Doctor[] = [
    {
        id: 12,
        name: "Dr. Alok Tiwari",
        qualification: "Chief Surgical Oncologist, MBBS (Gold Medalist), MS (Gen Surgery) KGMU LucknowDNB, Dip MAS daVinciXi Certified Robotic Onco Surgeon, Surgical Oncology, ESSO (Breast Oncoplasty) FMAS, FALS (Colorectal)",
        department: "Surgical Oncology",
        experience: "14+",
        image: "/doctors/dr-alok-tiwari-1.jpeg",
        availability: [
          { day: "Mon", time: "9:00 AM - 5:00 PM" },
          { day: "Tue", time: "9:00 AM - 5:00 PM" },
          { day: "Wed", time: "9:00 AM - 5:00 PM" },
          { day: "Thu", time: "9:00 AM - 5:00 PM" },
          { day: "Fri", time: "9:00 AM - 5:00 PM" }
        ],
        isSenior: true
      },
      {
        id: 13,
        name: "Dr. Saurabh Mishra",
        qualification: "Medical Oncologist & Haemat Oncologist, Director Synergy Super Speciality Hospital & Cancer Institue, MBBS (KGMU), MD (internal Medicine) ECMO DNB",
        department: "Medical Oncology",
        experience: "14+",
        image: "/doctors/dr-saurabh-mishra.webp",
        availability: [
          { day: "Mon", time: "9:00 AM - 5:00 PM" },
          { day: "Tue", time: "9:00 AM - 5:00 PM" },
          { day: "Wed", time: "9:00 AM - 5:00 PM" },
          { day: "Thu", time: "9:00 AM - 5:00 PM" },
          { day: "Fri", time: "9:00 AM - 5:00 PM" },
          { day: "Sat", time: "9:00 AM - 5:00 PM" }
          
        ],
        isSenior: true
      },
      {
        id: 14,
        name: "Dr. Anjali Jain",
        qualification: "MBBS, DGO, DNB (Obstetrics & Gynecology) FAMS, FMAS, Fellowship in Gynae oncology, FARIS, Specialization: Oncology & Minimally invasive, Gynecological Surgery",
        department: "Gynecology & Obstetrics",
        experience: "14+",
        image: "/doctors/dr-anjali-jain-1.jpeg",
        availability: [
          { day: "Mon", time: "9:00 AM - 5:00 PM" },
          { day: "Tue", time: "9:00 AM - 5:00 PM" },
          { day: "Wed", time: "9:00 AM - 5:00 PM" },
          { day: "Thu", time: "9:00 AM - 5:00 PM" },
          { day: "Fri", time: "9:00 AM - 5:00 PM" },
          { day: "Sat", time: "9:00 AM - 5:00 PM" }
        ],
        isSenior: true
      },
      {
        id: 9,
        name: "Dr. Harshit Mishra",
        qualification: "M.B.B.S MD,PDAF(Neuroanesthesia),Ex Seniorfellow Resident SGPGI LKO",
        department: "Anesthesia",
        experience: "8 Years,( 3Years as a Resident & 5 years As a Consultant)",
        image: "/doctors/dr-harshit-mishra.webp",
        availability: [
          { day: "Mon", time: "9:00 AM - 5:00 PM" },
          { day: "Tue", time: "9:00 AM - 5:00 PM" },
          { day: "Wed", time: "9:00 AM - 5:00 PM" },
          { day: "Thu", time: "9:00 AM - 5:00 PM" },
          { day: "Fri", time: "9:00 AM - 5:00 PM" },
          { day: "Sat", time: "9:00 AM - 5:00 PM" }
        ],
        isSenior: false
      },
      {
          id: 6,
          name: "Dr. Vishrut Bharti",
          qualification: "M.B.B.S M.S (General Surgery) MCH (Urologist) Gold Medalist",
          department: "Urology",
          experience: "12 years",
          image: "/doctors/dr-vishrut-bharti.webp",
          availability: [
          { day: "Mon", time: "9:00 AM - 5:00 PM" },
          { day: "Tue", time: "9:00 AM - 5:00 PM" },
          { day: "Wed", time: "9:00 AM - 5:00 PM" },
          { day: "Thu", time: "9:00 AM - 5:00 PM" },
          { day: "Fri", time: "9:00 AM - 5:00 PM" },
          { day: "Sat", time: "9:00 AM - 5:00 PM" }
          ],
          isSenior: false
        },
            {
          id: 15,
          name: "Dr. Tarik Anwar",
          qualification: "BDS, MDS MAXILLOFACIAL SURGEON, FELLOSHIP IN HEAD & NECK ONCOLOGY",
          department: "Head & Neck",
          experience: "1.5 years",
          image: "/doctors/dr-tarik-anwar.png",
          availability: [
          { day: "Mon", time: "9:00 AM - 5:00 PM" },
          { day: "Tue", time: "9:00 AM - 5:00 PM" },
          { day: "Wed", time: "9:00 AM - 5:00 PM" },
          { day: "Thu", time: "9:00 AM - 5:00 PM" },
          { day: "Fri", time: "9:00 AM - 5:00 PM" },
          { day: "Sat", time: "9:00 AM - 5:00 PM" }
          ],
          isSenior: false
        },
        {
          id: 16,
          name: "Dr. Vishal Mishra",
          qualification: "BDS, MDS, MDS MAXILLOFACIAL SURGEON, FELLOSHIP IN HEAD & NECK",
          department: "Head & Neck",
          experience: "1 year",
          image: "/doctors/dr-vishal-mishra.png",
          availability: [
          { day: "Mon", time: "9:00 AM - 5:00 PM" },
          { day: "Tue", time: "9:00 AM - 5:00 PM" },
          { day: "Wed", time: "9:00 AM - 5:00 PM" },
          { day: "Thu", time: "9:00 AM - 5:00 PM" },
          { day: "Fri", time: "9:00 AM - 5:00 PM" },
          { day: "Sat", time: "9:00 AM - 5:00 PM" }
          ],
          isSenior: false
        },
    {
      id: 2,
      name: "Dr. Anil Srivastava",
      qualification: "M.B.B.S. MS ORTHO",
      department: "Orthopedics",
      experience: "10 years",
      image: "/doctors/dr-anil-srivastava.webp",
      availability: [
          { day: "Mon", time: "9:00 AM - 5:00 PM" },
          { day: "Tue", time: "9:00 AM - 5:00 PM" },
          { day: "Wed", time: "9:00 AM - 5:00 PM" },
          { day: "Thu", time: "9:00 AM - 5:00 PM" },
          { day: "Fri", time: "9:00 AM - 5:00 PM" },
          { day: "Sat", time: "9:00 AM - 5:00 PM" }
      ],
      isSenior: false
    },
    {
      id: 3,
      name: "Dr. Tripurari Pandey",
      qualification: "M.B.B.S, MCH Neuro Surgeon",
      department: "Neurology",
      experience: "10 years",
      image: "/doctors/dr-tripurari-pandey.webp",
      availability: [
          { day: "Mon", time: "9:00 AM - 5:00 PM" },
          { day: "Tue", time: "9:00 AM - 5:00 PM" },
          { day: "Wed", time: "9:00 AM - 5:00 PM" },
          { day: "Thu", time: "9:00 AM - 5:00 PM" },
          { day: "Fri", time: "9:00 AM - 5:00 PM" },
          { day: "Sat", time: "9:00 AM - 5:00 PM" }
      ],
      isSenior: false
    },
    {
      id: 4,
      name: "Dr. Anurag Singh",
      qualification: "M.B.B.S, MS, MCH Neuro Surgeon",
      department: "Neurology",
      experience: "10 years",
      image: "/doctors/dr-anurag-singh.webp",
      availability: [
          { day: "Mon", time: "9:00 AM - 5:00 PM" },
          { day: "Tue", time: "9:00 AM - 5:00 PM" },
          { day: "Wed", time: "9:00 AM - 5:00 PM" },
          { day: "Thu", time: "9:00 AM - 5:00 PM" },
          { day: "Fri", time: "9:00 AM - 5:00 PM" },
          { day: "Sat", time: "9:00 AM - 5:00 PM" }
      ],
      isSenior: false
    },
    {
      id: 5,
      name: "Dr. Rohit Kumar Singh",
      qualification: "M.B.B.S, M.S, Mch. Urology, Davinci certified Robotic Uro Surgeon",
      department: "Urology",
      experience: "12 years",
      image: "/doctors/dr-rohit-kumar-singh.webp",
      availability: [
          { day: "Mon", time: "9:00 AM - 5:00 PM" },
          { day: "Tue", time: "9:00 AM - 5:00 PM" },
          { day: "Wed", time: "9:00 AM - 5:00 PM" },
          { day: "Thu", time: "9:00 AM - 5:00 PM" },
          { day: "Fri", time: "9:00 AM - 5:00 PM" },
          { day: "Sat", time: "9:00 AM - 5:00 PM" }
      ],
      isSenior: false
    },

    {
      id: 10,
      name: "Dr. Amritansh Pandey",
      qualification: "M.B.B.S, MD-Anesthesia",
      department: "Anesthesia ",
      experience: "10 years",
      image: "/doctors/dr-amritansh-pandey-1.jpeg",
      availability: [
          { day: "Mon", time: "9:00 AM - 5:00 PM" },
          { day: "Tue", time: "9:00 AM - 5:00 PM" },
          { day: "Wed", time: "9:00 AM - 5:00 PM" },
          { day: "Thu", time: "9:00 AM - 5:00 PM" },
          { day: "Fri", time: "9:00 AM - 5:00 PM" },
          { day: "Sat", time: "9:00 AM - 5:00 PM" }
      ],
      isSenior: false
    },
    {
      id: 11,
      name: "Dr. Vijay Pandey",
      qualification: "MBBS, MD ( General Physician) , GENERAL MEDICINE",
      department: "General Physician",
      experience: "30 years",
      image: "/doctors/dr-vijay-pandey.png",
      availability: [
          { day: "Mon", time: "9:00 AM - 5:00 PM" },
          { day: "Tue", time: "9:00 AM - 5:00 PM" },
          { day: "Wed", time: "9:00 AM - 5:00 PM" },
          { day: "Thu", time: "9:00 AM - 5:00 PM" },
          { day: "Fri", time: "9:00 AM - 5:00 PM" },
          { day: "Sat", time: "9:00 AM - 5:00 PM" }
      ],
      isSenior: true
    },

   
    {
      id: 18,
      name: "Dr. D.P. Singh",
      qualification: "M.B.B.S, MS GENERAL SURGERY, DEPARTMENT OF GI SURGERY",
      department: "General Surgery",
      experience: "16 years",
      image: "/doctors/dr-dp-singh.webp",
      availability: [
          { day: "Mon", time: "9:00 AM - 5:00 PM" },
          { day: "Tue", time: "9:00 AM - 5:00 PM" },
          { day: "Wed", time: "9:00 AM - 5:00 PM" },
          { day: "Thu", time: "9:00 AM - 5:00 PM" },
          { day: "Fri", time: "9:00 AM - 5:00 PM" },
          { day: "Sat", time: "9:00 AM - 5:00 PM" }
      ],
      isSenior: true
    },
    {
      id: 19,
      name: "Dr. Anindya Biswas",
      qualification: "MBBS, DNB,DrNB(NEFROLOGY), DEPARTMENT OF NEFROLOGY",
      department: "Nephrology",
      experience: "15+",
      image: "/doctors/dr-anindya-biswas.webp",
      availability: [
          { day: "Mon", time: "9:00 AM - 5:00 PM" },
          { day: "Tue", time: "9:00 AM - 5:00 PM" },
          { day: "Wed", time: "9:00 AM - 5:00 PM" },
          { day: "Thu", time: "9:00 AM - 5:00 PM" },
          { day: "Fri", time: "9:00 AM - 5:00 PM" },
          { day: "Sat", time: "9:00 AM - 5:00 PM" }
      ],
      isSenior: true
    },

    {
      id: 20,
      name: "Dr Vineeta Singh",
      qualification: "MBBS , MD (Pediatrics) Fellowship Pediatric hematology and oncology , IMS BHU, TMC GUWAHATI" ,
      department: "Medical Oncology & Hematology-Oncology",
      experience: "15+",
      image: "/doctors/dr-vineeta-singh.webp",
      availability: [
          { day: "Mon", time: "9:00 AM - 5:00 PM" },
          { day: "Tue", time: "9:00 AM - 5:00 PM" },
          { day: "Wed", time: "9:00 AM - 5:00 PM" },
          { day: "Thu", time: "9:00 AM - 5:00 PM" },
          { day: "Fri", time: "9:00 AM - 5:00 PM" },
          { day: "Sat", time: "9:00 AM - 5:00 PM" }
      ],
      isSenior: true
    },

{
      id: 21,
      name: "Dr. Shashank Srivastava",
      qualification: "MBBS , MS (Ortho), JIPMER, Orthopedic, Joint and Nerve Specialist and Surgeon" ,
      department: "Ortho",
      experience: "5+",
      image: "/doctors/dr-shashank-srivastava.webp",
      availability: [
          { day: "Mon", time: "9:00 AM - 5:00 PM" },
          { day: "Tue", time: "9:00 AM - 5:00 PM" },
          { day: "Wed", time: "9:00 AM - 5:00 PM" },
          { day: "Thu", time: "9:00 AM - 5:00 PM" },
          { day: "Fri", time: "9:00 AM - 5:00 PM" },
          { day: "Sat", time: "9:00 AM - 5:00 PM" }
      ],
      isSenior: true
    },
  ]
