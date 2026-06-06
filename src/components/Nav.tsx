import { Link, useLocation } from 'wouter'

const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/products', label: 'Products' },
  { href: '/security', label: 'Security' },
  { href: '/privacy', label: 'Privacy' },
  { href: '/verification', label: 'Verification' },
  { href: '/ai', label: 'AI' },
  { href: '/business', label: 'Business' },
  { href: '/developers', label: 'Developers' },
  { href: '/ecosystem', label: 'Ecosystem' },
]

export default function Nav() {
  const [location] = useLocation()

  return (
    <nav style={{
      position: 'sticky', top: 0, zIndex: 50,
      background: 'rgba(5,10,15,0.92)', backdropFilter: 'blur(20px)',
      borderBottom: '1px solid rgba(255,255,255,0.06)',
    }}>
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 60 }}>
        <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: 8, fontWeight: 900, fontSize: 17, letterSpacing: '-0.02em' }}>
          <span style={{ color: '#E8EDF3' }}>RALD</span>
          <span style={{
            background: 'var(--ecosystem-gradient)', WebkitBackgroundClip: 'text',
            backgroundClip: 'text', color: 'transparent', backgroundSize: '300% 300%',
            animation: 'gs 10s ease infinite',
          }}>Learn</span>
        </Link>

        <div style={{ display: 'flex', gap: 4, alignItems: 'center' }} className="desktop-nav">
          {NAV_LINKS.map(l => (
            <Link key={l.href} href={l.href} style={{
              padding: '6px 12px', borderRadius: 8, fontSize: 13, fontWeight: 500,
              color: location === l.href ? '#E8EDF3' : 'var(--muted)',
              background: location === l.href ? 'rgba(255,255,255,0.06)' : 'transparent',
              transition: 'all 0.15s',
            }}>{l.label}</Link>
          ))}
        </div>

        <a href="https://app.rald.cloud" style={{
          padding: '7px 18px', borderRadius: 30, fontSize: 12, fontWeight: 700,
          background: 'var(--ecosystem-gradient)', backgroundSize: '300% 300%',
          animation: 'gs 10s ease infinite', color: '#000',
        }}>Sign In</a>
      </div>

      <style>{`
        @keyframes gs{0%{background-position:0% 50%}50%{background-position:100% 50%}100%{background-position:0% 50%}}
        @media(max-width:900px){.desktop-nav{display:none!important}}
      `}</style>
    </nav>
  )
}
