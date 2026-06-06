import ProductPage from '../../components/ProductPage'
export default function Loop() {
  return <ProductPage
    name="Loop"
    category="Commerce"
    color="#00FF88"
    tagline="African-first social commerce. Discover products, connect with sellers, and transact — all in one realtime platform."
    what="Loop is the social commerce platform built for Africa. It combines the discovery energy of social media with the infrastructure of e-commerce — letting sellers build storefronts, run live sessions, engage customers in real time, and process payments through PayRald, all within a single product. Loop is not an imitation of Western e-commerce platforms. It is designed from the ground up for African buying behaviors, logistics realities, and trust dynamics."
    why="E-commerce in Africa fails most users because it assumes infrastructure — reliable payments, fast logistics, trusted sellers — that does not yet exist at scale. Loop was built to meet Africa where it is: supporting mobile-first experiences, cash-adjacent payment methods, local logistics integrations, and community-based trust signals. It was also built because sellers in Africa deserve a platform that treats them as the main character, not as a distribution channel for imported products."
    how={[
      { step: 'Seller onboarding', desc: 'Sellers create a Loop Business account, verify their identity via RALD Profiles, and set up their storefront with products, pricing, and delivery options.' },
      { step: 'Discovery', desc: 'Buyers discover products through the Loop feed — algorithmic recommendations powered by Raldtics, social signals, and verified seller status.' },
      { step: 'Live commerce', desc: 'Sellers can go live, showcase products in real time, answer questions, and take orders during the session.' },
      { step: 'Payment', desc: 'Transactions route through PayRald — supporting cards, bank transfers, USSD, and wallet payments. Escrow protection is available for high-value orders.' },
      { step: 'Fulfillment', desc: 'Sellers choose from integrated logistics providers via Loop Dispatch. Tracking is real-time and shared with both seller and buyer.' },
    ]}
    whoFor={['Individual sellers', 'SMEs and retailers', 'Artisans and creators', 'Brand stores', 'Buyers across Africa', 'Live commerce content creators']}
    dataProtection={[
      { point: 'Seller verification', desc: 'Every seller is identity-verified through RALD Profiles before listing products. Buyers always know who they are buying from.' },
      { point: 'Payment escrow', desc: 'For supported transaction types, funds are held in escrow until delivery is confirmed — protecting buyers from fraud.' },
      { point: 'Data locality', desc: 'Nigerian user data is stored in Nigeria-region infrastructure, in compliance with NDPR.' },
      { point: 'Purchase history privacy', desc: 'Your transaction history is never shared with other sellers or advertisers.' },
      { point: 'Content moderation', desc: 'All product listings pass through automated and manual review. Prohibited items are removed within 24 hours of detection.' },
    ]}
    roadmap={[
      { phase: 'Phase I', item: 'Group buying — pool orders with friends for bulk discounts' },
      { phase: 'Phase I', item: 'Seller analytics dashboard powered by Raldtics' },
      { phase: 'Phase II', item: 'Loop Ads — targeted advertising within the Loop discovery feed' },
      { phase: 'Phase II', item: 'Cross-border commerce — buy and sell across ECOWAS countries' },
      { phase: 'Phase III', item: 'Loop Franchise — white-label Loop storefronts for enterprise brands' },
    ]}
    links={[{ label: 'Join the waitlist', href: 'https://rald.cloud/loop' }]}
  />
}
