import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
  RiTeamLine, RiBuilding2Line, RiTruckLine, RiGroupLine,
  RiCheckLine, RiArrowRightLine, RiStarLine, RiShieldCheckLine
} from 'react-icons/ri'
import PageWrapper from '../components/PageWrapper'

const reasons = [
  {
    icon: RiTeamLine,
    title: 'Trusted Partnership',
    desc: 'We build long-term relationships, not just transactions. Your growth is our success metric.',
  },
  {
    icon: RiBuilding2Line,
    title: 'B2B Pricing',
    desc: 'Exclusive bulk pricing and priority service tiers for businesses and agencies with volume needs.',
  },
  {
    icon: RiTruckLine,
    title: 'Fast Turnaround',
    desc: 'Strict deadlines met without compromising quality. Rush orders available with express slots.',
  },
  {
    icon: RiGroupLine,
    title: 'Dedicated Account Manager',
    desc: 'Every business partner gets a dedicated point of contact for seamless, hassle-free coordination.',
  },
  {
    icon: RiShieldCheckLine,
    title: 'Quality Assurance',
    desc: 'Every project undergoes our 3-step quality check before delivery. Zero compromise on standards.',
  },
  {
    icon: RiStarLine,
    title: 'Creative Excellence',
    desc: 'In-house designers with 5+ years experience delivering premium creative for every medium.',
  },
]

const partnerTypes = [
  {
    title: 'Agencies',
    desc: 'White-label print and design production for advertising and creative agencies.',
    bullet: ['White-label production', 'Competitive margins', 'NDA protected', 'Priority slots'],
    accent: '#00BFFF',
  },
  {
    title: 'Enterprises',
    desc: 'Large-scale printing contracts and ongoing design retainers for corporate clients.',
    bullet: ['Volume discounts', 'Dedicated account manager', 'Monthly billing', 'Custom SLA'],
    accent: '#40D4FF',
  },
  {
    title: 'Event Companies',
    desc: 'Full event printing and branding — banners, backdrops, badges, merchandise, and more.',
    bullet: ['Same-day options', 'On-site setup support', 'Event packages', 'Post-event analysis'],
    accent: '#FF00FF',
  },
]

const bulkServices = [
  'Flex & Banner Printing (100+ sq.ft)',
  'Visiting Cards (500+ quantity)',
  'Pamphlet / Brochure Printing',
  'T-Shirt & Merchandise (50+ pieces)',
  'ID Cards & Bill Books',
  'Social Media Design Packages',
]

export default function Collaboration() {
  return (
    <PageWrapper>
      {/* Header */}
      <section className="relative px-6 pb-20 overflow-hidden pt-36">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-ink-cyan/4 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full bg-ink-magenta/4 blur-3xl" />

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-ink-cyan text-xs tracking-[0.5em] uppercase font-mono mb-4"
          >
            Business Partnerships
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="mb-5 text-5xl font-black font-display md:text-7xl text-ink-white"
          >
            Let's <span className="italic text-ink-magenta">Collaborate</span>
          </motion.h1>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.3 }}
            className="max-w-xs mx-auto mb-6 gold-line"
          />
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="max-w-2xl mx-auto text-lg text-ink-muted font-body"
          >
            Partner with Ink Story for bulk orders, white-label production, and ongoing creative contracts. We scale with your business.
          </motion.p>
        </div>
      </section>

      {/* Partner Types */}
      <section className="px-6 pb-24">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <h2 className="text-3xl font-bold font-display md:text-4xl text-ink-white">
              Who We Work With
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 gap-6 mb-20 md:grid-cols-3">
            {partnerTypes.map((type, i) => (
              <motion.div
                key={type.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12 }}
                whileHover={{ y: -5 }}
                className="relative overflow-hidden border rounded-sm bg-ink-card border-ink-border p-7 group"
              >
                <div
                  className="absolute top-0 left-0 right-0 h-0.5"
                  style={{ background: type.accent }}
                />
                <h3
                  className="mb-3 text-2xl font-bold font-display"
                  style={{ color: type.accent }}
                >
                  {type.title}
                </h3>
                <p className="mb-5 text-sm leading-relaxed text-ink-muted font-body">{type.desc}</p>
                <ul className="space-y-2">
                  {type.bullet.map(b => (
                    <li key={b} className="flex items-center gap-2 text-sm text-ink-white/80 font-body">
                      <RiCheckLine className="shrink-0" style={{ color: type.accent }} />
                      {b}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Why Collaborate */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <p className="text-ink-cyan text-xs tracking-[0.4em] uppercase font-mono mb-3">Advantages</p>
            <h2 className="text-3xl font-bold font-display md:text-4xl text-ink-white">
              Why Collaborate With <span className="text-ink-cyan">Us?</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 gap-5 mb-20 sm:grid-cols-2 lg:grid-cols-3">
            {reasons.map((r, i) => (
              <motion.div
                key={r.title}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex gap-4 p-5 transition-colors duration-300 border rounded-sm border-ink-border bg-ink-card/50 hover:border-ink-cyan/30 group"
              >
                <div className="flex items-center justify-center w-10 h-10 transition-all duration-300 border rounded-sm shrink-0 bg-ink-cyan/10 border-ink-cyan/20 group-hover:bg-ink-cyan/20">
                  <r.icon className="text-lg text-ink-cyan" />
                </div>
                <div>
                  <h4 className="mb-1 text-base font-semibold font-display text-ink-white">{r.title}</h4>
                  <p className="text-sm leading-relaxed text-ink-muted font-body">{r.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bulk Services */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-10 mb-16 border rounded-sm border-ink-cyan/20 bg-ink-cyan/4"
          >
            <div className="grid items-center gap-10 md:grid-cols-2">
              <div>
                <p className="text-ink-cyan text-xs tracking-[0.4em] uppercase font-mono mb-3">Bulk Offers</p>
                <h3 className="mb-4 text-3xl font-bold font-display text-ink-white">
                  Bulk Printing Deals
                </h3>
                <p className="mb-4 text-sm leading-relaxed text-ink-muted font-body">
                  Volume orders get priority processing, dedicated production slots, and special pricing structures negotiated directly with our team.
                </p>
                <p className="font-mono text-xs text-ink-white/60">
                  Minimum order quantities apply. Contact us for a custom quote.
                </p>
              </div>
              <div>
                <ul className="space-y-2.5">
                  {bulkServices.map(s => (
                    <li key={s} className="flex items-center gap-3 text-sm text-ink-white/80 font-body">
                      <span className="w-1.5 h-1.5 rounded-full bg-ink-cyan shrink-0" />
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h3 className="mb-4 text-3xl font-bold font-display md:text-4xl text-ink-white">
              Ready to Start a Partnership?
            </h3>
            <p className="max-w-md mx-auto mb-8 text-ink-muted font-body">
              Reach out and we'll set up a discovery call to understand your needs and build a custom collaboration plan.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-10 py-4 text-sm font-bold tracking-wide transition-all duration-300 rounded-sm btn-press group bg-ink-cyan text-ink-black hover:bg-cyan-300"
            >
              Let's Work Together
              <RiArrowRightLine className="transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>
      </section>
    </PageWrapper>
  )
}