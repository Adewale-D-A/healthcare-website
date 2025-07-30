import HourGlassIcon from "../icons/house-glass";

const navItems = [
  {
    title: "Our Products",
    url: "#",
    isMobile: false,
    subMenu: true,
    iconUrl: "",
    icon: "",
    subMenuContent: [
      {
        id: "1",
        name: "For Health Providers",
        url: "#",
        subContentOne: [
          {
            id: "1",
            name: "HealthCare Automation System",
            url: "#",
            description: "",
            img: "/menu-img/healthcare_automated.jpg",
          },
          {
            id: "2",
            name: "Hospital Management System",
            url: "#",
            description: "",
            img: "/menu-img/hospital_management.jpg",
          },
          {
            id: "3",
            name: "Laboratory Management System",
            url: "#",
            description: "",
            img: "/menu-img/laboratory-management.jpg",
          },
          {
            id: "4",
            name: "Pharmacy Management System",
            url: "#",
            description: "",
            img: "/menu-img/pharmacy-management.jpg",
          },
          {
            id: "5",
            name: "Electronic Health Records",
            url: "#",
            description: "",
            img: "/menu-img/electronic_health_record.jpg",
          },
          {
            id: "6",
            name: "Billing Automation System",
            url: "#",
            description: "",
            img: "/menu-img/billing_automation.jpg",
          },
          {
            id: "7",
            name: "Speech To Text",
            url: "#",
            description: "",
            img: "/menu-img/billing_automation.jpg",
          },
        ],
      },
      {
        id: "2",
        name: "For Patients",
        url: "#",
        subContentOne: [
          {
            id: "1",
            name: "Telemedicine",
            url: "#",
            description: "",
            img: "/menu-img/telemedicine.jpg",
          },
          {
            id: "2",
            name: "Patient Portal",
            url: "#",
            description: "",
            img: "/menu-img/patient_portal.jpg",
          },
        ],
      },
    ],
  },
  {
    title: "Services",
    isMobile: true,
    url: "/services",
    subMenu: false,
    subMenuContent: [],
    iconUrl: "",
    icon: <></>,
  },
  {
    title: "Patient Count",
    isMobile: true,
    url: "/patient-count",
    subMenu: false,
    subMenuContent: [],
    iconUrl: "",
    icon: <HourGlassIcon />,
  },
  {
    title: "About us",
    isMobile: true,
    url: "/about-us",
    subMenu: false,
    subMenuContent: [],
    iconUrl: "",
    icon: <></>,
  },
  {
    title: "Support",
    isMobile: true,
    url: "/support",
    subMenu: false,
    subMenuContent: [],
    iconUrl: "",
    icon: <></>,
  },
];

export default navItems;
