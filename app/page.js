import Image from "next/image";
import ProjectMedia from "./components/ProjectMedia";
import ParticleBackground from "./components/ParticleBackground";
import ScrollReveal from "./components/ScrollReveal";
import GlowCard from "./components/GlowCard";

const navLinks = [
  { label: "Work", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Journey", href: "#journey" },
  { label: "Contact", href: "#contact" },
];

const featuredProjects = [
  {
    name: "Arceus (Robot Training Generation) - YC x Google DeepMind Hackathon",
    summary:
      "Developed a multi-agent vision simulation using Gemini VLMs where attacker and defender agents competed in a 3D environment using live camera streams. The models learned from each round by storing summarized experiences in context, creating synthetic data for reinforcement learning training in MuJoCo robotics environments.",
    period: "Mar 2026 - Mar 2026",
    image: "/images/social-plai-cover.png",
    videoType: "local",
    videoSrc: "/videos/arceus-demo.mp4",
    url: "https://github.com/charlie-robison/arceus",
    tags: ["Reinforcement Learning", "VLM", "Robotics", "3D Rendering", "Artificial Intelligence (AI)", "Software Development"],
  },
  {
    name: "Bio Fact (Biology Research Paper Fact Checker) - YC Hackathon",
    summary:
      "Built an AI-powered research validation system at a YC Bio Hackathon that fact-checks scientific papers by reproducing their experiments. AI agents extract claims from papers, generate synthetic datasets matching reported patterns, and automatically structure experiments to run on Tamarind cell models via MCP tool calls -- allowing rapid verification of biological research.",
    period: "Mar 2026 - Mar 2026",
    noMedia: true,
    image: "/images/hi-doe-home.png",
    url: "https://github.com/charlie-robison/bio-fact",
    tags: ["Synthetic Data Generation", "Model Context Protocol (MCP)", "Interdisciplinary Collaboration", "AI Agents", "Software Development"],
  },
  {
    name: "GTFO (Automatic Moving Tool) - YC Hackathon",
    summary:
      "Built a multi-agent browser automation system that can autonomously move someone to a new city: discovering housing, submitting applications, updating addresses across websites, ordering a U-Haul, and furnishing the new home via Amazon using image-based inventory estimation. Demonstrates how coordinated AI agents can automate complex life logistics end-to-end.",
    period: "Feb 2026 - Feb 2026",
    image: "/images/surf-connect-project-picture.png",
    videoType: "youtube",
    videoSrc: "https://www.youtube.com/embed/zbSTuEA-xAQ?autoplay=1&mute=1&playsinline=1&rel=0&enablejsapi=1",
    url: "https://github.com/charlie-robison/gtfo",
    tags: ["Browser Agents", "AI Agents", "Model Context Protocol (MCP)", "Artificial Intelligence (AI)", "OpenClaw"],
  },
  {
    name: "Pythia (Polymarket Autonomous Trader) - YC Hackathon",
    summary:
      "Built a ChatGPT MCP application that enables users to discover and trade prediction markets on Polymarket using AI agents. The system uses a vector database to semantically search markets and channels based on user queries, then deploys AI agents to analyze market conditions and generate trading recommendations. It also includes an automated trading mode that executes trades on the highest-probability opportunities identified by the agents.",
    period: "Feb 2026 - Feb 2026",
    image: "/images/hurricane-simulator-cover.png",
    videoType: "youtube",
    videoSrc: "https://www.youtube.com/embed/NRuzdGr1ob0?autoplay=1&mute=1&playsinline=1&rel=0&enablejsapi=1",
    url: "https://github.com/charlie-robison/pythia",
    tags: ["Model Context Protocol (MCP)", "Vector Databases", "AI Agents", "Web Scraping", "Software Development"],
  },
  {
    name: "PaleoBlockNet Web Interface",
    summary:
      "A web application which utilizes the PaleoBlockNet v1.0 Deep Learning model for reconstructing Northern Hemisphere atmospheric blocking. Acknowledged in a Nature Paper: https://www.nature.com/articles/s43247-024-01687-y",
    period: "May 2023 - May 2024",
    image: "/images/paleo-block.png",
    url: "https://www.nature.com/articles/s43247-024-01687-y",
    tags: ["Data Science", "Software Development", "Project Management", "Technical Leadership", "Interdisciplinary Collaboration"],
  },
  {
    name: "Pacific Hurricane Interactive Simulator",
    summary:
      "Design and build an online interactive simulator using Javascript teaching students how hurricanes form in the Pacific Ocean by predicting their paths under certain conditions. Build a Rest API using Django to send wind data and sea surface temperature data from NOAA datasets through the API to the interactive simulator to generate accurate simulations.",
    period: "Jan 2023 - May 2024",
    image: "/images/hurricane-simulator-cover.png",
    videoType: "local",
    videoSrc: "/videos/Hurricane-Simulator-Demo.mp4",
    url: "https://github.com/charlie-robison",
    tags: ["JavaScript", "Django REST", "NOAA Data", "Interactive Learning"],
  },
  {
    name: "Social-Plai Screening Platform",
    summary:
      "Developed with a team of software engineers a web application which includes video games which help diagnose children with Autism and ADHD.",
    period: "May 2023 - Aug 2023",
    image: "/images/social-plai-cover.png",
    videoType: "local",
    videoSrc: "/videos/Social-Plai-Demo.mp4",
    url: "https://www.linkedin.com/in/charlierobison/",
    tags: ["Healthcare Tech", "Web Applications", "Team Engineering", "Games"],
  },
];

const skillGroups = [
  {
    title: "Top Skills (LinkedIn)",
    icon: "star",
    items: ["Synthetic Data Generation", "Vector Databases", "Web Scraping"],
  },
  {
    title: "Frontend + Product",
    icon: "layout",
    items: ["JavaScript", "React", "HTML", "CSS", "Workflow Design"],
  },
  {
    title: "Backend + Data",
    icon: "server",
    items: ["Python", "Django REST Framework", "API Design", "Data Pipelines", "Machine Learning Integration"],
  },
  {
    title: "Infrastructure + Ops",
    icon: "cloud",
    items: ["AWS", "Docker", "MongoDB", "MySQL", "Computer Networking"],
  },
];

const journey = [
  {
    period: "Sep 2025 - Present",
    title: "CTO | Co-Founder",
    company: "Swivel Churn",
    detail:
      "For subscription companies that implement retention practices to reduce churn, Swivel creates synthetic customer segments replicating their target audience, exactly why different customer segments might churn and identify the best strategies to retain.",
    active: true,
  },
  {
    period: "Apr 2024 - Dec 2025",
    title: "Full Stack Developer",
    company: "Hawaii Foodservice Alliance LLC",
    detail:
      "Work closely with operations to design and develop a series of software applications to improve our logistics and distribution problems. Built a full end-to-end Transportation Management System software application which includes a Driver's application for deliveries/pickups, route optimization scheduling, metrics for optimizing inefficiencies, and pages for data clean up.",
  },
  {
    period: "Feb 2024 - Apr 2024",
    title: "Web Application Developer",
    company: "Business Solution Technologies",
    detail:
      "Develop the frontend and backend for new components for web applications and software.",
  },
  {
    period: "Jan 2023 - May 2024",
    title: "Full Stack Web Application Developer",
    company: "Karamperidou Research Group",
    detail:
      "Design and build the frontend and backend of an interactive web application which runs a machine learning model created by Dr. Christina Karamperidou that takes in a dataset, climatology, and time range and produces plots of pressure blocking frequency as a percentage, plots of time series, and an animation between years of plots. Contributions acknowledged in a Nature Climate & Earth Science publication.",
  },
  {
    period: "May 2023 - Aug 2023",
    title: "Web Application Developer",
    company: "Hawaii Digital Health Lab",
    detail:
      "Developed with a team of software engineers a web application which includes video games which help diagnose children with Autism and ADHD.",
  },
  {
    period: "2019 - 2024",
    title: "Bachelor's Degree, Computer Science",
    company: "University of Hawaii at Manoa",
    detail:
      "Bachelor's degree, Computer Science.",
  },
];

const metrics = [
  { label: "Current Role", value: "CTO & Co-Founder" },
  { label: "Production Focus", value: "AI + Data Systems" },
  { label: "Domain Impact", value: "Logistics + Climate + Health" },
];

export default function Home() {
  return (
    <main>
      <ParticleBackground />
      <div className="noise" aria-hidden="true" />

      {/* ───── NAV ───── */}
      <header className="top-nav section-wrap">
        <a className="logo" href="#top">
          CR
        </a>
        <nav>
          {navLinks.map((item) => (
            <a key={item.label} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
        <a
          className="nav-cta"
          href="#contact"
        >
          Get in Touch
        </a>
      </header>

      {/* ───── HERO ───── */}
      <section id="top" className="hero section-wrap">
        <div className="hero-copy">
          <ScrollReveal>
            <div className="status-badge">
              <span className="status-dot" />
              Available for opportunities
            </div>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <p className="eyebrow">CTO | Co-Founder @ Swivel</p>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <h1>
              <span className="gradient-text">Charlie Robison</span>
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={300}>
            <p className="hero-subtitle">
              Building production-grade AI, data, and backend systems for real-world outcomes.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={400}>
            <p className="lead">
              CTO and co-founder at Swivel, where I build production-grade AI, data, and backend systems that turn real customer data into actionable decisions.
              My focus is on shipping scalable systems that work in messy, real-world environments.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={500}>
            <div className="cta-row">
              <a className="button primary magnetic" href="#contact">
                <span>Let&apos;s Work Together</span>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </a>
              <a
                className="button ghost"
                href="https://github.com/charlie-robison"
                target="_blank"
                rel="noreferrer"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                GitHub
              </a>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={600}>
            <ul className="metric-grid">
              {metrics.map((metric) => (
                <li key={metric.label}>
                  <strong>{metric.value}</strong>
                  <span>{metric.label}</span>
                </li>
              ))}
            </ul>
          </ScrollReveal>
        </div>

        <ScrollReveal delay={300} direction="left">
          <aside className="profile-panel">
            <div className="profile-image-wrap">
              <Image
                src="/images/profile-picture.jpg"
                alt="Charlie Robison"
                width={420}
                height={520}
                priority
              />
            </div>
            <div className="profile-meta">
              <p className="location-tag">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                San Francisco Bay Area
              </p>
              <a href="mailto:charlierobison480@gmail.com">charlierobison480@gmail.com</a>
              <a
                href="https://www.linkedin.com/in/charlierobison/"
                target="_blank"
                rel="noreferrer"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                LinkedIn Profile
              </a>
            </div>
          </aside>
        </ScrollReveal>
      </section>

      {/* ───── PROJECTS ───── */}
      <section id="projects" className="section-wrap block">
        <ScrollReveal>
          <div className="section-heading">
            <div className="section-label">
              <span className="label-line" />
              Featured Work
            </div>
            <h2>YC hackathon builds, research tooling, and production-oriented AI systems.</h2>
          </div>
        </ScrollReveal>

        <div className="project-grid">
          {featuredProjects.map((project, index) => (
            <ScrollReveal key={project.name} delay={index * 100}>
              <GlowCard className="project-card">
                <ProjectMedia project={project} />
                <div className="project-body">
                  <h3>{project.name}</h3>
                  <p className="project-period">{project.period}</p>
                  <p>{project.summary}</p>
                  <ul>
                    {project.tags.map((tag) => (
                      <li key={tag}>{tag}</li>
                    ))}
                  </ul>
                  <a href={project.url} target="_blank" rel="noreferrer">
                    Explore Project
                    <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </a>
                </div>
              </GlowCard>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* ───── SKILLS ───── */}
      <section id="skills" className="section-wrap block">
        <ScrollReveal>
          <div className="section-heading">
            <div className="section-label">
              <span className="label-line" />
              Skills Snapshot
            </div>
            <h2>Engineering, delivery, and cross-functional execution from early build to production scale.</h2>
          </div>
        </ScrollReveal>

        <div className="skill-grid">
          {skillGroups.map((group, index) => (
            <ScrollReveal key={group.title} delay={index * 120}>
              <GlowCard className="skill-card">
                <h3>{group.title}</h3>
                <div className="skill-tags">
                  {group.items.map((item) => (
                    <span key={item} className="skill-tag">{item}</span>
                  ))}
                </div>
              </GlowCard>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* ───── JOURNEY ───── */}
      <section id="journey" className="section-wrap block">
        <ScrollReveal>
          <div className="section-heading">
            <div className="section-label">
              <span className="label-line" />
              Journey
            </div>
            <h2>Career progression across startup leadership, enterprise logistics, and research engineering.</h2>
          </div>
        </ScrollReveal>

        <div className="timeline">
          {journey.map((item, index) => (
            <ScrollReveal key={`${item.title}-${item.period}`} delay={index * 100}>
              <GlowCard className={`timeline-card ${item.active ? "timeline-active" : ""}`}>
                <div className="timeline-header">
                  <span className="timeline-period">{item.period}</span>
                  {item.active && <span className="active-badge">Current</span>}
                </div>
                <h3>{item.title}</h3>
                <h4>{item.company}</h4>
                <p>{item.detail}</p>
              </GlowCard>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* ───── CONTACT ───── */}
      <section id="contact" className="section-wrap block">
        <ScrollReveal>
          <div className="contact-card">
            <div className="contact-orb contact-orb-1" />
            <div className="contact-orb contact-orb-2" />
            <p className="contact-eyebrow">Open to technical leadership, product engineering, and high-impact software collaborations.</p>
            <h2>Let&apos;s build systems that scale, measure what matters, and create real leverage.</h2>
            <div className="cta-row">
              <a className="button primary" href="mailto:charlierobison480@gmail.com">
                <span>Email Me</span>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </a>
              <a
                className="button ghost"
                href="https://github.com/charlie-robison"
                target="_blank"
                rel="noreferrer"
              >
                View GitHub
              </a>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* ───── FOOTER ───── */}
      <footer className="site-footer section-wrap">
        <p>&copy; {new Date().getFullYear()} Charlie Robison. Built with Next.js</p>
      </footer>
    </main>
  );
}
