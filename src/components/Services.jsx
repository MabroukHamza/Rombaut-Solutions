import { useNavigate } from 'react-router-dom'
import { useLang } from '../context/LanguageContext'
import { useReveal } from '../hooks/useReveal'
import { revealTransition, staggerDelay, cardHoverIn, cardHoverOut } from '../styles/reveal'

const servicesData = {
  nl: [
    {
      icon: '💻',
      title: 'Laptop Reparatie',
      items: ['Hardware diagnostics', 'Scherm & toetsenbord reparatie', 'Virusverwijdering', 'Prestatie-optimalisatie'],
      route: '/laptop-repair',
      cta: 'Meer info',
    },
    {
      icon: '⚙️',
      title: 'Setup & Upgrades',
      items: ['Nieuwe laptop instellen', 'RAM & SSD upgrades', 'Software installatie', 'Data migratie'],
      route: '/setup-upgrades',
      cta: 'Meer info',
    },
    {
      icon: '📱',
      title: 'Custom GSM Service',
      items: ['Persoonlijk service plan', 'Probleemoplossing', 'App & opslagbeheer', 'Privacy telefoons'],
      route: '/custom-gsm',
      cta: 'Meer info',
    },
    {
      icon: '🌐',
      title: 'Digitale Oplossingen',
      items: ['Websites & landingspagina\'s', 'AI tools integratie', 'Bedrijfssystemen', 'IT ondersteuning'],
      route: '/digital-solutions',
      cta: 'Meer info',
    },
  ],
  en: [
    {
      icon: '💻',
      title: 'Laptop Repair',
      items: ['Hardware diagnostics', 'Screen & keyboard repair', 'Virus removal', 'Performance cleanup'],
      route: '/laptop-repair',
      cta: 'Learn More',
    },
    {
      icon: '⚙️',
      title: 'Setup & Upgrades',
      items: ['New laptop setup', 'RAM & SSD upgrades', 'Software installation', 'Data migration'],
      route: '/setup-upgrades',
      cta: 'Learn More',
    },
    {
      icon: '📱',
      title: 'Custom GSM Service',
      items: ['Custom service plan per client', 'Troubleshooting', 'App & storage management', 'Privacy phones'],
      route: '/custom-gsm',
      cta: 'Learn More',
    },
    {
      icon: '🌐',
      title: 'Digital Solutions',
      items: ['Websites & landing pages', 'AI tools integration', 'Business systems', 'IT support'],
      route: '/digital-solutions',
      cta: 'Learn More',
    },
  ],
}

const labels = {
  nl: { what: '— Wat We Doen —', title: 'Onze Services' },
  en: { what: '— What We Do —', title: 'Our Services' },
}

function Services() {
  const navigate = useNavigate()
  const { lang } = useLang()
  const services = servicesData[lang]
  const l = labels[lang]
  const [gridRef, gridVisible] = useReveal()

  return (
    <section id="services" style={{ padding: '6rem 1.5rem', maxWidth: '1100px', margin: '0 auto', scrollMarginTop: '4.5rem', transition: 'background 0.3s' }}>

      <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <p style={{ fontSize: '0.7rem', letterSpacing: '0.4em', color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
          {l.what}
        </p>
        <h2 style={{ fontFamily: 'Georgia, Times New Roman, serif', fontSize: '2rem', fontWeight: '700', color: 'var(--gold)', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '1rem' }}>
          {l.title}
        </h2>
        <div style={{ background: 'linear-gradient(to right, transparent, var(--gold), transparent)', height: '1px', width: '12rem', margin: '0 auto' }} />
      </div>

      <div ref={gridRef} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.5rem' }}>
        {services.map((service, i) => (
          <div
            key={service.title}
            onClick={() => navigate(service.route)}
            className={`reveal ${gridVisible ? 'is-visible' : ''}`}
            style={{
              border: '1px solid var(--border-card)',
              padding: '2rem 1.5rem',
              background: 'var(--bg-card)',
              transition: revealTransition,
              transitionDelay: staggerDelay(gridVisible, i),
              cursor: 'pointer',
              position: 'relative',
            }}
            onMouseEnter={cardHoverIn}
            onMouseLeave={cardHoverOut}
          >
            <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>{service.icon}</div>
            <h3 style={{
              fontFamily: 'Georgia, Times New Roman, serif',
              fontSize: '1rem',
              fontWeight: '700',
              color: 'var(--gold)',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              marginBottom: '1rem',
            }}>
              {service.title}
            </h3>
            <div style={{ width: '2rem', height: '1px', background: 'var(--gold-dark)', marginBottom: '1rem' }} />
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, marginBottom: '1.5rem' }}>
              {service.items.map((item) => (
                <li key={item} style={{
                  fontSize: '0.8rem',
                  color: 'var(--text-secondary)',
                  letterSpacing: '0.05em',
                  paddingBottom: '0.4rem',
                  lineHeight: '1.6',
                }}>
                  · {item}
                </li>
              ))}
            </ul>
            <span style={{
              fontSize: '0.65rem',
              letterSpacing: '0.2em',
              color: 'var(--gold)',
              textTransform: 'uppercase',
              borderBottom: '1px solid var(--gold-dark)',
              paddingBottom: '2px',
            }}>
              {service.cta}
            </span>
          </div>
        ))}
      </div>

      <div style={{ textAlign: 'center', marginTop: '3rem' }}>
        <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', letterSpacing: '0.2em', textTransform: 'uppercase' }}>
          📍 Lokeren · Gent · Serskamp · Wetteren
        </p>
      </div>

    </section>
  )
}

export default Services
