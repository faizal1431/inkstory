import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { RiMenuLine, RiCloseLine } from 'react-icons/ri'

const links = [
  { label: 'Home', path: '/' },
  { label: 'Services', path: '/services' },
  { label: 'Projects', path: '/projects' },
  { label: 'Collaboration', path: '/collaboration' },
  { label: 'Work', path: '/work' },
  { label: 'Contact', path: '/contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => setOpen(false), [location.pathname])

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-black/95 backdrop-blur-xl border-b border-white/10 shadow-2xl'
            : 'bg-transparent'
        }`}
      >
        <div className="flex items-center justify-between px-6 py-4 mx-auto max-w-7xl">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <img
              src="/images/LOGO.jpeg.png"
              alt="Ink Story Logo"
              className="object-cover h-12 transition-all duration-300 border w-30 border-white/20 group-hover:border-cyan-400/60"
            />
            <div>
              
              <p className="text-[9px] text-white/40 tracking-[0.2em] uppercase font-mono -mt-0.5">
                Ad & Print
              </p>
            </div>
          </Link>

          {/* Desktop links */}
          <div className="items-center hidden gap-1 md:flex">
            {links.map((link) => {
              const active = location.pathname === link.path
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`relative px-4 py-2 text-sm font-medium tracking-wide transition-all duration-300 rounded-sm ${
                    active ? 'text-cyan-400' : 'text-white/60 hover:text-white'
                  }`}
                >
                  {link.label}
                  {active && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute bottom-0 h-px left-4 right-4 bg-cyan-400"
                    />
                  )}
                </Link>
              )
            })}
          </div>

          {/* CTA */}
          <div className="hidden md:block">
            <Link
              to="/contact"
              className="px-5 py-2.5 text-sm font-medium bg-[#765b7a] text-white rounded-sm hover:bg-[#FF66FF] transition-all duration-300 tracking-wide"
            >
              Get Quote
            </Link>
          </div>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="text-white transition-colors md:hidden hover:text-cyan-400"
          >
            {open ? <RiCloseLine size={26} /> : <RiMenuLine size={26} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="fixed inset-0 z-40 flex flex-col gap-2 px-8 pt-24 bg-black/98 backdrop-blur-2xl"
          >
            {links.map((link, i) => (
              <motion.div
                key={link.path}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.07, duration: 0.3 }}
              >
                <Link
                  to={link.path}
                  className={`block py-4 text-2xl font-display font-semibold border-b border-white/10 ${
                    location.pathname === link.path ? 'text-cyan-400' : 'text-white'
                  }`}
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-8"
            >
              <Link
                to="/contact"
                className="inline-block px-8 py-3 bg-[#E040FB] text-white font-medium rounded-sm text-lg hover:bg-[#FF66FF] transition-all duration-300"
              >
                Get a Quote
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}