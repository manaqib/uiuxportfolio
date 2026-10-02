import heroBackground from '../assets/hero.jpg'

export default function Hero() {
  return (
    <section
      id="home"
      className="hero-section"
      style={{
        backgroundImage: `url(${heroBackground})`,
        backgroundPosition: 'center right',
      }}
    >
      <div className="hero-grid">
        <div className="hero-copy">
          <p className="eyebrow">Manaqib Shafique</p>
          <h1>
            Designing Interfaces.
            <span>Building Experiences.</span>
          </h1>
          <p className="hero-summary">
            UI/UX-focused frontend developer specializing in responsive interfaces,
            modern web design and scalable React-based experiences.
          </p>
        </div>
      </div>

      <a href="#about" className="scroll-cue" aria-label="Scroll to about section">
        <span>Scroll</span>
        <span className="scroll-indicator" aria-hidden="true" />
      </a>
    </section>
  )
}
