import ProductPage from '../../components/ProductPage'
export default function Messenger() {
  return <ProductPage
    name="Loop Messenger"
    category="Communication"
    color="#FF7A00"
    tagline="Production-grade realtime messaging for the RALD ecosystem. Secure, fast, and identity-verified."
    what="Loop Messenger is the realtime communication product of the RALD ecosystem. It is a production messaging platform supporting direct messages, group chats, and business-to-customer messaging — all backed by RALD identity verification. Every message sender is a verified RALD user, which means Messenger has near-zero anonymous spam or phishing. It is not a consumer social messaging app. It is built as operational infrastructure for teams, businesses, and ecosystem-native communication."
    why="Most African messaging happens on platforms not built for Africa — without local trust signals, without ecosystem-native identity verification, and without any integration with the commerce and payment tools Africans need. Messenger was built to fill this gap: a messaging platform where identity is verified, payments can be initiated in-conversation, and business communication is a first-class feature."
    how={[
      { step: 'Identity-first', desc: 'You message people by their RALD ID or verified phone number. There are no anonymous accounts — every conversation starts from a verified identity.' },
      { step: 'End-to-end encryption', desc: 'Direct messages use end-to-end encryption by default. Only sender and recipient can read message content.' },
      { step: 'Business channels', desc: 'Businesses verified on Loop can create official channels and send one-to-many messages to opted-in customers.' },
      { step: 'In-message payments', desc: 'Send and receive money via PayRald directly within a conversation. Request, pay, and confirm — without leaving Messenger.' },
      { step: 'Ecosystem integration', desc: 'Receive Loop order updates, DunaRald notifications, and RALD system messages in your Messenger inbox alongside personal conversations.' },
    ]}
    whoFor={['Individual users', 'Businesses communicating with customers', 'Teams using RALD products', 'Sellers on Loop', 'Customer support teams']}
    dataProtection={[
      { point: 'End-to-end encryption', desc: 'DMs are encrypted with Signal Protocol-based E2EE. RALD servers only route encrypted payloads.' },
      { point: 'Message retention controls', desc: 'Users can set disappearing message timers per conversation.' },
      { point: 'No ad targeting', desc: 'Messenger content is never used for advertising profiling.' },
      { point: 'Verified sender badges', desc: 'Business and official senders carry a verified badge so you always know who is messaging you.' },
      { point: 'Block and report', desc: 'Any conversation can be blocked and reported. Reports are reviewed within 24 hours.' },
    ]}
    roadmap={[
      { phase: 'Phase I', item: 'Voice messages and voice calls' },
      { phase: 'Phase I', item: 'Message reactions and threading' },
      { phase: 'Phase II', item: 'Video calls — 1:1 and group' },
      { phase: 'Phase II', item: 'Messenger bots — verified business automation' },
      { phase: 'Phase III', item: 'Cross-platform federation — message non-RALD users via bridged protocols' },
    ]}
  />
}
