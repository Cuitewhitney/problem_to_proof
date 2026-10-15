import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact · Nigeria Problem to Proof',
  description: 'Get in touch with Nigeria Problem to Proof.',
}

export default function ContactLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children
}
