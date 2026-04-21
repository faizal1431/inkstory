import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { RiCloseLine, RiZoomInLine } from 'react-icons/ri'
import PageWrapper from '../components/PageWrapper'

const categories = ['All', 'Printing', 'Design', 'Branding']

const projects = [
  {
    id: 1,
    title: 'LED BOARD',
    color: '#00BFFF',
    pattern: 'circles',
    year: '2026',
    image: '/images/w1.jpeg',
  },
  {
    id: 2,
    title: 'VISITING CARD',
    color: '#FF00FF',
    pattern: 'stripes',
    year: '2026',
    image: '/images/w2.jpeg',
  },
  {
    id: 3,
    title: 'VINYL STEAKER',
    color: '#40D4FF',
    pattern: 'dots',
    year: '2026',
    image: '/images/w3.jpeg',
  },
  {
    id: 4,
    title: 'STEAKERS',
    color: '#FF44FF',
    pattern: 'grid',
    year: '2026',
    image: '/images/w4.jpeg',
  },
  {
    id: 5,
    title: 'FLEX',
    category: 'Merchandise',
    color: '#00BFFF',
    pattern: 'waves',
    year: '2026',
    image: '/images/w5.jpeg',
  },
  {
    id: 6,
    title: 'LED BOARD',
    color: '#FF00FF',
    pattern: 'diamonds',
    year: '2026',
    image: '/images/w6.jpeg',
  },
  {
    id: 7,
    title: 'LED BOARD',
    color: '#40D4FF',
    pattern: 'hexagons',
    year: '2026',
    image: '/images/w7.jpeg',
  },
  {
    id: 8,
    title: 'FLEX',
    color: '#FF44FF',
    pattern: 'circles',
    year: '2026',
    image: '/images/w8.jpeg',
  },
  {
    id: 9,
    title: 'GSB BOARD',
    color: '#00BFFF',
    pattern: 'stripes',
    year: '2026',
    image: '/images/w9.jpeg',
  },
]

function ProjectCard({ project, onClick }) {
  const [hovered, setHovered] = useState(false)

  const patterns = {
    circles: (color) => `radial-gradient(circle at 25% 25%, ${color}30 0%, transparent 40%), radial-gradient(circle at 75% 75%, ${color}20 0%, transparent 40%)`,
    stripes: (color) => `repeating-linear-gradient(45deg, ${color}15 0px, ${color}15 2px, transparent 2px, transparent 20px)`,
    dots: (color) => `radial-gradient(circle, ${color}40 1px, transparent 1px)`,
    grid: (color) => `linear-gradient(${color}20 1px, transparent 1px), linear-gradient(90deg, ${color}20 1px, transparent 1px)`,
    waves: (color) => `repeating-linear-gradient(0deg, ${color}10 0px, ${color}10 1px, transparent 1px, transparent 30px)`,
    diamonds: (color) => `linear-gradient(45deg, ${color}20 25%, transparent 25%), linear-gradient(-45deg, ${color}20 25%, transparent 25%)`,
    hexagons: (color) => `radial-gradient(ellipse at center, ${color}30 0%, transparent 60%)`,
  }

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.4 }}
      className="relative overflow-hidden border rounded-sm cursor-pointer group border-ink-border aspect-square"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => onClick(project)}
    >
      {/* Actual image */}
      <img
        src={project.image}
        alt={project.title}
        className="absolute inset-0 object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
      />

      {/* Fallback pattern (shows if image fails) */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: patterns[project.pattern]?.(project.color),
          backgroundSize: project.pattern === 'dots' ? '20px 20px'
            : project.pattern === 'grid' ? '30px 30px'
            : project.pattern === 'diamonds' ? '30px 30px'
            : 'auto',
        }}
      />

      {/* Year badge */}
      <div className="absolute z-10 top-4 right-4">
        <span className="text-[10px] font-mono text-ink-muted border border-ink-border px-2 py-1 bg-ink-black/50 backdrop-blur-sm rounded-sm">
          {project.year}
        </span>
      </div>

      {/* Category */}
      <div className="absolute z-10 top-4 left-4">
        <span
          className="text-[10px] font-mono tracking-wide px-2 py-1 rounded-sm"
          style={{ background: `${project.color}25`, color: project.color, border: `1px solid ${project.color}40` }}
        >
          {project.category}
        </span>
      </div>

      {/* Hover overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: hovered ? 1 : 0 }}
        className="absolute inset-0 z-20 flex flex-col justify-end p-5"
        style={{ background: `linear-gradient(to top, ${project.color}90 0%, transparent 60%)` }}
      >
        <RiZoomInLine className="mb-3 ml-auto mr-auto text-xl text-white" />
        <h3 className="mb-1 text-lg font-bold leading-tight text-white font-display">{project.title}</h3>
        <p className="text-xs text-white/80 font-body line-clamp-2">{project.desc}</p>
      </motion.div>

      {/* Bottom info (always visible) */}
      <div className="absolute bottom-0 left-0 right-0 z-10 p-4 transition-opacity duration-300 opacity-100 group-hover:opacity-0">
        <h3 className="text-base font-semibold leading-tight font-display text-ink-white">{project.title}</h3>
      </div>
    </motion.div>
  )
}

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [selectedProject, setSelectedProject] = useState(null)

  const filtered = activeCategory === 'All'
    ? projects
    : projects.filter(p => p.category === activeCategory)

  return (
    <PageWrapper>
      {/* Header */}
      <section className="relative px-6 pb-16 overflow-hidden text-center pt-36">
        <div className="absolute inset-0 opacity-[0.03]"
          style={{ backgroundImage: `repeating-linear-gradient(-45deg, #00BFFF 0, #00BFFF 1px, transparent 0, transparent 12px)` }}
        />
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-ink-cyan text-xs tracking-[0.5em] uppercase font-mono mb-4"
        >
          Portfolio
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="mb-5 text-5xl font-black font-display md:text-7xl text-ink-white"
        >
          Our <span className="italic text-ink-magenta">Projects</span>
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
          className="max-w-xl mx-auto text-base text-ink-muted font-body"
        >
          A curated selection of our creative work across printing, design, and advertising.
        </motion.p>
      </section>

      {/* Filter tabs */}
      <section className="px-6 mb-10">
        <div className="flex flex-wrap justify-center gap-2 mx-auto max-w-7xl">
          {categories.map(cat => (
            <motion.button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className={`px-5 py-2 text-sm font-mono tracking-wide rounded-sm border transition-all duration-200 ${
                activeCategory === cat
                  ? 'bg-ink-cyan text-ink-black border-ink-cyan font-bold'
                  : 'border-ink-border text-ink-muted hover:border-ink-cyan/40 hover:text-ink-white'
              }`}
            >
              {cat}
            </motion.button>
          ))}
        </div>
      </section>

      {/* Grid */}
      <section className="px-6 pb-24">
        <motion.div layout className="grid grid-cols-1 gap-5 mx-auto max-w-7xl sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence>
            {filtered.map(project => (
              <ProjectCard key={project.id} project={project} onClick={setSelectedProject} />
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-ink-black/90 backdrop-blur-xl"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={e => e.stopPropagation()}
              className="relative w-full max-w-lg p-8 border rounded-sm bg-ink-card border-ink-border"
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute transition-colors top-4 right-4 text-ink-muted hover:text-ink-white"
              >
                <RiCloseLine size={22} />
              </button>

              {/* Modal image */}
              <div className="w-full h-48 mb-6 overflow-hidden rounded-sm">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="object-cover w-full h-full"
                  onError={(e) => {
                    e.target.style.display = 'none'
                    e.target.nextSibling.style.display = 'flex'
                  }}
                />
                {/* Fallback if image fails */}
                <div
                  className="items-center justify-center hidden w-full h-full text-4xl font-black rounded-sm font-display"
                  style={{
                    background: `linear-gradient(135deg, ${selectedProject.color}30 0%, #111 100%)`,
                    color: selectedProject.color,
                    border: `1px solid ${selectedProject.color}30`
                  }}
                >
                  {selectedProject.title.charAt(0)}
                </div>
              </div>

              <span
                className="text-[10px] font-mono tracking-wide px-2 py-1 rounded-sm mb-3 inline-block"
                style={{ background: `${selectedProject.color}25`, color: selectedProject.color }}
              >
                {selectedProject.category}
              </span>

              <h2 className="mb-3 text-2xl font-bold font-display text-ink-white">{selectedProject.title}</h2>
              <p className="mb-5 text-sm leading-relaxed text-ink-muted font-body">{selectedProject.desc}</p>

              <div className="flex items-center justify-between pt-4 font-mono text-xs border-t text-ink-muted border-ink-border">
                <span>Year: {selectedProject.year}</span>
                <span style={{ color: selectedProject.color }}>Ink Story Project</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </PageWrapper>
  )
}