import './App.css'

function App() {
  const projects = [
    {
      title: 'Baseball Pitch Sequence Analysis',
      description:
        'Analyzed pitcher sequence patterns to identify tendencies and understand how pitch selection changes across game situations.',
      tools: 'Python, Pandas, SQL',
      github: '#',
    },
    {
      title: 'Tennis Match Prediction — Roland Garros',
      description:
        'Built a decision tree model to predict likely match winners based on player and match variables.',
      tools: 'Python, Pandas, Scikit-learn, Excel',
      github: '#',
    },
  ]

  return (
    <div className="site">
      <header className="hero">
        <h1>Abhinash Yonghang</h1>
        <p className="subtitle">
          Aspiring Data Analyst | SQL | Python | Tableau | Power BI
        </p>
        <p className="intro">
          Information Systems graduate with experience in data validation,
          reporting, and analytics. I build projects using SQL, Python, Excel,
          Tableau, and Power BI to turn data into insights.
        </p>
      </header>

      <section className="section">
        <h2>Projects</h2>
        <div className="project-grid">
          {projects.map((project, index) => (
            <div className="card" key={index}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <p><strong>Tools:</strong> {project.tools}</p>
              <a href={project.github} target="_blank" rel="noreferrer">
                View GitHub Repo
              </a>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <h2>Skills</h2>
        <ul className="skills">
          <li>SQL</li>
          <li>Python</li>
          <li>Excel</li>
          <li>Tableau</li>
          <li>Power BI</li>
          <li>Pandas</li>
          <li>PostgreSQL</li>
          <li>MySQL</li>
        </ul>
      </section>

      <section className="section">
        <h2>Resume</h2>
        <p>Add a PDF resume link here later.</p>
      </section>

      <section className="section">
        <h2>Contact</h2>
        <p>Email: abhinashyonghangs@yahoo.com</p>
        <p>Location: Baltimore, MD</p>
        <p>GitHub: Add your GitHub link here</p>
        <p>LinkedIn: Add your LinkedIn link here</p>
      </section>
    </div>
  )
}

export default App