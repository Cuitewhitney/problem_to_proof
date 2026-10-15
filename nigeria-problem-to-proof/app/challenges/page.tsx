import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowUpRight, PlayIcon, UsersIcon } from '../icons'
import { Header } from '../header'
import { Footer } from '../footer'

export const metadata: Metadata = {
  title: 'Young Innovators Challenge · Nigeria Problem to Proof',
  description: 'A challenge for Nigerian young innovators aged 5–15 to pitch practical ideas and solutions.',
}

const steps = [
  ['01', 'Share your idea', 'Tell us about an idea or solution that can help solve a real problem.'],
  ['02', 'Pitch how it works', 'Explain the problem, your solution and how people could use it. Building a prototype is welcome where possible.'],
  ['03', 'Let Nigeria vote', 'Selected young innovators share their pitches for public voting as part of the selection process.'],
  ['04', 'Celebrate the winner', 'The winning young innovator receives their prize during the Problem to Proof closing ceremony.'],
]

export default function ChallengesPage() {
  return <main className="young-challenge-page">
    <Header />
    <section className="young-hero"><img src="/young-innovators-hero.png" alt="Young Nigerian innovators working together on an agriculture technology idea" /><div className="young-hero-shade" /><div className="young-hero-copy"><p className="eyebrow"><span /> NPP YOUNG INNOVATORS CHALLENGE</p><h1>Young minds.<br /><em>Big possibilities.</em></h1><p>A challenge for Nigerian innovators aged 5–15 who have an idea for a solution and want to show how it can work.</p><Link className="button button-primary" href="/coming-soon">Challenge applications open in 2027 <ArrowUpRight /></Link></div></section>
    <section className="young-intro section"><div><UsersIcon /><p className="eyebrow"><span /> WHO IT IS FOR</p><h2>Ideas deserve<br />a <em>stage.</em></h2></div><div><p className="body-large">This is a space for young Nigerians aged 5–15 to share a practical idea, describe the problem it addresses and explain their solution.</p><p>It is not only about having a finished invention. Young innovators can pitch an idea and, where possible, show what they have built or how it could work.</p></div></section>
    <section className="young-steps section section-tint"><div className="section-heading"><p className="eyebrow"><span /> THE CHALLENGE JOURNEY</p><h2>Bring your idea<br />to <em>life.</em></h2></div><div>{steps.map(([number, title, copy]) => <article key={number}><span>{number}</span><div><h3>{title}</h3><p>{copy}</p></div></article>)}</div></section>
    <section className="young-closing section"><div><p className="eyebrow"><span /> THE CLOSING CEREMONY</p><h2>One moment<br />to <em>celebrate ideas.</em></h2><p>The Young Innovators Challenge winner is recognised and receives their prize alongside the teams completing the Problem to Proof programme.</p><Link className="button button-primary" href="/coming-soon">Get challenge updates <ArrowUpRight /></Link></div><div className="young-play"><PlayIcon /><span>Pitch · Vote · Celebrate</span></div></section>
    <Footer />
  </main>
}
