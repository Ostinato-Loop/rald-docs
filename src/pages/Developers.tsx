import SEO from '../components/SEO'

const SDKS = [
  { name: '@rald/react', color: '#0066FF', desc: 'React hooks and components for RALD Auth, identity, and product APIs.', install: 'npm install @rald/react' },
  { name: '@rald/react-native', color: '#00BFFF', desc: 'React Native SDK for building mobile apps with RALD Auth and ecosystem APIs.', install: 'npm install @rald/react-native' },
  { name: '@rald/nextjs', color: '#00FF88', desc: 'Next.js SDK with SSR-compatible auth, middleware helpers, and API routes.', install: 'npm install @rald/nextjs' },
  { name: '@rald/sdk', color: '#FFD400', desc: 'Universal JavaScript SDK — works in Node.js, Cloudflare Workers, and browsers.', install: 'npm install @rald/sdk' },
]

export default function Developers() {
  return (
    <>
      <SEO title="Developer Documentation" description="Build on RALD — SDKs, REST APIs, OAuth, webhooks, and the developer console. Everything developers need to integrate with the RALD ecosystem." path="/developers" type="article" />
      <div className="section">
        <div className="container">
          <div style={{ marginBottom: 56 }}>
            <div style={{ fontSize: 12, fontWeight: 700, color: '#0066FF', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 12 }}>Developers</div>
            <h1 style={{ fontSize: 'clamp(32px,5vw,56px)', fontWeight: 900, letterSpacing: '-0.02em', marginBottom: 16 }}>Build on RALD.</h1>
            <p style={{ color: 'var(--muted)', fontSize: 16, maxWidth: 600, lineHeight: 1.7 }}>RALD provides production-grade SDKs, REST APIs, OAuth 2.0, and webhooks for developers building on or integrating with the RALD ecosystem. Everything is designed to be predictable, versioned, and African-infrastructure-aware.</p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 48 }}>
            <div>
              <h2 style={{ fontSize: 20, fontWeight: 800, marginBottom: 20, color: '#E8EDF3' }}>SDKs</h2>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(280px,1fr))', gap: 14 }}>
                {SDKS.map(s => (
                  <div key={s.name} style={{ padding: '22px', borderRadius: 14, background: 'var(--surface)', border: '1px solid var(--border)' }}>
                    <div style={{ fontWeight: 800, color: s.color, marginBottom: 8, fontSize: 14 }}>{s.name}</div>
                    <div style={{ fontSize: 12, color: 'var(--muted)', lineHeight: 1.6, marginBottom: 14 }}>{s.desc}</div>
                    <code style={{ fontSize: 11, background: 'var(--surface-2)', padding: '6px 10px', borderRadius: 6, color: '#E8EDF3', display: 'block' }}>{s.install}</code>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 style={{ fontSize: 20, fontWeight: 800, marginBottom: 20, color: '#E8EDF3' }}>Authentication</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                {[
                  { title: 'OAuth 2.0 / SSO', desc: 'RALD Auth is an OAuth 2.0 + OpenID Connect provider. Use standard PKCE flow for web and mobile apps. Redirect URI, scope, and token endpoint are fully documented.' },
                  { title: 'API Keys', desc: 'For server-to-server integration, generate API keys from the RALD Console. Keys are scoped to specific products and permissions.' },
                  { title: 'Webhooks', desc: 'Subscribe to ecosystem events (new order, payment completed, user verified) via webhooks. HMAC-signed payloads. Retried up to 5 times on failure.' },
                  { title: 'JWT Verification', desc: 'RALD issues RS256 JWTs. Public JWKS endpoint available at https://auth.rald.cloud/.well-known/jwks.json for token verification.' },
                ].map(item => (
                  <div key={item.title} style={{ padding: '18px 22px', borderRadius: 12, background: 'var(--surface)', border: '1px solid var(--border)', display: 'flex', gap: 20 }}>
                    <div style={{ fontWeight: 700, color: '#0066FF', fontSize: 13, minWidth: 160, flexShrink: 0 }}>{item.title}</div>
                    <div style={{ fontSize: 13, color: 'var(--muted)', lineHeight: 1.7 }}>{item.desc}</div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 style={{ fontSize: 20, fontWeight: 800, marginBottom: 20, color: '#E8EDF3' }}>API Endpoints</h2>
              <div style={{ padding: '24px', borderRadius: 14, background: 'var(--surface)', border: '1px solid var(--border)' }}>
                {[
                  { method: 'GET', path: '/v1/users/me', desc: 'Authenticated user profile' },
                  { method: 'GET', path: '/v1/users/me/verification', desc: 'Verification status for authenticated user' },
                  { method: 'GET', path: '/v1/users/me/apps', desc: 'Connected apps for authenticated user' },
                  { method: 'POST', path: '/v1/auth/token', desc: 'Exchange authorization code for access token' },
                  { method: 'POST', path: '/v1/auth/refresh', desc: 'Refresh an access token' },
                  { method: 'DELETE', path: '/v1/auth/sessions/:id', desc: 'Revoke a specific session' },
                ].map(e => (
                  <div key={e.path} style={{ display: 'flex', alignItems: 'center', gap: 16, padding: '10px 0', borderBottom: '1px solid var(--border)' }}>
                    <span style={{ fontSize: 10, fontWeight: 800, padding: '2px 8px', borderRadius: 4, background: e.method === 'GET' ? '#00FF8820' : e.method === 'POST' ? '#0066FF20' : '#FF2E2E20', color: e.method === 'GET' ? '#00FF88' : e.method === 'POST' ? '#3385FF' : '#FF2E2E', minWidth: 46, textAlign: 'center' }}>{e.method}</span>
                    <code style={{ fontSize: 12, color: '#E8EDF3', flex: 1 }}>{e.path}</code>
                    <span style={{ fontSize: 12, color: 'var(--muted)' }}>{e.desc}</span>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ padding: '28px 32px', borderRadius: 16, background: 'rgba(0,102,255,0.05)', border: '1px solid rgba(0,102,255,0.2)' }}>
              <div style={{ fontWeight: 800, fontSize: 16, marginBottom: 8 }}>Developer Console</div>
              <div style={{ fontSize: 13, color: 'var(--muted)', marginBottom: 16, lineHeight: 1.7 }}>Create API keys, manage webhooks, view API logs, and explore the full API reference in the RALD Developer Console.</div>
              <a href="https://rald.cloud/console" style={{ padding: '10px 22px', borderRadius: 30, background: '#0066FF', color: '#fff', fontWeight: 700, fontSize: 12 }}>Open Console →</a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
