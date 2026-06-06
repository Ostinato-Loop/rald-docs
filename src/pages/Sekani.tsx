import SEO from '../components/SEO'

export default function Sekani() {
  return (
    <>
      <SEO title="Sekani — AI Orchestration Layer" description="Sekani is RALD's AI orchestration layer. Voice-first, event-driven, powered by Wizmac and BBC. Purpose, responsibilities, human oversight, and privacy controls." path="/sekani" type="article" />
      <div className="section">
        <div className="container" style={{ maxWidth: 860 }}>
          <div style={{ marginBottom: 56 }}>
            <div style={{ fontSize: 12, fontWeight: 700, color: '#A855F7', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 12 }}>AI Infrastructure</div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 20 }}>
              <div style={{ width: 56, height: 56, borderRadius: 14, background: 'rgba(168,85,247,0.1)', border: '1px solid rgba(168,85,247,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 26 }}>◎</div>
              <div>
                <h1 style={{ fontSize: 'clamp(28px,4vw,48px)', fontWeight: 900, letterSpacing: '-0.02em', color: '#E8EDF3', lineHeight: 1 }}>Sekani</h1>
                <div style={{ fontSize: 13, color: '#A855F7', fontWeight: 600, marginTop: 4 }}>AI Orchestration Layer — Voice-first, Event-driven</div>
              </div>
            </div>
            <p style={{ color: 'var(--muted)', fontSize: 16, lineHeight: 1.7 }}>Sekani is RALD's AI orchestration system. It coordinates AI-assisted actions across the ecosystem — retrieving knowledge from Wizmac, processing voice through BBC, and executing ecosystem operations. It is infrastructure. It is not an autonomous agent. Every consequential action requires human oversight.</p>
          </div>

          {[
            { title: 'Purpose', color: '#A855F7', items: [
              ['What it does', 'Sekani orchestrates AI-assisted operations across the RALD ecosystem. It receives events (user voice input, system triggers, product requests), retrieves relevant knowledge from Wizmac, processes language through BBC, and coordinates actions — routing them to the appropriate RALD systems.'],
              ['Voice-first design', 'Sekani is designed to understand and respond in voice — including African languages, dialects, and Pidgin English — making the RALD ecosystem accessible to users who prefer voice interaction over text UI.'],
              ['Event-driven architecture', 'Sekani does not run continuously monitoring users. It is event-driven: activated by specific triggers, it processes the event, takes defined actions, and terminates. This limits scope and attack surface.'],
              ['What it is not', 'Sekani is not a general-purpose AI assistant. It is not ChatGPT. It is not an autonomous agent. It is a coordinated, rule-governed orchestration system operating within strictly defined boundaries.'],
            ]},
            { title: 'Responsibilities', color: '#A855F7', items: [
              ['Knowledge retrieval', 'When a RALD product or user needs ecosystem knowledge, Sekani queries Wizmac for accurate, verified information — ensuring responses are grounded in RALD\'s institutional knowledge.'],
              ['Voice processing', 'Sekani processes voice input through BBC (the linguistic framework), converting speech to structured intent — including support for Nigerian languages and Pidgin.'],
              ['Action coordination', 'Sekani coordinates actions across RALD products in response to events — for example, routing a voice purchase intent to Loop, triggering a PayRald payment, and sending a Messenger confirmation.'],
              ['Escalation', 'When Sekani encounters an ambiguous situation, a high-stakes action, or low-confidence intent, it escalates to a human operator rather than proceeding autonomously.'],
            ]},
            { title: 'Human Oversight', color: '#A855F7', items: [
              ['Action gates', 'Consequential actions (payment processing, account changes, data modifications) require explicit confirmation — either from the user or from a RALD operator depending on the action type.'],
              ['Operation logs', 'Every Sekani operation is logged: the triggering event, the knowledge retrieved, the actions taken, the confidence scores, and the outcome. Logs are available to RALD\'s trust team.'],
              ['Capability limits', 'Sekani\'s capabilities are explicitly enumerated and version-controlled. It cannot access systems, data, or take actions outside its defined capability set — no scope creep.'],
              ['Kill switch', 'RALD\'s trust team can deactivate any or all of Sekani\'s capabilities instantly without a code deployment. Emergency controls are always available to human operators.'],
            ]},
            { title: 'Data Handling', color: '#A855F7', items: [
              ['Session-scoped context', 'Sekani maintains context only within a single session. It does not retain memory between sessions by default — each interaction starts fresh.'],
              ['Voice data', 'Voice inputs processed by Sekani are transcribed and processed in-memory. Audio is not stored after transcription unless the user has consented to voice history (a future feature).'],
              ['Wizmac queries', 'Sekani queries Wizmac for knowledge retrieval. These queries are logged but do not include personal user data — only the knowledge being looked up.'],
              ['No training on user data', 'Sekani\'s underlying models are not trained on RALD user conversations or data without explicit consent.'],
            ]},
            { title: 'Privacy Controls', color: '#A855F7', items: [
              ['Opt-out of Sekani features', 'Users can opt out of Sekani-powered features from app.rald.cloud → Privacy → AI Features. Opting out removes your data from Sekani\'s inference pipelines.'],
              ['Voice history', 'Voice interaction history is not stored by default. If a future opt-in voice history feature is launched, users will have full control to view, delete, and export it.'],
              ['Transparency notices', 'When Sekani has assisted with a decision or action, this is disclosed to the affected user in the relevant RALD product interface.'],
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
