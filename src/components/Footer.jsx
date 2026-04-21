import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { RiInstagramLine, RiMapPin2Line, RiMailLine, RiWhatsappLine, RiInkBottleLine } from 'react-icons/ri'
const socials = [
  { icon: RiInstagramLine, href: 'https://www.instagram.com/ink_story__?igsh=MWJnbmVidXE1aTgzag==', label: 'Instagram', color: 'hover:text-pink-400' },
  { icon: RiMapPin2Line, href: 'https://maps.app.goo.gl/uLbvdfWWiXoR1sNz5', label: 'Location', color: 'hover:text-cyan-400' },
  { icon: RiWhatsappLine, href: 'https://wa.me/7355754436', label: 'WhatsApp', color: 'hover:text-green-400' },
  { icon: RiMailLine, href: 'mailto:inkstory@email.com', label: 'Email', color: 'hover:text-ink-cyan' },
]

const links = [
  { label: 'Home', path: '/' },
  { label: 'Services', path: '/services' },
  { label: 'Projects', path: '/projects' },
  { label: 'Collaboration', path: '/collaboration' },
  { label: 'Work', path: '/work' },
  { label: 'Contact', path: '/contact' },
]

export default function Footer() {
  return (
    <footer className="border-t bg-ink-dark border-ink-border">
      {/* Watermark band */}
      <div className="py-3 overflow-hidden border-y border-ink-border/30 bg-ink-black/50">
        <div className="watermark-track inline-flex gap-12 text-[11px] font-mono tracking-[0.3em] text-ink-border uppercase">
          {Array(8).fill('INK STORY · AD & PRINT · EVERY PRINT HAS A STORY · ').map((t, i) => (
            <span key={i}>{t}</span>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 gap-12 px-6 py-16 mx-auto max-w-7xl md:grid-cols-3">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="flex items-center justify-center border rounded-full w-9 h-9 border-ink-cyan/40">
              <RiInkBottleLine className="text-lg text-ink-cyan" />
            </div>
            <div>
              <p className="text-lg font-bold font-display">INK <span className="text-ink-cyan">STORY</span></p>
              <p className="text-[9px] text-ink-muted tracking-[0.2em] uppercase font-mono">Ad & Print</p>
            </div>
          </div>
          <p className="max-w-xs mb-6 text-sm leading-relaxed text-ink-muted font-body">
            Every print has a story. We bring your brand to life through creative printing, design, and media solutions.
          </p>
          <div className="flex gap-3">
            {socials.map(({ icon: Icon, href, label, color }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.15, y: -2 }}
                className={`w-9 h-9 border border-ink-border rounded-sm flex items-center justify-center text-ink-muted ${color} transition-colors duration-200`}
                aria-label={label}
              >
                <Icon size={17} />
              </motion.a>
            ))}
          </div>
        </div>

        {/* Links */}
        <div>
          <p className="mb-5 font-mono text-sm font-semibold tracking-widest uppercase text-ink-white">Navigation</p>
          <ul className="space-y-2.5">
            {links.map(link => (
              <li key={link.path}>
                <Link to={link.path} className="text-sm transition-colors duration-200 text-ink-muted hover:text-ink-cyan font-body">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <p className="mb-5 font-mono text-sm font-semibold tracking-widest uppercase text-ink-white">Contact Us</p>
          <div className="space-y-3 text-sm text-ink-muted font-body">
            <p>📞 6393721009 | 8471002744</p>
            <p>📱 7355754436</p>
            <p>📧 inkstory009@email.com</p>
            <p>📍INTEGRAL UNIVERCITY MDS TOWER LGF 16</p>
          </div>
          <div className="p-4 mt-6 border rounded-sm border-ink-cyan/20 bg-ink-cyan/5">
            <p className="mb-1 font-mono text-xs tracking-wide text-ink-cyan">WORKING HOURS</p>
            <p className="text-sm text-ink-white">Mon – Sat: 9:00 AM – 8:00 PM</p>
            <p className="mt-1 text-xs text-ink-muted">Sunday: By Appointment</p>
          </div>
        </div>
      </div>

      <div className="border-t border-ink-border">
        <div className="flex flex-col items-center justify-between gap-2 px-6 py-5 mx-auto max-w-7xl md:flex-row">
          <p className="font-mono text-xs text-ink-muted">© {new Date().getFullYear()} Ink Story Ad & Print. All rights reserved.</p>
          <p className="font-mono text-xs italic text-ink-magenta">Every Print Has a Story.</p>
        </div>
      </div>
    </footer>
  )
}