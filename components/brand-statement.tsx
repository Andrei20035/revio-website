"use client"

import { motion } from "framer-motion"

export function BrandStatement() {
  return (
    <section className="min-h-screen py-32 px-4 relative overflow-hidden flex items-center">
      {/* Top fade overlay for smooth transition */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black to-transparent z-10 pointer-events-none" />
      {/* Bottom fade overlay for smooth transition to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-0 bg-black" />
      
      {/* Subtle gradient accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-r from-[#4A90E2]/5 via-[#9B59B6]/5 to-[#FF5F6D]/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-4xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="w-16 h-16 mx-auto mb-8 rounded-2xl bg-gradient-to-br from-[#4A90E2]/20 to-[#9B59B6]/20 flex items-center justify-center"
          >
            <svg className="w-8 h-8 text-white/80" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
            </svg>
          </motion.div>

          <h2 className="text-2xl md:text-4xl font-bold text-white mb-6 leading-relaxed text-balance">
            We believe the thrill of spotting a rare car on the street{" "}
            <span className="gradient-text">deserves to be shared.</span>
          </h2>

          <div className="space-y-6 text-lg text-white/60 leading-relaxed max-w-2xl mx-auto">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-pretty"
            >
              That moment when you hear an engine note that makes you stop mid-conversation. When you catch a glimpse of something special parked down a side street. When you finally see the car you&apos;ve only dreamed about.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="text-pretty"
            >
              These moments matter. They connect us. They remind us why we fell in love with cars in the first place.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="text-white/80 font-medium text-pretty"
            >
              Revio is built by enthusiasts, for enthusiasts. We&apos;re creating a space where every spot counts, every spotter matters, and the passion that drives us all finally has a home.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="mt-10 flex items-center justify-center gap-2 text-sm text-white/40"
          >
            <span className="w-12 h-px bg-white/20" />
            <span>Built with love in California</span>
            <span className="w-12 h-px bg-white/20" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
