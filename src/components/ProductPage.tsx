import { Link } from 'wouter'

export interface ProductPageProps {
  name: string
  category: string
  color: string
  tagline: string
  what: string
  why: string
  how: { step: string; desc: string }[]
  whoFor: string[]
  dataProtection: { point: string; desc: string }[]
  roadmap: { phase: string; item: string }[]
  links?: { label: string; href: string }[]
}

export default function ProductPage(p: ProductPageProps) {
  return (
    <div>
      {/* Hero */}
      <section style={{ padding: '80px 0 64px', position: 'relative', overflow: 'hidden' }}>
        <div style={{
          position: 'absolute', inset: 0,
          background: `radial-gradient(ellipse 60% 40% at 50% 0%, ${p.color}10 0%, transparent 70%)`,
          pointerEvents: 'none',
        }} />
        <div className="container" style={{ position: 'relative' }}>
          <div style={{ marginBottom: 8 }}>
            <Link href="/products" style={{ fontSize: 12, color: 'var(--muted)', fontWeight: 600 }}>← All Products</Link>
          </div>
          <div style={{ fontSize: 11, fontWeight: 700, color: p.color, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 16, marginTop: 24 }}>{p.category}</div>
          <h1 style={{ fontSize: 'clamp(36px,6vw,64px)', fontWeight: 900, letterSpacing: '-0.03em', marginBottom: 20, color: '#E8EDF3' }}>{p.name}</h1>
          <p style={{ fontSize: 18, color: 'var(--muted)', maxWidth: 600, lineHeight: 1.7 }}>{p.tagline}</p>
          {p.links && (
            <div style={{ display: 'flex', gap: 12, marginTop: 32, flexWrap: 'wrap' }}>
              {p.links.map(l => (
                <a key={l.href} href={l.href} style={{
                  padding: '10px 24px', borderRadius: 30, fontSize: 13, fontWeight: 700,
                  background: p.color, color: '#000',
                }}>{l.label}</a>
              ))}
            </div>
          )}
        </div>
      </section>

      <div className="container" style={{ paddingBottom: 80, display: 'flex', flexDirection: 'column', gap: 56 }}>
        {/* What is it */}
        <Section title="What is it?" color={p.color}>
          <p style={{ fontSize: 15, color: 'var(--muted)', lineHeight: 1.8 }}>{p.what}</p>
        </Section>

        {/* Why built */}
        <Section title="Why was it built?" color={p.color}>
          <p style={{ fontSize: 15, color: 'var(--muted)', lineHeight: 1.8 }}>{p.why}</p>
        </Section>

        {/* How it works */}
        <Section title="How does it work?" color={p.color}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {p.how.map((h, i) => (
              <div key={i} style={{ display: 'flex', gap: 20, padding: '18px 20px', borderRadius: 12, background: 'var(--surface)', border: '1px solid var(--border)' }}>
                <div style={{ width: 32, height: 32, borderRadius: '50%', background: p.color + '18', border: `1px solid ${p.color}30`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, fontSize: 13, fontWeight: 800, color: p.color }}>{i + 1}</div>
                <div>
                  <div style={{ fontWeight: 700, marginBottom: 4, color: '#E8EDF3' }}>{h.step}</div>
                  <div style={{ fontSize: 13, color: 'var(--muted)', lineHeight: 1.6 }}>{h.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* Who is it for */}
        <Section title="Who is it for?" color={p.color}>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
            {p.whoFor.map((w, i) => (
              <div key={i} style={{ padding: '8px 18px', borderRadius: 30, background: 'var(--surface)', border: '1px solid var(--border)', fontSize: 13, color: 'var(--muted)' }}>{w}</div>
            ))}
          </div>
        </Section>

        {/* Data protection */}
        <Section title="How is user data protected?" color={p.color}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(280px,1fr))', gap: 14 }}>
            {p.dataProtection.map((d, i) => (
              <div key={i} style={{ padding: '18px 20px', borderRadius: 12, background: 'var(--surface)', border: '1px solid var(--border)' }}>
                <div style={{ fontWeight: 700, marginBottom: 6, color: '#E8EDF3', fontSize: 13 }}>{d.point}</div>
                <div style={{ fontSize: 12, color: 'var(--muted)', lineHeight: 1.6 }}>{d.desc}</div>
              </div>
            ))}
          </div>
        </Section>

        {/* Roadmap */}
        <Section title="Future roadmap" color={p.color}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {p.roadmap.map((r, i) => (
              <div key={i} style={{ display: 'flex', gap: 16, alignItems: 'flex-start', padding: '14px 18px', borderRadius: 10, background: 'var(--surface)', border: '1px solid var(--border)' }}>
                <span style={{ fontSize: 11, fontWeight: 700, color: p.color, background: p.color + '18', border: `1px solid ${p.color}30`, borderRadius: 20, padding: '2px 10px', whiteSpace: 'nowrap', marginTop: 2 }}>{r.phase}</span>
                <span style={{ fontSize: 13, color: 'var(--muted)', lineHeight: 1.6 }}>{r.item}</span>
              </div>
            ))}
          </div>
        </Section>
      </div>
    </div>
  )
}

function Section({ title, color, children }: { title: string; color: string; children: React.ReactNode }) {
  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 24 }}>
        <div style={{ width: 4, height: 24, borderRadius: 2, background: color, flexShrink: 0 }} />
        <h2 style={{ fontSize: 22, fontWeight: 800, color: '#E8EDF3' }}>{title}</h2>
      </div>
      {children}
    </div>
  )
}
