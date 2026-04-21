import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  RiInstagramLine, RiFacebookLine, RiMailLine, RiWhatsappLine,
  RiCheckLine, RiSendPlane2Line, RiPhoneLine, RiMapPin2Line
} from 'react-icons/ri'
import PageWrapper from '../components/PageWrapper'

const FORMSPREE_URL = 'https://formspree.io/f/xykldoge'

const serviceTypes = [
  'Select a Service',
  'Printing',
  'Logo Design',
  'Graphic Design',
  'Video Editing',
  'Branding',
  'Social Media',
  'Other',
]

const socials = [
  { icon: RiInstagramLine, href: 'https://www.instagram.com/ink_story__?igsh=MWJnbmVidXE1aTgzag==', label: 'Instagram', color: 'hover:text-pink-400' },
  { icon: RiMapPin2Line, href: 'https://maps.app.goo.gl/uLbvdfWWiXoR1sNz5', label: 'Location', color: 'hover:text-cyan-400' },
  { icon: RiWhatsappLine, href: 'https://wa.me/7355754436', label: 'WhatsApp', color: 'hover:text-green-400' },
  { icon: RiMailLine, href: 'mailto:inkstory@email.com', label: 'Email', color: 'hover:text-ink-cyan' },
]

const contactInfo = [
  { icon: RiPhoneLine, label: 'Call / WhatsApp', value: '6393721009 | 8471002744 | 7355754436' },
  { icon: RiMailLine, label: 'Email', value: 'inkstory009@gmail.com' },
  { icon: RiMapPin2Line, label: 'Location', value: 'Prayagraj, Uttar Pradesh, India' },
]

const initialForm = { name: '', email: '', phone: '', serviceType: 'Select a Service', message: '' }

export default function Contact() {
  const [form, setForm] = useState(initialForm)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle')
  const [serverMsg, setServerMsg] = useState('')

  const validate = () => {
    const e = {}
    if (!form.name.trim()) e.name = 'Name is required'
    if (!form.email.trim() || !/^\S+@\S+\.\S+$/.test(form.email)) e.email = 'Valid email is required'
    if (!form.phone.trim() || form.phone.length < 7) e.phone = 'Valid phone number is required'
    if (form.serviceType === 'Select a Service') e.serviceType = 'Please select a service'
    if (!form.message.trim() || form.message.length < 10) e.message = 'Message must be at least 10 characters'
    return e
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const validation = validate()
    if (Object.keys(validation).length > 0) {
      setErrors(validation)
      return
    }
    setStatus('loading')
    try {
      const res = await fetch(FORMSPREE_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          phone: form.phone,
          serviceType: form.serviceType,
          message: form.message,
        }),
      })
      if (res.ok) {
        setStatus('success')
        setServerMsg('Your message has been received! We will contact you soon.')
        setForm(initialForm)
      } else {
        const data = await res.json()
        setStatus('error')
        setServerMsg(data?.error || 'Something went wrong. Please try again.')
      }
    } catch {
      setStatus('error')
      setServerMsg('Network error. Please try again or contact us directly.')
    }
  }

  const inputClass = (field) =>
    `w-full bg-ink-dark border ${errors[field] ? 'border-red-500/60' : 'border-ink-border'} rounded-sm px-4 py-3 text-ink-white text-sm font-body placeholder-ink-muted/50 focus:outline-none focus:border-ink-gold transition-colors duration-200`

  return (
    <PageWrapper>
      {/* Header */}
      <section className="relative px-6 pb-16 overflow-hidden text-center pt-36">
        <div className="absolute top-20 right-0 w-[400px] h-[400px] rounded-full bg-ink-gold/4 blur-3xl" />
        <div className="absolute top-20 left-0 w-[300px] h-[300px] rounded-full bg-ink-gold/3 blur-3xl" />
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-ink-cyan text-xs tracking-[0.5em] uppercase font-mono mb-4"
        >
          Get In Touch
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="mb-5 text-5xl font-black font-display md:text-7xl text-ink-white"
        >
          Contact <span className="italic text-ink-cyan">Us</span>
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
          Ready to start a project or simply have a question? We'd love to hear from you.
        </motion.p>
      </section>

      <section className="px-6 pb-28">
        <div className="grid max-w-6xl grid-cols-1 gap-10 mx-auto lg:grid-cols-5">

          {/* Form — 3 cols */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="p-8 border rounded-sm lg:col-span-3 bg-ink-card border-ink-border"
          >
            <h2 className="mb-6 text-2xl font-bold font-display text-ink-white">Send a Message</h2>

            <AnimatePresence mode="wait">
              {status === 'success' ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-16 text-center"
                >
                  <div className="flex items-center justify-center w-16 h-16 mx-auto mb-5 border rounded-full bg-green-500/15 border-green-500/30">
                    <RiCheckLine className="text-3xl text-green-400" />
                  </div>
                  <h3 className="mb-2 text-2xl font-bold font-display text-ink-white">Message Sent!</h3>
                  <p className="mb-6 text-sm text-ink-muted font-body">{serverMsg}</p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="font-mono text-sm underline text-ink-cyan underline-offset-4"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  onSubmit={handleSubmit}
                  className="space-y-5"
                >
                  {/* Name + Email */}
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <label className="block text-ink-muted text-xs font-mono tracking-wide mb-1.5">Full Name *</label>
                      <input
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        className={inputClass('name')}
                      />
                      {errors.name && <p className="mt-1 text-xs text-red-400">{errors.name}</p>}
                    </div>
                    <div>
                      <label className="block text-ink-muted text-xs font-mono tracking-wide mb-1.5">Email *</label>
                      <input
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="your@email.com"
                        className={inputClass('email')}
                      />
                      {errors.email && <p className="mt-1 text-xs text-red-400">{errors.email}</p>}
                    </div>
                  </div>

                  {/* Phone + Service */}
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <label className="block text-ink-muted text-xs font-mono tracking-wide mb-1.5">Phone *</label>
                      <input
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="+91 XXXXX XXXXX"
                        className={inputClass('phone')}
                      />
                      {errors.phone && <p className="mt-1 text-xs text-red-400">{errors.phone}</p>}
                    </div>
                    <div>
                      <label className="block text-ink-muted text-xs font-mono tracking-wide mb-1.5">Service Type *</label>
                      <select
                        name="serviceType"
                        value={form.serviceType}
                        onChange={handleChange}
                        className={`${inputClass('serviceType')} cursor-pointer`}
                      >
                        {serviceTypes.map(s => (
                          <option key={s} value={s} disabled={s === 'Select a Service'} className="bg-ink-dark">{s}</option>
                        ))}
                      </select>
                      {errors.serviceType && <p className="mt-1 text-xs text-red-400">{errors.serviceType}</p>}
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-ink-muted text-xs font-mono tracking-wide mb-1.5">Message *</label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Tell us about your project, requirement, or any question..."
                      rows={5}
                      className={`${inputClass('message')} resize-none`}
                    />
                    {errors.message && <p className="mt-1 text-xs text-red-400">{errors.message}</p>}
                  </div>

                  {status === 'error' && (
                    <p className="p-3 text-sm text-red-400 border rounded-sm font-body border-red-500/30 bg-red-500/8">
                      {serverMsg}
                    </p>
                  )}

                  <motion.button
                    type="submit"
                    disabled={status === 'loading'}
                    whileHover={{ scale: status === 'loading' ? 1 : 1.02 }}
                    whileTap={{ scale: status === 'loading' ? 1 : 0.97 }}
                    className="flex items-center justify-center w-full gap-2 py-4 text-sm font-bold tracking-wide transition-all duration-300 rounded-sm bg-ink-cyan text-ink-black hover:bg-ink-gold-light disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {status === 'loading' ? (
                      <>
                        <svg className="w-4 h-4 animate-spin" viewBox="0 0 24 24" fill="none">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>Send Message <RiSendPlane2Line /></>
                    )}
                  </motion.button>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Sidebar — 2 cols */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col gap-6 lg:col-span-2"
          >
            {/* Contact info */}
            <div className="p-6 border rounded-sm bg-ink-card border-ink-border">
              <h3 className="mb-5 text-lg font-bold font-display text-ink-white">Contact Info</h3>
              <div className="space-y-4">
                {contactInfo.map(item => (
                  <div key={item.label} className="flex gap-3">
                    <div className="flex items-center justify-center border rounded-sm w-9 h-9 shrink-0 bg-ink-gold/10 border-ink-gold/20">
                      <item.icon className="text-base text-ink-cyan" />
                    </div>
                    <div>
                      <p className="text-ink-muted text-xs font-mono mb-0.5">{item.label}</p>
                      <p className="text-sm text-ink-white font-body">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Social media */}
            <div className="p-6 border rounded-sm bg-ink-card border-ink-border">
              <h3 className="mb-5 text-lg font-bold font-display text-ink-white">Find Us Online</h3>
              <div className="space-y-3">
                {socials.map(social => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ x: 4 }}
                    className="flex items-center gap-3 p-3 transition-all duration-200 border rounded-sm border-ink-border group"
                  >
                    <div
                      className="flex items-center justify-center rounded-sm w-9 h-9 shrink-0"
                      style={{ background: social.bg, color: social.color }}
                    >
                      <social.icon size={18} />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-ink-white font-body">{social.label}</p>
                      <p className="font-mono text-xs text-ink-muted">{social.handle}</p>
                    </div>
                    <RiSendPlane2Line className="ml-auto transition-colors duration-200 text-ink-muted group-hover:text-ink-cyan" size={14} />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Hours */}
            <div className="p-5 border rounded-sm border-ink-gold/20 bg-ink-gold/4">
              <p className="mb-3 font-mono text-xs tracking-wide text-ink-cyan">WORKING HOURS</p>
              <div className="space-y-1.5 text-sm font-body">
                <div className="flex justify-between">
                  <span className="text-ink-muted">Monday – Saturday</span>
                  <span className="text-ink-white">9:00 AM – 8:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-ink-muted">Sunday</span>
                  <span className="text-ink-white">By Appointment</span>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </section>
    </PageWrapper>
  )
}