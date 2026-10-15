import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowUpRight, BuildIcon, ProblemIcon, ProofIcon, UsersIcon } from '../icons'
import { Header } from '../header'
import { Footer } from '../footer'

export const metadata: Metadata = {
  title: 'How it works · Nigeria Problem to Proof',
  description: 'See how the 2027 Agriculture Problem to Proof cycle moves from a submitted problem to real-world proof.',
}

const stages = [
  { number: '01', label: 'Listen', title: 'Submit the problem', copy: 'Nigerians and agriculture stakeholders share what is not working in their communities, farms, businesses or food systems.', note: 'Problem submissions', icon: ProblemIcon },
  { number: '02', label: 'Verify', title: 'Validate the need', copy: 'P2P investigates recurring submissions with affected people, practitioners and relevant experts, so the challenge starts with a need that is real and specific.', note: 'Validation with people closest to the challenge', icon: UsersIcon },
  { number: '03', label: 'Focus', title: 'Set the AgriTech challenge', copy: 'The validated need becomes a focused problem statement—a clear call for Nigerian innovators to respond to.', note: 'A defined solution call', icon: ProofIcon },
  { number: '04', label: 'Select', title: 'Choose the top eight', copy: 'Applications are assessed through expert review and public engagement. Eight teams move into the focused build phase.', note: 'Expert review + public engagement', icon: UsersIcon },
  { number: '05', label: 'Build', title: 'Complete the solution in 30 days', copy: 'Selected teams receive dedicated time, practical support and relevant resources to complete their solution.', note: '30-day build phase', icon: BuildIcon },
  { number: '06', label: 'Prove', title: 'Test with users for 90 days', copy: 'Affected Nigerians and real users test the solution, share feedback and help teams improve it in practical conditions.', note: '90-day real-user proof phase', icon: ProofIcon },
  { number: '07', label: 'Showcase', title: 'Close, share and move forward', copy: 'The programme ends with a closing ceremony and solution showcase, including recognition of the Young Innovators Challenge winner.', note: 'Proof, progress and next steps', icon: UsersIcon },
]

const roles = [
  { icon: ProblemIcon, title: 'People with the problem', copy: 'Share the agriculture challenges they see and live with.', link: 'Submit a problem', href: '/problems' },
  { icon: BuildIcon, title: 'Solution teams', copy: 'Respond to the validated challenge when the solution call opens.', link: 'Prepare to apply', href: '/apply' },
  { icon: UsersIcon, title: 'Users, experts & partners', copy: 'Help validate the need, test solutions and make proof possible.', link: 'Work with P2P', href: '/partners' },
]

export default function HowItWorksPage() {
  return <main className="how-page how-editorial-page">
    <Header />

    <section className="how-hero how-editorial-hero">
      <img src="/field-proof.png" alt="Agricultural technology being tested with farmers" />
      <div className="how-hero-shade" />
      <div className="how-editorial-copy">
        <p className="eyebrow"><span /> HOW IT WORKS · AGRICULTURE 2027</p>
        <h1>From a real problem<br />to <em>real-world proof.</em></h1>
        <p>Problem to Proof is a practical journey: listen first, validate what matters, invite focused solutions, then test what is built with the Nigerians it is meant to serve.</p>
        <div className="hero-actions"><Link className="button button-primary" href="/problems">Submit an agriculture problem <ArrowUpRight /></Link><Link className="button button-secondary" href="/programme">Explore the programme <ArrowUpRight /></Link></div>
      </div>
      <div className="how-hero-marker"><span>2027 focus</span><b>Agriculture<br />Technology</b></div>
    </section>

    <section className="how-at-a-glance" aria-label="Programme process at a glance">
      <div><strong>01</strong><span>Sector focus</span><b>Agriculture</b></div>
      <div><strong>08</strong><span>Selected solution teams</span><b>Top eight</b></div>
      <div><strong>30</strong><span>Dedicated completion phase</span><b>Days to build</b></div>
      <div><strong>90</strong><span>Real-user testing phase</span><b>Days to prove</b></div>
    </section>

    <section className="how-introduction section">
      <div><p className="eyebrow"><span /> A PRACTICAL PATH</p><h2>Proof begins with<br /><em>the right question.</em></h2></div>
      <div><p className="body-large">The process is designed to keep the work close to the people affected by the challenge. A solution is not considered ready simply because it has been proposed or pitched.</p><p>It has to respond to a validated need, be completed by a capable team and be tested in real conditions. That is how Problem to Proof turns possibility into useful evidence.</p></div>
    </section>

    <section className="how-stages how-stages-editorial section">
      <div className="how-stages-heading"><p className="eyebrow"><span /> THE PROBLEM TO PROOF CYCLE</p><h2>Seven stages.<br /><em>One clear direction.</em></h2><p>Each step has a purpose: to make the final solution more grounded, more usable and more accountable to the people it is meant to help.</p></div>
      <ol>{stages.map(({ number, label, title, copy, note, icon: Icon }) => <li key={number}>
        <div className="how-stage-number"><span>{number}</span><i /></div>
        <div className="how-stage-icon"><Icon /></div>
        <div className="how-stage-content"><p>{label}</p><h3>{title}</h3><p>{copy}</p></div>
        <small>{note}</small>
      </li>)}</ol>
    </section>

    <section className="how-proof how-proof-editorial">
      <div className="how-proof-image"><img src="/builders-workshop.png" alt="Nigerian innovators working together to build a practical solution" /></div>
      <div className="how-proof-copy"><p className="eyebrow light"><span /> BUILD, THEN PROVE</p><h2>30 days to build.<br /><em>90 days to learn.</em></h2><p className="body-large">The 30-day phase gives the selected teams focused time to complete their solution. The next 90 days take that work into real use, with the people affected by the original problem.</p><p>Feedback, usability and lived experience help teams see what needs to change before the closing ceremony. The goal is not just activity—it is evidence that a solution can work in practice.</p><Link className="button button-light" href="/apply">Prepare to apply as a solver <ArrowUpRight /></Link></div>
    </section>

    <section className="how-roles section">
      <div className="how-roles-heading"><p className="eyebrow"><span /> A SHARED JOURNEY</p><h2>Everyone has a role<br />in getting to <em>proof.</em></h2></div>
      <div className="how-roles-grid">{roles.map(({ icon: Icon, title, copy, link, href }) => <article key={title}><Icon /><h3>{title}</h3><p>{copy}</p><Link href={href}>{link} <ArrowUpRight /></Link></article>)}</div>
    </section>

    <section className="how-next section">
      <div><p className="eyebrow"><span /> FIND YOUR WAY IN</p><h2>A real insight can<br />start <em>something useful.</em></h2></div>
      <div><p>Problem submissions, solution applications and Young Innovators Challenge applications will be announced as the 2027 programme opens.</p><div className="hero-actions"><Link className="button button-primary" href="/problems">Submit a problem <ArrowUpRight /></Link><Link className="button button-secondary" href="/challenges">Young Innovators Challenge <ArrowUpRight /></Link></div></div>
    </section>
    <Footer />
  </main>
}
