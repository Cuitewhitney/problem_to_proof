import Link from 'next/link'
import { SocialIcon } from './icons'
import { socialLinks, whatsappLink } from './social'

const columns = [
  { title: 'Programme', links: [['The programme', '/programme'], ['Challenges', '/challenges'], ['Impact', '/impact'], ['Watch the journey', '/media']] },
  { title: 'Take part', links: [['Submit a problem', '/problems'], ['Apply to solve', '/apply'], ['Become a partner', '/partners']] },
  { title: 'Organisation', links: [['About NPP', '/about'], ['Contact', '/contact'], ['Legal & resources', '/resources']] },
]

export function Footer() {
  return <footer className="site-footer">
    <div className="footer-main">
      <div className="footer-brand"><Link href="/" aria-label="Nigeria Problem to Proof home"><img src="/p2p-logo.png" alt="Nigeria Problem to Proof" /></Link><p>Real Nigerian problems.<br />Nigerian builders.<br />Working solutions.</p><span>2027 Edition · Agriculture Technology</span></div>
      <div className="footer-links">{columns.map((column) => <div key={column.title}><h2>{column.title}</h2><ul>{column.links.map(([label, href]) => <li key={href}><Link href={href}>{label}</Link></li>)}</ul></div>)}</div>
      <div className="footer-contact"><h2>Contact</h2><a href="mailto:info@problemtoproof.com">info@problemtoproof.com</a><a href="tel:+2347063885732">+234 706 388 5732</a><p>F01 Pathfeild Mall<br />4th Avenue, Gwarinpa<br />Abuja, Nigeria</p><div className="footer-socials" aria-label="Nigeria Problem to Proof social media">{socialLinks.map((social) => <a key={social.name} href={social.href} target="_blank" rel="noreferrer" aria-label={`Follow Problem to Proof on ${social.label}`}><SocialIcon name={social.name} /></a>)}<a href={whatsappLink} target="_blank" rel="noreferrer" aria-label="Chat with us on WhatsApp"><SocialIcon name="whatsapp" /></a></div></div>
    </div>
    <div className="footer-bottom"><span>© 2026–2027 Nigeria Problem to Proof</span><span>Programme information is subject to confirmation.</span><div><Link href="/resources">Privacy & resources</Link><Link href="/resources">Terms of use</Link></div></div>
  </footer>
}
