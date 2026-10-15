import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowUpRight, BuildIcon, LinkedInIcon, ProblemIcon, ProofIcon, UsersIcon } from '../icons'
import { Header } from '../header'
import { Footer } from '../footer'

export const metadata: Metadata = {
  title: 'About · Nigeria Problem to Proof',
  description: 'Learn about the purpose, values and vision behind Nigeria Problem to Proof.',
}

const values = [
  { icon: ProofIcon, title: 'Impact', copy: 'Real solutions for real problems' },
  { icon: BuildIcon, title: 'Innovation', copy: 'Bold ideas and new approaches' },
  { icon: ProblemIcon, title: 'Integrity', copy: 'Transparency and accountability' },
  { icon: UsersIcon, title: 'Inclusion', copy: 'Opportunities for all Nigerians' },
  { icon: UsersIcon, title: 'Collaboration', copy: 'Stronger together' },
]

const teamProfiles = [
  { name: 'Bisola Bolarinwa', role: 'Founder & Programme Director, Problem to Proof Nigeria', image: '/teams/bisola.jpeg', linkedin: 'https://ng.linkedin.com/in/bolarinwa-bisola' },
  { name: 'Pelumi Olaniyan', role: 'Programme Operations Lead', image: '/teams/pelumi.png', linkedin: 'https://ng.linkedin.com/in/pelumi-olaniyan-23766921b' },
  { name: 'Elizabeth Akinbola', role: 'Technology and Innovation Lead', image: '/teams/Elizabeth.jpeg', linkedin: 'https://ng.linkedin.com/in/akinbola-elizabeth-ba770217b' },
  { name: 'Adetayo Saka', role: 'Partnerships and Impact Lead', image: '/teams/Adetayo.jpg', linkedin: 'https://ng.linkedin.com/in/adetayo-saka-573312238' },
]

export default function AboutPage() {
  return <main className="about-page about-reference-page">
    <Header />
    <section className="about-hero about-reference-hero"><div className="about-hero-copy"><p className="eyebrow"><span /> ABOUT</p><h1>Problem to Proof<br /><em>for Nigeria.</em></h1><h2>Turning Nigeria’s real problems into real solutions.</h2><p>Nigeria Problem to Proof is a national innovation programme organised by Sambissy Limited. We identify real problems, support Nigerian builders and prove solutions in real-world conditions before they are ready to grow.</p><div className="hero-actions"><Link className="button button-primary" href="/problems">Submit a problem <ArrowUpRight /></Link><Link className="button button-secondary" href="/apply">Apply as an innovator <ArrowUpRight /></Link></div></div><div className="about-hero-photo"><img src="/builders-workshop.png" alt="Nigerian innovator working on a practical solution" /><div className="about-hero-ribbon">Real problems.<br />Real solutions.<br />A stronger Nigeria.</div></div></section>

    <section className="about-story-reference section"><div className="about-story-image"><img src="/young-innovators-hero.png" alt="Young Nigerian innovators working together" /></div><div><p className="eyebrow"><span /> OUR STORY</p><h2>Ideas need a<br /><em>real chance.</em></h2><p className="body-large">Nigeria has talent, resilience and a deep understanding of its own needs. Too often, what is missing is the right platform, resources and support to take an idea from insight to proof.</p><p>Problem to Proof brings together young innovators, researchers, industry, government, communities and development partners to turn real problems into practical, deployable solutions that improve lives.</p></div></section>

    <section className="about-direction section section-tint"><article><span className="about-direction-icon">◉</span><h2>Our Vision</h2><p>A more innovative, prosperous and inclusive Nigeria.</p></article><article><span className="about-direction-icon">◎</span><h2>Our Mission</h2><p>To mobilise Nigerian talent, technology and partnerships to solve real problems and deliver scalable, practical solutions.</p></article><article><span className="about-direction-icon">↗</span><h2>Our Goal</h2><p>To build a pipeline of proven solutions that can be deployed across Nigeria and beyond.</p></article></section>

    <section className="about-values section"><div className="section-heading"><p className="eyebrow"><span /> HOW WE WORK</p><h2>Our core <em>values.</em></h2></div><div className="about-values-grid">{values.map((value) => { const Icon = value.icon; return <article key={value.title}><div><Icon /></div><h3>{value.title}</h3><p>{value.copy}</p></article> })}</div></section>

    <section className="about-organiser section section-tint"><div><p className="eyebrow"><span /> THE ORGANISER</p><h2>Built by<br /><em>Sambissy Limited.</em></h2><p className="body-large">Nigeria Problem to Proof is organised by Sambissy Limited, the team responsible for bringing the programme together.</p><p>Through the programme, Sambissy Limited convenes the people, resources and partnerships needed to identify real needs and move promising solutions towards practical use.</p><Link className="button button-accent" href="/contact">Contact the organiser <ArrowUpRight /></Link></div><div className="about-organiser-image"><img src="/field-proof.png" alt="Nigerian agricultural technology team working in the field" /><div><b>Sambissy<br />Limited</b><span>Organiser of Problem to Proof</span></div></div></section>

    <section className="about-team section"><p className="eyebrow"><span /> OUR TEAM</p><h2>A multidisciplinary team<br />built for <em>delivery.</em></h2><p className="about-team-lead">Problem to Proof is delivered by people with experience across programme management, technology, partnerships, media and community engagement.</p><div className="about-team-grid">{teamProfiles.map((profile) => <article key={profile.name}><img className="team-profile-image" src={profile.image} alt={`${profile.name}, ${profile.role}`} /><small>CORE TEAM</small><h3>{profile.name}</h3><p>{profile.role}</p>{profile.linkedin && <a className="team-linkedin" href={profile.linkedin} target="_blank" rel="noreferrer" aria-label={`View ${profile.name} on LinkedIn`}><LinkedInIcon /> LinkedIn</a>}</article>)}</div><div className="about-advisory"><p className="eyebrow"><span /> ADVISORY NETWORK</p><p>We work with experts from academia, industry, government and development organisations to provide strategic guidance, credibility and support as the programme develops.</p></div></section>

    <section className="about-why section"><div><p className="eyebrow"><span /> WHY WE EXIST</p><h2>Nigeria has challenges.<br /><em>It also has capacity.</em></h2><p>Nigeria faces significant challenges, but it also has immense talent, creativity and resilience. Problem to Proof exists to bridge the gap between ideas and real-world impact—giving Nigerians the resources and support to turn their solutions into proven, scalable innovations.</p><Link className="button button-accent" href="/programme">Explore the programme <ArrowUpRight /></Link></div><img src="/builders-workshop.png" alt="Nigerian innovator working with practical technology" /></section>

    <section className="about-impact-vision"><img src="/young-innovators-hero.png" alt="Young Nigerian innovators creating practical solutions" /><div className="about-impact-shade" /><div className="about-impact-copy"><p className="eyebrow"><span /> OUR IMPACT VISION</p><h2>A stronger Nigeria<br />through real solutions.</h2><p>We are building a movement of innovators, partners and communities working together to solve Nigeria’s real problems and create a more prosperous, inclusive and resilient future.</p></div><aside><b>Real People<br />Real Solutions<br />Real Impact</b><p>From local communities to national systems, Problem to Proof is building solutions that make a difference.</p></aside></section>

    <section className="about-join section"><p className="eyebrow"><span /> JOIN THE MOVEMENT</p><h2>Be part of a national platform<br />turning real problems into real solutions.</h2><div className="hero-actions"><Link className="button button-primary" href="/problems">Submit a problem <ArrowUpRight /></Link><Link className="button button-secondary" href="/apply">Apply as an innovator <ArrowUpRight /></Link></div></section>
    <Footer />
  </main>
}
