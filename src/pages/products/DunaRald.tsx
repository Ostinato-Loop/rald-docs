import ProductPage from '../../components/ProductPage'
export default function DunaRald() {
  return <ProductPage
    name="DunaRald"
    category="Entertainment"
    color="#A855F7"
    tagline="African-first discovery and entertainment commerce. Stream, discover, and buy — in one immersive experience."
    what="DunaRald is the entertainment and discovery commerce platform of the RALD ecosystem. It combines streaming, content discovery, and purchasing in one product — letting African creators, labels, studios, and brands publish content and sell directly to their audience. DunaRald is built for Africa's entertainment economy: music, film, comedy, spoken word, and live performance. It is not a clone of Spotify or Netflix. It is a platform where discovery and commerce are one, where African creators own their audience, and where transactions happen inside the experience."
    why="African creative industries are among the fastest-growing in the world — Afrobeats, Nollywood, Afrofusion, and emerging genres are generating billions in value globally. But African creators rarely capture that value because Western platforms control discovery, take large cuts, and have no understanding of local payment rails. DunaRald was built to return economic power to African creators by giving them a direct monetization channel that uses PayRald for payments, RALD Identity for verified fan relationships, and Loop for merchandise commerce."
    how={[
      { step: 'Creator onboarding', desc: 'Creators verify their identity via RALD Profiles and set up their DunaRald channel with content, pricing, and monetization preferences.' },
      { step: 'Content publishing', desc: 'Upload audio, video, or live streams. Set access levels: free, subscriber-only, pay-per-view, or exclusive.' },
      { step: 'Discovery', desc: 'Fans discover content through DunaRald\'s algorithm — trained on African taste signals, genre preferences, and social connections.' },
      { step: 'Commerce integration', desc: 'Creators link Loop storefronts to their DunaRald page. Fans can buy merchandise, tickets, and exclusive content in one flow.' },
      { step: 'Payments', desc: 'All transactions route through PayRald. Creators receive payouts directly to their PayRald wallet — no bank account required for initial payouts.' },
    ]}
    whoFor={['African music artists', 'Nollywood filmmakers', 'Podcasters and spoken word artists', 'Comedy creators', 'Live event organizers', 'Entertainment fans across Africa']}
    dataProtection={[
      { point: 'Creator identity verification', desc: 'Every creator is identity-verified — fans always know they are supporting a real, verified person or organization.' },
      { point: 'Content protection', desc: 'Paid content is DRM-protected. Downloads are watermarked with the purchaser\'s RALD ID.' },
      { point: 'Fan data ownership', desc: 'Creator fan lists belong to the creator — RALD does not sell fan data to third parties.' },
      { point: 'Payment privacy', desc: 'Transaction amounts are not visible to other fans. Your support is private.' },
      { point: 'Content moderation', desc: 'All published content is reviewed for prohibited material before going live.' },
    ]}
    roadmap={[
      { phase: 'Beta', item: 'Audio streaming and creator channels — available in Beta' },
      { phase: 'Phase I', item: 'Video streaming and Nollywood content partnerships' },
      { phase: 'Phase I', item: 'Live streaming with real-time fan tipping via PayRald' },
      { phase: 'Phase II', item: 'DunaRald for Labels — multi-artist management and royalty distribution' },
      { phase: 'Phase III', item: 'African entertainment index — charting African content globally' },
    ]}
    links={[{ label: 'Explore DunaRald', href: 'https://rald.cloud/dunarald' }]}
  />
}
