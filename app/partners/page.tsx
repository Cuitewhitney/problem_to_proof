import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowUpRight, BuildIcon, PartnerIcon, ProblemIcon, ProofIcon, UsersIcon } from '../icons'
import { Header } from '../header'
import { Footer } from '../footer'

export const metadata: Metadata = {
  title: 'Partner with us · Nigeria Problem to Proof',
  description: 'Help Nigeria Problem to Proof create the conditions for practical solutions to be built, tested and proven.',
}

const opportunities = [
  { icon: BuildIcon, number: '01', title: 'Practical visibility', copy: 'Help make useful Nigerian innovation visible through responsible programme storytelling and shared learning.' },
  { icon: UsersIcon, number: '02', title: 'Thought partnership', copy: 'Bring sector knowledge, technical guidance or operational insight to a real Nigerian agriculture challenge.' },
  { icon: ProofIcon, number: '03', title: 'Access to the work', copy: 'Support meaningful connections between affected people, solution teams, practitioners and relevant institutions.' },
  { icon: ProofIcon, number: '04', title: 'Impact through proof', copy: 'Help teams build, test and improve their work in conditions that reflect the people the solution is meant to serve.' },
  { icon: BuildIcon, number: '05', title: 'Partnerships that last', copy: 'Create practical relationships around promising solutions, from focused build support to possible next steps after the programme.' },
]

const audiences = [
  { kind: 'public' as const, title: 'A connected Nigerian ecosystem', copy: 'The programme brings together people closest to the problem, sector stakeholders, solution teams and partners.' },
  { kind: 'technology' as const, title: 'Capable builders', copy: 'The solution call is designed to invite Nigerian innovators and teams to respond to a focused, validated need.' },
  { kind: 'community' as const, title: 'The next generation', copy: 'The Young Innovators Challenge creates an additional route for Nigerian innovators aged 5–15 to share their ideas.' },
  { kind: 'research' as const, title: 'Learning in real conditions', copy: 'The 90-day proof phase centres the people who use a solution and the evidence they provide.' },
]

const principles = [
  ['A defined purpose', 'Every partnership conversation begins with the part of the programme it can strengthen.'],
  ['Practical contribution', 'The focus is on what helps people, teams and solutions move forward in the real world.'],
  ['Shared learning', 'What is tested and learned during the programme should inform the next useful step.'],
]

export default function PartnersPage() {
  return <main className="partners-page partners-editorial-page">
    <Header />

    <section className="partners-hero partners-editorial-hero">
      <img src="/builders-workshop.png" alt="Nigerian innovators developing a practical technology solution" />
      <div className="partners-hero-shade" />
      <div className="partners-editorial-copy">
        <p className="eyebrow"><span /> PARTNER WITH PROBLEM TO PROOF</p>
        <h1>Back the work<br />that creates <em>real proof.</em></h1>
        <p>Problem to Proof brings real Nigerian needs, capable builders and practical testing into one programme. Partners help create the conditions for useful solutions to be built, used and improved.</p>
        <div className="hero-actions"><a className="button button-primary" href="#opportunities">Explore partnership opportunities <ArrowUpRight /></a><a className="button button-secondary" href="mailto:info@problemtoproof.com?subject=Problem%20to%20Proof%20partnership%20enquiry">Talk to the team <ArrowUpRight /></a></div>
      </div>
      <aside className="partners-hero-note"><span>2027 priority</span><b>Agriculture<br />Technology</b><p>From validated need to real-user proof.</p></aside>
    </section>

    <section className="partners-case section">
      <div><p className="eyebrow"><span /> WHY PARTNER</p><h2>A stronger route<br />from insight to <em>impact.</em></h2></div>
      <div><p className="body-large">Great solutions do not emerge in isolation. They need insight from the sector, enough support to be completed, and a real setting in which people can use them.</p><p>Partnership is how P2P connects that support to the teams and communities doing the work. It is not only about visibility; it is about helping a promising response become something practical.</p></div>
    </section>

    <section id="opportunities" className="partners-opportunities section">
      <div className="partners-section-heading"><p className="eyebrow"><span /> PARTNERSHIP OPPORTUNITIES</p><h2>Five ways to make<br /><em>progress possible.</em></h2><p>Support can be financial, technical, operational or community-based. What matters is that it helps the programme move from a real problem to credible proof.</p></div>
      <div className="partners-opportunity-grid">{opportunities.map(({ icon: Icon, number, title, copy }) => <article key={title}><div><span>{number}</span><Icon /></div><h3>{title}</h3><p>{copy}</p></article>)}</div>
    </section>

    <section className="partners-audiences section">
      <div className="partners-audience-intro"><p className="eyebrow"><span /> WHY THE P2P ECOSYSTEM MATTERS</p><h2>Where the people<br />closest to <em>progress meet.</em></h2><p>Partnership with P2P is an opportunity to contribute to a focused Nigerian innovation process—not simply an event moment.</p></div>
      <div className="partners-audience-grid">{audiences.map(({ kind, title, copy }) => <article key={title}><PartnerIcon kind={kind} /><h3>{title}</h3><p>{copy}</p></article>)}</div>
    </section>

    <section className="partners-at-glance section" aria-label="Problem to Proof 2027 at a glance">
      <div><p className="eyebrow"><span /> PROBLEM TO PROOF 2027</p><h2>Focused on what<br />can be <em>proven.</em></h2></div>
      <div className="partners-stat-grid"><article><strong>2027</strong><span>First programme edition</span></article><article><strong>01</strong><span>Priority sector: Agriculture</span></article><article><strong>08</strong><span>Solution teams selected for the build phase</span></article><article><strong>30 + 90</strong><span>Days to complete, then test with real users</span></article></div>
    </section>

    <section className="partners-principles section">
      <div><p className="eyebrow"><span /> HOW WE APPROACH PARTNERSHIP</p><h2>Contribution with<br /><em>clear intent.</em></h2></div>
      <div>{principles.map(([title, copy], index) => <article key={title}><span>0{index + 1}</span><div><h3>{title}</h3><p>{copy}</p></div></article>)}</div>
    </section>

    <section className="partners-contact section">
      <div><p className="eyebrow"><span /> START A CONVERSATION</p><h2>Let’s build the<br /><em>conditions for proof.</em></h2><p>Tell us about the expertise, resources, access or support your organisation could contribute. We will share approved 2027 partnership information as it becomes available.</p></div>
      <div className="partners-contact-card"><span>Partnership enquiries</span><a href="mailto:info@problemtoproof.com?subject=Problem%20to%20Proof%20partnership%20enquiry">info@problemtoproof.com <ArrowUpRight /></a><p>We welcome an initial conversation with organisations interested in the programme.</p></div>
    </section>
    <section className="partners-announcements section"><p className="eyebrow"><span /> PARTNER ANNOUNCEMENTS</p><h2>Partners will be introduced<br />as collaborations are <em>confirmed.</em></h2><p>We do not yet have confirmed partner announcements to share. This space will carry approved partnership news as the 2027 programme develops.</p></section>
    <Footer />
  </main>
}
