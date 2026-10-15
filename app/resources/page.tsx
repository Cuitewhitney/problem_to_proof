import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowUpRight, BuildIcon, ProblemIcon, ProofIcon, UsersIcon } from '../icons'
import { Header } from '../header'
import { Footer } from '../footer'

export const metadata: Metadata = {
  title: 'Legal & Resources · Nigeria Problem to Proof',
  description: 'Programme resources, rules and legal information for Nigeria Problem to Proof.',
}

const resourceGroups = [
  { icon: BuildIcon, title: 'For builders', resources: ['Eligibility & participation guide', 'Application requirements', 'Selection criteria', 'Challenge-specific rules'] },
  { icon: ProblemIcon, title: 'For problem submitters', resources: ['Problem submission guide', 'Problem research consent', 'Intellectual-property principle', 'Data-protection notice'] },
  { icon: UsersIcon, title: 'For participants & partners', resources: ['Participant agreement', 'Safeguarding policy', 'Partnership information', 'Media and filming consent'] },
]

export default function ResourcesPage() {
  return <main className="resources-page">
    <Header />
    <section className="resources-hero"><div><p className="eyebrow"><span /> LEGAL &amp; RESOURCES</p><h1>Everything you need<br />to take part <em>well.</em></h1><p>Clear rules, useful guidance and transparent programme information will be published here as the 2027 edition opens.</p></div><div className="resources-hero-mark" aria-hidden="true"><ProofIcon /><span>2027</span></div></section>
    <section className="resources-intro section"><p className="eyebrow"><span /> BUILT FOR CLARITY</p><div><h2>Know the process<br />before you <em>begin.</em></h2><p className="body-large">NPP will make its requirements, selection approach and participant protections easy to find before any application or submission opens.</p></div></section>
    <section className="resource-library section section-tint"><div className="section-heading"><p className="eyebrow"><span /> RESOURCE LIBRARY</p><h2>Preparing for <em>2027.</em></h2></div><div className="resource-groups">{resourceGroups.map((group) => { const Icon = group.icon; return <article key={group.title}><div className="resource-group-head"><Icon /><span>COMING SOON</span></div><h3>{group.title}</h3><ul>{group.resources.map((resource) => <li key={resource}><span>{resource}</span><small>Available before opening</small></li>)}</ul></article> })}</div></section>
    <section className="resources-legal section"><div><p className="eyebrow"><span /> OUR COMMITMENT</p><h2>Clear rules.<br /><em>Respect for people.</em></h2></div><div className="resources-legal-copy"><p className="body-large">Submitting a problem does not transfer its ownership. Participants retain ownership of their intellectual property, subject to final agreements and applicable law.</p><p>Final legal wording, privacy information and participant documents will be reviewed and approved before publication.</p></div></section>
    <section className="resources-cta section section-blue"><div><p className="eyebrow light"><span /> STAY INFORMED</p><h2>Resources will be<br />published before <em>applications open.</em></h2></div><Link href="/coming-soon" className="button button-light">Get updates <ArrowUpRight /></Link></section>
    <Footer />
  </main>
}
