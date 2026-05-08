"use client"

import { motion } from "framer-motion"

const socialFeatures = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z" />
      </svg>
    ),
    title: "Instant Capture",
    description: "Snap and share your spots in seconds with AI-powered car recognition"
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
      </svg>
    ),
    title: "React & Engage",
    description: "Like, comment, and share the most epic automotive discoveries"
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
    title: "Build Your Crew",
    description: "Connect with fellow enthusiasts and join exclusive spotter circles"
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 01-.982-3.172M9.497 14.25a7.454 7.454 0 00.981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 007.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 002.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 012.916.52 6.003 6.003 0 01-5.395 4.972m0 0a6.726 6.726 0 01-2.749 1.35m0 0a6.772 6.772 0 01-3.044 0" />
      </svg>
    ),
    title: "Earn Badges",
    description: "Unlock achievements for rare spots, streaks, and community milestones"
  },
]

const previewPosts = [
  { user: "Marcus W.", car: "McLaren 765LT", location: "Beverly Hills", rarity: "Ultra Rare" },
  { user: "Sofia M.", car: "Porsche 918 Spyder", location: "Monaco", rarity: "Legendary" },
  { user: "Alex C.", car: "Bugatti Chiron", location: "Dubai", rarity: "Hypercar" },
]

export function SocialInteractions() {
  return (
    <section className="py-24 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#080C30] to-black" />
      
      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full glass text-xs font-medium text-white/80 mb-4">
            SOCIAL EXPERIENCE
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 text-balance">
            Where Car Culture <span className="gradient-text">Comes Alive</span>
          </h2>
          <p className="text-white/60 max-w-xl mx-auto text-pretty">
            More than just spotting. Build connections, share stories, and become part of the world&apos;s most passionate automotive community.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Features grid */}
          <div className="grid sm:grid-cols-2 gap-4">
            {socialFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass rounded-2xl p-6 hover:bg-white/10 transition-colors group"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#4A90E2]/20 to-[#9B59B6]/20 flex items-center justify-center mb-4 text-white group-hover:from-[#4A90E2]/30 group-hover:to-[#9B59B6]/30 transition-colors">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-sm text-white/60">{feature.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Community Preview */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="glass rounded-2xl p-6"
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-white">Community Preview</h3>
              <span className="flex items-center gap-2 text-xs text-white/50 px-3 py-1 rounded-full bg-white/5">
                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Sample Feed
              </span>
            </div>

            <div className="space-y-4">
              {previewPosts.map((post, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + index * 0.15 }}
                  className="flex gap-4 p-3 rounded-xl bg-white/5"
                >
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#4A90E2] to-[#9B59B6] flex items-center justify-center shrink-0">
                    <span className="text-sm font-bold text-white">{post.user.split(' ').map(n => n[0]).join('')}</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="font-medium text-white">{post.user}</span>
                      <svg className="w-4 h-4 text-[#4A90E2]" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <p className="text-white/80 text-sm">Spotted a <span className="text-[#FF5F6D] font-medium">{post.car}</span></p>
                    <div className="flex items-center gap-3 mt-1">
                      <span className="text-xs text-white/40">{post.location}</span>
                      <span className="text-xs px-2 py-0.5 rounded-full bg-gradient-to-r from-[#4A90E2]/20 to-[#9B59B6]/20 text-white/70">{post.rarity}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-6 pt-4 border-t border-white/10">
              <p className="text-center text-sm text-white/40">
                This is a preview of what the feed will look like at launch
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
