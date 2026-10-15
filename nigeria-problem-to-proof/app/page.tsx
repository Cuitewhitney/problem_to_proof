'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { ArrowUpRight, BuildIcon, PartnerIcon, PlayIcon, ProblemIcon, UsersIcon } from './icons'
import { Header } from './header'
import { Footer } from './footer'

const slides = [
  { eyebrow: '2027 · AGRICULTURE TECHNOLOGY', lead: 'Nigeria’s real problems.', emphasis: 'Real solutions.', copy: 'A national programme turning important sector problems into practical solutions built by Nigerians, for Nigeria.', image: '/builders-workshop.png', alt: 'Nigerian builders developing agricultural technology', actions: [{ label: 'Submit a problem', href: '/problems' }, { label: 'Explore the programme', href: '/programme' }] },
  { eyebrow: 'YOUNG INNOVATORS · 2027', lead: 'Young ideas.', emphasis: 'Practical futures.', copy: 'A dedicated programme track gives young innovators a place to imagine, share and develop agriculture solutions of their own.', image: '/young-innovators-hero.png', alt: 'Young Nigerian innovators building an agriculture technology project', actions: [{ label: 'Apply as an innovator', href: '/apply' }, { label: 'Explore the challenge', href: '/challenges' }] },
  { eyebrow: 'THE SECTOR CHALLENGE', lead: '30 days to build.', emphasis: '90 days to prove.', copy: 'After public and expert selection, eight teams receive practical support to build, test and improve solutions in the real world.', image: '/field-proof.png', alt: 'A farmer and engineer testing agricultural technology in a field', actions: [{ label: 'See how it works', href: '/how-it-works' }, { label: 'Sponsorship opportunities', href: '/partners' }] },
]

const objectives = [
  ['01', 'Make priority problems visible', 'Bring forward the real challenges affecting a sector and validate them with the people closest to the need.'],
  ['02', 'Mobilise solutions around evidence', 'Turn validated insight into a defined challenge innovators can respond to with purpose.'],
  ['03', 'Equip solutions to work in practice', 'Give selected teams focused support, practical resources and space to build what they propose.'],
  ['04', 'Grow a culture of Nigerian innovation', 'Give young innovators a place to explore their ideas and make homegrown solutions visible.'],
]

const journey = [
  ['01', 'Submit & validate', 'Problems are submitted, reviewed and refined with those closest to the sector.'],
  ['02', 'Select the teams', 'Solutions are assessed by experts and the public, then eight teams are selected.'],
  ['03', '30-day build', 'The selected teams enter a focused build period with the support they need.'],
  ['04', '90-day proof', 'Solutions are tested with real users and improved using feedback and evidence.'],
  ['05', 'Deploy & scale', 'The strongest solutions are showcased for adoption, partnership and growth.'],
]

const participation = [
  { icon: ProblemIcon, title: 'Have a problem to submit?', copy: 'Help us identify the challenges that matter most.', href: '/problems', action: 'Submit a problem' },
  { icon: BuildIcon, title: 'Are you an innovator?', copy: 'Turn your idea into a solution for a stronger Nigeria.', href: '/apply', action: 'Apply to solve' },
]

const partnerTypes = [
  ['public', 'Public sector'], ['industry', 'Industry'], ['research', 'Research'], ['technology', 'Technology'], ['media', 'Media'], ['community', 'Communities'],
] as const

export default function Home() {
  const [activeSlide, setActiveSlide] = useState(0)
  const slide = slides[activeSlide]

  useEffect(() => {
    const timer = window.setInterval(() => setActiveSlide((current) => (current + 1) % slides.length), 6500)
    return () => window.clearInterval(timer)
  }, [])

  return <main className="home-page reference-home">
    <Header />
    <section className={`home-hero home-hero--slide-${activeSlide}`} aria-label="Nigeria Problem to Proof introduction">
      <div className="home-hero-image" key={slide.image}><img src={slide.image} alt={slide.alt} /></div>
      <div className="home-hero-copy" key={activeSlide}>
        <p className="eyebrow carousel-eyebrow"><span /> {slide.eyebrow}</p>
        <h1><span className="carousel-line">{slide.lead}</span><em className="carousel-line carousel-emphasis">{slide.emphasis}</em></h1>
        <p className="carousel-copy">{slide.copy}</p>
        <div className="hero-actions carousel-actions">{slide.actions.map((action, index) => <Link key={action.href} className={`button ${index === 0 ? 'button-primary' : 'button-secondary'}`} href={action.href}>{action.label} <ArrowUpRight /></Link>)}</div>
      </div>
      <div className="carousel-controls"><div className="carousel-count"><b>0{activeSlide + 1}</b><span> / 0{slides.length}</span></div><div className="carousel-dots">{slides.map((item, index) => <button key={item.image} onClick={() => setActiveSlide(index)} className={index === activeSlide ? 'active' : ''} aria-label={`Show slide ${index + 1}`} />)}</div><div className="carousel-arrows"><button onClick={() => setActiveSlide((activeSlide + slides.length - 1) % slides.length)} aria-label="Previous slide">←</button><button onClick={() => setActiveSlide((activeSlide + 1) % slides.length)} aria-label="Next slide">→</button></div></div>
    </section>

    <section className="home-about section"><div className="home-about-mark" aria-hidden="true"><span>P</span><span>→</span><span>P</span></div><div className="home-about-copy"><p className="eyebrow"><span /> ABOUT US</p><h2>Built to move<br />Nigeria from problem<br />to <em>proof.</em></h2><p className="body-large">Nigeria Problem to Proof is a national technology and innovation programme organised by Sambissy Limited.</p><p>We bring real problems, capable builders and practical support into one process—so solutions can be built, tested and shown to work.</p><Link className="button button-primary" href="/about">Learn about us <ArrowUpRight /></Link></div></section>
    <section className="home-why section section-tint"><div className="home-why-intro"><p className="eyebrow"><span /> WHY THIS PROGRAMME</p><h2>Good ideas deserve a<br /><em>real path to proof.</em></h2><p>Nigeria has people with the insight and ability to solve difficult problems. What is often missing is a focused route from a verified need to a solution that has been properly tested in the real world.</p></div><div className="home-why-points"><article><small>01</small><h3>Start with what matters</h3><p>Problems are submitted from the people and sectors living with them, then carefully validated before a challenge is set.</p></article><article><small>02</small><h3>Back capable builders</h3><p>Selected teams receive focused time, guidance and the practical resources required to turn a solution into something usable.</p></article><article><small>03</small><h3>Prove before scale</h3><p>Solutions are tested with real users, so evidence—not assumptions—can shape what is ready for adoption.</p></article></div></section>
    <section className="home-submit section"><div><p className="eyebrow"><span /> START WITH THE PROBLEM</p><h2>See a problem<br />that needs <em>proof?</em></h2><p>Help us understand the agriculture challenges affecting people, communities and businesses in Nigeria.</p><Link className="button button-primary" href="/problems">Submit a problem <ArrowUpRight /></Link></div><img src="/field-proof.png" alt="Agricultural technology being tested in a Nigerian field" /></section>
    <section className="home-programmes section"><p className="eyebrow"><span /> TWO PROGRAMMES</p><div className="home-programmes-heading"><h2>Two routes to<br /><em>real solutions.</em></h2><p>Problem to Proof supports both established innovators and the next generation of Nigerian problem-solvers.</p></div><div className="home-programmes-grid"><article><BuildIcon /><p className="eyebrow"><span /> PROBLEM TO PROOF</p><h3>Build for a validated challenge.</h3><p>Innovators and startups respond to an identified Agriculture challenge, then selected teams build for 30 days and prove their work with real users for 90 days.</p><Link className="button button-primary" href="/apply">Apply as an innovator <ArrowUpRight /></Link></article><article><UsersIcon /><p className="eyebrow"><span /> YOUNG INNOVATORS</p><h3>Pitch an idea that can help.</h3><p>Nigerians aged 5–15 can share their idea, explain how it works and take part in a public-facing challenge journey.</p><Link className="button button-secondary" href="/apply">Apply as a young innovator <ArrowUpRight /></Link></article></div></section>
    <section className="home-journey section"><p className="eyebrow"><span /> HOW IT WORKS</p><h2>How Problem to Proof <em>works.</em></h2><p className="journey-lead">From real problems to real solutions—in five clear stages.</p><div className="journey-steps">{journey.map(([number, title, copy]) => <article key={number}><span>{number}</span><i /><h3>{title}</h3><p>{copy}</p></article>)}</div><Link className="text-link" href="/how-it-works">See how it works <ArrowUpRight /></Link></section>
    <section className="home-objectives section"><div className="home-objectives-intro"><p className="eyebrow"><span /> PROGRAMME OBJECTIVES</p><h2>What the challenge<br />aims to <em>achieve.</em></h2><p>Problem to Proof creates a repeatable path from sector insight to solutions that can genuinely serve people and communities.</p><div className="home-objectives-note"><span>2027 focus</span><b>Agriculture</b></div></div><div className="home-objectives-list">{objectives.map(([number, title, copy]) => <article key={number}><span>{number}</span><div><h3>{title}</h3><p>{copy}</p></div></article>)}</div></section>
    <section className="home-film"><img src="/builders-workshop.png" alt="Nigerian innovator working on a practical technology solution" /><div className="home-film-shade" /><div className="home-film-copy"><p className="eyebrow"><span /> SEE THE POSSIBILITIES</p><h2>A generation<br />that <em>builds.</em></h2><p>Meet the people turning important problems into practical solutions for Nigeria.</p><Link className="film-play" href="/media" aria-label="Watch the journey"><PlayIcon /><span>Watch the journey</span></Link></div></section>
    <section className="home-sector section"><div className="home-sector-copy"><p className="eyebrow"><span /> NPP 2027</p><h2>Agriculture<br /><em>Technology.</em></h2><p className="body-large">Improving food security. Increasing productivity. Building a more resilient Nigeria.</p><p>For 2027, we begin with Agriculture Technology (AgriTech), with subsequent editions expected to focus on other sectors.</p><div className="hero-actions"><Link className="button button-primary" href="/programme">Explore the programme <ArrowUpRight /></Link><Link className="button button-secondary" href="/how-it-works">See how it works <ArrowUpRight /></Link></div></div><div className="home-sector-image"><img src="/field-proof.png" alt="Agricultural technology being tested in a Nigerian field" /><div><span>2027</span><b>One sector.<br />Meaningful proof.</b></div></div></section>
    <section className="home-impact-banner"><img src="/young-innovators-hero.png" alt="Young Nigerian innovators building a future through practical ideas" /><div className="home-impact-shade" /><div className="home-impact-copy"><p className="eyebrow"><span /> THE IMPACT</p><h2>Real solutions<br />for a stronger Nigeria.</h2><p>We are building a pipeline of practical solutions that address Nigeria’s real problems, create opportunity for young people and improve lives nationwide.</p><Link className="button button-light" href="/impact">See our vision <ArrowUpRight /></Link></div><blockquote>Every stage is designed around one question: will this solution work for the people it is meant to serve?<cite>Problem to Proof approach</cite></blockquote></section>
    <section className="home-partner-band section"><p className="eyebrow"><span /> OUR PARTNERS</p><div className="partner-heading"><h2>Working together for a more innovative and inclusive Nigeria.</h2><Link className="text-link" href="/partners">Become a sponsor <ArrowUpRight /></Link></div><div className="partner-types">{partnerTypes.map(([kind, label]) => <span key={kind}><PartnerIcon kind={kind} />{label}</span>)}</div></section>
    <section className="home-participate section"><p className="eyebrow"><span /> BE PART OF THE SOLUTION</p><div>{participation.map((item) => { const Icon = item.icon; return <article key={item.title}><Icon /><div><h2>{item.title}</h2><p>{item.copy}</p><Link className="button button-primary" href={item.href}>{item.action} <ArrowUpRight /></Link></div></article> })}</div></section>
    <Footer />
  </main>
}
