import { motion } from "framer-motion";

export default function MusicCorner() {
  return (
    <div className="w-full h-full bg-[#1e1025] relative overflow-hidden flex flex-col items-center justify-center p-8">
      {/* Ambient Lights */}
      <div className="absolute top-10 left-1/4 w-32 h-32 bg-purple-500/30 blur-[50px] rounded-full" />
      <div className="absolute bottom-10 right-1/4 w-40 h-40 bg-pink-500/30 blur-[50px] rounded-full" />
      
      {/* Floating Notes */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({length: 15}).map((_, i) => (
           <motion.div
             key={i}
             animate={{ y: [0, -100], opacity: [0, 0.5, 0] }}
             transition={{ duration: 4 + Math.random() * 4, repeat: Infinity, delay: Math.random() * 5 }}
             className="absolute text-purple-300/50 text-2xl font-sans"
             style={{ left: `${Math.random() * 100}%`, top: `${60 + Math.random() * 40}%` }}
           >
             ♪
           </motion.div>
        ))}
      </div>

      <h2 className="font-display text-4xl text-purple-200 z-10 mb-12 drop-shadow-md">Music Corner</h2>

      <div className="z-10 flex flex-col items-center gap-12">
        {/* Record Player */}
        <div className="w-80 h-64 bg-[#5c3a21] border-8 border-[#3d2413] rounded-xl shadow-2xl relative p-4 flex items-center justify-center">
           {/* Platter */}
           <div className="w-48 h-48 bg-gray-800 rounded-full border-4 border-gray-900 shadow-inner flex items-center justify-center relative">
             <motion.div 
               animate={{ rotate: 360 }}
               transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
               className="w-44 h-44 bg-black rounded-full relative overflow-hidden border border-gray-700"
             >
               <div className="absolute inset-0 rounded-full border-[1px] border-white/10 m-2" />
               <div className="absolute inset-0 rounded-full border-[1px] border-white/10 m-6" />
               <div className="absolute inset-0 rounded-full border-[1px] border-white/10 m-10" />
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full flex items-center justify-center">
                 <div className="w-2 h-2 bg-gray-200 rounded-full shadow-inner" />
               </div>
             </motion.div>
           </div>
           
           {/* Tonearm */}
           <div className="absolute top-8 right-6 w-4 h-4 bg-gray-400 rounded-full border-2 border-gray-500 shadow-md">
             <div className="absolute top-2 left-1 w-2 h-24 bg-gray-300 origin-top rotate-[-20deg] rounded-full shadow-md" />
           </div>
        </div>

        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-purple-600 hover:bg-purple-500 text-white px-8 py-3 rounded-full font-bold shadow-[0_0_20px_rgba(147,51,234,0.5)] border-2 border-purple-400 font-sans tracking-wide"
        >
          Open Spotify Playlists
        </motion.button>
      </div>
    </div>
  );
}
