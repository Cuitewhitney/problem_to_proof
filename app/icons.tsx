// Inline SVG icons. They replace the text glyphs (↗ ↓ ☰ ×) that some phones
// render as colour emoji. Strokes use currentColor so each icon inherits the
// colour of the element it sits in.

type IconProps = { className?: string }

const base = {
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 2,
  strokeLinecap: 'square' as const,
  strokeLinejoin: 'miter' as const,
  'aria-hidden': true,
  focusable: false,
}

export function ArrowUpRight({ className }: IconProps) {
  return (
    <svg className={className} {...base}>
      <path d="M6 18 18 6" />
      <path d="M8 6h10v10" />
    </svg>
  )
}

export function ArrowDown({ className }: IconProps) {
  return (
    <svg className={className} {...base}>
      <path d="M12 4v16" />
      <path d="m5 13 7 7 7-7" />
    </svg>
  )
}

export function MenuIcon({ className, open }: IconProps & { open: boolean }) {
  return (
    <svg className={className} {...base} strokeWidth={1.75}>
      {open ? (
        <>
          <path d="M5 5l14 14" />
          <path d="M19 5 5 19" />
        </>
      ) : (
        <>
          <path d="M4 7h16" />
          <path d="M4 12h16" />
          <path d="M4 17h16" />
        </>
      )}
    </svg>
  )
}

export function PlayIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false">
      <path d="M8 5.2v13.6a.6.6 0 0 0 .92.5l10.6-6.8a.6.6 0 0 0 0-1L8.92 4.7A.6.6 0 0 0 8 5.2Z" />
    </svg>
  )
}

export function ProblemIcon({ className }: IconProps) {
  return <svg className={className} {...base}><circle cx="12" cy="12" r="8" /><path d="M12 8v5" /><path d="M12 16h.01" /></svg>
}

export function BuildIcon({ className }: IconProps) {
  return <svg className={className} {...base}><path d="m14.5 6.5 3 3" /><path d="m5 19 8.6-8.6a3 3 0 0 0 3.9-3.9l-2.1 2.1-2-2 2.1-2.1a3 3 0 0 0-3.9 3.9L3 17v2h2Z" /></svg>
}

export function UsersIcon({ className }: IconProps) {
  return <svg className={className} {...base}><circle cx="9" cy="8" r="3" /><path d="M3.5 20v-2a5.5 5.5 0 0 1 11 0v2" /><path d="M17 5.5a3 3 0 0 1 0 5" /><path d="M19.5 20v-2a5.5 5.5 0 0 0-3-4.9" /></svg>
}

export function ProofIcon({ className }: IconProps) {
  return <svg className={className} {...base}><path d="M5 4h14v16H5z" /><path d="m8 12 2.5 2.5L16 9" /></svg>
}

export function EmailIcon({ className }: IconProps) {
  return <svg className={className} {...base}><rect x="3" y="5" width="18" height="14" rx="1" /><path d="m4 7 8 6 8-6" /></svg>
}

export function PhoneIcon({ className }: IconProps) {
  return <svg className={className} {...base}><path d="M7 3h3l1.4 4-2 1.6a15 15 0 0 0 6 6l1.6-2 4 1.4v3c0 1.1-.9 2-2 2C10.2 19 5 13.8 5 7c0-1.1.9-2 2-2Z" /></svg>
}

export function LocationIcon({ className }: IconProps) {
  return <svg className={className} {...base}><path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" /><circle cx="12" cy="10" r="2.5" /></svg>
}

export function PartnerIcon({ className, kind }: IconProps & { kind: 'public' | 'industry' | 'research' | 'technology' | 'media' | 'community' }) {
  const paths = {
    public: <><path d="M3 10h18" /><path d="m5 10 7-5 7 5" /><path d="M5 20h14" /><path d="M7 10v8M12 10v8M17 10v8" /></>,
    industry: <><path d="M4 20V10l6 3V9l5 3V5l5 3v12H4Z" /><path d="M8 20v-3M13 20v-3M17 20v-3" /></>,
    research: <><path d="M9 3v7.5L4.5 18a2 2 0 0 0 1.75 3h11.5a2 2 0 0 0 1.75-3L15 10.5V3" /><path d="M8 3h8M8.5 15h7" /></>,
    technology: <><rect x="7" y="7" width="10" height="10" rx="1" /><path d="M9 3v4M15 3v4M9 17v4M15 17v4M3 9h4M3 15h4M17 9h4M17 15h4" /></>,
    media: <><path d="M4 8h10v9H4z" /><path d="m14 11 5-3v9l-5-3" /><path d="M7 5h10" /></>,
    community: <><circle cx="9" cy="8" r="3" /><path d="M3.5 20v-2a5.5 5.5 0 0 1 11 0v2" /><path d="M17 6a3 3 0 0 1 0 5M20.5 20v-2a5.5 5.5 0 0 0-3.25-5" /></>,
  }
  return <svg className={className} {...base}>{paths[kind]}</svg>
}

export function SocialIcon({ className, name }: IconProps & { name: 'facebook' | 'instagram' | 'x' | 'tiktok' | 'whatsapp' | 'youtube' | 'linkedin' }) {
  const paths = {
    facebook: <path d="M14 21v-8h2.7l.4-3H14V8.1c0-.9.25-1.5 1.55-1.5H17V3.9c-.25-.03-1.1-.1-2.1-.1-2.08 0-3.5 1.27-3.5 3.6V10H9v3h2.4v8H14Z" fill="currentColor" stroke="none" />,
    instagram: <><rect x="3.5" y="3.5" width="17" height="17" rx="4.5" /><circle cx="12" cy="12" r="3.6" /><path d="M17.5 6.7h.01" /></>,
    x: <path d="M5 4l14 16M19 4 5 20" />,
    tiktok: <><path d="M14 4v10.1a3.5 3.5 0 1 1-3-3.46" /><path d="M14 4c.55 2.1 1.9 3.42 4 3.8" /></>,
    whatsapp: <><path d="M20.3 11.6a8.3 8.3 0 0 1-12.2 7.3L4 20l1.2-4A8.3 8.3 0 1 1 20.3 11.6Z" /><path d="M8.7 8.1c.2-.5.4-.5.7-.5h.4c.2 0 .4.1.5.4l.7 1.6c.1.2.1.4 0 .6l-.4.5c-.1.1-.1.3 0 .4.4.8 1.1 1.4 1.9 1.8.1.1.3.1.4 0l.6-.7c.2-.2.4-.2.6-.1l1.5.7c.2.1.3.2.3.4 0 .4-.2 1.1-.6 1.3-.4.2-.9.3-1.4.2-1-.2-2-.8-2.9-1.7-.8-.8-1.4-1.8-1.7-2.9-.1-.5 0-1 .2-1.4Z" /></>,
    youtube: <><path d="M21 12c0 2.5-.3 4.1-.6 5-.3.8-.9 1.4-1.7 1.7-.9.3-2.8.6-6.7.6s-5.8-.3-6.7-.6c-.8-.3-1.4-.9-1.7-1.7-.3-.9-.6-2.5-.6-5s.3-4.1.6-5c.3-.8.9-1.4 1.7-1.7.9-.3 2.8-.6 6.7-.6s5.8.3 6.7.6c.8.3 1.4.9 1.7 1.7.3.9.6 2.5.6 5Z" /><path d="m10 9 5 3-5 3V9Z" fill="currentColor" stroke="none" /></>,
    linkedin: <path d="M6.2 8.2H3.5V20h2.7V8.2ZM4.85 3.8A1.6 1.6 0 1 0 4.8 7a1.6 1.6 0 0 0 .05-3.2ZM9 8.2v11.8h2.7v-5.84c0-1.54.29-3.03 2.2-3.03 1.88 0 1.9 1.76 1.9 3.13V20h2.7v-6.3c0-3.1-.66-5.48-4.28-5.48-1.74 0-2.9.96-3.38 1.86H10.8v-1.9H9Z" fill="currentColor" stroke="none" />,
  }
  return <svg className={className} {...base}>{paths[name]}</svg>
}

export function LinkedInIcon({ className }: IconProps) {
  return <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false"><path d="M5.1 3.5A1.6 1.6 0 1 1 5 6.7a1.6 1.6 0 0 1 .1-3.2ZM3.7 8h2.8v12H3.7V8Zm4.6 0H11v1.64h.04c.38-.72 1.3-1.9 3.1-1.9 3.32 0 3.94 2.18 3.94 5.02V20h-2.8v-6.43c0-1.53-.03-3.5-2.13-3.5-2.13 0-2.46 1.67-2.46 3.39V20H7.9V8h.4Z" /></svg>
}
