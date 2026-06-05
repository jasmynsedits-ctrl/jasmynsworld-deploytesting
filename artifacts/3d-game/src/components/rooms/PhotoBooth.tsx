import { motion } from "framer-motion";
import { useState, useMemo } from "react";

export default function PhotoBooth() {
  const [photoVisible, setPhotoVisible] = useState(false);

  const stars = useMemo(() => Array.from({ length: 30 }).map((_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    size: Math.random() * 4 + 2,
    opacity: Math.random() * 0.5 + 0.5,
    delay: Math.random() * 2,
    duration: Math.random() * 2 + 1,
  })), []);

  return (
    <div className="absolute inset-0 overflow-hidden" style={{ background: "linear-gradient(180deg, #ec4899 0%, #be185d 100%)" }}>
      {/* Ceiling / Sky area */}
      <div className="absolute top-0 left-0 right-0 h-[35%]" style={{ background: "linear-gradient(180deg, #831843 0%, #ec4899 100%)" }}>
        {stars.map(s => (
          <motion.div key={s.id}
            className="absolute rounded-full bg-white"
            style={{ left: s.left, top: s.top, width: s.size, height: s.size, opacity: s.opacity }}
            animate={{ scale: [1, 1.5, 1], rotate: [0, 90, 180] }}
            transition={{ duration: s.duration, delay: s.delay, repeat: Infinity }}
          >
            {/* Star shape via CSS */}
            <div className="absolute inset-0 bg-white" style={{ clipPath: "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)" }} />
          </motion.div>
        ))}
      </div>

      {/* Back Wall */}
      <div className="absolute top-[35%] bottom-[22%] left-0 right-0" style={{ background: "#db2777" }}>
        {/* Star Confetti Wallpaper */}
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "radial-gradient(circle, #fff 2px, transparent 2px)", backgroundSize: "30px 30px" }} />
        
        {/* DVD/Video Shelf (Left Wall) */}
        <div className="absolute top-[15%] left-[5%] w-32 h-64 bg-[#831843] border-4 border-[#4c0519] rounded-sm flex flex-col p-2 shadow-2xl">
          {[0,1,2].map(shelf => (
            <div key={shelf} className="flex-1 border-b-4 border-[#4c0519] flex items-end gap-1 pb-1">
              {[0,1,2,3].map(t => (
                <div key={t} className="w-5 h-14 rounded-sm border border-black/40 cursor-pointer hover:-translate-y-2 transition-transform shadow-md" style={{ background: ["#ef4444","#3b82f6","#22c55e","#eab308"][(shelf+t)%4] }} />
              ))}
            </div>
          ))}
        </div>
        
        {/* Film Strips (Right Wall) */}
        <div className="absolute top-[10%] right-[10%] w-24 h-72 flex flex-col items-center justify-between z-10">
          {[10, -5].map((rot, i) => (
            <motion.div key={i} className="w-full bg-black p-2 rounded shadow-2xl flex flex-col gap-2 relative z-10" style={{ rotate: `${rot}deg` }}
              whileHover={{ scale: 1.05, rotate: 0, zIndex: 30 }}
            >
              <div className="absolute left-1 top-0 bottom-0 flex flex-col justify-between py-2">
                {[...Array(6)].map((_,j) => <div key={j} className="w-1.5 h-1.5 bg-white rounded-full" />)}
              </div>
              <div className="absolute right-1 top-0 bottom-0 flex flex-col justify-between py-2">
                {[...Array(6)].map((_,j) => <div key={j} className="w-1.5 h-1.5 bg-white rounded-full" />)}
              </div>
              <div className="w-16 h-12 bg-gray-300 mx-auto rounded-sm overflow-hidden relative border border-white/20"><div className="absolute inset-0 bg-pink-500/40 mix-blend-overlay" /></div>
              <div className="w-16 h-12 bg-gray-300 mx-auto rounded-sm overflow-hidden relative border border-white/20"><div className="absolute inset-0 bg-blue-500/40 mix-blend-overlay" /></div>
              <div className="w-16 h-12 bg-gray-300 mx-auto rounded-sm overflow-hidden relative border border-white/20"><div className="absolute inset-0 bg-yellow-500/40 mix-blend-overlay" /></div>
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

      {/* Photo Booth Machine */}
      <div className="absolute bottom-[22%] left-1/2 -translate-x-1/2 flex flex-col items-center">
        <motion.div 
          whileHover={{ scale: 1.02 }}
          onClick={() => setPhotoVisible(true)}
          className="w-64 h-96 bg-[#831843] border-[10px] border-[#4c0519] rounded-t-[80px] shadow-[0_20px_50px_rgba(0,0,0,0.6)] flex flex-col items-center p-6 relative cursor-pointer group"
        >
           {/* Camera Lens */}
           <div className="w-16 h-16 bg-black rounded-full border-4 border-gray-300 shadow-inner mb-6 relative">
             <div className="absolute top-2 left-2 w-4 h-4 bg-white/40 rounded-full" />
             <div className="absolute inset-4 rounded-full border border-gray-700" />
           </div>
           
           {/* Curtain/Screen Area */}
           <div className="w-full flex-1 bg-[#fdf2f8] rounded-xl border-4 border-[#9d174d] shadow-inner mb-4 flex items-center justify-center p-4 text-center relative overflow-hidden group-hover:bg-pink-100 transition-colors">
             {/* Curtain folds */}
             <div className="absolute top-0 left-0 w-10 h-full bg-red-800/80 shadow-[5px_0_10px_rgba(0,0,0,0.5)] border-r-4 border-red-900" style={{ borderRadius: "0 0 20px 0" }} />
             <div className="absolute top-0 right-0 w-10 h-full bg-red-800/80 shadow-[-5px_0_10px_rgba(0,0,0,0.5)] border-l-4 border-red-900" style={{ borderRadius: "0 0 0 20px" }} />
             <span className="font-display text-[#831843] text-xl leading-tight z-10 font-bold drop-shadow-sm">Click to<br/>Take Photo!</span>
           </div>

           {/* Photo Slot */}
           <div className="w-32 h-6 bg-black rounded-sm border-2 border-gray-800 relative flex justify-center overflow-hidden">
             {photoVisible && (
               <motion.div 
                 initial={{ y: -30 }} animate={{ y: 20 }}
                 className="w-20 h-32 bg-white absolute top-2 rounded-sm border border-gray-300 flex flex-col items-center p-1 gap-1 shadow-lg"
               >
                 <div className="w-full flex-1 bg-pink-200 border border-gray-300" />
                 <div className="w-full flex-1 bg-pink-300 border border-gray-300" />
                 <div className="w-full flex-1 bg-pink-400 border border-gray-300" />
               </motion.div>
             )}
           </div>
        </motion.div>
      </div>

    </div>
  );
}
