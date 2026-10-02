import { useEffect, useRef, useState } from 'react'
import projects from '../data/projects'

export default function WorkCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const touchStartX = useRef(0)

  useEffect(() => {
    if (isPaused) {
      return undefined
    }

    const timer = window.setInterval(() => {
      setCurrentIndex((previous) => (previous + 1) % projects.length)
    }, 5000)

    return () => window.clearInterval(timer)
  }, [isPaused])

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'ArrowRight') {
        setCurrentIndex((previous) => (previous + 1) % projects.length)
      }

      if (event.key === 'ArrowLeft') {
        setCurrentIndex(
          (previous) => (previous - 1 + projects.length) % projects.length,
        )
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  const project = projects[currentIndex]

  const goToSlide = (direction) => {
    setCurrentIndex(
      (previous) => (previous + direction + projects.length) % projects.length,
    )
  }

  const handleTouchStart = (event) => {
    touchStartX.current = event.touches[0].clientX
  }

  const handleTouchEnd = (event) => {
    const touchEndX = event.changedTouches[0].clientX
    const distance = touchStartX.current - touchEndX

    if (Math.abs(distance) > 50) {
      goToSlide(distance > 0 ? 1 : -1)
    }
  }

  return (
    <section id="work" className="section-shell work-section">
      <div className="section-heading work-heading">
        <p className="eyebrow">Selected Work</p>

        <div className="carousel-controls" aria-label="Project navigation controls">
          <button
            type="button"
            className="carousel-button"
            aria-label="Previous project"
            onClick={() => goToSlide(-1)}
          >
            Prev
          </button>
          <button
            type="button"
            className="carousel-button"
            aria-label="Next project"
            onClick={() => goToSlide(1)}
          >
            Next
          </button>
        </div>
      </div>

      <div
        className="carousel-shell"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <div className="carousel-counter">
          {String(currentIndex + 1).padStart(2, '0')} / {String(projects.length).padStart(2, '0')}
        </div>

        <div className="project-stage">
          <div className={`project-visual visual-${project.visual}`} aria-label={`${project.title} project preview`}>
            <div className="project-window">
              <div className="window-bar">
                <span />
                <span />
                <span />
              </div>

              <img
                src={project.image}
                alt={`${project.title} preview`}
                className="project-image"
              />
            </div>
          </div>

          <div className="project-details">
            <div className="project-index">{String(currentIndex + 1).padStart(2, '0')}</div>

            <div className="project-copy">
              <p className="project-category">{project.category}</p>
              <h3>{project.title}</h3>
              <p className="project-description">{project.description}</p>

              <div className="project-info-grid">
                <div>
                  <span>Design</span>
                  <strong>{project.designTools.join(' · ')}</strong>
                </div>
                <div>
                  <span>Frontend</span>
                  <strong>{project.technologies.join(' · ')}</strong>
                </div>
              </div>

              <div className="project-footer">
                <span className="project-note">{project.note}</span>
                <a href="#contact" className="inline-link">
                  Explore
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="progress-track" aria-hidden="true">
          <span
            className="progress-fill"
            style={{ width: `${((currentIndex + 1) / projects.length) * 100}%` }}
          />
        </div>
      </div>
    </section>
  )
}
