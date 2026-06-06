import SEO from '../components/SEO'

export default function Wizmac() {
  return (
    <>
      <SEO title="Wizmac — Permanent Knowledge Graph" description="Wizmac is RALD's permanent knowledge graph and institutional memory system. Purpose, responsibilities, human oversight, data handling, and privacy controls." path="/wizmac" type="article" />
      <div className="section">
        <div className="container" style={{ maxWidth: 860 }}>
          <div style={{ marginBottom: 56 }}>
            <div style={{ fontSize: 12, fontWeight: 700, color: '#00E5FF', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 12 }}>AI Infrastructure</div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 20 }}>
              <div style={{ width: 56, height: 56, borderRadius: 14, background: 'rgba(0,229,255,0.1)', border: '1px solid rgba(0,229,255,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 26 }}>◈</div>
              <div>
                <h1 style={{ fontSize: 'clamp(28px,4vw,48px)', fontWeight: 900, letterSpacing: '-0.02em', color: '#E8EDF3', lineHeight: 1 }}>Wizmac</h1>
                <div style={{ fontSize: 13, color: '#00E5FF', fontWeight: 600, marginTop: 4 }}>Permanent Knowledge Graph & Institutional Memory</div>
              </div>
            </div>
            <p style={{ color: 'var(--muted)', fontSize: 16, lineHeight: 1.7 }}>Wizmac is RALD's permanent knowledge management system — the only system in the ecosystem authorized to permanently remember things. It is ecosystem infrastructure, not a consumer AI assistant. It operates under strict rules, with mandatory human oversight, and never takes autonomous action.</p>
          </div>

          {[
            { title: 'Purpose', color: '#00E5FF', items: [
              ['What it does', 'Wizmac stores, organizes, and retrieves verified knowledge about the RALD ecosystem. This includes product documentation, architectural decisions, trust policies, system state, and institutional history.'],
              ['What it does not do', 'Wizmac does not interact with users directly. It does not generate content for public consumption. It does not make decisions. It is a knowledge repository — not a decision engine.'],
              ['Who uses it', 'Wizmac is used internally by RALD\'s engineering, trust, and AI teams. Sekani queries Wizmac to retrieve accurate information when orchestrating ecosystem operations.'],
            ]},
            { title: 'Responsibilities', color: '#00E5FF', items: [
              ['Knowledge integrity', 'Wizmac maintains verified, structured facts about the RALD ecosystem. Every item stored has a source, a confidence level, and a review date.'],
              ['Institutional memory', 'Architectural decisions, policy changes, and significant system events are recorded in Wizmac with full context — so future systems and teams can understand why decisions were made.'],
              ['Knowledge versioning', 'All knowledge in Wizmac is versioned. When facts change (e.g., a product feature is updated), the old version is archived, not deleted. The history is preserved.'],
            ]},
            { title: 'Human Oversight', color: '#00E5FF', items: [
              ['Knowledge approval', 'New items added to Wizmac\'s permanent knowledge base require approval from a designated RALD team member. Automated systems can propose additions — humans approve them.'],
              ['Audit access', 'Every query to Wizmac is logged. RALD\'s trust team has full read access to query logs and can audit what information Sekani or other systems retrieved and when.'],
              ['Override authority', 'RALD\'s trust team can quarantine, flag, or remove any item from Wizmac at any time without requiring a code deployment. A web-based admin panel provides this capability.'],
              ['Escalation', 'When Wizmac encounters a query it cannot answer with high confidence, it escalates to a human reviewer rather than providing a low-confidence answer.'],
            ]},
            { title: 'Data Handling', color: '#00E5FF', items: [
              ['What Wizmac stores', 'Ecosystem knowledge: product documentation, architectural decisions, trust policies, API contracts, compliance records, and verified factual claims about RALD products and operations.'],
              ['What Wizmac does not store', 'Personal user data. Transaction history. Message content. Private user records. Wizmac is institutional knowledge — not a user data store.'],
              ['Storage security', 'Wizmac\'s knowledge base is encrypted at rest and access-controlled. Only authorized RALD systems (Sekani) and designated team members can read from it.'],
              ['Data retention', 'Knowledge items are retained indefinitely (as institutional memory). Items can be archived or marked superseded but are not permanently deleted — the history is the point.'],
            ]},
            { title: 'Privacy Controls', color: '#00E5FF', items: [
              ['No personal data', 'Wizmac does not store personal user data. There is no privacy risk from Wizmac to individual RALD users.'],
              ['Access control', 'Access to Wizmac is limited to authorized RALD systems and team members. It is not publicly queryable.'],
              ['Transparency', 'The existence of Wizmac, its purpose, and its governance is documented here as part of RALD\'s commitment to AI transparency.'],
            ]},
          ].map(block => (
            <div key={block.title} style={{ marginBottom: 40 }}>
              <h2 style={{ fontSize: 20, fontWeight: 800, marginBottom: 20, color: '#E8EDF3', display: 'flex', alignItems: 'center', gap: 10 }}>
                <span style={{ display: 'inline-block', width: 4, height: 20, background: block.color, borderRadius: 2 }} />{block.title}
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
        </div>
      </div>
    </>
  )
}
