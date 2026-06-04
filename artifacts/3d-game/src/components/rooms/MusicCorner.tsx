import React from "react";
import { motion } from "framer-motion";

export default function MusicCorner() {
  return (
    <div className="w-full h-full bg-[#2a1a22] p-8 flex flex-col items-center justify-center relative overflow-hidden">
      {/* Ambient particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [-20, -100],
              opacity: [0, 0.5, 0],
              scale: [1, 1.5, 0.5]
            }}
            transition={{
              duration: 3 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 5
            }}
            className="absolute bg-orange-400/30 rounded-full blur-sm"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${50 + Math.random() * 50}%`,
              width: `${5 + Math.random() * 10}px`,
              height: `${5 + Math.random() * 10}px`
            }}
          />
        ))}
      </div>

      <h2 className="font-display text-4xl text-orange-200 mb-12 z-10">Music Corner 💿</h2>

      <div className="relative z-10 flex flex-col items-center">
        {/* Record Player */}
        <div className="bg-[#8b5a2b] p-6 rounded-xl shadow-2xl border-4 border-[#5c3a21] relative mb-12">
          {/* Platter */}
          <div className="w-64 h-64 bg-gray-900 rounded-full border-4 border-gray-800 flex items-center justify-center shadow-inner relative">
            {/* Spinning Record */}
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              className="w-60 h-60 bg-black rounded-full border border-gray-800 flex items-center justify-center relative"
            >
              {/* Grooves */}
              <div className="absolute inset-2 border border-white/5 rounded-full" />
              <div className="absolute inset-4 border border-white/5 rounded-full" />
              <div className="absolute inset-8 border border-white/10 rounded-full" />
              <div className="absolute inset-12 border border-white/5 rounded-full" />
              
              {/* Label */}
              <div className="w-20 h-20 bg-gradient-to-br from-orange-400 to-pink-500 rounded-full flex items-center justify-center">
                <div className="w-2 h-2 bg-gray-200 rounded-full shadow-inner" />
              </div>
            </motion.div>
          </div>
          
          {/* Tonearm */}
          <div className="absolute right-4 top-8 origin-top-right rotate-[25deg] shadow-lg">
            <div className="w-6 h-6 bg-gray-300 rounded-full border-2 border-gray-400 relative z-10" />
            <div className="w-2 h-32 bg-gradient-to-b from-gray-300 to-gray-400 absolute top-4 left-2" />
            <div className="w-4 h-8 bg-gray-800 absolute top-[130px] left-1 rounded-sm" />
          </div>

          {/* Knobs */}
          <div className="absolute bottom-6 right-6 flex gap-2">
            <div className="w-6 h-6 rounded-full bg-gray-300 shadow-md border border-gray-400" />
            <div className="w-6 h-6 rounded-full bg-gray-300 shadow-md border border-gray-400" />
          </div>
        </div>

        {/* Playlist Link */}
        <motion.a
          href="https://open.spotify.com/user/1dlover1234567"
          target="_blank"
          rel="noreferrer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-green-500 hover:bg-green-400 text-white px-8 py-4 rounded-full font-display text-xl shadow-[0_0_20px_rgba(34,197,94,0.4)] flex items-center gap-3 transition-colors"
        >
          <span className="text-2xl">🎧</span> Jasmyn's Playlists
        </motion.a>
      </div>
    </div>
  );
}
