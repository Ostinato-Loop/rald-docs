export default function Verification() {
  return (
    <div className="section">
      <div className="container">
        <div style={{ marginBottom: 56 }}>
          <div style={{ fontSize: 12, fontWeight: 700, color: '#00E5FF', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 12 }}>Verification</div>
          <h1 style={{ fontSize: 'clamp(32px,5vw,56px)', fontWeight: 900, letterSpacing: '-0.02em', marginBottom: 16 }}>Verified. Trusted. Real.</h1>
          <p style={{ color: 'var(--muted)', fontSize: 16, maxWidth: 600, lineHeight: 1.7 }}>RALD Verification is the trust layer for the entire ecosystem. It answers the question every digital interaction requires: is this a real, verified person or business?</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(280px,1fr))', gap: 16, marginBottom: 56 }}>
          {[
            { level: 'Basic', badge: '✉', color: '#6B7A8D', desc: 'Email address verified. The minimum level for all RALD accounts.', unlocks: ['Messaging', 'Basic Loop access', 'DunaRald free content'] },
            { level: 'Phone Verified', badge: '📱', color: '#00BFFF', desc: 'Phone number verified via OTP. Enables mobile-linked features.', unlocks: ['Phone-based 2FA', 'PayRald wallet (limited)', 'Loop selling (limited)'] },
            { level: 'Identity Verified', badge: '✓', color: '#00E5FF', desc: 'Government ID verified (NIN, BVN, or Passport). Full ecosystem access.', unlocks: ['Full PayRald access', 'Loop seller verification badge', 'High-value transactions', 'Organization accounts'] },
            { level: 'Business Verified', badge: '⬡', color: '#00FF88', desc: 'Business registration verified (CAC or equivalent). Official business status.', unlocks: ['Verified business badge', 'Business email (@company.rald.cloud)', 'Enterprise API access', 'Priority support'] },
          ].map(v => (
            <div key={v.level} style={{ padding: '24px', borderRadius: 16, background: 'var(--surface)', border: `1px solid ${v.color}25` }}>
              <div style={{ fontSize: 28, marginBottom: 12 }}>{v.badge}</div>
              <div style={{ fontSize: 16, fontWeight: 800, color: v.color, marginBottom: 8 }}>{v.level}</div>
              <div style={{ fontSize: 13, color: 'var(--muted)', lineHeight: 1.6, marginBottom: 16 }}>{v.desc}</div>
              <div style={{ fontSize: 11, fontWeight: 700, color: 'var(--subtle)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 8 }}>Unlocks</div>
              {v.unlocks.map(u => (
                <div key={u} style={{ fontSize: 12, color: 'var(--muted)', padding: '4px 0', borderBottom: '1px solid var(--border)', display: 'flex', alignItems: 'center', gap: 6 }}>
                  <span style={{ color: v.color, fontSize: 10 }}>●</span>{u}
                </div>
              ))}
            </div>
          ))}
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          <h2 style={{ fontSize: 22, fontWeight: 800, color: '#E8EDF3' }}>How verification works</h2>
          {[
            { step: '1. Submit your credentials', desc: 'From app.rald.cloud → Verification, submit the documents for the level you want to achieve. Government ID verification requires a photo of your NIN slip, BVN document, or international passport plus a selfie.' },
            { step: '2. Automated review', desc: 'RALD\'s verification system runs automated checks: document authenticity, liveness detection (for ID verification), and database lookups. Most verifications complete in under 5 minutes.' },
            { step: '3. Human review (if needed)', desc: 'If automated review cannot confirm a document, a RALD verification specialist reviews manually. Manual review completes within 24 business hours.' },
            { step: '4. Badge issued', desc: 'Once verified, your RALD Profile is updated with the appropriate verification badge. This badge is visible across all RALD products.' },
            { step: '5. Ongoing validity', desc: 'Verification is valid indefinitely unless your documents expire or you voluntarily revoke it. RALD will notify you 60 days before document-based verifications expire.' },
          ].map(h => (
            <div key={h.step} style={{ padding: '20px 24px', borderRadius: 12, background: 'var(--surface)', border: '1px solid var(--border)', display: 'flex', gap: 20 }}>
              <div style={{ fontWeight: 700, color: '#00E5FF', fontSize: 13, minWidth: 180, flexShrink: 0 }}>{h.step}</div>
              <div style={{ fontSize: 13, color: 'var(--muted)', lineHeight: 1.7 }}>{h.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
