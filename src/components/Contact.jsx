const details = [
  {
    label: 'Email',
    value: 'manaqibs@gmail.com',
    href: 'mailto:manaqibs@gmail.com',
  },
  {
    label: 'Phone',
    value: '+92 (332) 1521827',
    href: 'tel:+923321521827',
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/manaqibshafique',
    href: 'www.linkedin.com/in/manaqibshafique',
  },
]

export default function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-inner">
        <p className="eyebrow">Contact</p>
        <h2>Let&apos;s Build Something Great.</h2>

        <div className="contact-grid">
          <div className="contact-block">
            <p className="contact-label">Name</p>
            <p className="contact-value">Manaqib Shafique</p>
          </div>

          {details.map((item) => (
            <div key={item.label} className="contact-block">
              <p className="contact-label">{item.label}</p>
              <a href={item.href} target={item.href.startsWith('http') ? '_blank' : undefined} rel={item.href.startsWith('http') ? 'noreferrer' : undefined} className="contact-value contact-link">
                {item.value}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
