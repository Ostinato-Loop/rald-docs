import ProductPage from '../../components/ProductPage'
export default function Profiles() {
  return <ProductPage
    name="RALD Profiles"
    category="Identity"
    color="#00E5FF"
    tagline="The unified identity layer for the entire RALD ecosystem. One profile. Every product. Full control."
    what="RALD Profiles is the identity infrastructure that powers every product in the RALD ecosystem. It is not a social network profile or a simple username system — it is a structured, verifiable digital identity that travels with you across Loop, Messenger, DunaRald, PayRald, and every other RALD product. A RALD Profile contains your verified identity, your permissions, your connected applications, your verification status, and your privacy settings — all in one place, controlled entirely by you."
    why="Africa's digital infrastructure has long suffered from fragmented identity — every app asks for your email, your phone, your address, your ID, over and over again. RALD was built to solve this. Profiles gives users a single, trusted identity that they own, that is verifiable by any RALD product, and that they can revoke at any time. It was also built because trust is the foundation of commerce, communication, and finance — without verified, portable identity, the ecosystem cannot function at the quality level RALD demands."
    how={[
      { step: 'Account creation', desc: 'You create a RALD account with your email and phone number. A unique RALD ID is assigned — a permanent, portable identifier that is yours for life.' },
      { step: 'Verification', desc: 'You verify your email and optionally your phone number and government-issued ID. Each verified attribute adds a verification badge to your profile.' },
      { step: 'Identity propagation', desc: 'When you connect to a RALD product (Loop, Messenger, PayRald, etc.), that product receives only the identity attributes you have approved — governed by scoped permissions.' },
      { step: 'Profile management', desc: 'From app.rald.cloud, you can see every product connected to your identity, every permission granted, and every session active. You can revoke any of them instantly.' },
    ]}
    whoFor={['Individual users', 'Businesses on Loop', 'Developers integrating RALD Auth', 'Enterprise customers', 'Verified merchants', 'Content creators on DunaRald']}
    dataProtection={[
      { point: 'Data minimization', desc: 'Products only receive the profile fields they explicitly need. A messaging app does not see your payment history.' },
      { point: 'Scoped permissions', desc: 'Every attribute (name, email, phone, verification status) is individually permissioned. You grant access per-app.' },
      { point: 'Encryption at rest', desc: 'All profile data is encrypted at rest using AES-256. Sensitive fields (government ID scans) are encrypted with additional field-level encryption.' },
      { point: 'NDPR and GDPR alignment', desc: 'RALD Profiles is designed to comply with Nigeria\'s NDPR and the EU\'s GDPR. Users have rights of access, correction, and deletion.' },
      { point: 'No selling of data', desc: 'RALD does not sell, trade, or share your profile data with third parties outside of the RALD ecosystem without explicit consent.' },
      { point: 'Audit logs', desc: 'Every access to your profile data is logged. You can view and export the full audit log from app.rald.cloud.' },
    ]}
    roadmap={[
      { phase: 'Phase I', item: 'TOTP two-factor authentication for all RALD accounts' },
      { phase: 'Phase I', item: 'Government ID verification (NIN, BVN, International Passport)' },
      { phase: 'Phase II', item: 'Organization profiles — verified business identities on RALD' },
      { phase: 'Phase II', item: 'Delegated access — grant a team member limited access to your profile' },
      { phase: 'Phase III', item: 'Decentralized identity anchoring — optionally anchor your RALD ID to a blockchain proof' },
      { phase: 'Phase III', item: 'Cross-ecosystem identity — RALD Profile as an SSO for third-party African platforms' },
    ]}
    links={[{ label: 'Manage your profile', href: 'https://app.rald.cloud' }]}
  />
}
