"use client"

import { motion } from "framer-motion"
import { PhoneMockup, AppScreen } from "./phone-mockup"

export function Hero() {
  return (
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-28 pb-20">
          {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#080C30] via-black to-[#080C30]" />
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 -left-20 w-96 h-96 bg-[#4A90E2]/30 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-20 -right-20 w-96 h-96 bg-[#9B59B6]/30 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#FF5F6D]/20 rounded-full blur-3xl"
        />
      </div>

      {/* Grid overlay */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}
      />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-w-0">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left min-w-0"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex max-w-full items-center gap-2 px-4 py-2 rounded-full glass mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-[#4A90E2] animate-pulse" />
                <span className="text-sm text-white/80 whitespace-normal sm:whitespace-nowrap">
                  Now accepting early access signups
                </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-[clamp(3rem,14vw,4.5rem)] md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight break-words"
            >
              Spot. Share.{" "}
              <span className="gradient-text glow-text">Compete.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg md:text-xl text-white/60 mb-8 max-w-lg mx-auto lg:mx-0 text-pretty"
            >
              The social platform for car enthusiasts. Track rare sightings, climb the leaderboards, and connect with fellow spotters worldwide.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start w-full"
            >
              <a
                href="#waitlist"
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-[#4A90E2] via-[#9B59B6] to-[#FF5F6D] text-white font-semibold hover:opacity-90 transition-all hover:scale-105 glow text-center"
              >
                Join the Waitlist
              </a>
              <a
                href="#features"
                className="w-full sm:w-auto px-8 py-4 rounded-full glass text-white font-semibold hover:bg-white/10 transition-all text-center"
              >
                See How It Works
              </a>
            </motion.div>

            {/* Social proof */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 mt-10 justify-center lg:justify-start text-center sm:text-left w-full min-w-0"
            >
              <div className="flex -space-x-3">
                {[...Array(4)].map((_, i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full bg-gradient-to-br from-[#4A90E2] to-[#9B59B6] border-2 border-black flex items-center justify-center"
                  >
                    <span className="text-xs font-bold text-white">
                      {["AC", "SM", "MW", "ET"][i]}
                    </span>
                  </div>
                ))}
              </div>
              <div className="min-w-0 max-w-full">
                  <p className="text-white font-semibold text-balance">
                      Founding access for the first 1,000 spotters
                  </p>
                <p className="text-sm text-white/50">Reserve your founder badge before launch.</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Phone mockup */}
            <div className="relative flex justify-center lg:justify-end lg:translate-y-6">
                <PhoneMockup
                    delay={0.4}
                    className="lg:translate-x-24 xl:translate-x-36 2xl:translate-x-36 lg:scale-90 xl:scale-[0.92]"
                >
                    <AppScreen />
                </PhoneMockup>
            </div>
        </div>
      </div>

      {/* Bottom fade overlay for smooth transition to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent pointer-events-none" />

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-xs text-white/40">Scroll to explore</span>
          <svg className="w-5 h-5 text-white/40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  )
}
