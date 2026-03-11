import Image from "next/image";

const navLinks = [
  { label: "Work", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Journey", href: "#journey" },
  { label: "Contact", href: "#contact" },
];

const featuredProjects = [
  {
    name: "Hurricane Interactive Web App",
    summary:
      "Built a hurricane path simulator powered by NOAA-derived data, React controls, and a Django REST backend packaged with Docker.",
    image: "/images/hurricane-simulator-cover.png",
    url: "https://github.com/charlie-robison",
    tags: ["React", "Django REST", "Python", "Docker"],
  },
  {
    name: "Social-Plai Gaming Platform",
    summary:
      "Developed real-time multiplayer messaging, invitation flows, and cloud deployment for a health-focused gaming platform.",
    image: "/images/social-plai-cover.png",
    url: "https://github.com/charlie-robison",
    tags: ["React", "Meteor", "MongoDB Atlas", "AWS"],
  },
  {
    name: "Surf Connect",
    summary:
      "Created matching, messaging, and live surf forecast experiences for a full-stack community web application.",
    image: "/images/surf-connect-project-picture.png",
    url: "https://surf-connect.github.io",
    tags: ["React", "Meteor", "MongoDB", "APIs"],
  },
  {
    name: "HI DOE Tracker",
    summary:
      "Contributed to a 10-person team app for legislative bill tracking and testimony approval workflows for Hawaii DOE.",
    image: "/images/hi-doe-home.png",
    url: "https://hi-doe-tracker.github.io/",
    tags: ["JavaScript", "React", "Meteor", "Bootstrap"],
  },
  {
    name: "Mr. Hearty's Adventure",
    summary:
      "Built a complete side-scroller game with custom movement systems, enemy logic, and original 3D modeling work.",
    image: "/images/mr-hearty-picture.png",
    url: "https://github.com/charlie-robison/mr.hearty-3d-sidescroller-game",
    tags: ["C#", "Unity", "Blender", "Game Physics"],
  },
];

const skillGroups = [
  {
    title: "Languages",
    items: ["JavaScript", "Python", "Java", "C/C++", "C#", "HTML", "CSS"],
  },
  {
    title: "Frameworks",
    items: ["React", "Meteor", "Django REST Framework", "Bootstrap"],
  },
  {
    title: "Data + Infra",
    items: ["MongoDB", "MySQL", "Docker", "AWS", "REST APIs"],
  },
  {
    title: "Tooling",
    items: ["GitHub", "Linux", "IntelliJ", "Visual Studio", "Xcode", "Unity 3D"],
  },
];

const journey = [
  {
    period: "2023",
    title: "Software Engineering Intern",
    company: "Hawaii Digital Health Lab",
    detail:
      "Shipped multiplayer messaging features, online gameplay support, and AWS-backed deployment for Social-Plai.",
  },
  {
    period: "2022-2023",
    title: "Research Web Developer",
    company: "Karamperidou Research Group",
    detail:
      "Developed interactive climate visualization UI and backend API services for hurricane simulation experiments.",
  },
  {
    period: "2020-2024",
    title: "B.S. Computer Science",
    company: "University of Hawaii at Manoa",
    detail:
      "Graduated with software engineering, algorithms, systems, and data-focused coursework experience.",
  },
];

const metrics = [
  { label: "Projects Shipped", value: "10+" },
  { label: "Core Tech Stack", value: "React + Python" },
  { label: "Focus", value: "Product-Ready UX" },
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
          <p className="eyebrow">Software Engineer</p>
          <h1>
            Charlie Robison
            <span>Building software people actually enjoy using.</span>
          </h1>
          <p className="lead">
            I design and build full-stack experiences that combine strong engineering, clean interfaces, and real-world impact.
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
            <p>Honolulu, Hawaii</p>
            <a href="mailto:cprobiso@hawaii.edu">cprobiso@hawaii.edu</a>
            <a
              href="https://linkedin.com/in/charlie-robison-32540021b"
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
          <h2>Selected projects across web apps, research systems, and interactive platforms.</h2>
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
          <h2>Modern engineering toolkit from frontend polish to backend reliability.</h2>
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
          <h2>Experience built through team products, research, and delivery-focused execution.</h2>
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
        <p>Open to software engineering opportunities and collaborations.</p>
        <h2>Let&apos;s build something that feels excellent and performs even better.</h2>
        <div className="cta-row">
          <a className="button primary" href="mailto:cprobiso@hawaii.edu">
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
