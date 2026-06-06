import SEO from '../components/SEO'

export default function Business() {
  return (
    <>
      <SEO title="Business & Enterprise" description="RALD for businesses — SLAs, compliance, organization accounts, enterprise APIs, and dedicated support for regulated industries across Africa." path="/business" type="article" />
      <div className="section">
        <div className="container">
          <div style={{ marginBottom: 56 }}>
            <div style={{ fontSize: 12, fontWeight: 700, color: '#FF7A00', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 12 }}>Business</div>
            <h1 style={{ fontSize: 'clamp(32px,5vw,56px)', fontWeight: 900, letterSpacing: '-0.02em', marginBottom: 16 }}>Built for African business.</h1>
            <p style={{ color: 'var(--muted)', fontSize: 16, maxWidth: 600, lineHeight: 1.7 }}>From solo sellers on Loop to enterprise companies with regulatory obligations — RALD is designed to support businesses at every scale, with the infrastructure and compliance tools African industries require.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(280px,1fr))', gap: 16, marginBottom: 64 }}>
            {[
              { title: 'Verified Business Identity', color: '#FF7A00', desc: 'Get your business officially verified on RALD with a CAC registration check. Verified businesses receive a badge visible across all RALD products, a business email address, and access to enterprise APIs.' },
              { title: 'Organization Accounts', color: '#FF7A00', desc: 'Create an organization account to manage your team. Add members with role-based access, manage permissions centrally, and audit all activity under one organizational identity.' },
              { title: 'Business APIs', color: '#FF7A00', desc: 'Enterprise-grade REST APIs for Loop commerce, PayRald payments, Messenger channels, and RALD Auth SSO. Dedicated API access tiers for high-volume businesses.' },
              { title: 'Compliance Tools', color: '#FF7A00', desc: 'NDPR compliance reporting, transaction audit logs, data retention controls, and regulatory data request workflows — built in, not bolted on.' },
              { title: 'SLAs', color: '#FF7A00', desc: 'Enterprise customers receive uptime SLAs (99.9% or higher depending on tier), priority incident response, and dedicated account management.' },
              { title: 'Priority Support', color: '#FF7A00', desc: 'Business and enterprise accounts receive priority support with guaranteed response times: 4 hours for critical issues, 24 hours for standard requests.' },
            ].map(c => (
              <div key={c.title} style={{ padding: '24px', borderRadius: 14, background: 'var(--surface)', border: '1px solid var(--border)' }}>
                <div style={{ width: 8, height: 8, borderRadius: '50%', background: c.color, marginBottom: 14 }} />
                <div style={{ fontWeight: 700, marginBottom: 8, fontSize: 15, color: '#E8EDF3' }}>{c.title}</div>
                <div style={{ fontSize: 13, color: 'var(--muted)', lineHeight: 1.6 }}>{c.desc}</div>
              </div>
            ))}
          </div>

          <div style={{ padding: '36px 40px', borderRadius: 20, background: 'rgba(255,122,0,0.05)', border: '1px solid rgba(255,122,0,0.2)', textAlign: 'center' }}>
            <h2 style={{ fontSize: 24, fontWeight: 900, marginBottom: 12 }}>Ready to bring your business to RALD?</h2>
            <p style={{ color: 'var(--muted)', fontSize: 14, marginBottom: 24, maxWidth: 480, margin: '0 auto 24px' }}>Business verification takes less than 24 hours. Enterprise accounts get dedicated onboarding.</p>
            <a href="mailto:business@rald.cloud" style={{ padding: '12px 28px', borderRadius: 30, background: '#FF7A00', color: '#000', fontWeight: 700, fontSize: 13 }}>Contact business@rald.cloud</a>
          </div>
        </div>
      </div>
    </>
  )
}
