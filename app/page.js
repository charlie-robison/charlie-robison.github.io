import Image from "next/image";

const navLinks = [
  { label: "Work", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Journey", href: "#journey" },
  { label: "Contact", href: "#contact" },
];

const featuredProjects = [
  {
    name: "Atmospheric Blocking Analytics Platform",
    summary:
      "Developed a full-stack scientific application that runs climate models and generates pressure-blocking plots, time-series views, and animation outputs.",
    image: "/images/hurricane-simulator-cover.png",
    url: "https://www.linkedin.com/in/charlierobison/",
    tags: ["Climate Data", "Scientific Software", "Model Visualization", "Full Stack"],
  },
  {
    name: "Pacific Hurricane Interactive Simulator",
    summary:
      "Built an educational web simulator backed by NOAA wind and sea-surface data exposed through a Django REST API for realistic prediction behavior.",
    image: "/images/hurricane-simulator-cover.png",
    url: "https://github.com/charlie-robison",
    tags: ["JavaScript", "Django REST", "NOAA Data", "Interactive Learning"],
  },
  {
    name: "Social-Plai Screening Platform",
    summary:
      "Collaborated with software engineers to build a web platform with games used for early autism and ADHD screening in children.",
    image: "/images/social-plai-cover.png",
    url: "https://www.linkedin.com/in/charlierobison/",
    tags: ["Healthcare Tech", "Web Applications", "Team Engineering", "Games"],
  },
];

const skillGroups = [
  {
    title: "Leadership + Execution",
    items: ["Project Management", "Interdisciplinary Collaboration", "Product Thinking", "System Ownership"],
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
      "Leading engineering for AI, data, and backend systems focused on churn prediction and retention strategy for subscription businesses.",
  },
  {
    period: "Apr 2024 - Dec 2025",
    title: "Full Stack Developer",
    company: "Hawaii Foodservice Alliance LLC",
    detail:
      "Delivered multi-island logistics software, including a transportation management platform and a driver app used daily in operations.",
  },
  {
    period: "Feb 2024 - Apr 2024",
    title: "Web Application Developer",
    company: "Business Solution Technologies",
    detail:
      "Built new frontend and backend components for internal and client-facing web applications.",
  },
  {
    period: "Jan 2023 - May 2024",
    title: "Full Stack Web Application Developer",
    company: "Karamperidou Research Group",
    detail:
      "Built climate research software and educational simulators; contributions were acknowledged in a peer-reviewed Nature Climate & Earth Science publication.",
  },
  {
    period: "May 2023 - Aug 2023",
    title: "Web Application Developer",
    company: "Hawaii Digital Health Lab",
    detail:
      "Helped develop a game-based web application for early autism and ADHD diagnostic support.",
  },
  {
    period: "2019 - 2024",
    title: "Bachelor's Degree, Computer Science",
    company: "University of Hawaii at Manoa",
    detail:
      "Completed computer science studies after beginning undergraduate coursework at UC Irvine.",
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
            Software engineer and startup technical leader with experience across logistics platforms, climate research tools, and health-tech applications.
            I focus on shipping scalable systems that perform under messy, real-world constraints.
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
          <h2>Selected systems spanning retention AI, logistics software, and scientific web applications.</h2>
        </div>
        <div className="project-grid">
          {featuredProjects.map((project, index) => (
            <article
              key={project.name}
              className="project-card fade-up"
              style={{ animationDelay: `${index * 80}ms` }}
            >
              <div className="project-image">
                <Image src={project.image} alt={project.name} width={760} height={430} />
              </div>
              <div className="project-body">
                <h3>{project.name}</h3>
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
