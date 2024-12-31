// Description: Data for the visualization
// All x, y, radius values are percentages of the width and height of it's parent container
// Ex. x: 0, y: 0, radius: 0.25 would place the circle in the center of the parent container with a radius of 25% of the parent container
// Ex. x: 0.5, y: 0.5, radius: 0.25 would place the circle in the bottom right of the parent container with a radius of 25% of the parent container

const data = {

  circles: [
      {
          id: "it",
          parent: "global",
          title: "IT Act & Associated Framework",
          color: "#1da8f0",
          x: -0.25,
          y: -0.1,
          radius: 0.25,
          boxes: [
            {
              "id": "it1",
              "x": -0.35,
              "y": -0.35,
            },
            {
              "id": "it2",
              "x": 0,
              "y": 0.1,
            },
            {
              "id": "it3",
              "x": -0.6,
              "y": -0.1,
            },
            {
              "id": "it4",
              "x": -0.45,
              "y": 0.27,
            },
            {
              "id": "it5",
              "x": 0.3,
              "y": -0.27,
            },
            {
              "id": "it6",
              "x": -0.2,
              "y": 0.55,
            },
            {
              "id": "it7",
              "x": 0.15,
              "y": 0.45,
            },
            {
              "id": "it8",
              "x": 0.65,
              "y": 0.3,
            }
          ]
      },
      {
          id: "agriculture",
          title: "Agriculture",
          color: "#0fa689",
          x: 0.2,
          y: -0.2,
          radius: 0.25,
          boxes: [
            {
              "id": "agriculture1",
              "x": -0.45,
              "y": -0.35,
            },
            {
              "id": "agriculture2",
              "x": 0.3,
              "y": 0,
            }
          ]
      },
      {
          id: "medicine",
          title: "Medicine",
          color: "#14cdd4",
          x: 0.07,
          y: -0.1,
          radius: 0.22,
          boxes: [
            {
              "id": "health1",
              "x": -0.45,
              "y": -0.23,
            },
            {
              "id": "health2",
              "x": -0.75,
              "y": 0.15,
            },
            {
              "id": "health3",
              "x": -0.65,
              "y": 0.4,
            },
            {
              "id": "health4",
              "x": -0.45,
              "y": 0.65,
            },
            {
              "id": "health5",
              "x": -0.1,
              "y": 0.2,
            },
            {
              "id": "health6",
              "x": 0.7,
              "y": -0.2,
            }
          ]
      },
      {
        id: "data",
        title: "Data",
        color: "#cee741",
        x: -0.08,
        y: 0,
        radius: 0.25,
        boxes: [
          {
            "id": "data1",
            "x": -0.15,
            "y": -0.27,
          },
          {
            "id": "data2",
            "x": 0.2,
            "y": -0.2,            
          },
          {
            "id": "data3",
            "x": -0.22,
            "y": 0.2,
          },
          {
            "id": "data4",
            "x": -0.1,
            "y": 0.32,
          },
          {
            "id": "data5",
            "x": 0.5,
            "y": 0.2,
          },
        ]
    },
    {
      id: "geospatial",
      title: "Geospatial Data",
      color: "#cee741",
      x: -0.1,
      y: 0.03,
      radius: 0.08,
      boxes: [
      ]
    },
    {
      id: "education",
      title: "Education",
      color: "#414bb2",
      x: 0.22,
      y: -0.05,
      radius: 0.27,
      boxes: [
        {
          "id": "education1",
          "x": 0.45,
          "y": 0,
        },
        {
          "id": "education2",
          "x": -0.2,
          "y": 0,
        },
        {
          "id": "education3",
          "x": 0.2,
          "y": 0.2,
        },
        {
          "id": "education4",
          "x": -0.4,
          "y": 0.3,
        },
        {
          "id": "education5",
          "x": -0.2,
          "y": 0.6,
        },
        {
          "id": "education6",
          "x": 0.4,
          "y": 0.55,
        },
        {
          "id": "education7",
          "x": 0,
          "y": 0.9,
        }
      ]
    },
    {
      id: "ai",
      title: "AI",
      color: "#652cb3",
      x: 0.35,
      y: -0.09,
      radius: 0.1,
      boxes: [
        {
          "id": "ai1",
          "x": -0.45,
          "y": 0.2,
        },
        {
          "id": "ai2",
          "x": 0.5,
          "y": 0,
        }
      ]
    },
    {
      id: "broadcasting_telecom",
      title: "Boradcasting & Telecommunication",
      color: "#db6bee",
      x: 0.22,
      y: 0.17,
      radius: 0.25,
      boxes: [
        {
          "id": "broadcast1",
          "x": -0.82,
          "y": -0.1,
        },
        {
          "id": "broadcast2",
          "x": 0,
          "y": 0.2,
        },
        {
          "id": "broadcast3",
          "x": 0.45,
          "y": -0.27,
        },
        {
          "id": "broadcast4",
          "x": 0.45,
          "y": 0.27,
        },
        {
          "id": "broadcast5",
          "x": 0,
          "y": -0.27,
        }
      ]
    },
    {
      id: "finance",
      title: "Finance",
      color: "#f7b5b5",
      x: 0.05,
      y: 0.12,
      radius: 0.2,
      boxes: [
        {
          "id": "finance1",
          "x": -0.55,
          "y": -0.5,
        },
        {
          "id": "finance2",
          "x": -0.1,
          "y": -0.4,
        },
        {
          "id": "finance3",
          "x": -0.3,
          "y": -0.13,
        },
        {
          "id": "finance4",
          "x": 0.35,
          "y": -0.1,
        },
        {
          "id": "finance5",
          "x": -0.55,
          "y": 0.08,
        }
      ]
    },
    {
      id: "cybersecurity",
      title: "Cybersecurity",
      color: "#f14725",
      x: 0.07,
      y: 0.25,
      radius: 0.25,
      boxes: [
        {
          "id": "cyber1",
          "x": -0.2,
          "y": -0.4,
        },
        {
          "id": "cyber2",
          "x": -0.7,
          "y": -0,
        },
        {
          "id": "cyber3",
          "x": -0.2,
          "y": 0.25,
        },
        {
          "id": "cyber4",
          "x": -0.5,
          "y": 0.5,
        },
        {
          "id": "cyber5",
          "x": 0,
          "y": 0.8,
        },
      ]
    },
    {
      id: "transport_aiviation",
      title: "Transport & Aviation",
      color: "#fef445",
      x: -0.2,
      y: 0.1,
      radius: 0.15,
      boxes: [
        {
          "id": "transport1",
          "x": -0.45,
          "y": -0.27,
        },
        {
          "id": "transport2",
          "x": 0,
          "y": 0.2,
        },
        {
          "id": "transport3",
          "x": 0.45,
          "y": -0.27,
        },
        {
          "id": "transport4",
          "x": 0.45,
          "y": 0.27,
        }
      ]
    },
    {
      id: "gig_work",
      title: "Gig Work",
      title_low: true,
      color: "#fac712",
      x: -0.17,
      y: 0.13,
      radius: 0.11,
      boxes: [
      ]
    },
    {
      id: "labour",
      title: "Labour & Social Welfare",
      title_low: true,
      color: "#fac712",
      x: -0.17,
      y: 0.165,
      radius: 0.18,
      boxes: [
      ]
    },
    {
      id: "ecommerce",
      title: "E-Commerce",
      color: "#ed5850",
      x: -0.11,
      y: 0.32,
      radius: 0.12,
      boxes: [
        {
          "id": "ecommerce1",
          "x": 0.45,
          "y": -0.27,
        },
        {
          "id": "ecommerce2",
          "x": -0.45,
          "y": -0.27,
        },
        {
          "id": "ecommerce3",
          "x": 0,
          "y": 0.2,
        }
      ]
    },
  ],
  lines: [
      {
          source: "it1",
          target: "ag1"
      },
      {
          source: "it2",
          target: "ag2"
      }
  ],

  documents: [
      {
        "id": "it1",
        "title": "Information Technology (Procedure and Safeguards for Blocking Access of Information by Public) Rules, 2009",
        "link": "https://www.meity.gov.in/writereaddata/files/Information%20Technology%20%28%20Procedure%20and%20safeguards%20for%20blocking%20for%20access%20of%20information%20by%20public%29%20Rules%2C%202009.pdf",
        "type": "Rules",
        "description": "Specifies the process by which the government can block public access to online information in the interest of national security, public order, and other specified reasons.",
        "initial_year_of_publication": "2009",
      },
      {
        "id": "it2",
        "title": "Information Technology Act, 2000",
        "link": "https://www.indiacode.nic.in/bitstream/123456789/13116/1/it_act_2000_updated.pdf",
        "type": "Legislation",
        "description": "An Act designed to regulate e-commerce transactions and cybercrime offenses. It includes provisions for using digital signatures to ensure the security and authenticity of electronic documents.",
        "initial_year_of_publication": "2000",
      },
      {
        "id": "it3",
        "title": "Information Technology (Intermediary Guidelines and Digital Media Ethics Code) Rules, 2021",
        "link": "https://mib.gov.in/sites/default/files/IT%28Intermediary%20Guidelines%20and%20Digital%20Media%20Ethics%20Code%29%20Rules%2C%202021%20English.pdf",
        "type": "Rules",
        "description": "Guidelines for digital intermediaries and social media platforms to regulate content, privacy, and grievance redressal in compliance with Indian laws.",
        "initial_year_of_publication": "2021",
      },
      {
        "id": "it4",
        "title": "Information Technology (The Indian Computer Emergency Response Team and Manner of Performing Functions and Duties) Rules, 2013",
        "link": "https://www.cert-in.org.in/PDF/G.S.R_20(E).pdf",
        "type": "Rules",
        "description": "Defines the roles and responsibilities of the Indian Computer Emergency Response Team (CERT-In)",
        "initial_year_of_publication": "2013",
      },
      {
        "id": "it5",
        "title": "Information Technology (Preservation and Retention of Information by Intermediaries Providing Digital Locker Facilities) Rules, 2016",
        "link": "https://www.meity.gov.in/writereaddata/files/Gazzette%20noti%20Locker.pdf",
        "type": "Rules",
        "description": "Requires intermediaries offering digital locker services to preserve user data, including records of access and usage, for a specified period to ensure data security, user privacy, and compliance with regulatory guidelines.",
        "initial_year_of_publication": "2016",
      },
      {
        "id": "it6",
        "title": "Cyber Regulations Appellate Tribunal (Procedure) Rules, 2000",
        "link": "https://www.meity.gov.in/content/notification-rules-cyber-regulations-appellate-tribunal",
        "type": "Rules",
        "description": "Governs presentation, procedure, and scrutiny of aplications to the CAT",
        "initial_year_of_publication": "2000",
      },
      {
        "id": "it7",
        "title": "Information Technology (Certifying Authorities) Rules, 2000",
        "link": "https://www.meity.gov.in/writereaddata/files/Information%20Technology%20%28Certifying%20Authority%29.pdf",
        "type": "Rules",
        "description": "Rules governing the certification of digital signatures and activities of certifying authorities under the IT Act, ensuring the authenticity and integrity of digital documents.",
        "initial_year_of_publication": "2000",
      },
      {
        "id": "it8",
        "title": "IT (Reasonable Security Practices and Procedures and Sensitive Personal Data or Information) Rules, 2011",
        "link": "https://meity.gov.in/writereaddata/files/GSR313E_10511%281%29_0.pdf",
        "type": "Rules",
        "description": "Rules governing how sensitive personal data or information (SPDI) should be handled by organizations with a focus on secure data storage and consent for data sharing.",
        "initial_year_of_publication": "2011",
      },
      {
        "id": "data1",
        "title": "Digital Personal Data Protection Act",
        "link": "https://www.meity.gov.in/writereaddata/files/Digital%20Personal%20Data%20Protection%20Act%202023.pdf",
        "type": "Legislation",
        "description": "The DPDPA focuses on protecting personal data in the digital ecosystem, specifying rights of individuals, duties of data fiduciaries, and ensuring consent-based data use.",
        "initial_year_of_publication": "2023",
      },
      {
        "id": "data2",
        "title": "Data Empowerment and Protection Architecture (DEPA)",
        "link": "https://www.niti.gov.in/sites/default/files/2023-03/Data-Empowerment-and-Protection-Architecture-A-Secure-Consent-Based.pdf",
        "type": "Framework",
        "description": "Improves data sharing in financial services, health, and telecom sectors by empowering individuals to manage and consent to their data usage through secure platforms.",
        "initial_year_of_publication": "2020",
      },
      {
        "id": "data3",
        "title": "National Geospatial Policy 2022",
        "link": "https://dst.gov.in/sites/default/files/National%20Geospatial%20Policy.pdf",
        "type": "Policy",
        "description": "Policy implemented by the Indian government to liberalize access to geospatial data, encouraging the development and use of spatial data across sectors",
        "initial_year_of_publication": "2022",
      },
      {
        "id": "data4",
        "title": "Geospatial Data Guidelines, 2021",
        "link": "https://dst.gov.in/sites/default/files/Final%20Approved%20Guidelines%20on%20Geospatial%20Data.pdf",
        "type": "Guideline",
        "description": "Guidelines for the gathering, acquisition, and utilization of geospatial data and mapping activities.",
        "initial_year_of_publication": "2021",
      },
      {
        "id": "data5",
        "title": "National Data Sharing and Accessibility Policy, 2012",
        "link": "https://dst.gov.in/national-data-sharing-and-accessibility-policy-0",
        "type": "Policy",
        "description": "This policy promotes data sharing and accessibility within the government, enabling a framework for transparency and research use of data across sectors.",
        "initial_year_of_publication": "2012",
      },
      {
        "id": "health1",
        "title": "Ayushman Bharat Digital Mission",
        "link": "https://abdm.gov.in/",
        "type": "Policy",
        "description": "A health-focused initiative under Digital India, creating a national digital health ecosystem by ensuring the availability of digital health records.",
        "initial_year_of_publication": "2021"
      },
      {
        "id": "health2",
        "title": "Electronic Health Record Standards for India, 2016",
        "link": "https://esanjeevani.mohfw.gov.in/assets/guidelines/ehr_guidlines.pdf",
        "type": "Standards",
        "description": "Lays down principles in relation to protection, privacy, disclosure and preservation of Protected Health Information ('PHI') and Electronic Protected Health Information ('ePHI').",
        "initial_year_of_publication": "2016"
      },
      {
        "id": "health3",
        "title": "Electronic Health Records (EHR) Standards for India (2016)",
        "link": "https://esanjeevani.mohfw.gov.in/assets/guidelines/ehr_guidlines.pdf",
        "type": "Circular",
        "description": "Circular by the Ministry of Health and Family Welfare aimed at creating a uniform, standards-based system for the collection, storage, and exchange of patient health data across healthcare facilities.",
        "initial_year_of_publication": "2016"
      },
      {
        "id": "health4",
        "title": "Digital Information Security in Healthcare Act (DISHA Act), 2017",
        "link": "https://www.estartindia.com/knowledge-hub/blog/digital-information-security-in-healthcare-act",
        "type": "Legislation",
        "description": "Act to ensure data privacy, confidentiality, reliability and security of digital health data.",
        "initial_year_of_publication": "2017"
      },
      {
        "id": "health5",
        "title": "Telemedicine Practice Guidelines, 2020",
        "link": "https://esanjeevani.mohfw.gov.in/assets/guidelines/Telemedicine_Practice_Guidelines.pdf",
        "type": "Guideline",
        "description": "Legal framework for telemedicine services in India, allowing doctors to consult and treat patients via digital platforms.",
        "initial_year_of_publication": "2020"
      },
      {
        "id": "health6",
        "title": "National e-Governance Plan (NeGP), 2006",
        "link": "https://www.meity.gov.in/divisions/national-e-governance-plan",
        "type": "Policy",
        "description": "Streamlines public service delivery via digital platforms, with a focus on health, education, and agriculture services.",
        "initial_year_of_publication": "2006"
      },
      {
        "id": "agriculture1",
        "title": "Digital Agriculture Mission, 2024",
        "link": "https://agriwelfare.gov.in/en/DigiAgriDiv",
        "type": "Policy",
        "description": "Aims to establish a comprehensive farmer-centric digital and space-tech ecosystem to enhance transparency and efficiency in the execution of government programs while providing crucial support for evidence-based policy making for farmers’ welfare.",
        "initial_year_of_publication": "2024"
      },
      {
        "id": "agriculture2",
        "title": "Digital Agriculture Mission Guidelines",
        "link": "https://agriwelfare.gov.in/sites/default/files/FINAL_Guidelines_DAM_23_9_24.pdf",
        "type": "Guideline",
        "description": "Operational guidelines outlining the Digital Agriculture Mission, AgriStack, Krishi Digital Support System, National Soil Mapping Program, Digital General Crop Estimation Survey, IT initiative support and other details regarding implementation of AgriTech.",
        "initial_year_of_publication": "2024"
      },
      {
        "id": "ai1",
        "title": "AI for All",
        "link": "https://ai-for-all.in/",
        "type": "Policy",
        "description": "AI For All is a self-learning online program designed to raise public awareness about Artificial Intelligence.",
        "initial_year_of_publication": "2021"
      },
      {
        "id": "ai2",
        "title": "India AI Mission",
        "link": "https://indiaai.gov.in/",
        "type": "Policy",
        "description": "The IndiaAI Mission aims to build a robust AI ecosystem by enhancing computing capabilities, improving data quality, fostering innovation, and supporting ethical AI practices. 7 Pillars: IndiaAI Compute Capacity, IndiaAI Innovation Centre, IndiaAI Datasets Platform, IndiaAI Application Development Initiative, IndiaAI FutureSkills, IndiaAI Startup Financing, Safe & Trusted AI.",
        "initial_year_of_publication": "2024"
      },
      {
        "id": "education1",
        "title": "PM eVIDYA",
        "link": "https://pmevidya.education.gov.in/",
        "type": "Policy",
        "description": "An initiative under the Atma Nirbhar Bharat program that integrates all efforts related to digital education. It includes DIKSHA, one nation-one digital platform, radio podcasts, and TV channels for classes 1 to 12 to ensure access to quality digital education across India.",
        "initial_year_of_publication": "2020"
      },
      {
        "id": "education2",
        "title": "National Education Policy (NEP) 2020",
        "link": "https://www.education.gov.in/sites/upload_files/mhrd/files/NEP_Final_English_0.pdf",
        "type": "Policy",
        "description": "The NEP 2020 emphasizes the integration of technology in education through the establishment of a National Educational Technology Forum (NETF). It promotes digital infrastructure, online teaching, digital content creation, and the use of technology for better governance and data management in educational institutions.",
        "initial_year_of_publication": "2020"
      },
      {
        "id": "education3",
        "title": "DIKSHA (Digital Infrastructure for Knowledge Sharing)",
        "link": "http://diksha.gov.in/",
        "type": "Infrastructure",
        "description": "A national platform launched by the Ministry of Education for teachers and students to access e-learning resources. It provides digital content, teacher training, and assessment tools, promoting the use of technology in classrooms.",
        "initial_year_of_publication": "2017"
      },
      {
        "id": "education4",
        "title": "Pradhan Mantri Gramin Digital Saksharta Abhiyan (PMGDISHA)",
        "link": "https://www.pmgdisha.in/",
        "type": "Policy",
        "description": "Digital literacy initiative aiming to make six crore people in rural India digitally literate by teaching them how to use digital services.",
        "initial_year_of_publication": "2017"
      },
      {
        "id": "education5",
        "title": "SWAYAM",
        "link": "https://swayam.gov.in/",
        "type": "Policy, Infrastructure",
        "description": "Government platforms for Massive Open Online Courses (MOOCs) to provide affordable, quality education to all, including underserved populations.",
        "initial_year_of_publication": "2024"
      },
      {
        "id": "education6",
        "title": "ePathshala",
        "link": "https://epathshala.nic.in/",
        "type": "Policy, Infrastructure",
        "description": "A joint initiative by NCERT and Ministry of Education providing e-books, audio-visual resources, and educational materials in multiple languages to students, teachers, and parents, aiming to enhance digital learning.",
        "initial_year_of_publication": "2015"
      },
      {
        "id": "education7",
        "title": "SWAYAM PRABHA",
        "link": "https://swayamprabha.gov.in/",
        "type": "Infrastructure",
        "description": "SWAYAM PRABHA runs DTH channels to broadcast educational content.",
        "initial_year_of_publication": "2017"
      },
      {
        "id": "transport1",
        "title": "Digital Sky Policy",
        "link": "https://digitalsky.dgca.gov.in/",
        "type": "Policy",
        "description": "A policy framework regulating the use of drones in India, emphasizing registration, permissions, and safety protocols for unmanned aerial systems (UAS).",
        "initial_year_of_publication": "2018"
      },
      {
        "id": "transport2",
        "title": "Motor Vehicle Aggregator Guidelines, 2020",
        "link": "https://morth.nic.in/sites/default/files/notifications_document/Motor%20Vehicle%20Aggregators27112020150046.pdf",
        "type": "Guideline",
        "description": "Regulates transport aggregators, regulation of fares, compliances by vehicles, apps and websites, ride-sharing, safety measures and ride cancellations including data sharing.",
        "initial_year_of_publication": "2020"
      },
      {
        "id": "transport3",
        "title": "Code on Social Security, 2020",
        "link": "https://labour.gov.in/sites/default/files/ss_code_as_introduced_in_lok_sabha.pdf",
        "type": "Legislation",
        "description": "Creates a third category (outside of employees and contract workers) to encompass gig work and platform-based work and extends social benefits to these gig workers.",
        "initial_year_of_publication": "2020"
      },
      {
        "id": "transport4",
        "title": "e-SHRAM",
        "link": "https://eshram.gov.in/",
        "type": "Infrastructure",
        "description": "A platform for the registration of unorganized workers, helping them access government benefits and welfare schemes through a single digital platform.",
        "initial_year_of_publication": "2021"
      },
      {
        "id": "ecommerce1",
        "title": "Electronics and Information Technology Goods (Requirements for Compulsory Registration) Order, 2012",
        "link": "https://www.meity.gov.in/writereaddata/files/Electronics%20&%20Information%20Technology%20Goods%20%28Requirements%20for%20Compulsory%20Registration%29%20Order,%202012.pdf",
        "type": "Order",
        "description": "Mandates that certain electronic and IT products must be tested and certified for safety standards by recognized labs before being sold.",
        "initial_year_of_publication": "2012"
      },
      {
        "id": "ecommerce2",
        "title": "Consumer Protection (E-Commerce) Rules, 2020",
        "link": "https://consumeraffairs.nic.in/theconsumerprotection/consumer-protection-e-commerce-rules-2020",
        "type": "Rules",
        "description": "Guidelines to ensure transparency, fairness, and consumer protection for all e-commerce platforms operating in India, requiring entities to provide clear information, handle grievances effectively, and avoid unfair trade practices.",
        "initial_year_of_publication": "2020"
      },
      {
        "id": "ecommerce3",
        "title": "Guidelines for operations of E-Commerce Food Business Operators",
        "link": "https://fssai.gov.in/upload/advisories/2018/02/5a968f14cc994189.pdf",
        "type": "Guideline",
        "description": "Regulate the conduct of online food service providers and e-commerce platforms dealing with food.",
        "initial_year_of_publication": "2017"
      },
      {
        "id": "finance1",
        "title": "Payment and Settlement Systems Act, 2007",
        "link": "https://www.rbi.org.in/commonperson/English/Scripts/FAQs.aspx?Id=420",
        "type": "Legislation",
        "description": "Mandates all information received by the RBI from payment system and system provider to be confidential, subject to certain safeguarding interests, such as protection of: the integrity, effectiveness and security of the payment system; the interest of banking or monetary policy; the operation of the payment systems generally, or in the public interest.",
        "initial_year_of_publication": "2007"
      },
      {
        "id": "finance2",
        "title": "Master Direction on Outsourcing of Information Technology Services",
        "link": "https://www.rbi.org.in/Scripts/BS_ViewMasDirections.aspx?id=12486",
        "type": "Direction",
        "description": "Guidelines on Outsourcing of IT Services by Regulated Entities.",
        "initial_year_of_publication": "2023"
      },
      {
        "id": "finance3",
        "title": "Master Direction – Reserve Bank of India (Electronic Trading Platforms) Directions, 2024",
        "link": "https://www.rbi.org.in/Scripts/bs_viewcontent.aspx?Id=4425",
        "type": "Direction",
        "description": "Instructions to entities operating Electronic Trading Platforms.",
        "initial_year_of_publication": "2024"
      },
      {
        "id": "finance4",
        "title": "Master Direction on Digital Payment Security Controls",
        "link": "https://www.rbi.org.in/Scripts/BS_ViewMasDirections.aspx?id=12032",
        "type": "Direction",
        "description": "Comprehensive guidelines for banks and credit card issuing NBFCs to establish governance structures, implement common security standards across digital payment channels, and ensure customer data protection, fraud management, and secure transaction processing.",
        "initial_year_of_publication": "2021"
      },
      {
        "id": "finance5",
        "title": "Master Direction on Information Technology Governance, Risk, Controls and Assurance Practices",
        "link": "https://www.rbi.org.in/Scripts/BS_ViewMasDirections.aspx?id=12562",
        "type": "Direction",
        "description": "Instructions relating to Information Technology Governance and Controls, Business Continuity Management and Information Systems Audit.",
        "initial_year_of_publication": "2023"
      },
      {
        "id": "broadcast1",
        "title": "National Critical Information Infrastructure Protection Centre (NCIIPC) Rules",
        "link": "https://www.meity.gov.in/writereaddata/files/GSR_19%28E%29_0.pdf",
        "type": "Rules",
        "description": "Guidelines for protecting India's critical information infrastructure (CII) by identifying, monitoring, and securing essential digital systems against cyber threats, focusing on sectors critical to national security, such as banking, power, and telecommunications.",
        "initial_year_of_publication": "2013"
      },
      {
        "id": "broadcast2",
        "title": "Cable Television Networks (Regulation) Act, 1995",
        "link": "https://www.indiacode.nic.in/bitstream/123456789/15345/1/the_cable_television_networks_%28regulation%29.pdf",
        "type": "Legislation",
        "description": "Regulates the operation of cable television networks in the country and for matters connected therewith or incidental thereto.",
        "initial_year_of_publication": "1995"
      },
      {
        "id": "broadcast3",
        "title": "The Telecommunications Act, 2023",
        "link": "https://egazette.gov.in/WriteReadData/2023/250880.pdf",
        "type": "Legislation",
        "description": "Updates the laws that govern the development, operation, and expansion of telecommunications networks and services. It also aims to regulate the assignment of spectrum.",
        "initial_year_of_publication": "2023"
      },
      {
        "id": "broadcast4",
        "title": "TRAI Guidelines for telecom operators",
        "link": "https://trai.gov.in/release-publication/regulation",
        "type": "Guideline",
        "description": "Various regulations and orders governing the telecom sector.",
        "initial_year_of_publication": "Multiple"
      },
      {
        "id": "broadcast5",
        "title": "Cinematograph act 1952",
        "link": "https://www.indiacode.nic.in/handle/123456789/2170?locale=en ",
        "type": "Legislation",
        "description": "An Act to make provision for the certification of cinematograph films for exhibition and for regulating exhibitions by means of cinematographs.",
        "initial_year_of_publication": "1952"
      },
      {
        "id": "cyber1",
        "title": "Cyber Security Framework in Banks",
        "link": "https://www.rbi.org.in/commonperson/English/Scripts/Notification.aspx?Id=1721",
        "type": "Guideline",
        "description": "RBI Cyber Security Guidelines for Banks.",
        "initial_year_of_publication": "2016"
      },
      {
        "id": "cyber2",
        "title": "Cyber Security Policy (2013)",
        "link": "https://www.meity.gov.in/content/national-cyber-security-policy-2013-0",
        "type": "Policy",
        "description": "Aims to ensure a secure and resilient cyberspace for citizens, businesses, and the government by promoting stronger security practices and greater awareness of cyber threats.",
        "initial_year_of_publication": "2013"
      },
      {
        "id": "cyber3",
        "title": "The Companies (Management and Administration) Rules, 2014",
        "link": "https://thc.nic.in/Central%20Governmental%20Rules/Companies%20%28Management%20and%20Administration%29%20Rules,2014.pdf",
        "type": "Rules",
        "description": "Mandate adequate cybersecurity in respect of an electronic voting system, which is used by members of a company to exercise their right to vote at general meetings.",
        "initial_year_of_publication": "2014"
      },
      {
        "id": "cyber4",
        "title": "IPC Amendments for Cybercrimes",
        "link": "https://www.meity.gov.in/content/cyber-laws",
        "type": "Legislation",
        "description": "IPC Amendments for Cybercrimes. Section 463, 464 - Forgery-related offenses, including digital documents. Section 468, 469 - Forgery for cheating and reputation harm, extended to online fraud. Section 499, 500 - Defamation, including online slander. Section 354D - Cyberstalking. Section 379, 420 - Theft and cheating, covering online frauds and data theft. Section 509 - Insulting modesty of women via digital platforms.",
        "initial_year_of_publication": "2024"
      },
      {
        "id": "cyber5",
        "title": "Cyber Security Policy for Insurers, 2023",
        "link": "https://irdai.gov.in/document-detail?documentId=3314780",
        "type": "Policy",
        "description": "Cybersecurity measures for insurers, including annual vulnerability assessments, regular audits, and protocols to protect customer data from breaches, ensuring compliance with data security standards in the insurance sector.",
        "initial_year_of_publication": "2023"
      }
    ]
};

export { data };