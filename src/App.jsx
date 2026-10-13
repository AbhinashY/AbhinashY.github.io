import "./App.css";
import PitchSequencing from "./components/pitch-sequencing/PitchSequencing";

const projects = [
  {
    number: "01",
    category: "DATA ANALYTICS",
    title: "Baseball Pitch Sequence Analysis",
    description:
      "Analyzed pitcher sequence patterns to identify sequencing tendencies and how pitch selection changes by handedness, two-strike situations, and count leverage.",
    tools: ["Python", "Pandas", "Statcast", "React"],
    link: "#pitch-sequencing",
    linkLabel: "View Project",
  },
  {
    number: "02",
    category: "MACHINE LEARNING",
    title: "Tennis Match Prediction — Roland Garros",
    description:
      "Built a decision tree model to predict likely match winners based on player and match variables.",
    tools: ["Python", "Pandas", "Scikit-learn", "Excel"],
    link: null,
    linkLabel: "Coming Soon",
  },
];

const skills = [
  "SQL",
  "Python",
  "Excel",
  "Tableau",
  "Power BI",
  "Pandas",
  "PostgreSQL",
  "MySQL",
];

function App() {
  return (
    <div className="portfolio">
      <nav className="navbar">
        <a href="#home" className="brand">
          AY<span>.</span>
        </a>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#contact" className="nav-contact">
            Contact <span>↗</span>
          </a>
        </div>
      </nav>

      <main>
        <section id="home" className="hero">
          <div className="hero-content">
            <div className="availability">
              <span className="status-dot" />
              ASPIRING DATA ANALYST
            </div>

            <p className="eyebrow">HELLO, I'M</p>

            <h1>
              Abhinash
              <br />
              <span>Yonghang.</span>
            </h1>

            <h2>
              SQL <span>/</span> Python <span>/</span> Tableau <span>/</span> Power BI
            </h2>

            <p className="hero-description">
              Information Systems graduate with experience in data validation,
              reporting, and analytics. I turn raw data into meaningful insights
              through analysis, visualization, and data-driven problem solving.
            </p>

            <div className="hero-actions">
              <a href="#projects" className="button button-primary">
                Explore My Work <span>↗</span>
              </a>

              <a
                href="https://github.com/YOUR-USERNAME"
                target="_blank"
                rel="noreferrer"
                className="button button-secondary"
              >
                GitHub Profile <span>↗</span>
              </a>
            </div>

            <div className="hero-footer">
              <span>BASED IN THE UNITED STATES</span>
              <span>OPEN TO OPPORTUNITIES</span>
            </div>
          </div>

          <div className="hero-visual" aria-hidden="true">
            <div className="visual-grid" />
            <div className="visual-circle circle-one" />
            <div className="visual-circle circle-two" />

            <div className="data-card">
              <div className="data-card-header">
                <span>DATA / INSIGHTS</span>
                <span className="orange-dot" />
              </div>

              <div className="chart-bars">
                {[36, 57, 43, 76, 55, 89, 67, 100, 72, 84].map((height, index) => (
                  <div
                    key={index}
                    className={index === 7 ? "bar active" : "bar"}
                    style={{ height: `${height}%` }}
                  />
                ))}
              </div>

              <div className="chart-footer">
                <span>ANALYZE.</span>
                <span>VISUALIZE.</span>
                <span>DECIDE.</span>
              </div>
            </div>

            <div className="floating-label label-top">
              <span>01</span> SQL & ANALYTICS
            </div>

            <div className="floating-label label-bottom">
              <span>02</span> PYTHON & BI
            </div>

            <div className="visual-caption">TURNING DATA INTO VALUE.</div>
          </div>
        </section>

        <section id="projects" className="section projects-section">
          <div className="section-heading">
            <div>
              <p className="eyebrow">WHAT I'VE BEEN WORKING ON</p>
              <h2>
                Selected <span>Projects.</span>
              </h2>
            </div>

            <span className="section-count">[ 02 PROJECTS ]</span>
          </div>

          <div className="project-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.number}>
                <div className="project-top">
                  <span className="project-number">{project.number}</span>
                  <span className="project-category">{project.category}</span>
                  <span className="project-arrow">↗</span>
                </div>

                <div className="project-body">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                </div>

                <div className="project-bottom">
                  <div className="tool-list">
                    {project.tools.map((tool) => (
                      <span className="tool-tag" key={tool}>
                        {tool}
                      </span>
                    ))}
                  </div>

                  {project.link ? (
                    <a href={project.link} className="project-link">
                      {project.linkLabel} <span>↗</span>
                    </a>
                  ) : (
                    <span className="project-link disabled-link">
                      {project.linkLabel}
                    </span>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>

        <PitchSequencing />

        <section id="skills" className="section skills-section">
          <div className="section-heading">
            <div>
              <p className="eyebrow">MY TECHNICAL TOOLKIT</p>
              <h2>
                Skills & <span>Tools.</span>
              </h2>
            </div>
          </div>

          <div className="skills-layout">
            <p className="skills-intro">
              The tools I use to explore data, solve problems, and communicate
              findings clearly.
            </p>

            <div className="skills-list">
              {skills.map((skill, index) => (
                <span className="skill-pill" key={skill}>
                  <span className="skill-index">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  {skill}
                  <span className="skill-arrow">↗</span>
                </span>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="contact-section">
          <p className="eyebrow">HAVE A PROJECT IN MIND?</p>

          <h2>
            Let's make data
            <br />
            <span>make sense.</span>
          </h2>

          <p>
            I'm interested in data analytics opportunities and projects where I
            can turn information into actionable insights.
          </p>

          <div className="contact-actions">
            <a
              href="mailto:abhinashyonghangs@yahoo.com"
              className="button button-primary"
            >
              Get In Touch <span>↗</span>
            </a>

            <span className="button button-secondary disabled-link">
              GitHub <span>↗</span>
            </span>
          </div>
        </section>
      </main>

      <footer className="footer">
        <a href="#home" className="brand">
          AY<span>.</span>
        </a>

        <p>Designed & built by Abhinash Yonghang.</p>

        <a href="#home" className="back-to-top">
          BACK TO TOP ↑
        </a>
      </footer>
    </div>
  );
}

export default App;