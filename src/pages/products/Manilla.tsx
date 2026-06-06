import ProductPage from '../../components/ProductPage'
export default function Manilla() {
  return <ProductPage
    name="Manilla"
    category="Productivity"
    color="#F59E0B"
    tagline="Workspace, project management, and team productivity — built natively into the RALD ecosystem."
    what="Manilla is the productivity and workspace product of the RALD ecosystem. It provides project management, team collaboration, document creation, and task tracking — all connected to your RALD identity and integrated with the commerce, payments, and communication tools you already use on RALD. Unlike generic productivity tools, Manilla is designed for African teams and businesses: understanding that small teams often wear many hats, that offline-first matters, and that the same identity used for payments should work for workspace access control."
    why="African businesses managing operations across Loop, PayRald, and Messenger needed a unified workspace that did not require them to leave the RALD ecosystem for project management. Manilla was built to close that gap — a productivity tool that speaks the same identity language as the rest of RALD, reducing context switching and giving teams a single operational environment."
    how={[
      { step: 'Workspace creation', desc: 'Create a Manilla workspace with your RALD business identity. Invite team members using their RALD IDs.' },
      { step: 'Projects & boards', desc: 'Organize work into projects with kanban boards, list views, or timeline views depending on your preference.' },
      { step: 'Tasks & assignments', desc: 'Create tasks, assign them to team members, set due dates, attach files, and track progress.' },
      { step: 'Documents', desc: 'Create and collaborate on documents, SOPs, and briefs within the workspace — shared knowledge that lives alongside the work.' },
      { step: 'Ecosystem connections', desc: 'Connect Manilla to Loop orders, PayRald transactions, and Messenger conversations — surface relevant context directly in your workspace.' },
    ]}
    whoFor={['Small and medium businesses', 'Remote and hybrid African teams', 'Freelancers managing client work', 'Loop sellers managing operations', 'Agencies and service providers']}
    dataProtection={[
      { point: 'Workspace isolation', desc: 'Each workspace is fully isolated. Members only see what they are explicitly added to.' },
      { point: 'Permission levels', desc: 'Fine-grained roles: Owner, Admin, Member, Guest. Guests can only access specific projects.' },
      { point: 'Document encryption', desc: 'All documents and attachments are encrypted at rest.' },
      { point: 'Data residency', desc: 'Nigerian business data is stored in Nigeria-region infrastructure.' },
      { point: 'Audit trail', desc: 'All workspace actions (file access, member changes, permission changes) are logged and accessible to workspace admins.' },
    ]}
    roadmap={[
      { phase: 'Coming Soon', item: 'Initial launch: projects, boards, tasks, and team members' },
      { phase: 'Phase I', item: 'Document creation and collaborative editing' },
      { phase: 'Phase I', item: 'Loop order tracking integrated into project boards' },
      { phase: 'Phase II', item: 'Time tracking and billing integration with PayRald' },
      { phase: 'Phase II', item: 'Client portal — share project views with external clients' },
      { phase: 'Phase III', item: 'Workflow automation — trigger actions based on task state changes' },
    ]}
  />
}
