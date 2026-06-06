const COLS = [
  { title: 'Knowledge', links: [
    { href: '/', label: 'Home' },
    { href: '/products', label: 'Products' },
    { href: '/ecosystem', label: 'Ecosystem' },
    { href: '/developers', label: 'Developers' },
  ]},
  { title: 'Trust & Safety', links: [
    { href: '/security', label: 'Security' },
    { href: '/privacy', label: 'Privacy' },
    { href: '/verification', label: 'Verification' },
    { href: '/ai', label: 'AI & Agents' },
  ]},
  { title: 'Ecosystem', links: [
    { href: '/ai#wizmac', label: 'Wizmac' },
    { href: '/ai#sekani', label: 'Sekani' },
    { href: '/business', label: 'Business' },
    { href: 'https://trust.rald.cloud', label: 'Trust Center ↗' },
  ]},
  { title: 'RALD', links: [
    { href: 'https://rald.cloud', label: 'rald.cloud ↗' },
    { href: 'https://app.rald.cloud', label: 'My Account ↗' },
    { href: 'https://status.rald.cloud', label: 'System Status ↗' },
    { href: 'https://rald.cloud/privacy', label: 'Privacy Policy ↗' },
  ]},
]

export default function Footer() {
  return (
    <footer style={{ borderTop: '1px solid rgba(255,255,255,0.06)', background: 'var(--surface)', marginTop: 80 }}>
      <div className="container" style={{ padding: '60px 24px 32px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(160px,1fr))', gap: 40, marginBottom: 48 }}>
          <div>
            <div style={{ fontWeight: 900, fontSize: 18, marginBottom: 12 }}>
              <span style={{ color: '#E8EDF3' }}>RALD</span>
              <span style={{ background: 'var(--ecosystem-gradient)', WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent', backgroundSize: '300% 300%', animation: 'gs 10s ease infinite' }}>Learn</span>
            </div>
            <p style={{ fontSize: 12, color: 'var(--muted)', lineHeight: 1.7, maxWidth: 200 }}>
              The permanent knowledge center for the RALD ecosystem. Not a blog. Not a landing page. A structured platform built to last.
            </p>
          </div>
          {COLS.map(col => (
            <div key={col.title}>
              <div style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--subtle)', marginBottom: 16 }}>{col.title}</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                {col.links.map(l => (
                  <a key={l.href} href={l.href} style={{ fontSize: 13, color: 'var(--muted)', transition: 'color 0.15s' }}
                    onMouseEnter={e => (e.currentTarget.style.color = '#E8EDF3')}
                    onMouseLeave={e => (e.currentTarget.style.color = 'var(--muted)')}
                  >{l.label}</a>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: 24, display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12 }}>
          <span style={{ fontSize: 12, color: 'var(--subtle)' }}>© 2026 RALD · Operated by LILCKY STUDIO LIMITED</span>
          <span style={{ fontSize: 12, color: 'var(--subtle)' }}>Pan-African Digital Infrastructure</span>
        </div>
      </div>
      <style>{`@keyframes gs{0%{background-position:0% 50%}50%{background-position:100% 50%}100%{background-position:0% 50%}}`}</style>
    </footer>
  )
}
