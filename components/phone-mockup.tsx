"use client"

import { motion } from "framer-motion"

interface PhoneMockupProps {
  children: React.ReactNode
  className?: string
  delay?: number
}

export function PhoneMockup({ children, className = "", delay = 0 }: PhoneMockupProps) {
  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay, ease: "easeOut" }}
      className={`relative ${className}`}
    >
      {/* Phone frame */}
      <div className="relative mx-auto w-[280px] md:w-[340px] h-[620px] md:h-[720px] rounded-[3rem] bg-gradient-to-b from-zinc-800 to-zinc-900 p-[6px] shadow-2xl">
        {/* Inner bezel */}
        <div className="absolute inset-[6px] rounded-[2.5rem] bg-gradient-to-b from-zinc-700 to-zinc-800 p-1">
          {/* Screen */}
          <div className="relative h-full w-full overflow-hidden rounded-[2.25rem] bg-[#080C30]">
            {/* Notch */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-black rounded-b-2xl z-10" />
            {/* Screen content */}
            <div className="h-full w-full overflow-hidden">
              {children}
            </div>
          </div>
        </div>
        {/* Side buttons */}
        <div className="absolute right-[-3px] top-28 w-1 h-12 bg-zinc-700 rounded-r-sm" />
        <div className="absolute left-[-3px] top-24 w-1 h-8 bg-zinc-700 rounded-l-sm" />
        <div className="absolute left-[-3px] top-36 w-1 h-16 bg-zinc-700 rounded-l-sm" />
      </div>
      {/* Glow effect */}
      <div className="absolute inset-0 -z-10 blur-3xl opacity-40">
        <div className="absolute inset-0 bg-gradient-to-r from-[#4A90E2] via-[#9B59B6] to-[#FF5F6D] rounded-full" />
      </div>
    </motion.div>
  )
}

export function AppScreen() {
    return (
        <div className="relative h-full w-full overflow-hidden bg-black">

            {/* top fade */}
            <div className="pointer-events-none absolute top-0 left-0 right-0 z-20 h-24 bg-gradient-to-b from-black/70 to-transparent" />

            {/* scrolling feed */}
            <motion.img
                src="/feed-preview.png"
                alt="Revio feed preview"
                className="absolute left-0 top-12 w-full"
                animate={{ y: ["0%", "-45%"] }}
                transition={{
                    duration: 24,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut",
                }}
            />

            {/* fixed bottom navbar */}
            <img
                src="/navbar.png"
                alt="Revio navigation"
                className="absolute bottom-0 left-[-12px] z-30 w-[calc(100%+24px)] max-w-none"
            />
        </div>
    )
}

function HeartIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
    </svg>
  )
}

function MockBottomNav() {
  return (
      <div className="absolute bottom-7 left-4 right-4 z-30">
        {/* fade behind navbar */}
        <div className="pointer-events-none absolute -bottom-8 left-[-16px] right-[-16px] h-32 bg-gradient-to-t from-black/80 to-transparent" />

        {/* navbar glass */}
        <div className="relative flex h-16 items-center justify-between rounded-full border border-white/10 bg-[#11121c]/80 px-6 shadow-[0_-8px_30px_rgba(0,0,0,0.35)] backdrop-blur-2xl">
          <NavIcon label="home" />
          <NavIcon label="trophy" />

          {/* center plus */}
          <button className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-[#4A90E2] via-[#9B59B6] to-[#FF5F6D] shadow-lg">
            <span className="text-4xl font-light leading-none text-white">+</span>
          </button>

          <NavIcon label="flame" />

          <img
              src="/profile-picture.png"
              alt="Profile"
              className="h-9 w-9 rounded-full object-cover"
          />
        </div>
      </div>
  )
}

function NavIcon({ label }: { label: "home" | "trophy" | "flame" }) {
  if (label === "home") {
    return (
        <svg className="h-7 w-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 10.5 12 3l9 7.5V21a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1V10.5Z" />
        </svg>
    )
  }

  if (label === "trophy") {
    return (
        <svg className="h-7 w-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M8 21h8M12 17v4M7 4h10v4a5 5 0 0 1-10 0V4ZM5 5H3v2a3 3 0 0 0 3 3M19 5h2v2a3 3 0 0 1-3 3" />
        </svg>
    )
  }

  return (
      <svg className="h-7 w-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.5 14.5c0 3 2.5 5 5.5 5 3.5 0 6-2.5 6-6 0-2.5-1.5-4.5-3.5-6 .2 2.2-.8 3.4-2.1 4.2.2-3.2-1.7-5.8-4.4-7.2.3 3.5-2 5.2-3.4 7.1-.7.9-1.1 1.8-1.1 2.9Z" />
      </svg>
  )
}
