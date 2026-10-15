import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Submit a Problem · Nigeria Problem to Proof',
  description: 'Share an agriculture problem for the Nigeria Problem to Proof 2027 programme.',
}

export default function ProblemsLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children
}
