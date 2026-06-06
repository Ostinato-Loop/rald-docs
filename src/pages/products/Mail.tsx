import ProductPage from '../../components/ProductPage'
export default function Mail() {
  return <ProductPage
    name="RALD Mail"
    category="Communication"
    color="#34D399"
    tagline="Ecosystem-native email — privacy-first, identity-verified, and built for Africa."
    what="RALD Mail is the email product of the RALD ecosystem. It provides @rald.cloud email addresses that are tied to your RALD identity, giving you a verified, trustworthy digital presence for both personal and business communication. RALD Mail is not a full replacement for Gmail or Outlook — it is ecosystem-native email: a layer of communication that is identity-verified, integrated with your RALD account center, and privacy-first by design."
    why="Email is still the primary channel for formal communication, verification, and business correspondence in Africa. But most Africans use email addresses from global providers that have no integration with their digital commerce or financial life. RALD Mail gives you an email address that is tied to your verified African identity — a professional address that your business partners, customers, and ecosystem counterparts can trust because it is backed by RALD's verification infrastructure."
    how={[
      { step: 'Identity-linked address', desc: 'Your RALD Mail address is tied to your verified RALD Profile. Recipients can verify your identity through your RALD Verification badge.' },
      { step: 'Ecosystem integration', desc: 'RALD system notifications, Loop order updates, PayRald receipts, and Messenger alerts can all arrive in your RALD Mail inbox.' },
      { step: 'Business mail', desc: 'Verified businesses get @yourbusiness.rald.cloud email addresses for their team — tied to Loop Business or Manilla workspace memberships.' },
      { step: 'Privacy controls', desc: 'You control which RALD products can send to your email address. Each product\'s email access is a separate permission you can revoke.' },
    ]}
    whoFor={['RALD users wanting a verified ecosystem address', 'Businesses communicating with customers', 'Developers receiving API notifications', 'Professionals needing a verified digital identity']}
    dataProtection={[
      { point: 'Encrypted storage', desc: 'All email content is encrypted at rest. RALD cannot read your email content.' },
      { point: 'Sender verification', desc: 'RALD Mail implements DMARC, DKIM, and SPF — email from @rald.cloud is always authentic.' },
      { point: 'No advertising profiling', desc: 'Your email content is never analyzed for advertising purposes.' },
      { point: 'Spam protection', desc: 'RALD identity verification means all mail from RALD users is from verified humans — near-zero ecosystem spam.' },
      { point: 'Data residency', desc: 'Nigerian user email data is stored in Nigeria-region infrastructure.' },
    ]}
    roadmap={[
      { phase: 'Coming Soon', item: 'RALD Mail launch — @rald.cloud personal addresses for all verified users' },
      { phase: 'Phase I', item: 'Business email — @yourbusiness.rald.cloud for verified Loop businesses' },
      { phase: 'Phase I', item: 'Mobile app — RALD Mail native experience on iOS and Android' },
      { phase: 'Phase II', item: 'Custom domain email — bring your own domain, powered by RALD infrastructure' },
      { phase: 'Phase III', item: 'Sekani email assistant — AI that helps draft, organize, and prioritize your inbox' },
    ]}
  />
}
