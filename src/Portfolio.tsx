import { useState, useEffect, useRef } from "react";
import {
  STATS,
  PROJECTS,
  NAV_LINKS,
  EXPERIENCE_LIST,
  EDUCATION_LIST,
  CONTACT_INFO,
  SKILL_COLORS,
  SKILLS,
} from "./data/data";

function useInView(ref: React.RefObject<Element | null>) {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.15 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [ref]);
  return visible;
}

function FadeIn({ children, delay = 0, className = "" }: { children: React.ReactNode, delay?: number, className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const visible = useInView(ref);
  return (
    <div ref={ref} className={className} style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(32px)", transition: `opacity 0.6s ease ${delay}s, transform 0.6s ease ${delay}s` }}>
      {children}
    </div>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return <p className="text-xs font-semibold tracking-[0.18em] uppercase text-violet-400 mb-3">{children}</p>;
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return <h2 className="font-bold text-3xl md:text-4xl tracking-tight text-white mb-10">{children}</h2>;
}

export default function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("about");
  const [typedText, setTypedText] = useState("");
  const titles = ["UI/UX Designer", "Product Designer", "Interaction Designer", "Visual Designer"];
  const [titleIdx, setTitleIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = titles[titleIdx];
    let timeout: ReturnType<typeof setTimeout>;
    if (!deleting && charIdx < current.length) {
      timeout = setTimeout(() => { setTypedText(current.slice(0, charIdx + 1)); setCharIdx(c => c + 1); }, 80);
    } else if (!deleting && charIdx === current.length) {
      timeout = setTimeout(() => setDeleting(true), 1800);
    } else if (deleting && charIdx > 0) {
      timeout = setTimeout(() => { setTypedText(current.slice(0, charIdx - 1)); setCharIdx(c => c - 1); }, 40);
    } else if (deleting && charIdx === 0) {
      setDeleting(false);
      setTitleIdx(i => (i + 1) % titles.length);
    }
    return () => clearTimeout(timeout);
  }, [charIdx, deleting, titleIdx]);

  useEffect(() => {
    const handler = () => {
      const sections = NAV_LINKS.map(n => n.toLowerCase());
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) { setActiveSection(id); break; }
        }
      }
    };
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <div className="min-h-screen bg-[#030712] text-white font-sans antialiased overflow-x-hidden">

      {/* ANIMATED BG */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-violet-600/10 rounded-full blur-[120px]" />
        <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-cyan-600/8 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-pink-600/8 rounded-full blur-[100px]" />
        <div className="absolute inset-0" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.03) 1px, transparent 0)", backgroundSize: "32px 32px" }} />
      </div>

      {/* NAV */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#030712]/80 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-4 flex items-center justify-between">
          <span className="font-black text-xl bg-gradient-to-r from-violet-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent tracking-tight">RN.</span>
          <nav className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map(link => (
              <a key={link} href={`#${link.toLowerCase()}`}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${activeSection === link.toLowerCase() ? "text-white bg-white/8" : "text-slate-400 hover:text-white hover:bg-white/5"}`}>
                {link}
              </a>
            ))}
          </nav>
          <a href={`mailto:${CONTACT_INFO.email}`}
            className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 transition-all duration-200 hover:scale-105 hover:shadow-lg hover:shadow-violet-500/25">
            Hire Me
          </a>
          <button className="md:hidden text-slate-400 hover:text-white" onClick={() => setMenuOpen(!menuOpen)}>
            <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              {menuOpen ? <path d="M6 18L18 6M6 6l12 12" /> : <path d="M4 6h16M4 12h16M4 18h16" />}
            </svg>
          </button>
        </div>
        {menuOpen && (
          <div className="md:hidden px-5 pb-5 flex flex-col gap-1 border-t border-white/5 pt-3">
            {NAV_LINKS.map(link => (
              <a key={link} href={`#${link.toLowerCase()}`} onClick={() => setMenuOpen(false)}
                className="px-4 py-3 rounded-lg text-sm font-medium text-slate-300 hover:text-white hover:bg-white/5 transition-all">{link}</a>
            ))}
          </div>
        )}
      </header>

      {/* HERO */}
      <section className="relative z-10 min-h-screen flex items-center justify-center text-center px-5 pt-20">
        <div className="max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-violet-500/30 bg-violet-500/5 text-violet-300 text-xs font-semibold tracking-widest uppercase mb-8">
            <span className="w-2 h-2 rounded-full bg-violet-400 animate-pulse" />
            Open to Opportunities · {CONTACT_INFO.location}
          </div>

          <h1 className="text-5xl md:text-7xl font-black tracking-tight leading-[1.0] mb-6">
            <span className="text-white">Hi, I'm </span>
            <span className="bg-gradient-to-r from-violet-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">Rutuja</span>
          </h1>

          <div className="h-12 flex items-center justify-center mb-6">
            <span className="text-xl md:text-2xl font-medium text-slate-300">
              {typedText}<span className="animate-pulse text-violet-400">|</span>
            </span>
          </div>

          <p className="text-slate-400 text-base md:text-lg leading-relaxed max-w-xl mx-auto mb-10">
            UI/UX Designer with <span className="text-white font-medium">7+ years</span> crafting user-centered digital experiences for healthcare and B2B platforms.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a href={`mailto:${CONTACT_INFO.email}`}
              className="px-7 py-3 rounded-xl font-semibold text-sm bg-gradient-to-r from-violet-600 to-pink-600 hover:from-violet-500 hover:to-pink-500 transition-all duration-200 hover:scale-105 hover:shadow-xl hover:shadow-violet-500/30">
              Get in Touch
            </a>
            <a href={CONTACT_INFO.behance} target="_blank" rel="noreferrer"
              className="px-7 py-3 rounded-xl font-semibold text-sm border border-white/10 text-slate-300 hover:text-white hover:border-white/20 hover:bg-white/5 transition-all duration-200">
              Behance →
            </a>
            <a href={CONTACT_INFO.linkedin} target="_blank" rel="noreferrer"
              className="px-7 py-3 rounded-xl font-semibold text-sm border border-white/10 text-slate-300 hover:text-white hover:border-white/20 hover:bg-white/5 transition-all duration-200">
              LinkedIn →
            </a>
          </div>

          {/* Scroll hint */}
          <div className="mt-20 flex flex-col items-center gap-2 text-slate-600 text-xs">
            <span>Scroll to explore</span>
            <div className="w-px h-10 bg-gradient-to-b from-slate-600 to-transparent animate-bounce" />
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="relative z-10 border-y border-white/5 bg-white/[0.02]">
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-10 grid grid-cols-2 md:grid-cols-4 gap-0 divide-x divide-y md:divide-y-0 divide-white/5">
          {STATS.map((s, i) => (
            <FadeIn key={s.label} delay={i * 0.1} className="px-6 py-5 text-center">
              <div className={`text-3xl font-black bg-gradient-to-br ${s.color} bg-clip-text text-transparent mb-1`}>{s.value}</div>
              <div className="text-slate-500 text-xs font-medium">{s.label}</div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="relative z-10 py-24 px-5 md:px-8">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <SectionLabel>Who I am</SectionLabel>
            <SectionTitle>About Me</SectionTitle>
          </FadeIn>
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <FadeIn delay={0.1}>
              <p className="text-slate-400 text-base leading-relaxed mb-5">
                UI/UX Designer with <span className="text-white font-medium">7 years of experience</span> crafting user-centered, accessible digital products for healthcare and B2B platforms. I specialize in wireframing, prototyping, interaction design, usability testing, and building scalable design systems.
              </p>
              <p className="text-slate-400 text-base leading-relaxed mb-5">
                Currently at <span className="text-violet-300 font-medium">RioMed Technologies</span> leading end-to-end UI/UX design for healthcare platforms.
              </p>
              <p className="text-slate-400 text-base leading-relaxed">
                Passionate about <span className="text-cyan-300 font-medium">accessible design</span>, conducting user research, and transforming complex requirements into intuitive, WCAG/ADA-compliant interfaces.
              </p>
            </FadeIn>
            <FadeIn delay={0.2} className="flex flex-col gap-3">
              {[
                { icon: "📧", label: "Email", val: CONTACT_INFO.email, color: "text-violet-300" },
                { icon: "📱", label: "Phone", val: CONTACT_INFO.phone, color: "text-cyan-300" },
                { icon: "📍", label: "Location", val: CONTACT_INFO.location, color: "text-pink-300" },
                { icon: "🎓", label: "Education", val: "BCA (Pune University)", color: "text-amber-300" },
              ].map(({ icon, label, val, color }) => (
                <div key={label} className="flex items-center gap-4 p-4 rounded-xl border border-white/5 bg-white/[0.02] hover:border-white/10 hover:bg-white/[0.04] transition-all duration-200 group">
                  <span className="text-lg w-7 text-center">{icon}</span>
                  <div>
                    <div className="text-slate-500 text-xs uppercase tracking-wider mb-0.5">{label}</div>
                    <div className={`text-sm font-medium ${color}`}>{val}</div>
                  </div>
                </div>
              ))}
            </FadeIn>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="relative z-10 py-24 px-5 md:px-8 bg-white/[0.015] border-y border-white/5">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <SectionLabel>What I work with</SectionLabel>
            <SectionTitle>Tech Stack</SectionTitle>
          </FadeIn>
          {Object.entries(SKILLS).map(([category, skills], ci) => (
            <FadeIn key={category} delay={ci * 0.1} className="mb-10 last:mb-0">
              <div className="flex items-center gap-3 mb-4">
                <span className={`text-xs font-bold tracking-[0.15em] uppercase ${ci === 0 ? "text-violet-400" : ci === 1 ? "text-cyan-400" : "text-pink-400"}`}>{category}</span>
                <div className="flex-1 h-px bg-white/5" />
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, si) => (
                  <span key={skill}
                    className={`px-4 py-2 rounded-lg border border-white/8 bg-white/[0.03] text-slate-400 text-sm font-medium cursor-default transition-all duration-200 ${SKILL_COLORS[si % SKILL_COLORS.length]}`}>
                    {skill}
                  </span>
                ))}
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="relative z-10 py-24 px-5 md:px-8">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <SectionLabel>Where I've worked</SectionLabel>
            <SectionTitle>Experience</SectionTitle>
          </FadeIn>
          <div className="flex flex-col gap-8">
            {EXPERIENCE_LIST.map((exp, i) => (
              <FadeIn key={exp.title + exp.company} delay={0.1 + i * 0.1}>
                <div className="relative rounded-2xl border border-white/8 bg-white/[0.02] p-8 overflow-hidden">
                  {/* gradient left bar */}
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-violet-500 via-pink-500 to-cyan-500 rounded-l-2xl" />
                  
                  {/* glow */}
                  <div className="absolute -top-20 -right-20 w-64 h-64 bg-violet-600/5 rounded-full blur-[80px] pointer-events-none" />

                  <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-1">{exp.title}</h3>
                      <div className="text-violet-400 font-semibold text-sm">{exp.company}</div>
                    </div>
                    <div className="text-left md:text-right">
                      <div className="text-cyan-400 text-sm font-semibold">{exp.year}</div>
                      <div className="text-slate-500 text-xs mt-1">{exp.type}</div>
                    </div>
                  </div>

                  <p className="text-sm text-slate-400 leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="relative z-10 py-24 px-5 md:px-8 bg-white/[0.015] border-y border-white/5">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <SectionLabel>What I've built</SectionLabel>
            <SectionTitle>Projects</SectionTitle>
          </FadeIn>
          <div className="grid md:grid-cols-2 gap-5">
            {PROJECTS.map((p, i) => (
              <FadeIn key={p.name} delay={i * 0.15}>
                {/* <div className={`group relative rounded-2xl border border-white/8 bg-white/[0.02] p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl ${p.border} ${p.glow}`}>
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${p.accent} opacity-0 group-hover:opacity-[0.04] transition-opacity duration-300`} />

                  <div className={`inline-flex items-center px-3 py-1 rounded-full border text-xs font-semibold mb-5 ${p.tagColor}`}>
                    {p.tag}
                  </div>

                  <h3 className={`font-black text-xl mb-3 bg-gradient-to-r ${p.accent} bg-clip-text text-transparent`}>{p.name}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-5">{p.desc}</p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {p.tech.map(t => (
                      <span key={t} className="px-3 py-1 rounded-lg bg-white/5 border border-white/8 text-slate-400 text-xs font-medium">{t}</span>
                    ))}
                  </div>

                  <a href={p.link} target="_blank" rel="noreferrer" className={`inline-flex items-center gap-1.5 text-sm font-semibold bg-gradient-to-r ${p.accent} bg-clip-text text-transparent hover:gap-2.5 transition-all duration-200`}>
                    View on GitHub <span>→</span>
                  </a>
                </div> */}
                <a
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <div className={`group relative rounded-2xl border border-white/8 bg-white/[0.02] p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl ${p.border} ${p.glow}`}>

                    <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${p.accent} opacity-0 group-hover:opacity-[0.04] transition-opacity duration-300`} />

                    <div className={`inline-flex items-center px-3 py-1 rounded-full border text-xs font-semibold mb-5 ${p.tagColor}`}>
                      {p.tag}
                    </div>

                    <h3 className={`font-black text-xl mb-3 bg-gradient-to-r ${p.accent} bg-clip-text text-transparent`}>
                      {p.name}
                    </h3>

                    <p className="text-slate-400 text-sm leading-relaxed mb-5">
                      {p.desc}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {p.tech.map(t => (
                        <span key={t} className="px-3 py-1 rounded-lg bg-white/5 border border-white/8 text-slate-400 text-xs font-medium">
                          {t}
                        </span>
                      ))}
                    </div>

                    <span className="text-sm font-semibold text-violet-400">
                      View Project →
                    </span>

                  </div>
                </a>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* EDUCATION */}
      <section id="education" className="relative z-10 py-24 px-5 md:px-8">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <SectionLabel>Academic background</SectionLabel>
            <SectionTitle>Education</SectionTitle>
          </FadeIn>
          <div className="grid md:grid-cols-2 gap-5">
            {EDUCATION_LIST.map((edu, i) => (
              <FadeIn key={edu.degree} delay={0.1 + i * 0.1}>
                <div className={`group relative rounded-2xl border border-white/8 bg-white/[0.02] p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl ${edu.glow} ${edu.border}`}>
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${edu.color} opacity-0 group-hover:opacity-[0.04] transition-opacity`} />
                  <div className="text-3xl mb-4">{edu.icon}</div>
                  <h3 className={`font-bold text-base text-white mb-1.5 bg-gradient-to-r ${edu.color} bg-clip-text text-transparent`}>{edu.degree}</h3>
                  <p className="text-slate-300 text-sm font-medium mb-1">{edu.school}</p>
                  <p className="text-slate-500 text-xs">{edu.year}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="relative z-10 py-24 px-5 md:px-8 bg-white/[0.015] border-t border-white/5">
        <div className="max-w-6xl mx-auto">

          <FadeIn>
            <SectionLabel>Get in touch</SectionLabel>
            <SectionTitle>Contact</SectionTitle>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-12 items-start">

            {/* LEFT SIDE */}
            <FadeIn delay={0.1}>
              <p className="text-slate-400 text-base leading-relaxed mb-8">
                I'm open to <span className="text-white font-medium">full-time roles</span>,
                freelance projects, and collaborations. Let's build something amazing together 🚀
              </p>

              <div className="flex flex-col gap-4">
                {[
                  { icon: "📧", label: "Email", val: CONTACT_INFO.email, href: `mailto:${CONTACT_INFO.email}`, color: "hover:border-violet-500/40 hover:bg-violet-500/5 hover:text-violet-300" },
                  { icon: "🔗", label: "LinkedIn", val: CONTACT_INFO.linkedin.replace("https://www.", ""), href: CONTACT_INFO.linkedin, color: "hover:border-cyan-500/40 hover:bg-cyan-500/5 hover:text-cyan-300" },
                  { icon: "🎨", label: "Behance", val: CONTACT_INFO.behance.replace("https://www.", ""), href: CONTACT_INFO.behance, color: "hover:border-pink-500/40 hover:bg-pink-500/5 hover:text-pink-300" },
                  { icon: "📱", label: "Phone", val: CONTACT_INFO.phone, href: `tel:${CONTACT_INFO.phone.replace(/ /g, "")}`, color: "hover:border-amber-500/40 hover:bg-amber-500/5 hover:text-amber-300" },
                ].map(({ icon, label, val, href, color }) => (
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel="noreferrer"
                    className={`group flex items-center gap-4 p-4 rounded-xl border border-white/8 bg-white/[0.02] text-slate-400 text-sm font-medium transition-all duration-300 hover:translate-x-2 hover:shadow-lg ${color}`}
                  >
                    <span className="text-xl w-8 text-center flex-shrink-0 group-hover:scale-110 transition">
                      {icon}
                    </span>

                    <div>
                      <div className="text-slate-500 text-xs uppercase tracking-wider mb-0.5">
                        {label}
                      </div>
                      <div className="group-hover:text-white transition">
                        {val}
                      </div>
                    </div>

                    {/* Arrow */}
                    <span className="ml-auto opacity-0 group-hover:opacity-100 transition">
                      →
                    </span>
                  </a>
                ))}
              </div>
            </FadeIn>

            {/* RIGHT SIDE (NEW CTA CARD) */}
            <FadeIn delay={0.2}>
              <div className="relative rounded-2xl border border-white/8 bg-white/[0.02] p-8 overflow-hidden">

                {/* Glow */}
                <div className="absolute -top-20 -right-20 w-72 h-72 bg-violet-600/10 blur-[100px]" />

                <h3 className="text-xl font-bold text-white mb-4">
                  Let's Work Together 🤝
                </h3>

                <p className="text-slate-400 text-sm leading-relaxed mb-6">
                  I’m currently available for new opportunities and exciting projects.
                  If you have something in mind, feel free to reach out.
                </p>

                <div className="flex flex-col gap-3">
                  <a
                    href={`mailto:${CONTACT_INFO.email}`}
                    className="w-full text-center py-3 rounded-xl font-semibold text-sm bg-gradient-to-r from-violet-600 to-pink-600 hover:from-violet-500 hover:to-pink-500 transition-all duration-200 hover:scale-[1.02] hover:shadow-xl hover:shadow-violet-500/25"
                  >
                    Send Email
                  </a>

                  <a
                    href={CONTACT_INFO.linkedin}
                    target="_blank"
                    className="w-full text-center py-3 rounded-xl font-semibold text-sm border border-white/10 text-slate-300 hover:text-white hover:border-white/20 hover:bg-white/5 transition-all duration-200"
                  >
                    Connect on LinkedIn
                  </a>
                </div>

              </div>
            </FadeIn>

          </div>
        </div>
      </section>
      {/* FOOTER */}
      <footer className="relative z-10 border-t border-white/5 py-8 px-5 md:px-8 text-center">
        <p className="text-slate-600 text-sm">© {new Date().getFullYear()} <span className="text-slate-400 font-medium">Rutuja</span> · UI/UX Designer · {CONTACT_INFO.location}</p>
      </footer>
    </div>
  );
}