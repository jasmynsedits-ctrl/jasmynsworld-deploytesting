import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function MemoryBox({ onClose }: { onClose: () => void }) {
  const [selectedItem, setSelectedItem] = useState<string | null>(null);

  const items = [
    { id: "poppy", name: "Poppy Pin" },
    { id: "troll", name: "Green Troll" },
    { id: "cup", name: "Freezer Cup" },
    { id: "alien", name: "Alien Head" }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      className="absolute inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-8"
      onClick={onClose}
    >
      <motion.div
        initial={{ y: 50, scale: 0.9 }} animate={{ y: 0, scale: 1 }} exit={{ y: 50, scale: 0.9 }}
        className="w-full max-w-3xl h-[500px] bg-[#8b5a2b] rounded-xl border-[16px] border-[#5c3a21] shadow-2xl relative flex flex-col items-center p-8"
        onClick={e => e.stopPropagation()}
      >
        <button onClick={onClose} className="absolute -top-8 -right-8 w-12 h-12 bg-red-600 rounded-full border-4 border-white text-white font-bold shadow-lg hover:bg-red-500">X</button>
        
        <h2 className="font-display text-4xl text-amber-100 mb-8 drop-shadow-md">Secret Memory Box</h2>

        <div className="flex-1 w-full bg-black/30 rounded-lg shadow-inner p-6 flex flex-wrap gap-8 justify-center content-start">
           {items.map(item => (
             <motion.div 
               key={item.id}
               whileHover={{ scale: 1.1 }}
               onClick={() => setSelectedItem(item.id)}
               className="w-24 h-24 bg-white/10 rounded-xl border-2 border-white/20 flex flex-col items-center justify-center cursor-pointer hover:bg-white/20 transition-colors gap-2"
             >
               <div className="w-12 h-12 bg-amber-500/50 rounded-full flex items-center justify-center text-xs text-white font-bold text-center leading-tight">CSS<br/>Shape</div>
             </motion.div>
           ))}
        </div>

        <AnimatePresence>
          {selectedItem && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.8 }}
              className="absolute inset-0 bg-black/80 rounded-lg flex items-center justify-center p-12"
              onClick={() => setSelectedItem(null)}
            >
              <div className="bg-[#f4ebd0] p-8 rounded-xl border-4 border-amber-600 max-w-sm w-full text-center" onClick={e => e.stopPropagation()}>
                 <div className="w-32 h-32 bg-amber-200 mx-auto rounded-xl mb-6 flex items-center justify-center border-2 border-amber-400">
                    <span className="text-amber-800 font-bold">Illustrated Item</span>
                 </div>
                 <h3 className="font-display text-2xl text-amber-900 mb-2">{items.find(i => i.id === selectedItem)?.name}</h3>
                 <p className="text-amber-700 italic font-serif mb-6">A treasured memory from childhood.</p>
                 <button onClick={() => setSelectedItem(null)} className="bg-amber-600 text-white px-6 py-2 rounded font-bold">Put Back</button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </motion.div>
    </motion.div>
  );
}
