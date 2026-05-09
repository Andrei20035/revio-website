"use client"

import { motion } from "framer-motion"

// Example data showing what the leaderboard will look like
const leaderboardData = [
  { rank: 1, name: "Alex Chen", username: "@supercaralex", spots: 312, points: "24.8k", avatar: "AC" },
  { rank: 2, name: "Sofia Martinez", username: "@sofia_spots", spots: 287, points: "22.1k", avatar: "SM" },
  { rank: 3, name: "Marcus Williams", username: "@exoticlens", spots: 256, points: "19.6k", avatar: "MW" },
  { rank: 4, name: "Emma Thompson", username: "@emma_t", spots: 198, points: "15.3k", avatar: "ET" },
  { rank: 5, name: "James Park", username: "@jpark_motors", spots: 175, points: "13.5k", avatar: "JP" },
]

export function Leaderboard() {
  return (
    <section className="min-h-screen py-32 px-4 relative overflow-hidden flex items-center">
      {/* Top fade overlay for smooth transition */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#080C30] to-transparent z-10 pointer-events-none" />
      {/* Bottom fade overlay for smooth transition to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent z-10 pointer-events-none" />
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#080C30] via-black to-[#080C30]" />
      
      <div className="relative z-10 max-w-4xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1.5 rounded-full glass text-xs font-medium text-white/80 mb-4">
            LEADERBOARD PREVIEW
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 text-balance">
            Climb the <span className="gradient-text">Leaderboard</span>
          </h2>
          <p className="text-white/60 max-w-xl mx-auto text-pretty">
            Compete with spotters worldwide. Earn points for rare finds, uploads, and community activity.
          </p>
        </motion.div>

        {/* Top 3 podium */}
        <div className="flex justify-center items-end gap-4 mb-8">
          {[leaderboardData[1], leaderboardData[0], leaderboardData[2]].map((user, index) => {
            const heights = ["h-28", "h-36", "h-24"]
            const orders = ["order-1", "order-2", "order-3"]
            const positions = [2, 1, 3]
            return (
              <motion.div
                key={user.username}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
                className={`flex flex-col items-center ${orders[index]}`}
              >
                <div className="relative mb-2">
                  <div className={`w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-br from-[#4A90E2] via-[#9B59B6] to-[#FF5F6D] p-0.5 ${positions[index] === 1 ? 'glow' : ''}`}>
                    <div className="w-full h-full rounded-full bg-[#080C30] flex items-center justify-center">
                      <span className="text-lg md:text-xl font-bold text-white">{user.avatar}</span>
                    </div>
                  </div>
                  <div className={`absolute -bottom-1 -right-1 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                    positions[index] === 1 ? 'bg-gradient-to-r from-amber-400 to-amber-600 text-black' :
                    positions[index] === 2 ? 'bg-gradient-to-r from-slate-300 to-slate-400 text-black' :
                    'bg-gradient-to-r from-amber-600 to-amber-800 text-white'
                  }`}>
                    {positions[index]}
                  </div>
                </div>
                <p className="text-white font-medium text-sm truncate max-w-20 md:max-w-24">{user.name.split(' ')[0]}</p>
                <p className="text-white/50 text-xs">{user.points}</p>
                <div className={`${heights[index]} w-20 md:w-24 mt-2 rounded-t-xl bg-gradient-to-b from-white/10 to-transparent border border-white/10 border-b-0`} />
              </motion.div>
            )
          })}
        </div>

        {/* Full leaderboard */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="glass rounded-2xl p-4 md:p-6"
        >
          {leaderboardData.map((user, index) => (
            <motion.div
              key={user.username}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 + index * 0.1 }}
              className={`flex items-center gap-4 p-3 rounded-xl transition-colors hover:bg-white/5 ${
                index < leaderboardData.length - 1 ? 'border-b border-white/5' : ''
              }`}
            >
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                user.rank === 1 ? 'bg-gradient-to-r from-amber-400 to-amber-600 text-black' :
                user.rank === 2 ? 'bg-gradient-to-r from-slate-300 to-slate-400 text-black' :
                user.rank === 3 ? 'bg-gradient-to-r from-amber-600 to-amber-800 text-white' :
                'bg-white/10 text-white/60'
              }`}>
                {user.rank}
              </div>
              
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#4A90E2]/30 to-[#9B59B6]/30 flex items-center justify-center">
                <span className="text-sm font-medium text-white">{user.avatar}</span>
              </div>
              
              <div className="flex-1 min-w-0">
                <p className="text-white font-medium truncate">{user.name}</p>
                <p className="text-white/40 text-sm">{user.username}</p>
              </div>
              
              <div className="text-right">
                <p className="text-white font-bold">{user.points}</p>
                <p className="text-white/40 text-sm">{user.spots} spots</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
