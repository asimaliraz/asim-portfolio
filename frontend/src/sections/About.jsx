import { useReveal } from '../hooks/useReveal'

const stats = [
  { number: '10+', label: 'Projects' },
  { number: '3+', label: 'Years Experience' },
  { number: '40+', label: 'GitHub Commits' },
  { number: '∞', label: 'Cups of Coffee' },
]

export default function About() {
  const ref1 = useReveal()
  const ref2 = useReveal()
  const ref3 = useReveal()

  return (
    <section id="about" style={{ padding: '110px 60px', maxWidth: 1200, margin: '0 auto', position: 'relative', zIndex: 1 }}>
      <div ref={ref1} className="reveal">
        <div className="section-label">Who I am</div>
        <h2 style={{
          fontFamily: 'var(--font-head)', fontSize: 'clamp(36px,5vw,60px)',
          fontWeight: 800, lineHeight: 1.05, letterSpacing: '-2px', marginBottom: 60,
        }}>
          About <span style={{ color: 'var(--accent)' }}>Me</span>
        </h2>
      </div>

      <div style={{
        display: 'grid', gridTemplateColumns: '1fr 1fr',
        gap: 50, alignItems: 'start',
      }} className="about-grid">

        {/* Photo side */}
<div ref={ref2} className="reveal" style={{ position: 'relative' }}>
  <div
    style={{
      width: '100%',
      aspectRatio: '4/5',
      borderRadius: 24,
      overflow: 'hidden',
      border: '1px solid var(--border2)',
      position: 'relative',
    }}
  >
    <img
      src="/profile.png"
      alt="Asim Ali Raza"
      style={{
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        display: 'block',
      }}
    />

    <div
  style={{
    position: 'absolute',
    bottom: 0,
    right: 0,
    background: 'var(--accent)',
    color: '#fff',
    fontSize: 13,
    fontWeight: 600,
    padding: '14px 20px',
    boxShadow: '0 0 30px var(--glow)',
    fontFamily: 'var(--font-head)',

    borderTopLeftRadius: '25px',
    borderTopRightRadius: '0',
    borderBottomLeftRadius: '0',
    borderBottomRightRadius: '25px',
  }}
>
  <span
    style={{
      display: 'block',
      fontSize: 28,
      lineHeight: 1,
    }}
  >
    3+
  </span>
  Years of Experience
</div>
  </div>
</div>

       {/* Text side */}
<div ref={ref3} className="reveal reveal-d2">
  <p style={{ color: 'var(--muted)', lineHeight: 1.85, marginBottom: 20, fontWeight: 300 }}>
    I'm a passionate <strong style={{ color: 'var(--text)', fontWeight: 500 }}>Flutter Developer</strong> with
    over <strong style={{ color: 'var(--text)', fontWeight: 500 }}>3+ years of professional experience</strong>
    designing, developing, and maintaining cross-platform mobile applications. I enjoy transforming ideas
    into high-quality mobile solutions that deliver excellent user experiences and business value.
  </p>

  <p style={{ color: 'var(--muted)', lineHeight: 1.85, marginBottom: 20, fontWeight: 300 }}>
    My expertise includes <strong style={{ color: 'var(--text)', fontWeight: 500 }}>Flutter, Dart, Firebase, RESTful API integration, and SQLite</strong>.
    I have a strong background in building responsive, visually appealing applications with clean architecture,
    efficient state management, and seamless backend integration. I focus on creating scalable and maintainable
    mobile applications that perform reliably across Android and iOS platforms.
  </p>

  <p style={{ color: 'var(--muted)', lineHeight: 1.85, marginBottom: 20, fontWeight: 300 }}>
    Throughout my career, I have successfully delivered and published multiple applications on the
    <strong style={{ color: 'var(--text)', fontWeight: 500 }}> Google Play Store and Apple App Store</strong>,
    working on projects ranging from service booking platforms to enterprise inspection systems and productivity applications.
  </p>

  <p style={{ color: 'var(--muted)', lineHeight: 1.85, marginBottom: 36, fontWeight: 300 }}>
    I am committed to continuous learning, collaborative teamwork, and solving complex problems through technology.
    My goal is to build innovative mobile experiences that are intuitive, efficient, and impactful.
  </p>

  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
    {stats.map(({ number, label }) => (
      <div
        key={label}
        style={{
          background: 'var(--surface)',
          border: '1px solid var(--border)',
          borderRadius: 16,
          padding: 20,
          backdropFilter: 'blur(8px)',
          transition: 'all 0.25s',
          cursor: 'default',
        }}
        onMouseEnter={e => {
          e.currentTarget.style.borderColor = 'var(--border2)';
          e.currentTarget.style.background = 'var(--surface2)';
        }}
        onMouseLeave={e => {
          e.currentTarget.style.borderColor = 'var(--border)';
          e.currentTarget.style.background = 'var(--surface)';
        }}
      >
        <div
          style={{
            fontFamily: 'var(--font-head)',
            fontSize: 34,
            fontWeight: 800,
            color: 'var(--accent)',
            lineHeight: 1,
            marginBottom: 4,
          }}
        >
          {number}
        </div>
        <div
          style={{
            fontSize: 12,
            color: 'var(--muted)',
            letterSpacing: '0.05em',
          }}
        >
          {label}
        </div>
      </div>
    ))}
  </div>
</div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .about-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
        }
      `}</style>
    </section>
  )
}
