import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowUpRight, BuildIcon, PlayIcon, ProblemIcon, ProofIcon } from '../icons'
import { Header } from '../header'
import { Footer } from '../footer'

export const metadata: Metadata = {
  title: 'Watch the Journey · Nigeria Problem to Proof',
  description: 'Follow the Nigeria Problem to Proof journey when the 2027 programme begins.',
}

const stories = [
  { icon: ProblemIcon, title: 'Problem stories', copy: 'The people, places and realities behind the challenges.' },
  { icon: BuildIcon, title: 'Behind the build', copy: 'The work of teams as they test, learn, adapt and create.' },
  { icon: ProofIcon, title: 'Proof in the field', copy: 'What happens when completed solutions meet real users.' },
]

export default function MediaPage() {
  return <main className="media-page">
    <Header />
    <section className="media-hero"><div className="media-hero-image"><img src="/builders-workshop.png" alt="Nigerian builders working on agriculture technology" /><div className="media-play"><PlayIcon /></div></div><div className="media-hero-copy"><p className="eyebrow"><span /> MEDIA</p><h1>Watch the<br /><em>journey.</em></h1><p>The work of building something useful is worth seeing—without manufactured drama and without losing sight of the people it is meant to serve.</p><a className="button button-primary" href="#coming">What’s coming <ArrowUpRight /></a></div></section>
    <section id="coming" className="media-coming section"><div className="section-heading"><p className="eyebrow"><span /> COMING WITH THE 2027 PROGRAMME</p><h2>The story is in<br />the <em>work.</em></h2></div><div className="media-story-grid">{stories.map((story) => { const Icon = story.icon; return <article key={story.title}><Icon /><h3>{story.title}</h3><p>{story.copy}</p></article> })}</div></section>
    <section className="media-promise section section-tint"><div><p className="eyebrow"><span /> OUR EDITORIAL PRINCIPLE</p><h2>Do not<br /><em>manufacture drama.</em></h2></div><div><p className="body-large">The reality of understanding a difficult problem, building under pressure and seeing whether a solution works is enough.</p><p>When the programme begins, this page will feature episodes, progress updates, team stories, field testing and lessons from the build.</p></div></section>
    <section className="media-cta section section-blue"><div><p className="eyebrow light"><span /> 2027 EDITION</p><h2>Stories are<br />coming <em>soon.</em></h2></div><Link href="/coming-soon" className="button button-light">Get updates <ArrowUpRight /></Link></section>
    <Footer />
  </main>
}
