import { useState, useEffect, useRef } from "react";
import { Github, Twitter, Linkedin, ArrowUpRight, Mail, Globe, Menu, X, Download } from "lucide-react";

const PROJECTS = [
  {
    id: 1,
    title: "Meridian Dashboard",
    category: "Web App",
    year: "2024",
    description:
      "Real-time analytics platform for distributed systems with custom data visualization layers and WebSocket-driven live updates across multi-tenant environments.",
    tags: ["React", "TypeScript", "WebSockets", "D3.js"],
    image: "photo-1551288049-bebda4e38f71",
    link: "#",
    featured: true,
  },
  {
    id: 2,
    title: "Folio CMS",
    category: "Open Source",
    year: "2024",
    description:
      "Headless content management system built for editorial teams. Structured content schemas, custom field types, and a clean REST + GraphQL API layer.",
    tags: ["Node.js", "PostgreSQL", "Docker", "GraphQL"],
    image: "photo-1555066931-4365d14bab8c",
    link: "#",
    featured: true,
  },
  {
    id: 3,
    title: "Wavelength",
    category: "Mobile App",
    year: "2023",
    description:
      "Cross-platform audio journaling with voice-to-text transcription, mood tagging, and weekly insight summaries powered by a local LLM.",
    tags: ["React Native", "Expo", "Whisper API", "SQLite"],
    image: "photo-1590602847861-f357a9332bbc",
    link: "#",
    featured: false,
  },
  {
    id: 4,
    title: "Spectra UI",
    category: "Design System",
    year: "2023",
    description:
      "Component library and token system for consistent design across web products. Shipped as an npm package with Storybook docs and a Figma token bridge.",
    tags: ["Storybook", "Radix UI", "CSS Variables", "Figma"],
    image: "photo-1618005182384-a83a8bd57fbe",
    link: "#",
    featured: false,
  },
  {
    id: 5,
    title: "Atlas CLI",
    category: "Developer Tools",
    year: "2023",
    description:
      "Command-line toolkit for scaffolding projects, managing environment configs, and automating repetitive developer workflows across monorepo setups.",
    tags: ["Go", "Cobra", "YAML", "Shell"],
    image: "photo-1629654297299-c8506221ca97",
    link: "#",
    featured: false,
  },
];

const SKILLS = [
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Go",
  "PostgreSQL",
  "Docker",
  "AWS",
  "Figma",
  "REST APIs",
  "GraphQL",
  "CI/CD",
  "Tailwind CSS",
  "Testing",
  "System Design",
  "Open Source",
  "Performance",
  "Accessibility",
];

const SOCIALS = [
  {
    label: "GitHub",
    handle: "@yourhandle",
    icon: Github,
    url: "https://github.com",
  },
  {
    label: "Twitter / X",
    handle: "@yourhandle",
    icon: Twitter,
    url: "https://twitter.com",
  },
  {
    label: "LinkedIn",
    handle: "Your Full Name",
    icon: Linkedin,
    url: "https://linkedin.com",
  },
  {
    label: "Email",
    handle: "hello@yoursite.com",
    icon: Mail,
    url: "mailto:hello@yoursite.com",
  },
  {
    label: "Website / Blog",
    handle: "yoursite.com",
    icon: Globe,
    url: "#",
  },
];

function useScrollY() {
  const [y, setY] = useState(0);
  useEffect(() => {
    const fn = () => setY(window.scrollY);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);
  return y;
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const scrollY = useScrollY();
  const navScrolled = scrollY > 60;
  const marqueeRef = useRef<HTMLDivElement>(null);

  const scrollTo = (id: string) => {
    setMenuOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      className="min-h-screen bg-background text-foreground overflow-x-hidden"
      style={{ fontFamily: "'DM Sans', sans-serif" }}
    >
      {/* ─── NAV ──────────────────────────────────────────────────────────── */}
      <nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          background: navScrolled
            ? "rgba(13,13,13,0.92)"
            : "transparent",
          backdropFilter: navScrolled ? "blur(12px)" : "none",
          borderBottom: navScrolled
            ? "1px solid rgba(242,237,232,0.08)"
            : "1px solid transparent",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 h-16 flex items-center justify-between">
          <button
            onClick={() => scrollTo("hero")}
            className="text-sm tracking-[0.15em] uppercase text-foreground/90 hover:text-accent transition-colors"
            style={{ fontFamily: "'DM Mono', monospace" }}
          >
            Your Name
          </button>
          <div className="hidden md:flex items-center gap-8">
            {["about", "work", "connect"].map((s) => (
              <button
                key={s}
                onClick={() => scrollTo(s)}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors capitalize tracking-wide"
              >
                {s}
              </button>
            ))}
            <a
              href="#"
              className="flex items-center gap-1.5 text-sm bg-accent text-accent-foreground px-4 py-1.5 hover:bg-accent/90 transition-colors"
              style={{ borderRadius: "2px" }}
            >
              <Download size={13} />
              Résumé
            </a>
          </div>
          <button
            className="md:hidden text-foreground"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
        {menuOpen && (
          <div className="md:hidden bg-card border-t border-border px-6 py-6 flex flex-col gap-5">
            {["about", "work", "connect"].map((s) => (
              <button
                key={s}
                onClick={() => scrollTo(s)}
                className="text-left text-base text-foreground capitalize"
              >
                {s}
              </button>
            ))}
            <a href="#" className="text-accent text-sm flex items-center gap-1">
              <Download size={13} /> Download Résumé
            </a>
          </div>
        )}
      </nav>

      {/* ─── HERO ─────────────────────────────────────────────────────────── */}
      <section
        id="hero"
        className="relative min-h-screen grid grid-cols-1 lg:grid-cols-2"
      >
        {/* Left — text */}
        <div className="flex flex-col justify-end pb-20 pt-32 px-6 lg:px-16 xl:px-20 relative z-10">
          <div
            className="text-xs tracking-[0.2em] uppercase text-accent mb-6"
            style={{ fontFamily: "'DM Mono', monospace" }}
          >
            Portfolio · 2026
          </div>
          <h1
            className="leading-[0.9] tracking-tight text-foreground mb-8"
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(3.5rem, 8vw, 7rem)",
              fontWeight: 700,
            }}
          >
            Your
            <br />
            <em style={{ fontStyle: "italic" }}>Full</em>
            <br />
            Name.
          </h1>
          <p className="text-base lg:text-lg text-muted-foreground max-w-sm leading-relaxed mb-10">
            Full-stack engineer & creative developer. I build things for the
            web — from systems infrastructure to polished interfaces.
            Currently open to senior roles and select freelance work.
          </p>
          <div className="flex items-center gap-4 flex-wrap">
            <button
              onClick={() => scrollTo("work")}
              className="flex items-center gap-2 bg-foreground text-background px-6 py-3 text-sm font-medium hover:bg-foreground/90 transition-colors"
              style={{ borderRadius: "2px" }}
            >
              Selected Work <ArrowUpRight size={15} />
            </button>
            <button
              onClick={() => scrollTo("connect")}
              className="flex items-center gap-2 border border-border px-6 py-3 text-sm text-muted-foreground hover:text-foreground hover:border-foreground/30 transition-colors"
              style={{ borderRadius: "2px" }}
            >
              Get in Touch
            </button>
          </div>
        </div>

        {/* Right — image split */}
        <div className="relative hidden lg:block bg-[#111]">
          <img
            src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=900&h=1100&fit=crop&auto=format"
            alt="Developer at work"
            className="absolute inset-0 w-full h-full object-cover"
            style={{ opacity: 0.6 }}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to right, #0D0D0D 0%, transparent 30%)",
            }}
          />
          {/* Floating stat cards */}
          <div
            className="absolute bottom-20 right-10 bg-card border border-border px-5 py-4 text-right"
            style={{ borderRadius: "2px", minWidth: "160px" }}
          >
            <div
              className="text-3xl font-bold text-foreground"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              5+
            </div>
            <div className="text-xs text-muted-foreground mt-0.5 tracking-wide uppercase">
              Years Experience
            </div>
          </div>
          <div
            className="absolute top-1/3 right-10 bg-accent px-5 py-4 text-right"
            style={{ borderRadius: "2px", minWidth: "160px" }}
          >
            <div
              className="text-3xl font-bold text-accent-foreground"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              20+
            </div>
            <div className="text-xs text-accent-foreground/80 mt-0.5 tracking-wide uppercase">
              Projects Shipped
            </div>
          </div>
        </div>

        {/* Scroll cue */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-2 text-muted-foreground">
          <div className="w-px h-10 bg-border animate-pulse" />
          <span
            className="text-[10px] tracking-[0.2em] uppercase"
            style={{ fontFamily: "'DM Mono', monospace" }}
          >
            Scroll
          </span>
        </div>
      </section>

      {/* ─── MARQUEE ──────────────────────────────────────────────────────── */}
      <div className="border-y border-border overflow-hidden py-4 bg-secondary">
        <div
          ref={marqueeRef}
          className="flex gap-10 whitespace-nowrap"
          style={{
            animation: "marquee 28s linear infinite",
          }}
        >
          {[...SKILLS, ...SKILLS].map((s, i) => (
            <span
              key={i}
              className="text-xs tracking-[0.15em] uppercase text-muted-foreground flex items-center gap-3"
              style={{ fontFamily: "'DM Mono', monospace" }}
            >
              {s}
              <span className="text-accent text-base leading-none">·</span>
            </span>
          ))}
        </div>
      </div>
      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        ::-webkit-scrollbar { display: none; }
        * { scrollbar-width: none; }
      `}</style>

      {/* ─── ABOUT ────────────────────────────────────────────────────────── */}
      <section id="about" className="py-28 lg:py-40 px-6 lg:px-16 xl:px-20 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-16 lg:gap-24 items-start">
          {/* Text */}
          <div>
            <div
              className="text-xs tracking-[0.2em] uppercase text-accent mb-8 flex items-center gap-3"
              style={{ fontFamily: "'DM Mono', monospace" }}
            >
              <span className="w-8 h-px bg-accent inline-block" />
              About
            </div>
            <h2
              className="leading-tight text-foreground mb-8"
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(2rem, 4vw, 3.5rem)",
                fontWeight: 700,
              }}
            >
              I turn complex problems
              <br />
              into <em>clean, fast</em> software.
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed max-w-xl text-base lg:text-[1.05rem]">
              <p>
                Based in Delft, The Netherlands, I&apos;ve spent the last five years
                building full-stack products at the intersection of engineering
                rigor and product craft. I care deeply about developer
                experience, performance, and the details that make software feel
                effortless to use.
              </p>
              <p>
                Before going independent, I shipped features at two Series B
                startups and contributed to several widely-used open source
                tools. I&apos;m at my best when I&apos;m working on something
                with real constraints and meaningful impact.
              </p>
              <p>
                When I&apos;m not coding, you&apos;ll find me reading about
                systems design, taking long runs, or making overly complex
                coffee.
              </p>
            </div>
            <div className="mt-10 flex flex-wrap gap-2">
              {SKILLS.map((skill) => (
                <span
                  key={skill}
                  className="text-xs px-3 py-1.5 border border-border text-muted-foreground hover:border-accent/40 hover:text-foreground transition-colors"
                  style={{
                    fontFamily: "'DM Mono', monospace",
                    borderRadius: "2px",
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Photo */}
          <div className="lg:w-72 xl:w-80 self-start">
            <div
              className="relative overflow-hidden bg-secondary"
              style={{ aspectRatio: "3/4", borderRadius: "2px" }}
            >
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=660&fit=crop&auto=format&facepad=3"
                alt="Portrait"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
              <div
                className="absolute inset-0 border border-accent/20"
                style={{ borderRadius: "2px" }}
              />
            </div>
            <div className="mt-4 space-y-1.5">
              <div
                className="text-xs text-muted-foreground"
                style={{ fontFamily: "'DM Mono', monospace" }}
              >
                Your Full Name
              </div>
              <div
                className="text-xs text-accent"
                style={{ fontFamily: "'DM Mono', monospace" }}
              >
                San Francisco, CA
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── WORK ─────────────────────────────────────────────────────────── */}
      <section
        id="work"
        className="py-28 lg:py-40 border-t border-border"
        style={{ background: "#101010" }}
      >
        <div className="px-6 lg:px-16 xl:px-20 max-w-7xl mx-auto">
          <div className="flex items-end justify-between mb-16 gap-6 flex-wrap">
            <div>
              <div
                className="text-xs tracking-[0.2em] uppercase text-accent mb-4 flex items-center gap-3"
                style={{ fontFamily: "'DM Mono', monospace" }}
              >
                <span className="w-8 h-px bg-accent inline-block" />
                Selected Work
              </div>
              <h2
                className="leading-tight text-foreground"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "clamp(2rem, 4vw, 3rem)",
                  fontWeight: 700,
                }}
              >
                Things I&apos;ve built.
              </h2>
            </div>
            <a
              href="#"
              className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-accent transition-colors"
              style={{ fontFamily: "'DM Mono', monospace" }}
            >
              All Projects <ArrowUpRight size={14} />
            </a>
          </div>

          {/* Featured projects — large */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-px mb-px bg-border">
            {PROJECTS.filter((p) => p.featured).map((project) => (
              <a
                key={project.id}
                href={project.link}
                className="group relative overflow-hidden bg-card block"
                style={{ aspectRatio: "4/3" }}
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                <img
                  src={`https://images.unsplash.com/${project.image}?w=800&h=600&fit=crop&auto=format`}
                  alt={project.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  style={{ opacity: 0.35 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                <div className="absolute inset-0 p-8 flex flex-col justify-between">
                  <div className="flex items-start justify-between">
                    <span
                      className="text-xs text-accent tracking-widest uppercase"
                      style={{ fontFamily: "'DM Mono', monospace" }}
                    >
                      {project.category}
                    </span>
                    <span
                      className="text-xs text-muted-foreground"
                      style={{ fontFamily: "'DM Mono', monospace" }}
                    >
                      {project.year}
                    </span>
                  </div>
                  <div>
                    <h3
                      className="text-2xl lg:text-3xl text-foreground mb-3 leading-tight"
                      style={{
                        fontFamily: "'Playfair Display', serif",
                        fontWeight: 700,
                      }}
                    >
                      {project.title}
                    </h3>
                    <p
                      className="text-sm text-muted-foreground leading-relaxed mb-5 max-w-sm"
                      style={{
                        opacity: hoveredProject === project.id ? 1 : 0.7,
                        transition: "opacity 0.3s",
                      }}
                    >
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((t) => (
                        <span
                          key={t}
                          className="text-[10px] px-2 py-1 bg-white/10 text-foreground/70 tracking-wider uppercase"
                          style={{
                            fontFamily: "'DM Mono', monospace",
                            borderRadius: "2px",
                          }}
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <div
                  className="absolute top-6 right-6 w-8 h-8 bg-accent flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ borderRadius: "2px" }}
                >
                  <ArrowUpRight size={14} className="text-accent-foreground" />
                </div>
              </a>
            ))}
          </div>

          {/* Other projects — smaller */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border mt-px">
            {PROJECTS.filter((p) => !p.featured).map((project) => (
              <a
                key={project.id}
                href={project.link}
                className="group relative overflow-hidden bg-card block p-8 hover:bg-secondary transition-colors duration-300"
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                <div className="flex items-start justify-between mb-6">
                  <span
                    className="text-[10px] text-accent tracking-widest uppercase"
                    style={{ fontFamily: "'DM Mono', monospace" }}
                  >
                    {project.category}
                  </span>
                  <span
                    className="text-[10px] text-muted-foreground"
                    style={{ fontFamily: "'DM Mono', monospace" }}
                  >
                    {project.year}
                  </span>
                </div>
                <h3
                  className="text-xl text-foreground mb-3 leading-snug"
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontWeight: 700,
                  }}
                >
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tags.map((t) => (
                    <span
                      key={t}
                      className="text-[10px] px-2 py-0.5 border border-border text-muted-foreground tracking-wider uppercase"
                      style={{
                        fontFamily: "'DM Mono', monospace",
                        borderRadius: "2px",
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-1.5 text-xs text-accent opacity-0 group-hover:opacity-100 transition-opacity">
                  <span style={{ fontFamily: "'DM Mono', monospace" }}>
                    View Project
                  </span>
                  <ArrowUpRight size={11} />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FILES / RESOURCES ────────────────────────────────────────────── */}
      <section className="py-28 lg:py-40 border-t border-border px-6 lg:px-16 xl:px-20 max-w-7xl mx-auto">
        <div
          className="text-xs tracking-[0.2em] uppercase text-accent mb-4 flex items-center gap-3"
          style={{ fontFamily: "'DM Mono', monospace" }}
        >
          <span className="w-8 h-px bg-accent inline-block" />
          Resources
        </div>
        <h2
          className="leading-tight text-foreground mb-16"
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(2rem, 4vw, 3rem)",
            fontWeight: 700,
          }}
        >
          Files & Downloads
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-px bg-border">
          {[
            {
              name: "Résumé 2026",
              desc: "PDF — one page, full work history",
              size: "148 KB",
              ext: "PDF",
            },
            {
              name: "Portfolio Deck",
              desc: "Case studies for selected projects",
              size: "4.2 MB",
              ext: "PDF",
            },
            {
              name: "Open Source Contributions",
              desc: "List of public repos and PRs",
              size: "GitHub",
              ext: "MD",
            },
            {
              name: "Design System — Spectra",
              desc: "Storybook docs and Figma library",
              size: "Figma",
              ext: "URL",
            },
            {
              name: "Technical Blog",
              desc: "Writing on engineering and craft",
              size: "12 posts",
              ext: "Blog",
            },
            {
              name: "Code Snippets",
              desc: "Reusable utilities and patterns",
              size: "GitHub Gist",
              ext: "JS/TS",
            },
          ].map((file) => (
            <a
              key={file.name}
              href="#"
              className="group bg-card hover:bg-secondary transition-colors p-7 flex items-start gap-5"
            >
              <div
                className="w-10 h-12 bg-secondary group-hover:bg-accent/10 border border-border flex items-center justify-center flex-shrink-0 transition-colors"
                style={{ borderRadius: "2px" }}
              >
                <span
                  className="text-[9px] text-accent font-medium tracking-wider"
                  style={{ fontFamily: "'DM Mono', monospace" }}
                >
                  {file.ext}
                </span>
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-2 mb-1">
                  <span className="text-sm font-medium text-foreground truncate">
                    {file.name}
                  </span>
                  <ArrowUpRight
                    size={13}
                    className="text-muted-foreground group-hover:text-accent flex-shrink-0 transition-colors"
                  />
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {file.desc}
                </p>
                <span
                  className="text-[10px] text-muted-foreground/60 mt-1.5 block"
                  style={{ fontFamily: "'DM Mono', monospace" }}
                >
                  {file.size}
                </span>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* ─── CONNECT ──────────────────────────────────────────────────────── */}
      <section
        id="connect"
        className="py-28 lg:py-40 border-t border-border"
        style={{ background: "#0A0A0A" }}
      >
        <div className="px-6 lg:px-16 xl:px-20 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-16 lg:gap-24">
            <div>
              <div
                className="text-xs tracking-[0.2em] uppercase text-accent mb-4 flex items-center gap-3"
                style={{ fontFamily: "'DM Mono', monospace" }}
              >
                <span className="w-8 h-px bg-accent inline-block" />
                Connect
              </div>
              <h2
                className="leading-tight text-foreground mb-6"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "clamp(2rem, 4vw, 3rem)",
                  fontWeight: 700,
                }}
              >
                Let&apos;s build
                <br />
                <em>something great.</em>
              </h2>
              <p className="text-base text-muted-foreground leading-relaxed max-w-sm">
                I&apos;m open to senior engineering roles, technical
                co-founder conversations, and select freelance engagements.
                If you have something interesting, I&apos;d love to hear
                about it.
              </p>
              <a
                href="mailto:hello@yoursite.com"
                className="inline-flex items-center gap-2 mt-8 bg-accent text-accent-foreground px-6 py-3 text-sm font-medium hover:bg-accent/90 transition-colors"
                style={{ borderRadius: "2px" }}
              >
                <Mail size={14} />
                Send a Message
              </a>
            </div>

            {/* Social links */}
            <div className="space-y-px bg-border">
              {SOCIALS.map((s) => {
                const Icon = s.icon;
                return (
                  <a
                    key={s.label}
                    href={s.url}
                    target={s.url.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between bg-card hover:bg-secondary transition-colors px-7 py-5"
                  >
                    <div className="flex items-center gap-4">
                      <div
                        className="w-9 h-9 bg-secondary group-hover:bg-accent/10 border border-border flex items-center justify-center transition-colors"
                        style={{ borderRadius: "2px" }}
                      >
                        <Icon size={15} className="text-muted-foreground group-hover:text-accent transition-colors" />
                      </div>
                      <div>
                        <div className="text-sm font-medium text-foreground">
                          {s.label}
                        </div>
                        <div
                          className="text-xs text-muted-foreground mt-0.5"
                          style={{ fontFamily: "'DM Mono', monospace" }}
                        >
                          {s.handle}
                        </div>
                      </div>
                    </div>
                    <ArrowUpRight
                      size={15}
                      className="text-muted-foreground group-hover:text-accent transition-colors"
                    />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ─── FOOTER ───────────────────────────────────────────────────────── */}
      <footer className="border-t border-border px-6 lg:px-16 xl:px-20 py-10 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div
            className="text-xs text-muted-foreground"
            style={{ fontFamily: "'DM Mono', monospace" }}
          >
            © 2026 Your Full Name. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            {["GitHub", "Twitter", "LinkedIn"].map((l) => (
              <a
                key={l}
                href="#"
                className="text-xs text-muted-foreground hover:text-foreground transition-colors"
                style={{ fontFamily: "'DM Mono', monospace" }}
              >
                {l}
              </a>
            ))}
          </div>
          <div
            className="text-xs text-muted-foreground/40"
            style={{ fontFamily: "'DM Mono', monospace" }}
          >
            Built with React + Tailwind
          </div>
        </div>
      </footer>
    </div>
  );
}
