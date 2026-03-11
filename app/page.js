import Image from "next/image";

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
    videoSrc: "https://www.youtube.com/embed/zbSTuEA-xAQ?mute=1&playsinline=1&rel=0",
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
    videoSrc: "https://www.youtube.com/embed/NRuzdGr1ob0?mute=1&playsinline=1&rel=0",
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
    url: "https://github.com/charlie-robison",
    tags: ["JavaScript", "Django REST", "NOAA Data", "Interactive Learning"],
  },
  {
    name: "Social-Plai Screening Platform",
    summary:
      "Developed with a team of software engineers a web application which includes video games which help diagnose children with Autism and ADHD.",
    period: "May 2023 - Aug 2023",
    image: "/images/social-plai-cover.png",
    url: "https://www.linkedin.com/in/charlierobison/",
    tags: ["Healthcare Tech", "Web Applications", "Team Engineering", "Games"],
  },
];

const skillGroups = [
  {
    title: "Top Skills (LinkedIn)",
    items: ["Synthetic Data Generation", "Vector Databases", "Web Scraping"],
  },
  {
    title: "Frontend + Product",
    items: ["JavaScript", "React", "HTML", "CSS", "Workflow Design"],
  },
  {
    title: "Backend + Data",
    items: ["Python", "Django REST Framework", "API Design", "Data Pipelines", "Machine Learning Integration"],
  },
  {
    title: "Infrastructure + Ops",
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
      <div className="noise" aria-hidden="true" />
      <header className="top-nav section-wrap fade-up">
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
      </header>

      <section id="top" className="hero section-wrap">
        <div className="hero-copy fade-up delay-1">
          <p className="eyebrow">CTO | Co-Founder @ Swivel</p>
          <h1>
            Charlie Robison
            <span>Building production-grade AI, data, and backend systems for real-world outcomes.</span>
          </h1>
          <p className="lead">
            CTO and co-founder at Swivel, where I build production-grade AI, data, and backend systems that turn real customer data into actionable decisions.
            My focus is on shipping scalable systems that work in messy, real-world environments.
          </p>
          <div className="cta-row">
            <a className="button primary" href="#contact">
              Let&apos;s Work Together
            </a>
            <a
              className="button ghost"
              href="https://github.com/charlie-robison"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </div>
          <ul className="metric-grid">
            {metrics.map((metric) => (
              <li key={metric.label}>
                <strong>{metric.value}</strong>
                <span>{metric.label}</span>
              </li>
            ))}
          </ul>
        </div>

        <aside className="profile-panel fade-up delay-2">
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
            <p>San Francisco Bay Area</p>
            <a href="mailto:charlierobison480@gmail.com">charlierobison480@gmail.com</a>
            <a
              href="https://www.linkedin.com/in/charlierobison/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn Profile
            </a>
          </div>
        </aside>
      </section>

      <section id="projects" className="section-wrap block">
        <div className="section-heading fade-up">
          <p>Featured Work</p>
          <h2>YC hackathon builds, research tooling, and production-oriented AI systems.</h2>
        </div>
        <div className="project-grid">
          {featuredProjects.map((project, index) => (
            <article
              key={project.name}
              className="project-card fade-up"
              style={{ animationDelay: `${index * 80}ms` }}
            >
              {!project.noMedia && (
                <div className="project-image">
                  {project.videoType === "youtube" ? (
                    <iframe
                      src={project.videoSrc}
                      title={`${project.name} video`}
                      loading="lazy"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen
                    />
                  ) : project.videoType === "local" ? (
                    <video src={project.videoSrc} muted playsInline loop controls preload="metadata" />
                  ) : (
                    <Image src={project.image} alt={project.name} width={760} height={430} />
                  )}
                </div>
              )}
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
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="skills" className="section-wrap block split">
        <div className="section-heading fade-up">
          <p>Skills Snapshot</p>
          <h2>Engineering, delivery, and cross-functional execution from early build to production scale.</h2>
        </div>
        <div className="skill-grid fade-up delay-1">
          {skillGroups.map((group) => (
            <article key={group.title}>
              <h3>{group.title}</h3>
              <div>
                {group.items.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="journey" className="section-wrap block">
        <div className="section-heading fade-up">
          <p>Journey</p>
          <h2>Career progression across startup leadership, enterprise logistics, and research engineering.</h2>
        </div>
        <div className="timeline">
          {journey.map((item, index) => (
            <article key={`${item.title}-${item.period}`} className="fade-up" style={{ animationDelay: `${index * 90}ms` }}>
              <span>{item.period}</span>
              <h3>{item.title}</h3>
              <h4>{item.company}</h4>
              <p>{item.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="contact" className="section-wrap block contact-card fade-up">
        <p>Open to technical leadership, product engineering, and high-impact software collaborations.</p>
        <h2>Let&apos;s build systems that scale, measure what matters, and create real leverage.</h2>
        <div className="cta-row">
          <a className="button primary" href="mailto:charlierobison480@gmail.com">
            Email Me
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
      </section>
    </main>
  );
}
