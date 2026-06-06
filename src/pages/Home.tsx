import { Link } from 'wouter'

const SECTIONS = [
  { href: '/products', color: '#00FF88', icon: '⬡', label: 'Products', desc: 'Every RALD product explained — what it is, who it\'s for, and how it protects your data.' },
  { href: '/security', color: '#FF2E2E', icon: '🛡', label: 'Security', desc: 'Infrastructure security, encryption standards, penetration testing, and disclosure policy.' },
  { href: '/privacy', color: '#A855F7', icon: '🔒', label: 'Privacy', desc: 'How we collect, store, and protect your data. Full NDPR and GDPR alignment.' },
  { href: '/verification', color: '#00E5FF', icon: '✓', label: 'Verification', desc: 'RALD\'s identity verification system — what it checks, how it works, and what it unlocks.' },
  { href: '/ai', color: '#FFD400', icon: '◈', label: 'AI', desc: 'Wizmac and Sekani — our AI infrastructure. Human oversight, data handling, and limits.' },
  { href: '/business', color: '#FF7A00', icon: '◻', label: 'Business', desc: 'Enterprise features, SLAs, compliance, and how RALD supports regulated industries.' },
  { href: '/developers', color: '#0066FF', icon: '⌘', label: 'Developers', desc: 'SDKs, APIs, webhooks, and everything you need to build on the RALD platform.' },
  { href: '/ecosystem', color: '#FF4FAD', icon: '◎', label: 'Ecosystem', desc: 'How identity, trust, and permissions flow across every RALD product.' },
]

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section style={{ padding: '100px 0 80px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div style={{
          position: 'absolute', inset: 0,
          background: 'radial-gradient(ellipse 80% 50% at 50% -10%, rgba(0,255,136,0.06) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />
        <div className="container" style={{ position: 'relative' }}>
          <div style={{
            display: 'inline-block', padding: '4px 16px', borderRadius: 30, marginBottom: 28,
            border: '1px solid rgba(0,255,136,0.25)', background: 'rgba(0,255,136,0.05)',
            fontSize: 12, fontWeight: 700, color: '#00FF88', letterSpacing: '0.06em', textTransform: 'uppercase',
          }}>Ecosystem Knowledge Center</div>
          <h1 style={{ fontSize: 'clamp(40px,7vw,80px)', fontWeight: 900, letterSpacing: '-0.03em', lineHeight: 1.05, marginBottom: 24 }}>
            <span style={{ color: '#E8EDF3' }}>Understand</span>
            <br />
            <span style={{
              background: 'var(--ecosystem-gradient)', WebkitBackgroundClip: 'text',
              backgroundClip: 'text', color: 'transparent', backgroundSize: '300% 300%',
              animation: 'gs 10s ease infinite',
            }}>RALD completely.</span>
          </h1>
          <p style={{ fontSize: 18, color: 'var(--muted)', maxWidth: 600, margin: '0 auto 48px', lineHeight: 1.7 }}>
            Not a blog. Not a marketing page. A structured knowledge platform built for everyone who uses, builds on, or trusts the RALD ecosystem.
          </p>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/products" style={{
              padding: '12px 28px', borderRadius: 30, fontWeight: 700, fontSize: 14,
              background: '#00FF88', color: '#000',
            }}>Explore Products</Link>
            <Link href="/ecosystem" style={{
              padding: '12px 28px', borderRadius: 30, fontWeight: 700, fontSize: 14,
              border: '1px solid rgba(255,255,255,0.12)', color: '#E8EDF3',
            }}>How the Ecosystem Works</Link>
          </div>
        </div>
        <style>{`@keyframes gs{0%{background-position:0% 50%}50%{background-position:100% 50%}100%{background-position:0% 50%}}`}</style>
      </section>

      {/* Sections grid */}
      <section className="section">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <h2 style={{ fontSize: 32, fontWeight: 900, marginBottom: 12 }}>Everything, documented.</h2>
            <p style={{ color: 'var(--muted)', fontSize: 15 }}>Every section is maintained, reviewed, and held to a 98% accuracy standard.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px,1fr))', gap: 16 }}>
            {SECTIONS.map(s => (
              <Link key={s.href} href={s.href} style={{
                display: 'block', padding: '28px 24px', borderRadius: 16,
                border: '1px solid var(--border)', background: 'var(--surface)',
                transition: 'all 0.2s', cursor: 'pointer',
              }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = s.color + '40'; (e.currentTarget as HTMLElement).style.background = 'var(--surface-2)' }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = 'var(--border)'; (e.currentTarget as HTMLElement).style.background = 'var(--surface)' }}
              >
                <div style={{ fontSize: 26, marginBottom: 14, color: s.color }}>{s.icon}</div>
                <div style={{ fontSize: 16, fontWeight: 800, marginBottom: 8, color: '#E8EDF3' }}>{s.label}</div>
                <div style={{ fontSize: 13, color: 'var(--muted)', lineHeight: 1.6 }}>{s.desc}</div>
                <div style={{ marginTop: 16, fontSize: 12, fontWeight: 700, color: s.color }}>Read more →</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Trust banner */}
      <section style={{ padding: '60px 0', background: 'var(--surface)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <div style={{ fontSize: 13, color: 'var(--muted)', maxWidth: 640, margin: '0 auto', lineHeight: 1.8 }}>
            <span style={{ color: '#00FF88', fontWeight: 700 }}>RALD is transitioning from individual products into a unified ecosystem.</span>
            {' '}No experimental features. No placeholder content. No unfinished pages. This knowledge center reflects our commitment to
            transparency and ecosystem readiness — targeting 98% readiness across every dimension.
          </div>
        </div>
      </section>
    </div>
  )
}
