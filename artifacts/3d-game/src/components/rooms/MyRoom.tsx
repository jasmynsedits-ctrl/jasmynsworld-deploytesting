import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function MyRoom() {
  const [toyboxOpen, setToyboxOpen] = useState(false);
  const [activeToy, setActiveToy] = useState<string | null>(null);

  const renderToy = (id: string) => {
    switch(id) {
      case 'bottle':
        return (
          <div className="w-16 h-32 bg-white/40 backdrop-blur rounded-full border-2 border-white relative shadow-lg overflow-hidden flex flex-col justify-end">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-8 bg-yellow-200 rounded-t-full border-b border-yellow-300" />
            <div className="w-full h-1/2 bg-white rounded-b-full transition-all duration-1000" />
          </div>
        );
      case 'furby':
        return (
          <div className="w-24 h-24 bg-orange-400 rounded-full relative shadow-lg">
            <div className="absolute -top-4 left-2 w-8 h-10 bg-orange-300 rounded-full rotate-[-30deg]" />
            <div className="absolute -top-4 right-2 w-8 h-10 bg-orange-300 rounded-full rotate-[30deg]" />
            <div className="absolute top-6 left-3 w-8 h-8 bg-white rounded-full flex items-center justify-center border-2 border-gray-300"><div className="w-3 h-3 bg-black rounded-full" /></div>
            <div className="absolute top-6 right-3 w-8 h-8 bg-white rounded-full flex items-center justify-center border-2 border-gray-300"><div className="w-3 h-3 bg-black rounded-full" /></div>
            <div className="absolute top-14 left-1/2 -translate-x-1/2 w-4 h-4 bg-yellow-400 rounded-b-full border-t border-orange-500" />
          </div>
        );
      case 'journal':
        return (
          <div className="w-20 h-28 bg-pink-400 rounded-r-md border-l-8 border-gray-300 relative shadow-md">
            <div className="absolute top-1/2 right-2 w-4 h-6 bg-pink-300 rounded-sm border border-pink-500" />
            {Array.from({length: 8}).map((_, i) => (
              <div key={i} className="absolute left-[-6px] w-2 h-2 bg-gray-400 rounded-full" style={{ top: `${i * 12 + 4}px` }} />
            ))}
          </div>
        );
      default:
        return <div className="w-16 h-16 bg-purple-500 rounded-lg shadow-md" />;
    }
  };

  return (
    <div className="w-full h-full bg-[#e9d5ff] relative overflow-hidden flex items-end">
      {/* Wallpaper Pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#9333ea 2px, transparent 2px)', backgroundSize: '30px 30px' }} />
      
      {/* Floor */}
      <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-[#d97706] border-t-8 border-[#b45309] z-0" />

      {/* Header */}
      <div className="absolute top-0 left-0 right-0 p-8 flex justify-between items-center z-20">
        <h2 className="font-display text-4xl text-purple-900 bg-white/50 px-6 py-2 rounded-full backdrop-blur-md">My Room</h2>
      </div>

      <div className="w-full h-full relative z-10 flex items-end justify-between px-20 pb-16">
        
        {/* Toybox */}
        <div className="relative">
          <motion.div 
            className="w-64 h-48 bg-[#8b5a2b] border-8 border-[#5c3a21] rounded-lg shadow-[20px_20px_30px_rgba(0,0,0,0.3)] relative z-20 cursor-pointer"
            onClick={() => setToyboxOpen(!toyboxOpen)}
          >
            {/* Latch */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-12 bg-yellow-600 rounded-b-md shadow-md" />
            
            {/* Lid */}
            <motion.div 
              animate={{ rotateX: toyboxOpen ? -110 : 0 }}
              transition={{ duration: 0.5, type: "spring" }}
              className="absolute -top-2 -left-2 -right-2 h-16 bg-[#a16630] border-4 border-[#5c3a21] rounded-t-xl origin-bottom"
            />
          </motion.div>

          <AnimatePresence>
            {toyboxOpen && (
              <motion.div 
                initial={{ opacity: 0, y: 50, scale: 0.5 }}
                animate={{ opacity: 1, y: -100, scale: 1 }}
                exit={{ opacity: 0, scale: 0.5 }}
                className="absolute -top-48 left-1/2 -translate-x-1/2 w-80 bg-white/90 backdrop-blur-md p-6 rounded-xl shadow-2xl border-4 border-pink-300 z-30 flex gap-4 overflow-x-auto"
              >
                <div onClick={() => setActiveToy('bottle')} className="cursor-pointer hover:scale-110 transition-transform">{renderToy('bottle')}</div>
                <div onClick={() => setActiveToy('furby')} className="cursor-pointer hover:scale-110 transition-transform">{renderToy('furby')}</div>
                <div onClick={() => setActiveToy('journal')} className="cursor-pointer hover:scale-110 transition-transform">{renderToy('journal')}</div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Desk & PC */}
        <div className="relative mb-24">
          <div className="w-80 h-16 bg-[#e5e7eb] border-b-8 border-[#d1d5db] shadow-xl absolute -bottom-16 -left-8 rounded-sm z-0" /> {/* Desk surface */}
          
          <div className="w-48 h-40 bg-[#f3f4f6] border-8 border-[#e5e7eb] rounded-xl shadow-2xl relative z-10 flex flex-col p-2">
            {/* Screen */}
            <div className="flex-1 bg-black rounded-lg overflow-hidden border-4 border-gray-800 relative">
              <div className="absolute inset-0 bg-gradient-to-b from-blue-300 to-green-400" />
              <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-green-500 rounded-t-[50%]" />
              <div className="absolute top-4 left-4 w-8 h-4 bg-white/80 rounded-full blur-[1px]" />
              
              {/* Taskbar */}
              <div className="absolute bottom-0 left-0 right-0 h-4 bg-blue-600 flex items-center px-1">
                 <div className="h-3 px-2 bg-green-500 rounded-sm text-[6px] text-white font-bold flex items-center shadow-inner">start</div>
              </div>
            </div>
          </div>
          {/* PC Stand */}
          <div className="w-16 h-8 bg-[#d1d5db] mx-auto z-0" />
          <div className="w-32 h-4 bg-[#9ca3af] mx-auto rounded-t-lg z-0" />
        </div>

      </div>
    </div>
  );
}
