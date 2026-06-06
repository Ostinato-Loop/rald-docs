export default function Privacy() {
  return (
    <div className="section">
      <div className="container" style={{ maxWidth: 860 }}>
        <div style={{ marginBottom: 56 }}>
          <div style={{ fontSize: 12, fontWeight: 700, color: '#A855F7', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 12 }}>Privacy</div>
          <h1 style={{ fontSize: 'clamp(32px,5vw,56px)', fontWeight: 900, letterSpacing: '-0.02em', marginBottom: 16 }}>Your data. Your control.</h1>
          <p style={{ color: 'var(--muted)', fontSize: 16, lineHeight: 1.7 }}>RALD is built on a simple principle: your data belongs to you. We collect what is necessary, protect it rigorously, and give you complete visibility and control over how it is used.</p>
        </div>

        {[
          { title: 'What data we collect', color: '#A855F7', items: [
            ['Account data', 'When you create a RALD account: your email address, phone number, chosen password (hashed, never stored in plain text), and the date you created your account.'],
            ['Profile data', 'Name, display name, bio, and profile photo — all optional except email. Government ID data is collected only during the optional verification process and is never shared with other products without consent.'],
            ['Device & session data', 'IP address, device type, operating system, browser, and session timestamps — used for security (detecting unauthorized access) and stored for 90 days.'],
            ['Product usage data', 'How you use RALD products — pages visited, features used, and interactions. This is used to improve the ecosystem and is never sold.'],
            ['Communications', 'If you contact RALD support, we store the content of that communication to provide assistance.'],
          ]},
          { title: 'How we use your data', color: '#A855F7', items: [
            ['Account operation', 'To authenticate you, send you security notifications, and operate your account.'],
            ['Product delivery', 'To provide the features of the RALD products you use — Loop, Messenger, DunaRald, etc.'],
            ['Security', 'To detect, investigate, and prevent fraud, abuse, and unauthorized access.'],
            ['Legal compliance', 'To comply with applicable law, including NDPR, GDPR, and requests from Nigerian regulatory authorities.'],
            ['Product improvement', 'Aggregated, anonymized data helps us understand how RALD products are used and how to improve them.'],
          ]},
          { title: 'What we never do', color: '#A855F7', items: [
            ['Sell your data', 'RALD does not sell personal data to any third party. Ever.'],
            ['Share without consent', 'Your data is not shared with companies outside the RALD ecosystem without your explicit consent.'],
            ['Profile for ads', 'We do not build advertising profiles from your data or share data with advertising networks.'],
            ['Read your messages', 'End-to-end encrypted messages cannot be read by RALD. For non-E2EE channels, message content is used only for spam/abuse detection.'],
          ]},
          { title: 'Your rights', color: '#A855F7', items: [
            ['Access', 'Request a copy of all data RALD holds about you from app.rald.cloud → Privacy → Request data export.'],
            ['Correction', 'Correct inaccurate data in your profile at any time from app.rald.cloud.'],
            ['Deletion', 'Request account deletion. Your data will be permanently purged within 30 days. Some data may be retained for legal compliance for up to 7 years.'],
            ['Restriction', 'Restrict how specific data is used — for example, opt out of usage analytics or product improvement data sharing.'],
            ['Portability', 'Export your data in machine-readable format (JSON) from app.rald.cloud.'],
          ]},
          { title: 'Data residency & transfers', color: '#A855F7', items: [
            ['Nigeria', 'Data belonging to Nigerian users is stored in Nigeria-region infrastructure in compliance with NDPR.'],
            ['International transfers', 'Where data must cross borders (e.g., Cloudflare\'s global network), it is protected by Standard Contractual Clauses and equivalent safeguards.'],
            ['Retention', 'Account data is retained while your account is active. Session data is retained for 90 days. After deletion, all data is purged within 30 days, except where legal retention is required.'],
          ]},
        ].map(block => (
          <div key={block.title} style={{ marginBottom: 44 }}>
            <h2 style={{ fontSize: 20, fontWeight: 800, marginBottom: 20, color: '#E8EDF3', display: 'flex', alignItems: 'center', gap: 10 }}>
              <span style={{ display: 'inline-block', width: 4, height: 20, background: block.color, borderRadius: 2 }} />
              {block.title}
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {block.items.map(([label, desc]) => (
                <div key={label} style={{ padding: '18px 22px', borderRadius: 12, background: 'var(--surface)', border: '1px solid var(--border)' }}>
                  <div style={{ fontWeight: 700, marginBottom: 6, color: '#E8EDF3', fontSize: 13 }}>{label}</div>
                  <div style={{ fontSize: 13, color: 'var(--muted)', lineHeight: 1.7 }}>{desc}</div>
                </div>
              ))}
            </div>
          </div>
        ))}

        <div style={{ padding: '24px 28px', borderRadius: 14, background: 'rgba(168,85,247,0.05)', border: '1px solid rgba(168,85,247,0.2)', marginTop: 8 }}>
          <div style={{ fontSize: 13, color: 'var(--muted)', lineHeight: 1.8 }}>
            <strong style={{ color: '#E8EDF3' }}>Privacy Officer: </strong>privacy@rald.cloud ·{' '}
            <strong style={{ color: '#E8EDF3' }}>Data Controller: </strong>LILCKY STUDIO LIMITED ·{' '}
            <strong style={{ color: '#E8EDF3' }}>Jurisdiction: </strong>Federal Republic of Nigeria ·{' '}
            <a href="https://trust.rald.cloud" style={{ color: '#A855F7', fontWeight: 600 }}>Full Trust Center →</a>
          </div>
        </div>
      </div>
    </div>
  )
}
