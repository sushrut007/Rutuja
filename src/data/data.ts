const SKILLS = {
  "Design Tools": ["Figma", "Adobe XD", "Sketch", "Photoshop", "Illustrator"],
  "Prototyping & Collaboration": ["Miro", "FigJam", "InVision", "Axure"],
  "Other Skills": ["HTML/CSS", "Wireframing", "User Research", "Usability Testing", "WCAG/ADA Compliance"]
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
    name: "Healthcare Mobile App",
    desc: "UX & Interaction Design for RioMed. Focused on accessibility and intuitive navigation for end-users.",
    tech: ["Adobe XD", "Interaction Design", "Wireframing"],
    accent: "from-yellow-500 to-orange-500",
    border: "hover:border-yellow-500/50",
    glow: "hover:shadow-yellow-500/20",
    tag: "Mobile UX",
    tagColor: "bg-yellow-500/10 text-yellow-400 border-yellow-500/20",
    link: "/pdfs/Appt.pdf",
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
    year: "2023 - Present",
    title: "UI/UX Designer",
    company: "RioMed Technologies Pvt Ltd",
    type: "Fulltime",
    description:
      "Leading end-to-end UI/UX design for healthcare platforms. Conducted user research and usability testing. Designed wireframes, prototypes, micro-interactions, and high-fidelity screens. Built and maintained a design system ensuring accessibility and consistency across products."
  },
  {
    year: "2022 - 2023",
    title: "Sr. Graphics & UI Designer",
    company: "Machintel Pvt Ltd",
    type: "Fulltime",
    description:
      "Created wireframes, prototypes, and high-fidelity web application designs in Figma. Designed websites, landing pages, infographics, and social media creatives. Built reusable components and improved UX for responsiveness and navigation."
  },
  {
    year: "2018 - 2022",
    title: "Graphics Designer",
    company: "Machbizz Marketers Pvt Ltd",
    type: "Fulltime",
    description:
      "Designed social media creatives, banners, GIFs, animations, logos, landing pages, presentations, and branding materials. Improved visual communication for marketing campaigns and conducted visual testing for newsletters and landing pages."
  }
];

const EDUCATION_LIST = [
  {
    icon: "🎓",
    degree: "Bachelor of Computer Applications (BCA)",
    school: "Pune University",
    year: "Graduated",
    color: "from-violet-600 to-indigo-600",
    glow: "hover:shadow-violet-500/20",
    border: "hover:border-violet-500/30",
  },
  {
    icon: "🏫",
    degree: "UI/UX Certifications",
    school: "Interaction Design Foundation, Great Learning, Udemy",
    year: "Completed",
    color: "from-cyan-600 to-teal-600",
    glow: "hover:shadow-cyan-500/20",
    border: "hover:border-cyan-500/30",
  },
];

const CONTACT_INFO = {
  email: "nazarerutuja05@gmail.com",
  phone: "+91 9022078420",
  behance: "https://www.behance.net/rutujanazare1",
  linkedin: "https://www.linkedin.com/in/rutuja-nazare-7689b4175",
  location: "India"
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