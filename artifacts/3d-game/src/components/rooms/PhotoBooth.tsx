import { motion } from "framer-motion";

export default function PhotoBooth() {
  return (
    <div className="w-full h-full bg-[#fdf2f8] relative overflow-hidden flex flex-col items-center justify-center p-8">
      {/* Star pattern */}
      <div className="absolute inset-0 opacity-30 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#ec4899 2px, transparent 2px)', backgroundSize: '40px 40px' }} />

      <h2 className="font-display text-4xl text-pink-900 z-10 mb-8 bg-white/80 px-8 py-2 rounded-full shadow-sm">Photo Booth</h2>

      <div className="z-10 flex w-full max-w-4xl justify-between items-center px-10">
        
        {/* Filmstrip Left */}
        <motion.div whileHover={{ scale: 1.05, rotate: -5 }} className="w-32 bg-black p-2 rounded shadow-2xl rotate-[-10deg] flex flex-col gap-2">
          {Array.from({length: 3}).map((_, i) => (
             <div key={i} className="w-full aspect-square bg-gray-200 rounded-sm relative overflow-hidden border border-white/20">
               <div className="absolute inset-0 bg-pink-100/50 mix-blend-overlay" />
             </div>
          ))}
        </motion.div>

        {/* Booth Machine */}
        <div className="w-64 h-96 bg-[#db2777] rounded-t-[60px] border-8 border-[#be185d] shadow-[0_20px_50px_rgba(0,0,0,0.4)] flex flex-col items-center p-6 relative">
           <div className="w-12 h-12 bg-black rounded-full border-4 border-gray-300 shadow-inner mb-6 relative">
             <div className="absolute top-2 right-2 w-3 h-3 bg-white/40 rounded-full" />
           </div>
           
           <div className="w-full flex-1 bg-[#fce7f3] rounded-xl border-4 border-[#9d174d] shadow-inner mb-6 flex items-center justify-center p-4 text-center">
             <span className="font-display text-pink-800 text-xl leading-tight">Link Google Photos</span>
           </div>

           <div className="w-32 h-4 bg-black rounded-full opacity-50" /> {/* Photo output slot */}
        </div>

        {/* Filmstrip Right */}
        <motion.div whileHover={{ scale: 1.05, rotate: 5 }} className="w-32 bg-black p-2 rounded shadow-2xl rotate-[10deg] flex flex-col gap-2">
          {Array.from({length: 3}).map((_, i) => (
             <div key={i} className="w-full aspect-square bg-gray-200 rounded-sm relative overflow-hidden border border-white/20">
               <div className="absolute inset-0 bg-pink-100/50 mix-blend-overlay" />
             </div>
          ))}
        </motion.div>

      </div>
    </div>
  );
}
