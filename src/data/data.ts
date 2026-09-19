import { GraduationCap, Award } from "lucide-react";

const SKILLS = {
  "Product & Interaction Design": [
    "Information Architecture",
    "Complex Workflow Simplification",
    "Wireframing",
    "Prototyping",
    "Micro-interactions",
    "Responsive Web & Mobile"
  ],
  "UX Research & Validation": [
    "User Interviews",
    "Journey Mapping",
    "Persona Development",
    "Usability Testing",
    "Heuristic Evaluation",
    "Design QA"
  ],
  "Design Systems & Architecture": [
    "Figma & Figma Make",
    "Design Tokens",
    "Multi-Platform Libraries",
    "Accessibility (WCAG 2.1 AA)",
    "Dev Mode & Handoff"
  ],
  "Strategy & Collaboration": [
    "Product Discovery",
    "Agile/Scrum",
    "Cross-Functional Leadership",
    "AI-Accelerated UX Research"
  ]
};

const STATS = [
  { value: "07+", label: "Years Experience", color: "from-violet-500 to-indigo-500" },
  { value: "40+", label: "Projects Completed", color: "from-cyan-500 to-teal-500" },
  { value: "12+", label: "Major Products Designed", color: "from-pink-500 to-rose-500" },
];

const PROJECTS = [
  {
    name: "Healthcare Web Platform",
    desc: "UI/UX design for RioMed Technologies. Designed intuitive, responsive, and accessible interfaces for healthcare professionals.",
    tech: ["Figma", "Prototyping", "User Research"],
    accent: "from-emerald-600 to-teal-600",
    border: "hover:border-emerald-500/50",
    glow: "hover:shadow-emerald-500/20",
    tag: "Web App UI/UX",
    tagColor: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
    link: "",
  },
  {
    name: "Medi Connect-AI",
    desc: "An AI-powered appointment booking app that helps patients describe their health concern in plain language and get matched to the right doctor — no medical knowledge required.",
    tech: ["AI Integration", "UX/UI Design", "Healthcare"],
    accent: "from-blue-500 to-indigo-500",
    border: "hover:border-blue-500/50",
    glow: "hover:shadow-blue-500/20",
    tag: "AI Healthcare UX",
    tagColor: "bg-blue-500/10 text-blue-400 border-blue-500/20",
    link: "https://www.behance.net/gallery/255616235/AI-Healthcare-Appointment-Booking",
  },
  {
    name: "B2B Web Application",
    desc: "Web application design for Machintel Pvt Ltd. Created wireframes, prototypes, and high-fidelity designs.",
    tech: ["Figma", "Web Design", "B2B"],
    accent: "from-violet-600 to-indigo-600",
    border: "hover:border-violet-500/50",
    glow: "hover:shadow-violet-500/20",
    tag: "Web Design",
    tagColor: "bg-violet-500/10 text-violet-400 border-violet-500/20",
    link: "",
  },
  {
    name: "Marketing Creatives",
    desc: "Designed marketing creatives, whitepapers, social media banners, and infographics to improve visual communication.",
    tech: ["Adobe Creative Suite", "Graphic Design"],
    accent: "from-pink-600 to-rose-600",
    border: "hover:border-pink-500/50",
    glow: "hover:shadow-pink-500/20",
    tag: "Graphic Design",
    tagColor: "bg-pink-500/10 text-pink-400 border-pink-500/20",
    link: "/pdfs/Media 7 Whitepaper - Advertising services.pdf",
  },
  {
    name: "Clinical Chat Functionality",
    desc: "Redesigned the healthcare Communication module for clinical collaboration. Enhanced the experience by surfacing critical information such as participants, user roles, message previews, unread status, conversation priority, and quick actions.",
    tech: ["UI/UX Design", "Healthcare", "Collaboration"],
    accent: "from-amber-500 to-orange-500",
    border: "hover:border-amber-500/50",
    glow: "hover:shadow-amber-500/20",
    tag: "Feature Redesign",
    tagColor: "bg-amber-500/10 text-amber-400 border-amber-500/20",
    link: "",
  }
];

const NAV_LINKS = ["About", "Skills", "Experience", "Projects", "Education", "Contact"];

const EXPERIENCE_LIST = [
  {
    year: "May 2023 - Present",
    title: "Senior UI/UX Designer",
    company: "RioMed Technologies Pvt. Ltd.",
    type: "Fulltime",
    details: [
      "Lead end-to-end product design for flagship enterprise healthcare SaaS platform (Cellma), architecting workflows across 8 core clinical modules including Patient 360, Appointments, Vitals, Tasks, Communication, and Reporting.",
      "Redesigned Patient Search, Clinical 360, and vital sign workflows, reducing cognitive load and task complexity by 40% across daily clinical operations.",
      "Built and governed a centralized Figma Design System encompassing 30+ standardized UI patterns, achieving 90% component reuse and accelerating frontend sprint cycles by 25%.",
      "Designed and launched an integrated, HIPAA-compliant care-team chat and smart notification ecosystem, reducing clinician communication steps by 35%.",
      "Streamlined navigation pathways and complex data-entry forms, driving a 30% improvement in clinician task efficiency.",
      "Audited and optimized core platform components to achieve 90%+ WCAG 2.1 AA and ADA compliance, ensuring fully accessible and inclusive experiences.",
      "Integrated AI tools (ChatGPT, Claude) to accelerate clinical scenario mapping, user research synthesis, and microcopy iteration.",
      "Partnered closely with Product Managers, Frontend Engineers, and QA teams to define technical constraints, run Design QA, and maintain high implementation fidelity."
    ]
  },
  {
    year: "June 2022 - May 2023",
    title: "Senior Graphics & UI Designer",
    company: "Machintel Pvt. Ltd.",
    type: "Fulltime",
    details: [
      "Spearheaded UI/UX design for responsive web applications, enterprise dashboards, and high-converting campaign platforms.",
      "Translated complex business requirements into user flows, wireframes, and interactive Figma prototypes validated through stakeholder reviews and usability checks.",
      "Established reusable UI component libraries and responsive grid frameworks, ensuring visual and functional brand consistency across digital touchpoints.",
      "Collaborated with engineering teams to ensure pixel-perfect visual execution, asset optimization, and cross-browser responsiveness."
    ]
  },
  {
    year: "Nov 2018 - May 2022",
    title: "Graphic & Visual Designer",
    company: "Machbizz Marketers Pvt. Ltd.",
    type: "Fulltime",
    details: [
      "Designed user-centered responsive landing pages, microsites, and promotional web interfaces, optimizing information architecture and conversion pathways.",
      "Created wireframes, site flows, and clickable mockups for B2B web experiences, improving user journey clarity and engagement.",
      "Collaborated with marketing and development teams to establish responsive layout templates and cross-device visual standards."
    ]
  }
];

const EDUCATION_LIST = [
  {
    icon: GraduationCap,
    degree: "Bachelor of Computer Applications (BCA)",
    school: "Pune University, Pune, India",
    year: "Graduated",
    color: "from-violet-600 to-indigo-600",
    glow: "hover:shadow-violet-500/20",
    border: "hover:border-violet-500/30",
  },
  {
    icon: Award,
    degree: "UI/UX Certifications",
    school: "IxDF, Coursera, Great Learning, Udemy",
    year: "Completed",
    color: "from-cyan-600 to-teal-600",
    glow: "hover:shadow-cyan-500/20",
    border: "hover:border-cyan-500/30",
  },
];

const CONTACT_INFO = {
  email: "nazarerutuja05@gmail.com",
  phone: "+91-9022078420",
  behance: "https://www.behance.net/rutujanazare1",
  linkedin: "https://www.linkedin.com/in/rutuja-nazare-7689b4175",
  location: "Pune, India"
};

const SKILL_COLORS = [
  "hover:bg-violet-500/10 hover:border-violet-400/40 hover:text-violet-300",
  "hover:bg-cyan-500/10 hover:border-cyan-400/40 hover:text-cyan-300",
  "hover:bg-pink-500/10 hover:border-pink-400/40 hover:text-pink-300",
  "hover:bg-amber-500/10 hover:border-amber-400/40 hover:text-amber-300",
  "hover:bg-teal-500/10 hover:border-teal-400/40 hover:text-teal-300",
  "hover:bg-indigo-500/10 hover:border-indigo-400/40 hover:text-indigo-300",
];

export {
  SKILLS,
  STATS,
  PROJECTS,
  NAV_LINKS,
  EXPERIENCE_LIST,
  EDUCATION_LIST,
  CONTACT_INFO,
  SKILL_COLORS,
};