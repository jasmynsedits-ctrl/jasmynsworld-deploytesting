import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ITEMS = [
  { id: "santa", name: "Motorcycle Santa", icon: "🎅", desc: "Bad to the bone." },
  { id: "poppy", name: "Veteran Poppy Pin", icon: "🌺", desc: "Always kept this safe." },
  { id: "freezer", name: "Fake liquid freezer cup", icon: "🥤", desc: "Fascinating technology." },
  { id: "troll", name: "Green troll", icon: "🧌", desc: "Wild hair, don't care." },
  { id: "et", name: "ET clock", icon: "👽", desc: "E.T. phone home." },
  { id: "incense", name: "Alien incense burner", icon: "🛸", desc: "Spooky." },
  { id: "dog", name: "Graduation dog plush", icon: "🐕", desc: "Signed by everyone in Kindergarten." },
  { id: "cabbage", name: "Cabbage patch doll", icon: "👶", desc: "Classic." },
];

export default function MemoryBox({ onClose }: { onClose: () => void }) {
  const [selectedItem, setSelectedItem] = useState<string | null>(null);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="absolute inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-md"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, y: 50 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 50 }}
        className="w-full max-w-3xl bg-[url('https://www.transparenttextures.com/patterns/wood-pattern.png')] bg-[#8b5a2b] p-8 rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] border-[12px] border-[#5c3a21] relative"
        onClick={e => e.stopPropagation()}
      >
        <button 
          onClick={onClose}
          className="absolute -top-6 -right-6 w-12 h-12 bg-red-500 rounded-full border-4 border-white text-white font-bold shadow-lg hover:scale-110 transition-transform"
        >
          X
        </button>

        <h2 className="font-display text-3xl text-amber-100 mb-8 text-center drop-shadow-md">Secret Memory Box 📦</h2>

        <div className="grid grid-cols-4 gap-4 p-4 bg-black/20 rounded-lg shadow-inner min-h-[300px] content-start">
          {ITEMS.map((item) => (
            <motion.div
              key={item.id}
              whileHover={{ scale: 1.1, rotate: [-2, 2, -2, 0] }}
              onClick={() => setSelectedItem(item.id)}
              className="bg-white/10 hover:bg-white/20 p-4 rounded-lg flex flex-col items-center gap-2 cursor-pointer transition-colors"
            >
              <span className="text-4xl drop-shadow-lg">{item.icon}</span>
              <span className="text-xs text-amber-100 text-center font-bold">{item.name}</span>
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {selectedItem && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="absolute inset-0 flex items-center justify-center p-8 bg-black/60 rounded-lg"
              onClick={() => setSelectedItem(null)}
            >
              <div className="bg-[#f4ebd0] p-8 rounded-lg max-w-sm text-center shadow-2xl border-4 border-amber-600" onClick={e => e.stopPropagation()}>
                <span className="text-6xl mb-4 block">{ITEMS.find(i => i.id === selectedItem)?.icon}</span>
                <h3 className="font-display text-2xl text-amber-900 mb-2">{ITEMS.find(i => i.id === selectedItem)?.name}</h3>
                <p className="text-amber-800 font-serif italic">{ITEMS.find(i => i.id === selectedItem)?.desc}</p>
                <button 
                  onClick={() => setSelectedItem(null)}
                  className="mt-6 bg-amber-600 text-white px-6 py-2 rounded font-bold hover:bg-amber-500"
                >
                  Put Back
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
}
