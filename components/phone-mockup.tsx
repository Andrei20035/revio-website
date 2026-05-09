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
        <div className="relative mx-auto w-[340px] h-[720px] origin-center scale-[0.82] sm:scale-[0.9] md:scale-100 rounded-[3rem] bg-gradient-to-b from-zinc-800 to-zinc-900 p-[6px] shadow-2xl">
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
            <div className="pointer-events-none absolute top-0 left-0 right-0 z-20 h-24 bg-gradient-to-b from-black/70 to-transparent" />

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

            <MockBottomNav />
        </div>
    )
}

function MockBottomNav() {
    return (
        <div className="absolute bottom-0 left-0 right-0 z-30 h-[130px]">
            {/* fade background */}
            <div
                className="absolute inset-0"
                style={{
                    background:
                        "linear-gradient(180deg, rgba(5,7,27,0) 0%, #000000 86%)",
                }}
            />
            {/* navbar */}
            <div className="absolute bottom-5 left-1/2 flex h-[52px] w-[88%] -translate-x-1/2 items-center justify-between rounded-full border border-white/10 bg-[#161827]/40 px-5 shadow-[0_-8px_30px_rgba(0,0,0,0.35)] backdrop-blur-xl">

                {/* home */}
                <img
                    src="/home-button.png"
                    alt="Home"
                    className="h-6 w-6 object-contain"
                />

                {/* leaderboard */}
                <img
                    src="/leaderboard.png"
                    alt="Leaderboard"
                    className="h-6 w-6 object-contain"
                />

                {/* center plus */}
                <img
                    src="/plus-button.png"
                    alt="Post"
                    className="h-[35px] w-[35px] object-contain"
                />

                {/* activity */}
                <img
                    src="/activity-button.png"
                    alt="Activity"
                    className="h-6 w-6 object-contain"
                />

                {/* profile */}
                <img
                    src="/profile-picture.png"
                    alt="Profile"
                    className="h-6 w-6 rounded-full object-cover"
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
