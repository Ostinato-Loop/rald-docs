import { Link } from 'wouter'

const PRODUCTS = [
  { href: '/products/profiles', color: '#00E5FF', name: 'RALD Profiles', category: 'Identity', tag: 'Core', desc: 'The unified identity layer for the entire RALD ecosystem. Every user starts here.' },
  { href: '/products/app', color: '#00FF88', name: 'RALD App', category: 'Account', tag: 'Core', desc: 'Your personal control center. Manage security, privacy, connected apps, and verification.' },
  { href: '/products/loop', color: '#00FF88', name: 'Loop', category: 'Commerce', tag: 'Live', desc: 'African-first social commerce platform. Discover, sell, and connect in one place.' },
  { href: '/products/messenger', color: '#FF7A00', name: 'Loop Messenger', category: 'Communication', tag: 'Live', desc: 'Production-grade realtime messaging for individuals, teams, and businesses.' },
  { href: '/products/manilla', color: '#F59E0B', name: 'Manilla', category: 'Productivity', tag: 'Coming Soon', desc: 'Workspace and project management built natively into the RALD ecosystem.' },
  { href: '/products/voice', color: '#FF4FAD', name: 'Loop Voice', category: 'Voice', tag: 'Beta', desc: 'Voice commerce and SIP communications — call, sell, and support via voice.' },
  { href: '/products/mail', color: '#34D399', name: 'RALD Mail', category: 'Communication', tag: 'Coming Soon', desc: 'Ecosystem-native email — privacy-first, identity-verified, built for Africa.' },
  { href: '/products/dunarald', color: '#A855F7', name: 'DunaRald', category: 'Entertainment', tag: 'Beta', desc: 'African-first discovery and entertainment commerce platform. Stream, discover, buy.' },
]

const TAG_COLORS: Record<string, string> = {
  'Core': '#00FF88', 'Live': '#00BFFF', 'Beta': '#FFD400', 'Coming Soon': '#6B7A8D',
}

export default function ProductsIndex() {
  return (
    <div className="section">
      <div className="container">
        <div style={{ marginBottom: 56 }}>
          <div style={{ fontSize: 12, fontWeight: 700, color: 'var(--muted)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 12 }}>Products</div>
          <h1 style={{ fontSize: 'clamp(32px,5vw,56px)', fontWeight: 900, letterSpacing: '-0.02em', marginBottom: 16 }}>
            The RALD product suite.
          </h1>
          <p style={{ color: 'var(--muted)', fontSize: 16, maxWidth: 580, lineHeight: 1.7 }}>
            Eight products. One identity. One trust layer. Every product is connected through RALD Profiles and governed by the same privacy and security standards.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px,1fr))', gap: 16 }}>
          {PRODUCTS.map(p => (
            <Link key={p.href} href={p.href} style={{
              display: 'block', padding: '28px 24px', borderRadius: 16,
              border: '1px solid var(--border)', background: 'var(--surface)',
              transition: 'all 0.2s', textDecoration: 'none',
            }}
              onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = p.color + '40'; el.style.transform = 'translateY(-2px)' }}
              onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = 'var(--border)'; el.style.transform = 'translateY(0)' }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16 }}>
                <span style={{ fontSize: 11, fontWeight: 700, color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>{p.category}</span>
                <span style={{
                  fontSize: 10, fontWeight: 700, padding: '2px 10px', borderRadius: 20,
                  color: TAG_COLORS[p.tag] || 'var(--muted)',
                  background: (TAG_COLORS[p.tag] || '#6B7A8D') + '18',
                  border: `1px solid ${(TAG_COLORS[p.tag] || '#6B7A8D')}30`,
                }}>{p.tag}</span>
              </div>
              <div style={{ width: 10, height: 10, borderRadius: '50%', background: p.color, marginBottom: 12, boxShadow: `0 0 12px ${p.color}` }} />
              <div style={{ fontSize: 18, fontWeight: 800, marginBottom: 8, color: '#E8EDF3' }}>{p.name}</div>
              <div style={{ fontSize: 13, color: 'var(--muted)', lineHeight: 1.6, marginBottom: 16 }}>{p.desc}</div>
              <div style={{ fontSize: 12, fontWeight: 700, color: p.color }}>Full documentation →</div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
