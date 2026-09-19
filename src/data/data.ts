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
    link: "https://www.riomed.com/",
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
    link: "https://media7.com/",
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
];

const NAV_LINKS = ["About", "Skills", "Experience", "Projects", "Education", "Contact"];

const EXPERIENCE_LIST = [
  {
    year: "May 2023 - Present",
    title: "Senior UI/UX Designer",
    company: "RioMed Technologies Pvt. Ltd.",
    type: "Fulltime",
    description: "Lead end-to-end product design for enterprise healthcare SaaS platform. Redesigned core clinical workflows, reducing task complexity by 40%. Built a centralized Figma Design System achieving 90% component reuse. Audited components to achieve 90%+ WCAG 2.1 AA compliance."
  },
  {
    year: "June 2022 - May 2023",
    title: "Senior Graphics & UI Designer",
    company: "Machintel Pvt. Ltd.",
    type: "Fulltime",
    description: "Spearheaded UI/UX design for responsive web applications and enterprise dashboards. Established reusable UI component libraries and grid frameworks. Translated complex business requirements into validated Figma prototypes."
  },
  {
    year: "Nov 2018 - May 2022",
    title: "Graphic & Visual Designer",
    company: "Machbizz Marketers Pvt. Ltd.",
    type: "Fulltime",
    description: "Designed user-centered responsive landing pages, microsites, and promotional interfaces. Created wireframes and clickable mockups for B2B web experiences, optimizing information architecture and conversion pathways."
  }
];

const EDUCATION_LIST = [
  {
    icon: "🎓",
    degree: "Bachelor of Computer Applications (BCA)",
    school: "Pune University, Pune, India",
    year: "Graduated",
    color: "from-violet-600 to-indigo-600",
    glow: "hover:shadow-violet-500/20",
    border: "hover:border-violet-500/30",
  },
  {
    icon: "🏫",
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