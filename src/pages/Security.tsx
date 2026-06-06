import SEO from "../components/SEO"
export default function Security() {
  const sections = [
    {
      title: 'Infrastructure Security',
      items: [
        { q: 'Hosting & Network', a: 'RALD infrastructure runs on Cloudflare\'s global network (Pages, Workers, R2, KV, Queues) with Nigerian-region data locality for regulated data. All traffic is routed through Cloudflare\'s anycast network with automatic DDoS mitigation.' },
        { q: 'TLS / Encryption in transit', a: 'All RALD endpoints enforce TLS 1.2+ with HSTS headers. TLS 1.0 and 1.1 are disabled. Certificate management is automated via Cloudflare.' },
        { q: 'Encryption at rest', a: 'All stored user data is encrypted at rest using AES-256. Sensitive fields (government IDs, payment credentials) use additional field-level encryption.' },
        { q: 'Secrets management', a: 'API keys, signing keys, and credentials are managed through RALD Secrets — a dedicated key rotation and secrets distribution system. No secrets are stored in environment variables or code repositories.' },
      ]
    },
    {
      title: 'Authentication Security',
      items: [
        { q: 'Password policy', a: 'Passwords must meet minimum complexity requirements. RALD enforces bcrypt hashing with a minimum cost factor of 12.' },
        { q: 'Rate limiting', a: 'All authentication endpoints are rate-limited. Repeated failed attempts trigger CAPTCHA challenges and then temporary lockouts.' },
        { q: 'Session management', a: 'Sessions are short-lived JWT tokens with sliding expiry. Refresh tokens are rotated on each use. All sessions are individually revocable.' },
        { q: 'Two-factor authentication', a: 'TOTP-based 2FA is in active development (Phase I). Email-based 2FA is available today.' },
      ]
    },
    {
      title: 'Vulnerability Disclosure',
      items: [
        { q: 'How to report a vulnerability', a: 'Email security@rald.cloud with a description of the issue, steps to reproduce, and your contact information. We respond within 48 hours.' },
        { q: 'Our commitment', a: 'We will acknowledge your report, keep you informed of our investigation, and credit you (with your permission) when the issue is resolved.' },
        { q: 'Scope', a: 'All RALD-operated systems under *.rald.cloud are in scope. Third-party services (Cloudflare, etc.) are not in scope for our bug bounty.' },
      ]
    },
    {
      title: 'Compliance & Certifications',
      items: [
        { q: 'NDPR', a: 'RALD is aligned with Nigeria\'s National Data Protection Regulation (NDPR) 2019 and the NDPR Implementation Framework 2020.' },
        { q: 'GDPR', a: 'RALD applies GDPR principles to all user data — including users in the EU — as a baseline standard, regardless of geography.' },
        { q: 'SOC 2 (planned)', a: 'SOC 2 Type II certification is on the RALD security roadmap for 2025.' },
      ]
    }
  ]

  return (
    <>
      <SEO title="Security" description="How RALD keeps the ecosystem secure — infrastructure, authentication, encryption, vulnerability disclosure, and compliance." path="/security" type="article" />
      <div className="section">
      <div className="container">
        <div style={{ marginBottom: 56 }}>
          <div style={{ fontSize: 12, fontWeight: 700, color: '#FF2E2E', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 12 }}>Security</div>
          <h1 style={{ fontSize: 'clamp(32px,5vw,56px)', fontWeight: 900, letterSpacing: '-0.02em', marginBottom: 16 }}>How RALD keeps you safe.</h1>
          <p style={{ color: 'var(--muted)', fontSize: 16, maxWidth: 600, lineHeight: 1.7 }}>Security is not a feature. It is the foundation. Every system, every API, and every data store is built with security as the starting assumption.</p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 48 }}>
          {sections.map(s => (
            <div key={s.title}>
              <h2 style={{ fontSize: 20, fontWeight: 800, marginBottom: 20, color: '#E8EDF3', display: 'flex', alignItems: 'center', gap: 10 }}>
                <span style={{ display: 'inline-block', width: 4, height: 20, background: '#FF2E2E', borderRadius: 2 }} />
                {s.title}
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                {s.items.map(item => (
                  <div key={item.q} style={{ padding: '20px 24px', borderRadius: 12, background: 'var(--surface)', border: '1px solid var(--border)' }}>
                    <div style={{ fontWeight: 700, marginBottom: 8, color: '#E8EDF3', fontSize: 14 }}>{item.q}</div>
                    <div style={{ fontSize: 13, color: 'var(--muted)', lineHeight: 1.7 }}>{item.a}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div style={{ marginTop: 60, padding: '28px 32px', borderRadius: 16, background: 'rgba(255,46,46,0.04)', border: '1px solid rgba(255,46,46,0.15)', textAlign: 'center' }}>
          <div style={{ fontWeight: 800, fontSize: 16, marginBottom: 8 }}>Found a security issue?</div>
          <div style={{ color: 'var(--muted)', fontSize: 14, marginBottom: 16 }}>We take every report seriously. Responsible disclosure is always credited.</div>
          <a href="mailto:security@rald.cloud" style={{ padding: '10px 24px', borderRadius: 30, background: '#FF2E2E', color: '#fff', fontWeight: 700, fontSize: 13 }}>Email security@rald.cloud</a>
        </div>
      </div>
    </div>
    </>
  )
}
