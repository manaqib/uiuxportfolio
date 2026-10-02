const capabilities = [
  'UI/UX Implementation',
  'Responsive Web Design',
  'Design-to-Code',
  'Figma to HTML',
  'Pixel-Accurate Development',
  'React UI Development',
  'Component-Based Architecture',
  'Mobile-First Development',
  'Frontend Optimization',
]

export default function Capabilities() {
  return (
    <section className="section-shell capabilities-section">
      <div className="section-heading">
        <p className="eyebrow">Capabilities</p>
      </div>

      <div className="capability-list" aria-label="Areas of expertise">
        {capabilities.map((skill, index) => (
          <div key={skill} className="capability-item">
            <span>{String(index + 1).padStart(2, '0')}</span>
            <p>{skill}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
