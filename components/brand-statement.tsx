"use client"

import { motion } from "framer-motion"

export function BrandStatement() {
  return (
    <section className="min-h-screen py-32 px-6 relative overflow-hidden flex items-center justify-center">
      {/* Top fade overlay for smooth transition */}
      <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-black to-transparent z-10 pointer-events-none" />
      {/* Bottom fade overlay for smooth transition to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-0 bg-black" />
      
      {/* Subtle center glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-gradient-to-r from-[#4A90E2]/3 via-[#9B59B6]/4 to-[#FF5F6D]/3 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-2xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center space-y-8"
        >
          {/* Headline */}
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight">
            Spotting rare cars is better{" "}
            <span className="gradient-text">when shared.</span>
          </h2>

          {/* Supporting text */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-lg md:text-xl text-white/50 font-light max-w-md mx-auto"
          >
            Built for people who slow down traffic just to look at a car.
          </motion.p>

          {/* Signature footer */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="pt-8"
          >
            <span className="text-sm text-white/30 tracking-widest uppercase">
              Revio — built by enthusiasts
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
