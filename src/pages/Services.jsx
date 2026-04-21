import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
  RiPrinterLine, RiPaletteLine, RiVideoLine, RiBrushLine,
  RiLayoutMasonryLine, RiSmartphoneLine, RiFileTextLine,
  RiTShirt2Line, RiMegaphoneLine, RiArrowRightLine
} from 'react-icons/ri'
import PageWrapper from '../components/PageWrapper'

const services = [
  {
    icon: RiPrinterLine,
    title: 'Large Format Printing',
    desc: 'High-quality flex boards, vinyl prints, one-vision, and large banners for maximum visual impact at any scale.',
    tags: ['Flex Board', 'Vinyl', 'One Vision', 'Banner'],
    color: 'from-cyan-900/20 to-transparent',
  },
  {
    icon: RiLayoutMasonryLine,
    title: 'Signage & Boards',
    desc: 'LED boards, GSB glow sign boards, neon signs, and sunpack boards designed to make your business unmissable.',
    tags: ['LED Board', 'GSB Board', 'Neon Signs', 'Sunpack'],
    color: 'from-fuchsia-900/20 to-transparent',
  },
  {
    icon: RiPaletteLine,
    title: 'Graphic Design',
    desc: 'Creative, professional graphic design for all your brand communication needs — from print to digital.',
    tags: ['Poster', 'Brochure', 'Flyer', 'Banner Design'],
    color: 'from-cyan-900/20 to-transparent',
  },
  {
    icon: RiBrushLine,
    title: 'Logo & Brand Identity',
    desc: 'Distinctive logo design and complete brand identity packages that tell your unique story at first glance.',
    tags: ['Logo', 'Brand Kit', 'Style Guide', 'Visiting Card'],
    color: 'from-fuchsia-900/20 to-transparent',
  },
  {
    icon: RiVideoLine,
    title: 'Video Editing',
    desc: 'Engaging reels, product videos, promotional ads, and motion graphics that capture attention and convert.',
    tags: ['Reels', 'Ads', 'Product Video', 'Motion Graphics'],
    color: 'from-cyan-900/20 to-transparent',
  },
  {
    icon: RiSmartphoneLine,
    title: 'Social Media Creatives',
    desc: 'Scroll-stopping social media content, post designs, story templates, and thumbnail designs for all platforms.',
    tags: ['Posts', 'Stories', 'Thumbnails', 'Covers'],
    color: 'from-fuchsia-900/20 to-transparent',
  },
  {
    icon: RiFileTextLine,
    title: 'Stationery & Printing',
    desc: 'Bill books, letterheads, visiting cards, pamphlets, ID cards, and all office stationery printing solutions.',
    tags: ['Bill Books', 'Pamphlets', 'ID Cards', 'Letter Pads'],
    color: 'from-cyan-900/20 to-transparent',
  },
  {
    icon: RiTShirt2Line,
    title: 'Custom Merchandise',
    desc: 'Custom T-shirt printing, mug printing, and personalized merchandise for events, businesses, and gifting.',
    tags: ['T-Shirt Print', 'Mug Print', 'Merchandise', 'Gifting'],
    color: 'from-fuchsia-900/20 to-transparent',
  },
  {
    icon: RiMegaphoneLine,
    title: 'Advertising Solutions',
    desc: 'End-to-end advertising and marketing material production — from concept design to final print delivery.',
    tags: ['Hoardings', 'Campaigns', 'OOH', 'B2B'],
    color: 'from-cyan-900/20 to-transparent',
  },
]

const containerVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08 }
  }
}

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } }
}

export default function Services() {
  return (
    <PageWrapper>
      {/* Page Header */}
      <section className="relative px-6 pb-20 overflow-hidden pt-36">
        <div className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage: `radial-gradient(circle, rgba(0,191,255,0.8) 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }}
        />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-ink-cyan/40 to-transparent" />

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-ink-cyan text-xs tracking-[0.5em] uppercase font-mono mb-4"
          >
            What We Offer
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="mb-5 text-5xl font-black font-display md:text-7xl text-ink-white"
          >
            Our <span className="italic text-ink-magenta">Services</span>
          </motion.h1>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.3 }}
            className="max-w-sm mx-auto mb-6 gold-line"
          />
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="max-w-xl mx-auto text-lg text-ink-muted font-body"
          >
            From small prints to big advertising boards — we are your complete creative and printing partner.
          </motion.p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="px-6 pb-28">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 gap-6 mx-auto max-w-7xl md:grid-cols-2 lg:grid-cols-3"
        >
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              variants={cardVariants}
              whileHover={{ y: -6, scale: 1.01 }}
              className="relative overflow-hidden border rounded-sm cursor-default card-glow bg-ink-card border-ink-border group"
            >
              {/* Gradient bg */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

              <div className="relative z-10 p-7">
                {/* Icon — alternates cyan / magenta */}
                <div className={`w-14 rounded-sm flex items-center justify-center mb-5 h-14 transition-all duration-300
                  ${i % 2 === 0
                    ? 'bg-ink-cyan/10 border border-ink-cyan/20 group-hover:bg-ink-cyan/20 group-hover:border-ink-cyan/40'
                    : 'bg-ink-magenta/10 border border-ink-magenta/20 group-hover:bg-ink-magenta/20 group-hover:border-ink-magenta/40'
                  }`}
                >
                  <service.icon className={`text-2xl ${i % 2 === 0 ? 'text-ink-cyan' : 'text-ink-magenta'}`} />
                </div>

                <h3 className={`font-display font-bold text-xl text-ink-white mb-3 transition-colors duration-300
                  ${i % 2 === 0 ? 'group-hover:text-ink-cyan' : 'group-hover:text-ink-magenta'}`}
                >
                  {service.title}
                </h3>
                <p className="mb-5 text-sm leading-relaxed text-ink-muted font-body">
                  {service.desc}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {service.tags.map(tag => (
                    <span
                      key={tag}
                      className={`text-[10px] font-mono tracking-wide px-2.5 py-1 border border-ink-border text-ink-muted rounded-sm transition-all duration-300
                        ${i % 2 === 0
                          ? 'group-hover:border-ink-cyan/20 group-hover:text-ink-cyan/70'
                          : 'group-hover:border-ink-magenta/20 group-hover:text-ink-magenta/70'
                        }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom border hover */}
              <div className={`absolute bottom-0 left-0 right-0 h-px transition-all duration-500
                ${i % 2 === 0 ? 'bg-ink-cyan/0 group-hover:bg-ink-cyan/50' : 'bg-ink-magenta/0 group-hover:bg-ink-magenta/50'}`}
              />
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* CTA */}
      <section className="px-6 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative max-w-3xl p-12 mx-auto overflow-hidden text-center border rounded-sm border-ink-cyan/20 bg-ink-cyan/4"
        >
          <div className="absolute inset-0 opacity-5"
            style={{ backgroundImage: `repeating-linear-gradient(45deg, #00BFFF 0, #00BFFF 1px, transparent 0, transparent 50%)`, backgroundSize: '10px 10px' }}
          />
          <h3 className="relative mb-3 text-3xl font-bold font-display text-ink-white">
            Ready to bring your idea to life?
          </h3>
          <p className="relative text-ink-muted font-body mb-7">Tell us your requirement and we'll craft the perfect solution for your brand.</p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 text-sm font-semibold tracking-wide transition-all duration-300 rounded-sm btn-press group bg-ink-cyan text-ink-black hover:bg-cyan-300"
          >
            Start a Project
            <RiArrowRightLine className="transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </section>
    </PageWrapper>
  )
}