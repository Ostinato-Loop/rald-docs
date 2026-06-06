import SEO from '../components/SEO'

export default function AI() {
  return (
    <>
      <SEO
        title="AI & Intelligent Infrastructure"
        description="How RALD uses AI responsibly — Wizmac, Sekani, human oversight, data handling, and AI privacy controls across the ecosystem."
        path="/ai"
        type="article"
      />
      <div className="section">
        <div className="container">
          <div style={{ marginBottom: 56 }}>
            <div style={{ fontSize: 12, fontWeight: 700, color: '#FFD400', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 12 }}>AI</div>
            <h1 style={{ fontSize: 'clamp(32px,5vw,56px)', fontWeight: 900, letterSpacing: '-0.02em', marginBottom: 16 }}>AI as ecosystem infrastructure.</h1>
            <p style={{ color: 'var(--muted)', fontSize: 16, maxWidth: 620, lineHeight: 1.7 }}>
              RALD uses AI to power the ecosystem — not to replace human judgment. Every AI system operates under defined rules, human oversight, and strict data governance. We do not market AI as autonomous. We present it as what it is: infrastructure.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(320px,1fr))', gap: 24, marginBottom: 64 }}>
            {[
              { name: 'Wizmac', color: '#00E5FF', href: '/wizmac', role: 'Permanent Knowledge Graph', desc: 'RALD\'s institutional memory and knowledge management system. Stores verified, structured ecosystem knowledge — product documentation, trust policies, system decisions. Wizmac is the ONLY system in the RALD ecosystem allowed to permanently remember things.' },
              { name: 'Sekani', color: '#A855F7', href: '/sekani', role: 'AI Orchestration Layer', desc: 'RALD\'s event-driven AI orchestration system. Voice-first. Powered by Wizmac for knowledge retrieval and BBC for linguistic intelligence. Sekani coordinates AI-assisted actions across the ecosystem — always with human oversight.' },
              { name: 'BBC', color: '#FFD400', href: '/ai#bbc', role: 'Linguistic Intelligence', desc: 'Blanchard Blanquette Code — RALD\'s linguistic, agent, cultural, voice, and knowledge framework. BBC enables African-language understanding, cultural context, and voice interaction across all Sekani-powered features.' },
            ].map(a => (
              <div key={a.name} style={{ padding: '28px', borderRadius: 16, background: 'var(--surface)', border: `1px solid ${a.color}25` }}>
                <div style={{ fontSize: 11, fontWeight: 700, color: a.color, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 8 }}>{a.role}</div>
                <div style={{ fontSize: 22, fontWeight: 900, marginBottom: 12, color: '#E8EDF3' }}>{a.name}</div>
                <div style={{ fontSize: 13, color: 'var(--muted)', lineHeight: 1.7, marginBottom: 20 }}>{a.desc}</div>
                <a href={a.href} style={{ fontSize: 12, fontWeight: 700, color: a.color }}>Full documentation →</a>
              </div>
            ))}
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 40 }}>
            {[
              { title: 'Human Oversight', color: '#FFD400', items: [
                ['Mandatory review gates', 'No AI system in RALD can take consequential actions — sending messages, processing payments, modifying user data — without a human review gate at the appropriate threshold.'],
                ['Audit trails', 'Every AI-assisted action is logged with the model used, the prompt context, the decision made, and the human reviewer (if applicable). Audit logs are immutable.'],
                ['Escalation rules', 'Wizmac and Sekani have defined escalation rules. When confidence is below threshold, the system flags for human review rather than proceeding autonomously.'],
                ['Override capability', 'RALD engineering and trust teams can override, pause, or terminate any AI system operation at any time without requiring a code deployment.'],
              ]},
              { title: 'Data Handling', color: '#FFD400', items: [
                ['Training data', 'RALD AI systems are not trained on user-generated content without explicit consent. We use curated, licensed, or RALD-internal datasets.'],
                ['Inference isolation', 'User data used for AI inference is isolated per session. It is not retained in AI context after the session ends.'],
                ['Wizmac boundaries', 'Wizmac stores only verified ecosystem knowledge — product documentation, policies, and system decisions. It does not store personal user data.'],
                ['No model exfiltration', 'User data cannot be extracted through prompt injection or model queries. System prompts and data isolation prevent cross-user data leakage.'],
              ]},
              { title: 'AI Privacy Controls', color: '#FFD400', items: [
                ['Opt-out of AI features', 'Users can opt out of AI-powered features (recommendations, voice assistance) from app.rald.cloud → Privacy → AI Features.'],
                ['Data exclusion', 'Opting out of AI features excludes your data from AI inference pipelines — not just from the UI feature.'],
                ['Transparency', 'When an AI system has influenced a decision (a recommendation, a moderation action, a fraud flag), RALD discloses this to the affected user.'],
                ['Right to explanation', 'If an AI-assisted decision has affected your account (e.g., a fraud flag), you can request a human explanation at any time.'],
              ]},
            ].map(block => (
              <div key={block.title}>
                <h2 style={{ fontSize: 20, fontWeight: 800, marginBottom: 20, color: '#E8EDF3', display: 'flex', alignItems: 'center', gap: 10 }}>
                  <span style={{ display: 'inline-block', width: 4, height: 20, background: block.color, borderRadius: 2 }} />
                  {block.title}
                </h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(280px,1fr))', gap: 12 }}>
                  {block.items.map(([label, desc]) => (
                    <div key={label} style={{ padding: '18px 20px', borderRadius: 12, background: 'var(--surface)', border: '1px solid var(--border)' }}>
                      <div style={{ fontWeight: 700, marginBottom: 6, color: '#E8EDF3', fontSize: 13 }}>{label}</div>
                      <div style={{ fontSize: 12, color: 'var(--muted)', lineHeight: 1.7 }}>{desc}</div>
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
