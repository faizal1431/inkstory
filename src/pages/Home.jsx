import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, useScroll, useTransform } from 'framer-motion'
import { RiArrowRightLine, RiPrinterLine, RiPaletteLine, RiVideoLine, RiStarLine, RiLayoutMasonryLine } from 'react-icons/ri'
import PageWrapper from '../components/PageWrapper'

const words = ['Printing', 'Design', 'Branding', 'Creativity', 'Impact']

function TypewriterText() {
  const [index, setIndex] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const word = words[index]
    let timeout

    if (!deleting && displayed.length < word.length) {
      timeout = setTimeout(() => setDisplayed(word.slice(0, displayed.length + 1)), 100)
    } else if (!deleting && displayed.length === word.length) {
      timeout = setTimeout(() => setDeleting(true), 1800)
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 60)
    } else if (deleting && displayed.length === 0) {
      setDeleting(false)
      setIndex((index + 1) % words.length)
    }

    return () => clearTimeout(timeout)
  }, [displayed, deleting, index])

  return (
    <span className="text-ink-cyan">
      {displayed}<span className="cursor-blink">|</span>
    </span>
  )
}

const stats = [
  { value: '500+', label: 'Projects Completed' },
  { value: '200+', label: 'Happy Clients' },
  { value: '5+', label: 'Years Experience' },
  { value: '15+', label: 'Services Offered' },
]

const features = [
  { icon: RiPrinterLine, title: 'Large Format Printing', desc: 'Flex boards, banners, vinyl, and more at premium quality.' },
  { icon: RiPaletteLine, title: 'Graphic Design', desc: 'Logos, visiting cards, social media creatives, and branding.' },
  { icon: RiVideoLine, title: 'Video Editing', desc: 'Reels, ads, product videos — storytelling through motion.' },
  { icon: RiLayoutMasonryLine, title: 'Signage & Boards', desc: 'LED boards, GSB boards, glow signs, and neon signage.' },
]

export default function Home() {
  const { scrollY } = useScroll()
  const heroY = useTransform(scrollY, [0, 500], [0, -120])
  const heroOpacity = useTransform(scrollY, [0, 400], [1, 0])

  return (
    <PageWrapper>
      {/* HERO */}
      <section className="relative flex items-center justify-center min-h-screen overflow-hidden">
        {/* Background grid */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `linear-gradient(rgba(0,191,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,0,255,0.6) 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }}
        />

        {/* Radial glow */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-cyan-400/5 blur-3xl" />
        <div className="absolute top-1/2 left-1/4 w-[400px] h-[400px] rounded-full bg-fuchsia-500/5 blur-3xl" />

        {/* Floating ink drops */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute w-1.5 h-1.5 rounded-full ${i % 2 === 0 ? 'bg-cyan-400/40' : 'bg-fuchsia-500/40'}`}
            animate={{
              y: [-20, 20, -20],
              x: [-10, 10, -10],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 3 + i * 0.7,
              repeat: Infinity,
              delay: i * 0.5,
            }}
            style={{
              top: `${20 + i * 12}%`,
              left: `${10 + i * 15}%`,
            }}
          />
        ))}

        <motion.div
          style={{ y: heroY, opacity: heroOpacity }}
          className="relative z-10 max-w-5xl px-6 mx-auto text-center"
        >
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-ink-cyan text-xs tracking-[0.5em] uppercase font-mono mb-6"
          >
            Welcome to
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.8 }}
            className="mb-4 font-black leading-none tracking-tight font-display text-7xl md:text-9xl"
          >
            <span className="gold-shimmer">INK</span>
            <span className="text-ink-white"> STORY</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="max-w-xs mx-auto mb-6 gold-line"
          />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="mb-2 text-lg italic text-ink-muted md:text-xl font-body"
          >
            "Every Print Has a Story"
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.85 }}
            className="mb-10 text-2xl font-light md:text-3xl font-body text-ink-white"
          >
            We tell yours through <TypewriterText />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="flex flex-col justify-center gap-4 sm:flex-row"
          >
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 px-8 py-4 text-sm font-semibold tracking-wide transition-all duration-300 rounded-sm btn-press group bg-ink-cyan text-ink-black hover:bg-cyan-300"
            >
              Explore Our Work
              <RiArrowRightLine className="transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 text-sm font-medium tracking-wide transition-all duration-300 border rounded-sm btn-press border-ink-cyan/40 text-ink-white hover:border-ink-cyan hover:bg-ink-cyan/8"
            >
              Get a Quote
            </Link>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute flex flex-col items-center gap-1 -translate-x-1/2 bottom-10 left-1/2"
        >
          <div className="w-px h-12 bg-gradient-to-b from-transparent to-ink-cyan/60" />
          <p className="text-ink-muted text-[10px] tracking-[0.3em] uppercase font-mono">Scroll</p>
        </motion.div>
      </section>

      {/* STATS */}
      <section className="py-16 border-y border-ink-border bg-ink-dark">
        <div className="grid max-w-5xl grid-cols-2 gap-8 px-6 mx-auto md:grid-cols-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="text-center"
            >
              <p className={`font-display font-bold text-4xl mb-1 ${i % 2 === 0 ? 'text-ink-cyan' : 'text-ink-magenta'}`}>
                {stat.value}
              </p>
              <p className="text-sm text-ink-muted font-body">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FEATURES */}
      <section className="px-6 py-24 mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <p className="text-ink-cyan text-xs tracking-[0.4em] uppercase font-mono mb-3">What We Do</p>
          <h2 className="text-4xl font-bold font-display md:text-5xl text-ink-white">
            Crafted with <span className="italic text-ink-magenta">Precision</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className="p-6 rounded-sm cursor-default card-glow gradient-border group"
            >
              <div className="flex items-center justify-center w-12 h-12 mb-5 transition-all duration-300 border rounded-sm bg-ink-cyan/10 border-ink-cyan/20 group-hover:bg-ink-cyan/20">
                <f.icon className="text-xl text-ink-cyan" />
              </div>
              <h3 className="mb-2 text-lg font-semibold font-display text-ink-white">{f.title}</h3>
              <p className="text-sm leading-relaxed text-ink-muted font-body">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="relative px-6 py-24 overflow-hidden">
        <div className="absolute inset-0 bg-ink-cyan/5" />
        <div className="absolute inset-0 border-y border-ink-cyan/15" />

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative max-w-3xl mx-auto text-center"
        >
          <RiStarLine className="mx-auto mb-6 text-3xl text-ink-cyan animate-spin-slow" />
          <h2 className="mb-4 text-4xl font-bold font-display md:text-6xl text-ink-white">
            Don't just print.
            <span className="block italic text-ink-magenta">Make an Impact.</span>
          </h2>
          <p className="mb-8 text-lg text-ink-muted font-body">
            From small prints to big advertising boards — Ink Story is your one-stop creative solution.
          </p>
          <Link
            to="/services"
            className="inline-flex items-center gap-2 px-10 py-4 text-sm font-bold tracking-wide transition-all duration-300 rounded-sm btn-press group bg-ink-cyan text-ink-black hover:bg-cyan-300"
          >
            Discover Services
            <RiArrowRightLine className="transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </section>
    </PageWrapper>
  )
}