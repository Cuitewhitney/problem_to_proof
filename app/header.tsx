'use client'

import Link from 'next/link'
import { useState } from 'react'
import { ArrowUpRight, MenuIcon } from './icons'

export function Header() {
  const [open, setOpen] = useState(false)
  const [takePartOpen, setTakePartOpen] = useState(false)
  const close = () => setOpen(false)
  const closeAll = () => { setOpen(false); setTakePartOpen(false) }

  return <header className="site-header">
    <nav className="nav">
      <Link className="logo" href="/" onClick={closeAll}><img src="/p2p-logo.png" alt="Nigeria Problem to Proof" /></Link>
      <div id="primary-navigation" className={`site-nav ${open ? 'open' : ''}`}>
        <Link href="/" onClick={closeAll}>Home</Link>
        <Link href="/about" onClick={closeAll}>About</Link>
        <Link href="/programme" onClick={closeAll}>Programme</Link>
        <Link href="/how-it-works" onClick={closeAll}>How it works</Link>
        <Link href="/partners" onClick={closeAll}>Sponsor</Link>
        <Link href="/contact" onClick={closeAll}>Contact us</Link>
        <div className="mobile-take-part"><span>Apply / Submit</span><Link href="/problems" onClick={closeAll}>Submit a problem <ArrowUpRight /></Link><Link href="/apply" onClick={closeAll}>Apply as an innovator <ArrowUpRight /></Link></div>
      </div>
      <div className="nav-actions"><div className="take-part"><button className="nav-cta" type="button" onClick={() => setTakePartOpen(!takePartOpen)} aria-expanded={takePartOpen} aria-controls="take-part-menu">Apply / Submit <span className="take-part-caret">⌄</span></button><div id="take-part-menu" className={`take-part-menu ${takePartOpen ? 'open' : ''}`}><Link href="/problems" onClick={closeAll}><b>Submit a problem</b><small>Help shape the 2027 Agriculture focus</small></Link><Link href="/apply" onClick={closeAll}><b>Apply as an innovator</b><small>For young innovators, innovators and startups</small></Link></div></div></div>
      <button className="menu" type="button" onClick={() => { setOpen(!open); setTakePartOpen(false) }} aria-label={open ? 'Close navigation' : 'Open navigation'} aria-controls="primary-navigation" aria-expanded={open}><MenuIcon open={open} /></button>
    </nav>
    {(open || takePartOpen) && <button className="nav-backdrop" type="button" aria-label="Close navigation" onClick={closeAll} />}
  </header>
}
