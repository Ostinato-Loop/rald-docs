import { Link } from 'wouter'
import SEO from '../components/SEO'
export default function NotFound() {
  return (
    <>
      <SEO title="Page Not Found" description="The page you're looking for doesn't exist on RALD Learn." path="/404" />
      <div style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '60px 24px' }}>
        <div>
          <div style={{ fontSize: 80, fontWeight: 900, color: 'var(--subtle)', lineHeight: 1, marginBottom: 16 }}>404</div>
          <h1 style={{ fontSize: 24, fontWeight: 800, marginBottom: 12, color: '#E8EDF3' }}>Page not found</h1>
          <p style={{ color: 'var(--muted)', marginBottom: 32, maxWidth: 360 }}>This page doesn't exist in the RALD knowledge center. Try navigating from the home page.</p>
          <Link href="/" style={{ padding: '10px 24px', borderRadius: 30, background: '#00FF88', color: '#000', fontWeight: 700, fontSize: 13 }}>Back to home</Link>
        </div>
      </div>
    </>
  )
}
