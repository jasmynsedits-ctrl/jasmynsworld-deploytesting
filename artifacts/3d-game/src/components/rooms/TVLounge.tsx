import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const SHOWS = [
  "Noddy", "Land Before Time", "Fraggle Rock", "Harold and the Purple Crayon", "Boohbah", "Oobi", "Moose & Zee", "Dragon Tales", "Maggie & the Ferocious Beast", "Oswald", "Wow Wow Wubbzy", "Bear in the Big Blue House", "I Spy", "JoJo's Circus", "Rolie Polie Olie", "Miss Spider's Sunny Patch", "Doodlebops", "Fresh Beat Band", "Franklin", "Little Bear", "Upside Down Show", "Pinky Dinky Doo", "Charlie & Lola", "Higglytown Heroes", "Fish Hooks", "Maya & Miguel", "Little Bill"
];

const GAMES = [
  "Dance Central", "MJ Experience", "Just Dance", "Xbox Kinect Sports", "Xbox Kinect Animal Game", "Toy Story Game", "LEGO Movie Game", "Rayman", "Dora Doll Game"
];

export default function TVLounge() {
  const [selectedShow, setSelectedShow] = useState<string | null>(null);

  return (
    <div className="w-full h-full bg-slate-900 text-slate-200 p-8 flex flex-col relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/20 blur-[100px] rounded-full pointer-events-none" />

      <h2 className="font-display text-4xl text-blue-300 mb-8 z-10 text-center drop-shadow-[0_0_10px_rgba(59,130,246,0.5)]">TV Lounge 📺</h2>

      <div className="flex-1 overflow-y-auto z-10 space-y-12 pb-12 custom-scrollbar">
        
        {/* Shows Section */}
        <div>
          <h3 className="text-xl font-bold mb-4 text-slate-400 pl-4 border-l-4 border-blue-500">Favorite Shows</h3>
          <div className="flex overflow-x-auto gap-4 pb-4 px-4 snap-x">
            {SHOWS.map(show => (
              <motion.div
                key={show}
                whileHover={{ scale: 1.05 }}
                onClick={() => setSelectedShow(show)}
                className="min-w-[160px] h-24 bg-slate-800 rounded-lg border border-slate-700 flex items-center justify-center p-4 text-center cursor-pointer shadow-lg hover:border-blue-400 hover:shadow-blue-500/20 transition-all snap-center relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60" />
                <span className="relative z-10 font-display text-sm drop-shadow-md">{show}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Games Section */}
        <div>
          <h3 className="text-xl font-bold mb-4 text-slate-400 pl-4 border-l-4 border-green-500">Console Games</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 px-4">
            {GAMES.map(game => (
              <motion.div
                key={game}
                whileHover={{ scale: 1.05 }}
                className="aspect-[3/4] bg-green-900/20 rounded-md border border-green-700/50 flex flex-col items-center justify-center p-2 text-center cursor-pointer shadow-lg hover:bg-green-800/30 transition-all relative"
              >
                <div className="w-full h-4 bg-green-800/50 absolute top-0 rounded-t-md" /> {/* Box art header spine */}
                <span className="font-sans text-xs font-bold text-green-100">{game}</span>
              </motion.div>
            ))}
          </div>
        </div>

      </div>

      <AnimatePresence>
        {selectedShow && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 pointer-events-auto"
          >
            {/* CRT TV Frame */}
            <div className="bg-slate-800 p-8 rounded-[3rem] border-8 border-slate-700 shadow-[0_0_50px_rgba(0,0,0,0.8)] relative">
              {/* Antenna */}
              <div className="absolute -top-12 left-1/2 w-1 h-12 bg-slate-500 rotate-12 origin-bottom" />
              <div className="absolute -top-12 left-1/2 w-1 h-12 bg-slate-500 -rotate-12 origin-bottom" />
              
              <div className="bg-slate-900 p-4 rounded-2xl border-4 border-slate-950 relative overflow-hidden shadow-inner">
                {/* Scanlines */}
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPjxyZWN0IHdpZHRoPSI0IiBoZWlnaHQ9IjIiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiLz48L3N2Zz4=')] opacity-50 z-10 pointer-events-none" />
                
                <div className="w-64 h-48 flex flex-col items-center justify-center text-center p-4 relative z-0">
                  <span className="font-display text-2xl text-blue-300 mb-4 animate-pulse">{selectedShow}</span>
                  <p className="text-slate-400 text-sm italic">"I used to watch this all the time."</p>
                </div>
              </div>

              {/* Dials */}
              <div className="absolute right-4 top-1/2 -translate-y-1/2 flex flex-col gap-4">
                <div className="w-8 h-8 rounded-full bg-slate-700 border-2 border-slate-600 shadow-md" />
                <div className="w-8 h-8 rounded-full bg-slate-700 border-2 border-slate-600 shadow-md" />
              </div>

              <button 
                onClick={() => setSelectedShow(null)}
                className="absolute -bottom-16 left-1/2 -translate-x-1/2 bg-red-500 text-white px-6 py-2 rounded-full font-bold shadow-lg hover:bg-red-400"
              >
                Turn Off
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Backdrop blur for modal */}
      {selectedShow && (
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm z-40" onClick={() => setSelectedShow(null)} />
      )}
    </div>
  );
}
