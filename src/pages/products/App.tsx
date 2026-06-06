import ProductPage from '../../components/ProductPage'
export default function AppProduct() {
  return <ProductPage
    name="RALD App"
    category="Account Center"
    color="#00FF88"
    tagline="Your personal command center for the entire RALD ecosystem. Manage identity, security, privacy, and every connected product in one place."
    what="RALD App (app.rald.cloud) is the account management center for the RALD ecosystem — equivalent in scope and quality to Google My Account. It is the single place where you see and control everything: your profile, your connected applications, your active sessions, your devices, your verification status, your activity history, your privacy settings, and your security configuration. It is not a product you use to do things — it is the control plane for your entire digital identity within RALD."
    why="As RALD grew from individual products into a unified ecosystem, users needed a central place to understand and control how their identity, data, and permissions were being used across every product. We built RALD App to give users complete transparency and control — matching the quality of the best identity management systems in the world, while being built specifically for the African context."
    how={[
      { step: 'Sign in', desc: 'Authenticate at app.rald.cloud with your RALD credentials. MFA is supported and encouraged.' },
      { step: 'Profile tab', desc: 'View and edit your name, bio, display name, and account details.' },
      { step: 'Connected Apps', desc: 'See every RALD product connected to your account, when it last accessed your data, and what permissions it holds. Revoke access with one tap.' },
      { step: 'Sessions & Devices', desc: 'View every active login session and registered device. Revoke individual sessions or sign out of all devices instantly.' },
      { step: 'Activity', desc: 'A full log of logins, device accesses, app launches, verification events, and security events. Exportable.' },
      { step: 'Privacy', desc: 'Control your data visibility, activity tracking preferences, and marketing communications.' },
    ]}
    whoFor={['All RALD users', 'Security-conscious individuals', 'Parents managing family accounts', 'Enterprise administrators', 'Compliance officers']}
    dataProtection={[
      { point: 'Session isolation', desc: 'Each session carries its own token. Revoking one session does not affect others unless "Revoke All" is used.' },
      { point: 'Device fingerprinting', desc: 'New device logins trigger verification challenges. Trusted devices are stored with your consent.' },
      { point: 'Audit log integrity', desc: 'Activity logs are append-only and cannot be modified retroactively — even by RALD staff.' },
      { point: 'Zero-knowledge privacy settings', desc: 'Privacy preference changes are processed client-side before being encrypted and stored. RALD staff cannot read your preferences.' },
      { point: 'Account deletion', desc: 'Requesting account deletion schedules full data purge within 30 days. You can cancel within that window.' },
    ]}
    roadmap={[
      { phase: 'Phase I', item: 'TOTP authenticator app support (Google Authenticator, Authy)' },
      { phase: 'Phase I', item: 'Recovery codes and backup authentication methods' },
      { phase: 'Phase II', item: 'Organization management — manage team members under a verified business account' },
      { phase: 'Phase II', item: 'Fine-grained consent engine — grant and revoke individual data scopes per app' },
      { phase: 'Phase III', item: 'Family accounts — supervised access for minors with parental controls' },
      { phase: 'Phase III', item: 'Exportable data archive — download everything RALD holds about you in one ZIP' },
    ]}
    links={[{ label: 'Open My Account', href: 'https://app.rald.cloud' }]}
  />
}
