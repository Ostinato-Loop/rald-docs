import SEO from '../components/SEO'

const PRODUCTS = [
  { id: 'profiles', name: 'RALD Profiles', color: '#00E5FF', role: 'Identity Foundation', desc: 'Every person and business in the ecosystem is a verified RALD Profile.' },
  { id: 'app', name: 'RALD App', color: '#00FF88', role: 'Account Control Center', desc: 'Users manage their entire ecosystem presence — permissions, sessions, security, connected apps.' },
  { id: 'loop', name: 'Loop', color: '#00FF88', role: 'Social Commerce', desc: 'Commerce powered by verified seller identities and PayRald payments.' },
  { id: 'messenger', name: 'Loop Messenger', color: '#FF7A00', role: 'Realtime Communication', desc: 'Every message sender is a verified RALD identity. No anonymous accounts.' },
  { id: 'voice', name: 'Loop Voice', color: '#FF4FAD', role: 'Voice Commerce & SIP', desc: 'Voice interactions anchored to verified RALD business identities.' },
  { id: 'mail', name: 'RALD Mail', color: '#34D399', role: 'Ecosystem Email', desc: 'Identity-verified @rald.cloud email connected to your RALD Profile.' },
  { id: 'dunarald', name: 'DunaRald', color: '#A855F7', role: 'Entertainment Commerce', desc: 'Creators are verified RALD identities. Fans transact via PayRald.' },
  { id: 'manilla', name: 'Manilla', color: '#F59E0B', role: 'Workspace', desc: 'Teams work under verified business identities with ecosystem-native integrations.' },
]

const FLOWS = [
  { title: 'How identity flows', color: '#00E5FF', steps: [
    'You create a RALD account → a RALD Profile is created.',
    'You verify your email, phone, or government ID → verification badges are added to your profile.',
    'You connect to a RALD product (e.g., Loop) → the product requests specific identity scopes.',
    'You approve the scopes → the product receives only what it needs (e.g., your name and verified status, not your full profile).',
    'Your RALD ID travels with you — the same verified identity across every product.',
  ]},
  { title: 'How permissions work', color: '#00FF88', steps: [
    'Each RALD product has defined permission scopes: identity, profile, payment, organization, verification.',
    'When you connect a product, you see exactly what it will access.',
    'You can grant partial scopes (e.g., verified status only) or full scopes (name, email, phone).',
    'You can revoke any permission at any time from app.rald.cloud → Connected Apps.',
    'RALD products cannot access scopes you did not grant — this is enforced at the token level.',
  ]},
  { title: 'How trust works', color: '#FFD400', steps: [
    'Verification levels (Basic → Phone → Identity → Business) determine trust in the ecosystem.',
    'Products surface verification badges — buyers see verified seller badges, message recipients see verified sender badges.',
    'PayRald transaction limits scale with verification level — higher trust = higher limits.',
    'Business verification unlocks enterprise features, higher API rate limits, and dedicated support.',
    'Verification is portable — verified once, trusted everywhere in the ecosystem.',
  ]},
  { title: 'How privacy flows', color: '#A855F7', steps: [
    'Data minimization: products only receive the data they need, not full profiles.',
    'Consent-gated: every data access requires your explicit permission.',
    'Revocable: you can revoke any product\'s data access at any time.',
    'Auditable: every data access is logged and visible to you in app.rald.cloud → Activity.',
    'Portable: you can export all your data at any time from app.rald.cloud → Privacy.',
  ]},
]

export default function Ecosystem() {
  return (
    <>
      <SEO title="Ecosystem Architecture" description="How identity, permissions, trust, and privacy flow across the entire RALD ecosystem — from Profiles to every connected product." path="/ecosystem" type="article" />
      <div className="section">
        <div className="container">
          <div style={{ marginBottom: 56 }}>
            <div style={{ fontSize: 12, fontWeight: 700, color: '#00FF88', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 12 }}>Ecosystem</div>
            <h1 style={{ fontSize: 'clamp(32px,5vw,56px)', fontWeight: 900, letterSpacing: '-0.02em', marginBottom: 16 }}>One ecosystem. One identity. One trust layer.</h1>
            <p style={{ color: 'var(--muted)', fontSize: 16, maxWidth: 640, lineHeight: 1.7 }}>Every RALD product is built on the same identity foundation — RALD Profiles. This means your verified identity, your permissions, and your privacy settings follow you seamlessly across the entire ecosystem without you having to set things up again.</p>
          </div>

          {/* Architecture diagram */}
          <div style={{ marginBottom: 72, padding: '40px 32px', borderRadius: 20, background: 'var(--surface)', border: '1px solid var(--border)' }}>
            <div style={{ textAlign: 'center', marginBottom: 32, fontSize: 12, fontWeight: 700, color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Ecosystem Architecture</div>

            {/* Profiles — foundation */}
            <div style={{ textAlign: 'center', marginBottom: 8 }}>
              <div style={{ display: 'inline-block', padding: '14px 32px', borderRadius: 12, background: 'rgba(0,229,255,0.08)', border: '2px solid rgba(0,229,255,0.3)', fontWeight: 800, color: '#00E5FF', fontSize: 15 }}>RALD Profiles — Identity Foundation</div>
            </div>
            <div style={{ textAlign: 'center', fontSize: 24, color: 'var(--subtle)', marginBottom: 8 }}>↓</div>

            {/* App */}
            <div style={{ textAlign: 'center', marginBottom: 8 }}>
              <div style={{ display: 'inline-block', padding: '12px 28px', borderRadius: 10, background: 'rgba(0,255,136,0.06)', border: '1px solid rgba(0,255,136,0.2)', fontWeight: 700, color: '#00FF88', fontSize: 14 }}>RALD App — Account Control Center</div>
            </div>
            <div style={{ textAlign: 'center', fontSize: 20, color: 'var(--subtle)', marginBottom: 16 }}>↓</div>

            {/* Products */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(150px,1fr))', gap: 10 }}>
              {PRODUCTS.filter(p => !['profiles','app'].includes(p.id)).map(p => (
                <div key={p.id} style={{ padding: '12px', borderRadius: 10, border: `1px solid ${p.color}25`, background: `${p.color}06`, textAlign: 'center' }}>
                  <div style={{ width: 8, height: 8, borderRadius: '50%', background: p.color, margin: '0 auto 8px', boxShadow: `0 0 8px ${p.color}` }} />
                  <div style={{ fontSize: 12, fontWeight: 700, color: '#E8EDF3' }}>{p.name}</div>
                  <div style={{ fontSize: 10, color: 'var(--muted)', marginTop: 4 }}>{p.role}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Flow documentation */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 40 }}>
            {FLOWS.map(f => (
              <div key={f.title}>
                <h2 style={{ fontSize: 20, fontWeight: 800, marginBottom: 20, color: '#E8EDF3', display: 'flex', alignItems: 'center', gap: 10 }}>
                  <span style={{ display: 'inline-block', width: 4, height: 20, background: f.color, borderRadius: 2 }} />{f.title}
                </h2>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                  {f.steps.map((step, i) => (
                    <div key={i} style={{ display: 'flex', gap: 16, alignItems: 'flex-start', padding: '14px 18px', borderRadius: 10, background: 'var(--surface)', border: '1px solid var(--border)' }}>
                      <span style={{ fontSize: 12, fontWeight: 800, color: f.color, minWidth: 20, marginTop: 1 }}>{i + 1}.</span>
                      <span style={{ fontSize: 13, color: 'var(--muted)', lineHeight: 1.7 }}>{step}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
