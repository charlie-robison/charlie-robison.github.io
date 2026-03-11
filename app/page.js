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
      "Design and build the frontend and backend of an interactive web application which runs a machine learning model created by Dr. Christina Karamperidou that takes in a dataset, climatology, and time range and produces plots of pressure blocking frequency as a percentage, plots of time series, and an animation between years of plots.",
    image: "/images/hurricane-simulator-cover.png",
    url: "https://www.linkedin.com/in/charlierobison/",
    tags: ["Climate Data", "Scientific Software", "Model Visualization", "Full Stack"],
  },
  {
    name: "Pacific Hurricane Interactive Simulator",
    summary:
      "Design and build an online interactive simulator using Javascript teaching students how hurricanes form in the Pacific Ocean by predicting their paths under certain conditions. Build a Rest API using Django to send wind data and sea surface temperature data from NOAA datasets through the API to the interactive simulator to generate accurate simulations.",
    image: "/images/hurricane-simulator-cover.png",
    url: "https://github.com/charlie-robison",
    tags: ["JavaScript", "Django REST", "NOAA Data", "Interactive Learning"],
  },
  {
    name: "Social-Plai Screening Platform",
    summary:
      "Developed with a team of software engineers a web application which includes video games which help diagnose children with Autism and ADHD.",
    image: "/images/social-plai-cover.png",
    url: "https://www.linkedin.com/in/charlierobison/",
    tags: ["Healthcare Tech", "Web Applications", "Team Engineering", "Games"],
  },
];

const skillGroups = [
  {
    title: "Top Skills (LinkedIn)",
    items: ["Computer Networking", "Project Management", "Interdisciplinary Collaboration"],
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
