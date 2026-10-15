import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowUpRight, BuildIcon, ProblemIcon, ProofIcon, UsersIcon } from '../icons'
import { Header } from '../header'
import { Footer } from '../footer'

export const metadata: Metadata = {
  title: 'Impact · Nigeria Problem to Proof',
  description: 'See how Nigeria Problem to Proof will measure outcomes after solutions are built and tested.',
}

const measures = [
  { icon: ProblemIcon, title: 'Problems & participation', items: ['Problems submitted', 'Problems validated', 'Challenges published', 'States represented'] },
  { icon: BuildIcon, title: 'Building & testing', items: ['Teams selected', 'Solutions completed', 'Prototypes improved', 'Solutions tested'] },
  { icon: UsersIcon, title: 'People & adoption', items: ['Users reached', 'Usage and satisfaction', 'Women and young people participating', 'Community outcomes'] },
  { icon: ProofIcon, title: 'What happens next', items: ['Solutions deployed', 'Partnerships created', 'Investment attracted', 'Businesses strengthened'] },
]

export default function ImpactPage() {
  return <main className="impact-page">
    <Header />
    <section className="impact-hero"><div className="impact-hero-copy"><p className="eyebrow"><span /> IMPACT</p><h1>Measure what<br />happens <em>after.</em></h1><p>A working prototype is a milestone. NPP is interested in what happens when people use it, whether it performs, and what measurably improves.</p><a className="button button-primary" href="#measure">What we will measure <ArrowUpRight /></a></div><div className="impact-hero-art" aria-hidden="true"><span>01</span><span>→</span><span>02</span></div></section>
    <section className="impact-statement section"><p className="eyebrow"><span /> THE QUESTION THAT MATTERS</p><div><h2>A problem existed.<br />A team built a solution.<br /><em>Did something improve?</em></h2><p className="body-large">The answer should come from evidence, not a pitch deck. Each solution will have an appropriate proof framework for its own use case.</p></div></section>
    <section id="measure" className="impact-measures section section-tint"><div className="section-heading"><p className="eyebrow"><span /> IMPACT FRAMEWORK</p><h2>Evidence across<br />the <em>journey.</em></h2></div><div className="impact-grid">{measures.map((measure) => { const Icon = measure.icon; return <article key={measure.title}><Icon /><h3>{measure.title}</h3><ul>{measure.items.map((item) => <li key={item}>{item}</li>)}</ul></article> })}</div></section>
    <section className="impact-proof section section-blue"><div><p className="eyebrow light"><span /> PROOF LOOKS DIFFERENT</p><h2>One programme.<br /><em>Many meaningful metrics.</em></h2></div><div><p className="body-large">A solution may be measured through users reached, cost saved, time reduced, reliability, adoption, learning outcomes, technical performance or another result that fits the real problem.</p><p>We will not publish figures simply to fill a page. Every public statistic should be grounded in verified data.</p></div></section>
    <section className="impact-dashboard section"><div><p className="eyebrow"><span /> IMPACT DASHBOARD</p><h2>The dashboard opens<br />with the <em>programme.</em></h2><p>Verified programme metrics will be published here as the 2027 edition progresses.</p></div><div className="impact-dashboard-panel"><span>2027</span><strong>Impact data<br />coming soon</strong><i /></div></section>
    <section className="impact-cta section"><div><p className="eyebrow"><span /> BUILD FOR WHAT MATTERS</p><h2>Proof starts with<br />a real <em>problem.</em></h2></div><Link href="/problems" className="button button-primary">Submit a problem <ArrowUpRight /></Link></section>
    <Footer />
  </main>
}
