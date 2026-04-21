import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { RiPaletteLine, RiBrushLine, RiVideoLine, RiArrowRightLine } from 'react-icons/ri'
import { Link } from 'react-router-dom'
import PageWrapper from '../components/PageWrapper'

const tabs = [
  { id: 'graphic', label: 'Graphic Design', icon: RiPaletteLine },
  { id: 'logo', label: 'Logo Design', icon: RiBrushLine },
  { id: 'video', label: 'Video Editing', icon: RiVideoLine },
]

const workData = {
  graphic: {
    headline: 'Graphic Design',
    subline: 'Visuals that speak before words do.',
    accent: '#00BFFF',
    items: [
      { title: 'Festival Poster Series', desc: 'Multi-event promotional poster series for a cultural organization — bold, vibrant, and vernacular.', tags: ['Print', 'Poster', 'Cultural'] },
      { title: 'Product Launch Flyer', desc: 'High-impact product launch flyer design for an FMCG brand, combining photography and illustration.', tags: ['FMCG', 'Flyer', 'Product'] },
      { title: 'Coaching Institute Brochure', desc: '12-page tri-fold brochure for a premier coaching center covering courses, facilities, and results.', tags: ['Education', 'Brochure', 'Multi-page'] },
      { title: 'Restaurant Social Kit', desc: 'Monthly social media design kit — 15 templates across posts, reels covers, and stories.', tags: ['Social', 'Restaurant', 'Templates'] },
      { title: 'Political Campaign Materials', desc: 'Complete print material set for a local election — banners, pamphlets, and ID cards.', tags: ['Political', 'Campaign', 'Print'] },
      { title: 'Retail Store Signage Set', desc: 'In-store signage system including aisle markers, price boards, and promotional banners.', tags: ['Retail', 'Signage', 'System'] },
    ]
  },
  logo: {
    headline: 'Logo & Identity',
    subline: 'Every great brand begins with a mark.',
    accent: '#FF00FF',
    items: [
      { title: 'Zestara Foods', desc: 'Playful yet premium logotype for a gourmet snack brand targeting urban millennials.', tags: ['Food', 'Logotype', 'Premium'] },
      { title: 'LegalEdge Consultants', desc: 'Clean, authoritative logo mark for a legal firm — conveying trust, precision, and professionalism.', tags: ['Legal', 'Corporate', 'Wordmark'] },
      { title: 'RapidFit Gym', desc: 'Dynamic, energetic logo for a budget fitness chain — bold geometry, kinetic energy.', tags: ['Fitness', 'Symbol', 'Dynamic'] },
      { title: 'Prayas Academy', desc: 'Educational brand identity system including logo, color palette, typography, and stationery.', tags: ['Education', 'System', 'Identity'] },
      { title: 'The Brew Room', desc: 'Artisanal café logo — hand-lettered style blending warmth, craft, and coffee culture.', tags: ['Café', 'Hand-lettered', 'Artisan'] },
      { title: 'TechNest Solutions', desc: 'Geometric tech-forward logo for a software startup — modular, scalable, future-ready.', tags: ['Tech', 'Geometric', 'Startup'] },
    ]
  },
  video: {
    headline: 'Video Editing',
    subline: 'Motion that moves your audience.',
    accent: '#40D4FF',
    items: [
      { title: 'Product Launch Reel', desc: '60-second cinematic product reveal reel for a cosmetics brand, crafted for Instagram and YouTube.', tags: ['Reel', 'Cosmetics', 'Cinematic'] },
      { title: 'Real Estate Walkthrough', desc: 'Luxury property showcase video with motion graphics overlay, voiceover, and aerial transitions.', tags: ['Real Estate', 'Walkthrough', 'Luxury'] },
      { title: 'Restaurant Promo Ad', desc: '30-second food promo with slow-mo food shots, ambient score, and call-to-action end card.', tags: ['Food', '30s Ad', 'Promo'] },
      { title: 'Wedding Highlights', desc: 'Cinematic 3-minute wedding highlights video — emotional storytelling through music and montage.', tags: ['Wedding', 'Highlights', 'Cinematic'] },
      { title: 'Course Explainer Video', desc: 'Animated explainer for an online coaching course — 2D animation with voiceover and motion graphics.', tags: ['Education', 'Explainer', '2D Animation'] },
      { title: 'Brand Story Film', desc: '90-second brand story film for a local startup — documentary-style with interviews and B-roll.', tags: ['Brand Film', 'Documentary', 'Startup'] },
    ]
  }
}

function WorkCard({ item, accent, index }) {
  return (
    <motion.div
      key={item.title}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.07, duration: 0.4 }}
      whileHover={{ y: -5, scale: 1.01 }}
      className="relative p-6 overflow-hidden border rounded-sm cursor-default bg-ink-card border-ink-border group"
    >
      {/* Accent glow on hover */}
      <div
        className="absolute inset-0 transition-opacity duration-500 opacity-0 group-hover:opacity-100"
        style={{ background: `radial-gradient(circle at top left, ${accent}10 0%, transparent 60%)` }}
      />

      {/* Number */}
      <span className="absolute font-mono text-5xl font-black select-none top-4 right-5"
        style={{ color: `${accent}12` }}
      >
        {String(index + 1).padStart(2, '0')}
      </span>

      <div className="relative z-10">
        <h3 className="mb-2 text-lg font-bold transition-all font-display text-ink-white group-hover:text-opacity-90">
          {item.title}
        </h3>
        <p className="mb-4 text-sm leading-relaxed text-ink-muted font-body">{item.desc}</p>
        <div className="flex flex-wrap gap-2">
          {item.tags.map(tag => (
            <span
              key={tag}
              className="text-[10px] font-mono px-2 py-1 rounded-sm border"
              style={{ color: accent, borderColor: `${accent}35`, background: `${accent}10` }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export default function Work() {
  const [activeTab, setActiveTab] = useState('graphic')
  const current = workData[activeTab]

  return (
    <PageWrapper>
      {/* Header */}
      <section className="relative px-6 pb-16 overflow-hidden text-center pt-36">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{ backgroundImage: `radial-gradient(ellipse at 50% 50%, ${current.accent}80 0%, transparent 60%)` }}
        />
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-ink-cyan text-xs tracking-[0.5em] uppercase font-mono mb-4"
        >
          Showcase
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="mb-5 text-5xl font-black font-display md:text-7xl text-ink-white"
        >
          Our <span className="italic text-ink-magenta">Work</span>
        </motion.h1>
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.3 }}
          className="max-w-xs mx-auto mb-5 gold-line"
        />
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="max-w-lg mx-auto text-base text-ink-muted font-body"
        >
          A deep dive into our craft — across design, identity, and motion.
        </motion.p>
      </section>

      {/* Tabs */}
      <section className="px-6 mb-12">
        <div className="flex flex-wrap justify-center max-w-4xl gap-2 mx-auto">
          {tabs.map(tab => (
            <motion.button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className={`relative flex items-center gap-2 px-6 py-3 text-sm font-mono tracking-wide rounded-sm border transition-all duration-200 ${
                activeTab === tab.id
                  ? 'text-ink-black font-bold border-transparent'
                  : 'border-ink-border text-ink-muted hover:text-ink-white hover:border-ink-cyan/30'
              }`}
              style={activeTab === tab.id ? { background: workData[tab.id].accent } : {}}
            >
              <tab.icon size={15} />
              {tab.label}
              {activeTab === tab.id && (
                <motion.span layoutId="tab-bg" className="absolute inset-0 rounded-sm -z-10" />
              )}
            </motion.button>
          ))}
        </div>
      </section>

      {/* Tab content */}
      <section className="px-6 pb-28">
        <div className="mx-auto max-w-7xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.35 }}
            >
              {/* Tab header */}
              <div className="mb-10 text-center">
                <h2
                  className="mb-2 text-4xl font-black font-display md:text-5xl"
                  style={{ color: current.accent }}
                >
                  {current.headline}
                </h2>
                <p className="italic text-ink-muted font-body">{current.subline}</p>
              </div>

              {/* Cards grid */}
              <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
                {current.items.map((item, i) => (
                  <WorkCard key={item.title} item={item} accent={current.accent} index={i} />
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="px-6 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-center"
        >
          <div className="max-w-xs mx-auto mb-8 gold-line" />
          <h3 className="mb-4 text-3xl font-bold font-display text-ink-white">
            Inspired? Let's create something together.
          </h3>
          <p className="text-ink-muted font-body mb-7">Your brand deserves work this good — and better.</p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 text-sm font-bold tracking-wide transition-all duration-300 rounded-sm btn-press group bg-ink-cyan text-ink-black hover:bg-cyan-300"
          >
            Start Your Project
            <RiArrowRightLine className="transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </section>
    </PageWrapper>
  )
}