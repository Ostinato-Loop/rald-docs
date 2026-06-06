import ProductPage from '../../components/ProductPage'
export default function Voice() {
  return <ProductPage
    name="Loop Voice"
    category="Voice"
    color="#FF4FAD"
    tagline="Voice commerce, SIP communications, and voice-first customer support — built for Africa."
    what="Loop Voice is the voice communications product of the RALD ecosystem. It provides SIP-based voice calling, voice commerce interactions, and programmatic voice for businesses — all anchored to RALD identity. It is not a consumer VoIP app. It is the communication infrastructure for businesses that need to reach customers by phone, for Loop sellers who want to offer voice-assisted purchasing, and for RALD's voice-first experiences in markets where SMS and voice remain the primary digital interface."
    why="Africa has hundreds of millions of people who are connected primarily through voice — not through smartphones, not through apps. Loop Voice was built to ensure that the RALD ecosystem is accessible to every African, not just those with high-end devices and reliable data. It was also built because voice is still the most trusted communication channel in B2C relationships across much of the continent."
    how={[
      { step: 'Business voice numbers', desc: 'Businesses get a verified Loop Voice number linked to their RALD business identity. Callers always see a verified RALD business caller ID.' },
      { step: 'SIP infrastructure', desc: 'Loop Voice is built on enterprise SIP infrastructure, supporting high call volumes and low latency across Nigerian and West African networks.' },
      { step: 'Voice commerce', desc: 'Sellers can set up voice storefronts — customers call a number, navigate a menu, and place orders by voice, with payment via USSD or saved PayRald wallet.' },
      { step: 'Programmatic voice', desc: 'Developers can trigger outbound voice calls, IVR flows, and voice notifications via the RALD SDK.' },
      { step: 'Call recording & transcription', desc: 'With consent, calls can be recorded and transcribed for business review. Transcripts are processed by Sekani and stored encrypted.' },
    ]}
    whoFor={['SMEs with phone-based customer support', 'Loop sellers offering voice purchasing', 'Businesses in low-data regions', 'Developers building voice-first features', 'Financial services needing voice verification']}
    dataProtection={[
      { point: 'Caller identity verification', desc: 'Business callers are always verified RALD entities — no spoofed numbers in the Loop Voice network.' },
      { point: 'Consent-gated recording', desc: 'Call recording only activates when both parties have been notified and the caller has not opted out.' },
      { point: 'Encrypted transcripts', desc: 'Call transcripts are encrypted at rest and only accessible to the business account owner.' },
      { point: 'Data retention limits', desc: 'Call records are retained for 90 days by default. Businesses can configure shorter retention.' },
      { point: 'NDPR alignment', desc: 'Voice data collection follows Nigerian Data Protection Regulation guidelines for communication data.' },
    ]}
    roadmap={[
      { phase: 'Beta', item: 'SIP calling and business voice numbers — available now in Beta' },
      { phase: 'Phase I', item: 'IVR builder — drag-and-drop interactive voice response flows' },
      { phase: 'Phase I', item: 'Voice commerce storefront — order by phone with PayRald USSD checkout' },
      { phase: 'Phase II', item: 'Multi-language support — Yoruba, Igbo, Hausa, Pidgin voice recognition' },
      { phase: 'Phase III', item: 'AI voice agents powered by Sekani — handle calls autonomously with human oversight' },
    ]}
  />
}
