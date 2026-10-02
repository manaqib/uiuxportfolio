const technologyGroups = [
  {
    label: 'Design',
    items: ['Figma', 'Adobe Photoshop'],
  },
  {
    label: 'Frontend',
    items: ['HTML5', 'CSS3', 'JavaScript', 'React.js'],
  },
  {
    label: 'CSS / UI',
    items: ['Tailwind CSS', 'SCSS/SASS', 'Bootstrap'],
  },
]

export default function Technologies() {
  return (
    <section id="skills" className="section-shell skills-section">
      <div className="section-heading">
        <p className="eyebrow">Technologies & Tools</p>
      </div>

      <div className="technology-groups">
        {technologyGroups.map((group) => (
          <div key={group.label} className="technology-group">
            <p className="technology-label">{group.label}</p>
            <div className="technology-list" aria-label={`${group.label} tools`}>
              {group.items.map((item) => (
                <span key={item} className="word-item">
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
{/* 
      <div className="sample-work-strip" aria-label="Sample portfolio previews">
        {sampleWork.map((item) => (
          <article key={item.title} className={`sample-work-card ${item.variant}`}>
            <div className="sample-card-topbar">
              <span />
              <span />
              <span />
            </div>

            <div className="sample-card-visual">
              <div className="sample-card-banner" />
              <div className="sample-card-body">
                <div className="sample-card-column" />
                <div className="sample-card-panel" />
              </div>
            </div>

            <p>{item.title}</p>
          </article>
        ))}
      </div> */}
    </section>
  )
}
