"use client"

import { useState } from "react"
import type { FormEvent } from "react"
import { motion } from "framer-motion"

const countries = [
  "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Argentina", "Armenia", "Australia", "Austria",
  "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Belgium", "Bolivia", "Bosnia and Herzegovina",
  "Brazil", "Bulgaria", "Canada", "Chile", "China", "Colombia", "Croatia", "Cyprus", "Czech Republic",
  "Denmark", "Egypt", "Estonia", "Finland", "France", "Georgia", "Germany", "Greece", "Hong Kong",
  "Hungary", "Iceland", "India", "Indonesia", "Ireland", "Israel", "Italy", "Japan", "Latvia", "Lithuania",
  "Luxembourg", "Malaysia", "Malta", "Mexico", "Moldova", "Monaco", "Montenegro", "Morocco", "Netherlands",
  "New Zealand", "Norway", "Poland", "Portugal", "Qatar", "Romania", "Saudi Arabia", "Serbia", "Singapore",
  "Slovakia", "Slovenia", "South Africa", "South Korea", "Spain", "Sweden", "Switzerland", "Thailand",
  "Turkey", "Ukraine", "United Arab Emirates", "United Kingdom", "United States", "Vietnam", "Other"
]

const usernameRegex = /^[a-z0-9_]{3,20}$/
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export function Waitlist() {
  const [email, setEmail] = useState("")
  const [username, setUsername] = useState("")
  const [platform, setPlatform] = useState<"ios" | "android" | "">("")
  const [country, setCountry] = useState("")
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState("")
  const [position, setPosition] = useState<number | null>(null)

  const isEmailValid = emailRegex.test(email.trim())
  const isUsernameValid = usernameRegex.test(username.trim())
  const isFormValid = isEmailValid && isUsernameValid && Boolean(platform) && Boolean(country)

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()

    if (!isFormValid) return
    
    setLoading(true)
    setErrorMessage("")

    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          username,
          platform,
          country,
        }),
      })

      const data = await response.json().catch(() => null) as { success?: boolean; position?: number | null; error?: string } | null

      if (!response.ok) {
        setErrorMessage(data?.error ?? "Something went wrong. Please try again.")
        return
      }

      setPosition(typeof data?.position === "number" ? data.position : null)
      setSubmitted(true)
    } catch {
      setErrorMessage("Something went wrong. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="waitlist" className="min-h-screen py-32 px-4 relative overflow-hidden flex items-center">
      {/* Top fade overlay for smooth transition */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black to-transparent z-10 pointer-events-none" />
      {/* Bottom fade overlay for smooth transition to footer */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#080C30] to-transparent z-10 pointer-events-none" />
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#080C30] to-black" />
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-[#4A90E2]/20 via-[#9B59B6]/20 to-[#FF5F6D]/20 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="inline-block px-4 py-1.5 rounded-full glass text-xs font-medium text-white/80 mb-6">
            EARLY ACCESS
          </span>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 text-balance">
            Be First to <span className="gradient-text glow-text">Experience</span> Revio
          </h2>
          <p className="text-lg text-white/60 mb-10 max-w-xl mx-auto text-pretty">
            Join the waitlist for exclusive early access. We&apos;ll notify you when your spot opens up.
          </p>

          {!submitted ? (
            <motion.form
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              onSubmit={handleSubmit}
              className="glass rounded-2xl p-6 md:p-8 max-w-lg mx-auto space-y-6"
            >
              {/* Email */}
              <div className="text-left">
                <label htmlFor="email" className="block text-sm font-medium text-white/70 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value)
                    setErrorMessage("")
                  }}
                  placeholder="you@example.com"
                  required
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/40 focus:outline-none focus:border-[#4A90E2] focus:ring-1 focus:ring-[#4A90E2] transition-all"
                />
              </div>

              {/* Username */}
              <div className="text-left">
                <label htmlFor="username" className="block text-sm font-medium text-white/70 mb-2">
                  Preferred Username
                </label>
                <input
                    type="text"
                    id="username"
                    value={username}
                    onChange={(e) => {
                      setUsername(e.target.value.toLowerCase().replace(/[^a-z0-9_]/g, ""))
                      setErrorMessage("")
                    }}
                    placeholder="yourusername"
                    minLength={3}
                    maxLength={20}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/40 focus:outline-none focus:border-[#4A90E2] focus:ring-1 focus:ring-[#4A90E2] transition-all"
                />
              </div>

              {/* Platform */}
              <div className="text-left">
                <label className="block text-sm font-medium text-white/70 mb-3">
                  Which platform will you use?
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => {
                      setPlatform("ios")
                      setErrorMessage("")
                    }}
                    className={`flex items-center justify-center gap-2 px-4 py-3 rounded-xl border transition-all ${
                      platform === "ios"
                        ? "bg-white/10 border-[#4A90E2] text-white"
                        : "bg-white/5 border-white/10 text-white/60 hover:bg-white/10"
                    }`}
                  >
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                    </svg>
                    iOS
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setPlatform("android")
                      setErrorMessage("")
                    }}
                    className={`flex items-center justify-center gap-2 px-4 py-3 rounded-xl border transition-all ${
                      platform === "android"
                        ? "bg-white/10 border-[#4A90E2] text-white"
                        : "bg-white/5 border-white/10 text-white/60 hover:bg-white/10"
                    }`}
                  >
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.6 9.48l1.84-3.18c.16-.31.04-.69-.26-.85-.29-.15-.65-.06-.83.22l-1.88 3.24c-2.86-1.21-6.08-1.21-8.94 0L5.65 5.67c-.19-.29-.58-.38-.87-.2-.28.18-.37.54-.22.83L6.4 9.48C3.3 11.25 1.28 14.44 1 18h22c-.28-3.56-2.3-6.75-5.4-8.52zM7 15.25c-.69 0-1.25-.56-1.25-1.25s.56-1.25 1.25-1.25 1.25.56 1.25 1.25-.56 1.25-1.25 1.25zm10 0c-.69 0-1.25-.56-1.25-1.25s.56-1.25 1.25-1.25 1.25.56 1.25 1.25-.56 1.25-1.25 1.25z"/>
                    </svg>
                    Android
                  </button>
                </div>
              </div>

              {/* Country */}
              <div className="text-left">
                <label htmlFor="country" className="block text-sm font-medium text-white/70 mb-2">
                  Country
                </label>
                <select
                  id="country"
                  value={country}
                  onChange={(e) => {
                    setCountry(e.target.value)
                    setErrorMessage("")
                  }}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-[#4A90E2] focus:ring-1 focus:ring-[#4A90E2] transition-all appearance-none cursor-pointer"
                  style={{ backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`, backgroundPosition: 'right 0.75rem center', backgroundRepeat: 'no-repeat', backgroundSize: '1.5em 1.5em' }}
                >
                  <option value="" className="bg-[#080C30]">Select your country</option>
                  {countries.map((c) => (
                    <option key={c} value={c} className="bg-[#080C30]">{c}</option>
                  ))}
                </select>
              </div>

              <button
                type="submit"
                disabled={loading || !isFormValid}
                className="w-full px-8 py-4 rounded-xl bg-gradient-to-r from-[#4A90E2] via-[#9B59B6] to-[#FF5F6D] text-white font-semibold hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    Joining...
                  </span>
                ) : (
                  "Join the Waitlist"
                )}
              </button>

              {errorMessage && (
                <p className="rounded-xl border border-[#FF5F6D]/30 bg-[#FF5F6D]/10 px-4 py-3 text-sm text-white/80" role="alert">
                  {errorMessage}
                </p>
              )}

              <p className="text-xs text-white/40 text-center">
                No spam, ever. We&apos;ll only email you about your early access.
              </p>
            </motion.form>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="glass rounded-2xl p-8 max-w-lg mx-auto"
            >
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-[#4A90E2] to-[#9B59B6] flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">You&apos;re on the list!</h3>
              <p className="text-white/60 mb-4">We&apos;ll email you when your early access spot opens up.</p>
              <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                <p className="text-sm text-white/50 mb-1">
                  {position ? "Your position" : "Reserved username"}
                </p>
                <p className="text-2xl font-bold gradient-text">
                  {position ? `#${position}` : `@${username}`}
                </p>
              </div>
            </motion.div>
          )}

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="flex items-center justify-center gap-4 md:gap-8 mt-12"
          >
            <div className="text-center">
              <p className="text-2xl md:text-3xl font-bold gradient-text">653</p>
              <p className="text-sm text-white/40">Spots Claimed</p>
            </div>
            <div className="w-px h-12 bg-white/10" />
            <div className="text-center">
              <p className="text-2xl md:text-3xl font-bold gradient-text">347</p>
              <p className="text-sm text-white/40">Remaining</p>
            </div>
            <div className="w-px h-12 bg-white/10" />
            <div className="text-center">
              <p className="text-2xl md:text-3xl font-bold gradient-text">Q2 2026</p>
              <p className="text-sm text-white/40">Target Launch</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
