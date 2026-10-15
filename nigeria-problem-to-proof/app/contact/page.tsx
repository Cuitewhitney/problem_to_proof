'use client'

import type { FormEvent } from 'react'
import Link from 'next/link'
import { useState } from 'react'
import { ArrowUpRight, EmailIcon, LocationIcon, PhoneIcon, SocialIcon, UsersIcon } from '../icons'
import { Header } from '../header'
import { Footer } from '../footer'
import { socialLinks, whatsappLink } from '../social'

export default function ContactPage() {
  const [sent, setSent] = useState(false)

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = new FormData(event.currentTarget)
    const name = String(form.get('name') ?? '')
    const email = String(form.get('email') ?? '')
    const subject = String(form.get('subject') ?? '')
    const message = String(form.get('message') ?? '')
    const body = `Name: ${name}\nEmail: ${email}\nSubject: ${subject}\n\nMessage:\n${message}`
    window.location.href = `mailto:info@problemtoproof.com?subject=${encodeURIComponent(`Website enquiry: ${subject}`)}&body=${encodeURIComponent(body)}`
    setSent(true)
  }

  return <main className="contact-page contact-reference-page">
    <Header />

    <section className="contact-reference-hero">
      <img src="/builders-workshop.png" alt="Nigeria Problem to Proof team collaborating" />
      <div className="contact-hero-wash" />
      <div className="contact-reference-copy"><p className="eyebrow"><span /> CONTACT US</p><h1>Get in Touch</h1><p>We’d love to hear from you.</p></div>
      <div className="contact-hero-message">People.<br />Ideas.<br /><b>Solutions.</b><i>A stronger Nigeria.</i></div>
    </section>

    <section className="contact-reference-main section">
      <aside className="contact-details" aria-label="Contact details">
        <div className="contact-detail"><span className="contact-detail-icon contact-detail-icon--blue"><EmailIcon /></span><div><h2>Email</h2><a href="mailto:info@problemtoproof.com">info@problemtoproof.com</a><p>For programme, partnership and general enquiries.</p></div></div>
        <div className="contact-detail"><span className="contact-detail-icon contact-detail-icon--green"><PhoneIcon /></span><div><h2>Phone &amp; WhatsApp</h2><a href="tel:+2347063885732">+234 706 388 5732</a><p>Reach our team by phone or WhatsApp.</p></div></div>
        <div className="contact-detail"><span className="contact-detail-icon contact-detail-icon--red"><LocationIcon /></span><div><h2>Address</h2><address>F01 Pathfeild Mall<br />4th Avenue, Gwarinpa<br />Abuja, Nigeria</address></div></div>
        <div className="contact-social"><span className="contact-detail-icon contact-detail-icon--violet"><UsersIcon /></span><div><h2>Follow Us</h2><p>Stay updated on programme news and opportunities.</p><div className="contact-social-links" aria-label="Nigeria Problem to Proof social media">{socialLinks.map((social) => <a key={social.name} href={social.href} target="_blank" rel="noreferrer" aria-label={`Follow Problem to Proof on ${social.label}`}><SocialIcon name={social.name} /></a>)}<a href={whatsappLink} target="_blank" rel="noreferrer" aria-label="Chat with us on WhatsApp"><SocialIcon name="whatsapp" /></a></div></div></div>
      </aside>

      <div className="contact-form-card">
        <h2>Send Us a Message</h2><p>Fill in the form and our team will get back to you as soon as possible.</p>
        <form onSubmit={handleSubmit}>
          <label>Name <b>*</b><input required name="name" autoComplete="name" placeholder="Enter your full name" /></label>
          <label>Email Address <b>*</b><input required name="email" type="email" autoComplete="email" placeholder="Enter your email address" /></label>
          <label>Subject <b>*</b><select required name="subject" defaultValue=""><option value="" disabled>Select a subject</option><option>General enquiry</option><option>Partnership enquiry</option><option>Programme enquiry</option><option>Media enquiry</option><option>Other</option></select></label>
          <label>Message <b>*</b><textarea required name="message" placeholder="Tell us how we can help..." rows={6} /></label>
          <button className="button button-primary" type="submit">Send Message <ArrowUpRight /></button>
          {sent && <p className="contact-form-note">Your email app should now open with your message. If it does not, write to info@problemtoproof.com.</p>}
        </form>
      </div>
    </section>

    <section className="contact-solution-banner">
      <img src="/abuja-contact-sunset.png" alt="Abuja at sunset" />
      <div className="contact-solution-shade" />
      <div><p className="eyebrow light"><span /> BE PART OF THE SOLUTION</p><h2>Be Part of the Solution</h2><p>Whether you have a question, want to partner, or need more information, we’re here to help.</p><Link className="button button-light" href="/programme">Explore the programme <ArrowUpRight /></Link></div>
    </section>
    <Footer />
  </main>
}
