import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function TVLounge() {
  const [tvOn, setTvOn] = useState(false);
  const [showGames, setShowGames] = useState(false);

  const shows = [
    "Noddy", "Land Before Time", "Fraggle Rock", "Harold and the Purple Crayon", "Boohbah", "Oobi", "Moose and Zee", "Dragon Tales", "Maggie and the Ferocious Beast", "Oswald", "Wow Wow Wubbzy", "Bear in the Big Blue House", "I Spy", "JoJos Circus", "Rolie Polie Olie", "Miss Spiders Sunny Patch", "Doodlebops", "Fresh Beat Band", "Franklin", "Little Bear", "Upside Down Show", "Pinky Dinky Doo", "Charlie and Lola", "Higglytown Heroes", "Fish Hooks", "Maya and Miguel", "Little Bill"
  ];
  
  const games = [
    "Dance Central", "MJ Experience", "Just Dance", "Xbox Kinect Sports", "Xbox Kinect Animal Game", "Toy Story Game", "LEGO Movie Game", "Rayman", "Dora Doll Game"
  ];

  const stars = useMemo(() => Array.from({ length: 30 }).map((_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    size: Math.random() * 3 + 1,
    opacity: Math.random() * 0.7 + 0.3,
    delay: Math.random() * 2,
    duration: Math.random() * 3 + 2,
  })), []);

  return (
    <div className="absolute inset-0 overflow-hidden" style={{ background: "linear-gradient(180deg, #3f2b18 0%, #5c3a21 100%)" }}>
      {/* Ceiling / Sky area */}
      <div className="absolute top-0 left-0 right-0 h-[35%]" style={{ background: "linear-gradient(180deg, #111827 0%, #1f2937 100%)" }}>
        {stars.map(s => (
          <motion.div key={s.id}
            className="absolute rounded-full bg-amber-100"
            style={{ left: s.left, top: s.top, width: s.size, height: s.size, opacity: s.opacity }}
            animate={{ opacity: [s.opacity, 1, s.opacity] }}
            transition={{ duration: s.duration, delay: s.delay, repeat: Infinity }}
          />
        ))}
        {/* Ambient room glow from ceiling */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full" style={{ background: "radial-gradient(ellipse at top, rgba(217,119,6,0.1) 0%, transparent 70%)" }} />
      </div>

      {/* Back Wall */}
      <div className="absolute top-[35%] bottom-[22%] left-0 right-0" style={{ background: "#78350f" }}>
        {/* Wall panels */}
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "repeating-linear-gradient(90deg, transparent 0px, transparent 98px, #451a03 98px, #451a03 100px)" }} />
        
        {/* Tape Shelf (Left Wall) */}
        <div className="absolute top-[20%] left-[5%] w-32 h-64 bg-[#451a03] border-4 border-[#290f01] rounded-sm flex flex-col p-2 shadow-2xl">
          {[0,1,2].map(shelf => (
            <div key={shelf} className="flex-1 border-b-4 border-[#290f01] flex items-end gap-1 pb-1">
              {[0,1,2,3,4].map(t => (
                <div key={t} className="w-4 h-12 rounded-sm border border-black/40" style={{ background: ["#ef4444","#3b82f6","#22c55e","#eab308","#a855f7"][(shelf+t)%5] }} />
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Floor */}
      <div className="absolute bottom-0 left-0 right-0 h-[22%]" style={{ background: "linear-gradient(180deg, #5c3a1e 0%, #3d2410 100%)", borderTop: "3px solid #7a4a2a" }}>
        {[...Array(8)].map((_, i) => (
          <div key={i} className="absolute bottom-0 h-full" style={{ left: `${i * 12.5}%`, width: "12.5%", borderRight: "1px solid rgba(0,0,0,0.3)" }} />
        ))}
      </div>

      {/* CRT TV on Stand */}
      <div className="absolute bottom-[22%] left-1/2 -translate-x-1/2 flex flex-col items-center">
        <div className="w-[300px] h-[220px] bg-[#d1d5db] border-[12px] border-[#9ca3af] rounded-[30px] shadow-[0_10px_30px_rgba(0,0,0,0.6)] p-3 flex relative z-20 cursor-pointer group" onClick={() => setTvOn(!tvOn)}>
          {/* Antennas */}
          <div className="absolute -top-12 left-[30%] w-1.5 h-16 bg-gray-400 origin-bottom rotate-[-25deg] rounded-full border border-gray-500" />
          <div className="absolute -top-12 right-[30%] w-1.5 h-16 bg-gray-400 origin-bottom rotate-[25deg] rounded-full border border-gray-500" />
          
          <div className={`flex-1 bg-black rounded-[20px] border-4 border-gray-800 relative overflow-hidden transition-colors duration-500 ${tvOn ? 'shadow-[0_0_40px_rgba(59,130,246,0.6)]' : ''}`}>
            <div className="absolute inset-0 bg-white/5 rounded-xl pointer-events-none" style={{ boxShadow: 'inset 0 0 15px rgba(0,0,0,0.8)' }} />
            {tvOn && (
              <div className="absolute inset-0 bg-blue-500/20 z-0">
                 <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, black 2px, black 4px)' }} />
                 <div className="w-full h-full flex flex-col items-center justify-center p-2">
                   <div className="text-blue-300 font-display text-lg mb-2">Click to view shows</div>
                 </div>
              </div>
            )}
          </div>
          <div className="w-10 h-full flex flex-col items-center justify-between py-4 pl-2">
            <div className="flex flex-col gap-3">
              <div className="w-6 h-6 rounded-full bg-gray-400 border-b-2 border-gray-500 shadow-sm" />
              <div className="w-6 h-6 rounded-full bg-gray-400 border-b-2 border-gray-500 shadow-sm" />
            </div>
            <div className="w-4 h-10 flex flex-col gap-1">
              {[0,1,2,3].map(i => <div key={i} className="w-full h-1 bg-gray-500 rounded-full" />)}
            </div>
          </div>
        </div>
        <div className="w-[240px] h-10 bg-[#451a03] border-x-4 border-t-4 border-[#290f01] z-10" />
      </div>

      {/* Couch (Foreground) */}
      <div className="absolute bottom-[-5%] left-1/2 -translate-x-1/2 w-[600px] h-32 z-30 flex">
        <div className="w-16 h-full bg-[#b45309] rounded-t-xl border-4 border-[#78350f] shadow-lg" />
        <div className="flex-1 bg-[#d97706] rounded-t-lg border-t-4 border-[#b45309] mt-8 shadow-inner flex px-2 gap-2">
           <div className="flex-1 bg-[#b45309] rounded-t-md shadow-inner opacity-80" />
           <div className="flex-1 bg-[#b45309] rounded-t-md shadow-inner opacity-80" />
           <div className="flex-1 bg-[#b45309] rounded-t-md shadow-inner opacity-80" />
        </div>
        <div className="w-16 h-full bg-[#b45309] rounded-t-xl border-4 border-[#78350f] shadow-lg" />
      </div>

      {/* Floor Lamp (Right Side) */}
      <div className="absolute bottom-[22%] right-[10%] w-12 h-56 flex flex-col items-center z-10">
        <div className="w-20 h-16 bg-amber-200 rounded-t-xl relative shadow-[0_0_40px_rgba(251,191,36,0.8)] border border-amber-300">
           <div className="absolute -top-10 -left-20 -right-20 h-40 bg-amber-500/20 blur-2xl rounded-full" />
        </div>
        <div className="w-2 flex-1 bg-[#451a03]" />
        <div className="w-12 h-3 bg-[#451a03] rounded-t-full" />
      </div>

      {/* Media Overlay */}
      <AnimatePresence>
        {tvOn && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-8"
            onClick={() => setTvOn(false)}
          >
            <div className="bg-[#1f2937] border-4 border-blue-500 rounded-xl w-full max-w-4xl h-[80vh] flex flex-col overflow-hidden shadow-[0_0_50px_rgba(59,130,246,0.3)]" onClick={e => e.stopPropagation()}>
              <div className="bg-blue-600 text-white p-4 flex justify-between items-center font-display text-xl">
                <span>Media Center</span>
                <div className="flex gap-4">
                  <button onClick={() => setShowGames(false)} className={`px-4 py-1 rounded ${!showGames ? 'bg-white text-blue-600' : 'bg-blue-700'}`}>Shows</button>
                  <button onClick={() => setShowGames(true)} className={`px-4 py-1 rounded ${showGames ? 'bg-white text-blue-600' : 'bg-blue-700'}`}>Games</button>
                  <button onClick={() => setTvOn(false)} className="ml-4 text-blue-200 hover:text-white">✕</button>
                </div>
              </div>
              <div className="flex-1 overflow-y-auto p-6 grid grid-cols-2 md:grid-cols-4 gap-4">
                {(showGames ? games : shows).map((title, i) => (
                  <div key={i} className="bg-gray-800 border-2 border-gray-700 rounded-lg p-4 flex flex-col items-center justify-center text-center aspect-video hover:bg-gray-700 hover:border-blue-400 transition-colors cursor-pointer group">
                    <div className="text-white font-bold mb-2 group-hover:text-blue-300">{title}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
