import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function MusicCorner() {
  const records = [
    { title: "Britney Spears", color: "bg-pink-500" },
    { title: "Backstreet Boys", color: "bg-blue-500" },
    { title: "Spice Girls", color: "bg-purple-500" },
    { title: "NSYNC", color: "bg-teal-500" },
    { title: "Destiny's Child", color: "bg-orange-500" },
    { title: "Aaliyah", color: "bg-red-500" },
  ];

  const floatingNotes = useMemo(() => Array.from({ length: 15 }).map((_, i) => ({
    id: i,
    left: `${Math.random() * 80 + 10}%`,
    bottom: `${Math.random() * 40}%`,
    delay: Math.random() * 5,
    duration: 4 + Math.random() * 4
  })), []);

  const fairyLights = useMemo(() => Array.from({ length: 16 }).map((_, i) => ({
    id: i,
    color: ["#ff6fb7", "#ffd700", "#c084fc", "#67e8f9", "#86efac"][i % 5]
  })), []);

  return (
    <div className="absolute inset-0 overflow-hidden" style={{ background: "linear-gradient(180deg, #1e1b4b 0%, #2e1065 100%)" }}>
      {/* Ceiling / Sky area */}
      <div className="absolute top-0 left-0 right-0 h-[35%]" style={{ background: "linear-gradient(180deg, #0f0b29 0%, #1e1b4b 100%)" }}>
        {/* Fairy lights string */}
        <div className="absolute top-10 left-0 right-0 flex justify-around px-8" style={{ zIndex: 2 }}>
          {fairyLights.map((light, i) => (
            <motion.div
              key={light.id}
              className="w-2 h-3 rounded-full"
              style={{ background: light.color, boxShadow: `0 0 8px 2px ${light.color}` }}
              animate={{ opacity: [1, 0.4, 1], scale: [1, 0.9, 1] }}
              transition={{ duration: 1.5 + (i * 0.1), repeat: Infinity, delay: (i * 0.15) }}
            />
          ))}
          {/* String connecting lights */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-white/20 -z-10" style={{ filter: "drop-shadow(0 2px 2px rgba(0,0,0,0.5))" }} />
        </div>
      </div>

      {/* Floating Notes */}
      {floatingNotes.map((note) => (
        <motion.div
          key={note.id}
          className="absolute text-purple-300/40 text-2xl"
          style={{ left: note.left, bottom: note.bottom }}
          animate={{ y: [0, -200], opacity: [0, 0.8, 0], x: [0, Math.random() * 50 - 25] }}
          transition={{ duration: note.duration, delay: note.delay, repeat: Infinity, ease: "linear" }}
        >
          ♪
        </motion.div>
      ))}

      {/* Back Wall */}
      <div className="absolute top-[35%] bottom-[22%] left-0 right-0" style={{ background: "linear-gradient(180deg, #2e1065 0%, #3b0764 100%)" }}>
        {/* Record Shelf (Right Wall) */}
        <div className="absolute top-[10%] right-[10%] w-48 h-32 bg-[#4c1d95] border-4 border-[#3b0764] rounded-sm shadow-2xl flex items-end p-2 gap-2 overflow-hidden">
          {records.map((record, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10 }}
              className={`w-10 h-24 ${record.color} rounded-sm shadow-md border-2 border-white/20 cursor-pointer relative -ml-4 first:ml-0 flex items-center justify-center -rotate-12 transform origin-bottom`}
              title={record.title}
            >
              <div className="absolute w-8 h-8 rounded-full border border-black/20" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Floor */}
      <div className="absolute bottom-0 left-0 right-0 h-[22%]" style={{ background: "linear-gradient(180deg, #5c3a1e 0%, #3d2410 100%)", borderTop: "3px solid #7a4a2a" }}>
        {[...Array(8)].map((_, i) => (
          <div key={i} className="absolute bottom-0 h-full" style={{ left: `${i * 12.5}%`, width: "12.5%", borderRight: "1px solid rgba(0,0,0,0.3)" }} />
        ))}
      </div>

      {/* Record Player & Stand */}
      <div className="absolute bottom-[22%] left-[15%] w-64 h-48 flex flex-col items-center">
        {/* Stand */}
        <div className="absolute bottom-0 w-48 h-32 bg-[#78350f] rounded-t-lg border-4 border-[#451a03] shadow-lg flex flex-col items-center">
           {/* Legs */}
           <div className="absolute -bottom-8 left-4 w-4 h-8 bg-[#451a03]" />
           <div className="absolute -bottom-8 right-4 w-4 h-8 bg-[#451a03]" />
           <div className="w-full h-10 border-b-4 border-[#451a03] flex items-center justify-center gap-2">
             <div className="w-4 h-4 rounded-full bg-amber-600 border border-amber-800" />
             <div className="w-4 h-4 rounded-full bg-amber-600 border border-amber-800" />
           </div>
        </div>

        {/* Record Player */}
        <div className="absolute bottom-32 w-56 h-16 bg-[#a16207] rounded-sm border-4 border-[#713f12] shadow-2xl relative">
          <div className="absolute -bottom-2 w-full h-2 bg-[#713f12]" />
          {/* Lid (open) */}
          <div className="absolute bottom-full w-full h-24 bg-white/20 border-4 border-white/40 rounded-t-lg origin-bottom transform skew-x-12 -z-10" />
          
          {/* Platter & Vinyl */}
          <div className="absolute top-[-10px] left-4 w-40 h-8 bg-gray-300 rounded-[50%] border-2 border-gray-400 flex items-center justify-center z-10 shadow-lg">
             <motion.div 
               animate={{ rotateX: 60, rotateZ: 360 }}
               transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
               className="w-32 h-32 bg-black rounded-full border border-gray-700 relative overflow-hidden"
               style={{ transformStyle: "preserve-3d" }}
             >
               <div className="absolute inset-0 rounded-full border-[2px] border-gray-800 m-2" />
               <div className="absolute inset-0 rounded-full border-[2px] border-gray-800 m-6" />
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-gradient-to-br from-pink-500 to-purple-500 rounded-full border border-pink-700 flex items-center justify-center">
                 <div className="w-1.5 h-1.5 bg-gray-200 rounded-full shadow-inner" />
               </div>
             </motion.div>
          </div>
          
          {/* Tonearm */}
          <div className="absolute top-0 right-4 w-4 h-8 bg-gray-400 rounded-full border border-gray-500 z-20">
            <div className="absolute top-2 left-1 w-2 h-16 bg-gray-300 origin-top rotate-[-45deg] rounded-full border border-gray-400 shadow-md">
              <div className="absolute bottom-0 -left-1 w-4 h-6 bg-gray-500 rounded-sm" />
            </div>
          </div>
        </div>
      </div>

      {/* Speakers */}
      <div className="absolute bottom-[22%] left-[5%] w-16 h-32 bg-gray-800 rounded-sm border-2 border-gray-900 shadow-lg flex flex-col items-center justify-evenly p-2">
        <div className="w-10 h-10 bg-black rounded-full border-2 border-gray-700 shadow-inner" />
        <div className="w-12 h-12 bg-black rounded-full border-2 border-gray-700 shadow-inner" />
      </div>
      
      <div className="absolute bottom-[22%] left-[45%] w-16 h-32 bg-gray-800 rounded-sm border-2 border-gray-900 shadow-lg flex flex-col items-center justify-evenly p-2">
        <div className="w-10 h-10 bg-black rounded-full border-2 border-gray-700 shadow-inner" />
        <div className="w-12 h-12 bg-black rounded-full border-2 border-gray-700 shadow-inner" />
      </div>

    </div>
  );
}
