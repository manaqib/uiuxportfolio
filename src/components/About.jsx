const expertise = [
  'UI design implementation',
  'Responsive web design',
  'HTML5',
  'CSS3',
  'Tailwind CSS',
  'SCSS/SASS',
  'Bootstrap',
  'React.js',
  'Component-based UI development',
  'Responsive layouts',
  'Figma-to-HTML conversion',
  'Pixel-accurate frontend implementation',
]

export default function About() {
  return (
    <section id="about" className="section-shell about-section">
      <div className="section-heading">
        <p className="eyebrow">About</p>
        <h2>14+ Years of UI & Frontend Experience</h2>
      </div>

      <div className="about-layout">
        <p className="about-copy">
          Senior UI/frontend developer crafting premium digital experiences that turn
          design intent into measurable product clarity. I work across product,
          marketing and brand systems to build interfaces that feel both polished and
          scalable.
        </p>

        <ul className="expertise-list" aria-label="Key skills and technologies">
          {expertise.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </section>
  )
}
