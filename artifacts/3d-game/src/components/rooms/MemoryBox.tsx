import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ITEMS = [
  {
    id: "santa",
    name: "Motorcycle Santa",
    desc: "Bad to the bone. He rode a tiny bike and I was obsessed with him.",
    render: () => (
      <div className="relative w-24 h-24 flex items-end justify-center">
        {/* Bike wheels */}
        <div className="absolute bottom-1 left-2 w-10 h-10 border-4 border-gray-700 rounded-full" />
        <div className="absolute bottom-1 right-2 w-10 h-10 border-4 border-gray-700 rounded-full" />
        {/* Bike frame */}
        <div className="absolute bottom-5 left-7 right-7 h-1.5 bg-red-500 rounded" />
        <div className="absolute bottom-5 left-10 w-1 h-6 bg-red-500 rounded" />
        {/* Santa */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
          <div className="w-8 h-8 bg-[#fcd5b5] rounded-full border-2 border-[#f0b090] relative">
            <div className="absolute -top-4 left-0 right-0 h-5 bg-red-500 rounded-t-full" />
            <div className="absolute -top-1 left-0 right-0 h-1.5 bg-white rounded-full" />
            <div className="absolute bottom-0 left-1 right-1 h-3 bg-white rounded-b-full" /> {/* beard */}
          </div>
          <div className="w-8 h-6 bg-red-500 rounded-b-md border-x border-red-700" />
        </div>
      </div>
    ),
  },
  {
    id: "poppy",
    name: "Veteran Poppy Pin",
    desc: "Always kept this safe. A little red poppy from a veteran.",
    render: () => (
      <div className="relative w-20 h-24 flex flex-col items-center justify-center gap-2">
        {/* Petals */}
        <div className="relative w-16 h-16">
          {[0,90,180,270].map(deg => (
            <div key={deg} className="absolute w-7 h-7 bg-red-500 rounded-full border border-red-700 shadow"
              style={{ top: "50%", left: "50%", transform: `rotate(${deg}deg) translateY(-60%) translate(-50%,-50%)` }}
            />
          ))}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-5 h-5 bg-black rounded-full border-2 border-gray-700" />
          </div>
        </div>
        {/* Pin stem */}
        <div className="w-0.5 h-6 bg-gray-400 rounded-full" />
        <div className="w-4 h-1 bg-gray-300 rounded-full" />
      </div>
    ),
  },
  {
    id: "freezer",
    name: "Fake Liquid Freezer Cup",
    desc: "Fascinating technology — the liquid looked real but never spilled. I tried to drink it once.",
    render: () => (
      <div className="relative w-16 h-28 flex flex-col items-center">
        {/* Cup */}
        <div className="w-14 h-24 relative" style={{ clipPath: "polygon(10% 0%, 90% 0%, 100% 100%, 0% 100%)" }}>
          <div className="absolute inset-0 bg-white/30 border-2 border-white/60 backdrop-blur-sm" />
          {/* Fake liquid */}
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-blue-400/70 to-cyan-200/40 rounded-b" />
          {/* Condensation drops */}
          {[20,50,75,35,60].map((x,i) => (
            <div key={i} className="absolute w-1 h-2 bg-white/40 rounded-full" style={{ left: `${x}%`, top: `${15+i*10}%` }} />
          ))}
        </div>
        <div className="w-14 h-1.5 bg-white/50 rounded-full mt-0.5" />
      </div>
    ),
  },
  {
    id: "troll",
    name: "Green Troll",
    desc: "Wild hair, don't care. Those gems in his belly were mesmerizing.",
    render: () => (
      <div className="relative w-16 h-28 flex flex-col items-center">
        {/* Wild hair */}
        <div className="relative w-14 h-12 flex items-end justify-center overflow-visible">
          {[-30,-15,0,15,30].map((rot,i) => (
            <div key={i} className="absolute w-3 h-10 bg-orange-400 rounded-full origin-bottom"
              style={{ transform: `rotate(${rot}deg)`, bottom: 0, left: `${10+i*15}%` }}
            />
          ))}
        </div>
        {/* Head */}
        <div className="w-14 h-14 bg-green-400 rounded-full border-2 border-green-600 relative flex items-center justify-center">
          <div className="absolute top-3 left-3 w-3 h-3 bg-white rounded-full" />
          <div className="absolute top-3 right-3 w-3 h-3 bg-white rounded-full" />
          <div className="absolute top-4 left-3.5 w-1.5 h-1.5 bg-black rounded-full" />
          <div className="absolute top-4 right-3.5 w-1.5 h-1.5 bg-black rounded-full" />
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 w-5 h-2 border-b-2 border-green-700 rounded-b-full" />
        </div>
        {/* Body */}
        <div className="w-12 h-8 bg-green-500 rounded-b-xl border-2 border-green-600 flex items-center justify-center">
          <div className="w-5 h-5 bg-pink-300 rounded-full border border-pink-400 shadow" />
        </div>
      </div>
    ),
  },
  {
    id: "et",
    name: "ET Clock",
    desc: "E.T. phone home. His glowing finger pointed at the hours.",
    render: () => (
      <div className="relative w-24 h-24 flex items-center justify-center">
        {/* Clock face */}
        <div className="w-20 h-20 bg-[#c8b8a2] rounded-full border-4 border-[#8b7355] shadow-lg relative flex items-center justify-center">
          {/* Clock hands */}
          <div className="absolute w-0.5 h-7 bg-gray-800 rounded origin-bottom" style={{ bottom: "50%", transform: "rotate(-30deg)", transformOrigin: "bottom center" }} />
          <div className="absolute w-0.5 h-5 bg-gray-600 rounded origin-bottom" style={{ bottom: "50%", transform: "rotate(60deg)", transformOrigin: "bottom center" }} />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-2 h-2 bg-gray-800 rounded-full" />
          </div>
          {/* ET finger */}
          <div className="absolute -right-5 top-3 flex flex-col items-end">
            <div className="w-6 h-2 bg-[#c8b8a2] rounded-full border border-[#8b7355]" />
            <div className="w-3 h-2 bg-red-400 rounded-full shadow-[0_0_6px_2px_rgba(239,68,68,0.7)] ml-3" />
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "incense",
    name: "Alien Incense Burner",
    desc: "A little grey alien who puffed smoke from his head. Spooky but cool.",
    render: () => (
      <div className="relative w-20 h-28 flex flex-col items-center">
        {/* Smoke wisps */}
        {[0,1,2].map(i => (
          <motion.div key={i} animate={{ y: [-5,-20], opacity: [0.6,0] }} transition={{ repeat: Infinity, duration: 1.5, delay: i*0.4 }}
            className="absolute top-0 w-2 h-6 bg-white/40 rounded-full blur-sm"
            style={{ left: `${30+i*20}%` }}
          />
        ))}
        {/* Big alien head */}
        <div className="w-20 h-16 bg-gray-400 rounded-[50%] border-2 border-gray-500 relative flex items-center justify-center mt-4">
          <div className="absolute top-4 left-3 w-6 h-5 bg-black/80 rounded-full rotate-[-10deg]" />
          <div className="absolute top-4 right-3 w-6 h-5 bg-black/80 rounded-full rotate-[10deg]" />
          {/* Nostril slits */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1">
            <div className="w-1 h-2 bg-gray-500 rounded-full" />
            <div className="w-1 h-2 bg-gray-500 rounded-full" />
          </div>
        </div>
        {/* Body/base */}
        <div className="w-12 h-8 bg-gray-500 rounded-b-xl border-2 border-gray-600" />
      </div>
    ),
  },
  {
    id: "dog",
    name: "Graduation Dog Plush",
    desc: "Signed by everyone in Kindergarten. Still have it. The signatures have faded but I remember.",
    render: () => (
      <div className="relative w-20 h-24 flex flex-col items-center">
        {/* Grad cap */}
        <div className="relative w-16 h-4 z-10">
          <div className="absolute inset-0 bg-black rounded" />
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-10 h-4 bg-black rounded-sm" />
          <div className="absolute -top-1 right-2 w-4 h-4 flex items-end">
            <div className="w-px h-4 bg-yellow-400" />
            <div className="w-3 h-3 bg-yellow-400 rounded-full ml-0" />
          </div>
        </div>
        {/* Dog head */}
        <div className="w-16 h-16 bg-[#d4a574] rounded-full border-2 border-[#b8864e] relative flex items-center justify-center">
          {/* Ears */}
          <div className="absolute -left-2 top-2 w-6 h-10 bg-[#c4956a] rounded-full border border-[#b8864e]" />
          <div className="absolute -right-2 top-2 w-6 h-10 bg-[#c4956a] rounded-full border border-[#b8864e]" />
          {/* Eyes */}
          <div className="absolute top-4 left-3 w-3 h-3 bg-black rounded-full" />
          <div className="absolute top-4 right-3 w-3 h-3 bg-black rounded-full" />
          {/* Snout */}
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 w-8 h-5 bg-[#c4956a] rounded-full border border-[#b8864e] flex items-center justify-center">
            <div className="w-4 h-2 bg-[#e8b4a0] rounded-full" />
          </div>
        </div>
        {/* Signature lines */}
        <div className="absolute bottom-0 left-2 right-2 flex flex-col gap-0.5 opacity-40">
          <div className="h-px bg-gray-600 w-8 ml-2 rotate-3" />
          <div className="h-px bg-gray-600 w-6 ml-4 -rotate-2" />
        </div>
      </div>
    ),
  },
  {
    id: "cabbage",
    name: "Cabbage Patch Doll",
    desc: "Classic. Chubby cheeks, yarn hair, adoption certificate and all.",
    render: () => (
      <div className="relative w-20 h-28 flex flex-col items-center gap-1">
        {/* Yarn hair */}
        <div className="flex gap-0.5 mb-0">
          {Array.from({length:8}).map((_,i) => (
            <div key={i} className="w-2 h-6 bg-yellow-600 rounded-full" style={{ transform: `rotate(${(i-3.5)*5}deg)` }} />
          ))}
        </div>
        {/* Head */}
        <div className="w-18 h-18 bg-[#fcd5b5] rounded-full border-2 border-[#f0b090] relative" style={{ width: 72, height: 72 }}>
          {/* Chubby cheeks */}
          <div className="absolute top-8 left-1 w-8 h-6 bg-[#f8c5a5]/60 rounded-full" />
          <div className="absolute top-8 right-1 w-8 h-6 bg-[#f8c5a5]/60 rounded-full" />
          {/* Eyes */}
          <div className="absolute top-5 left-4 w-4 h-4 bg-blue-600 rounded-full border border-blue-800 flex items-center justify-center">
            <div className="w-2 h-2 bg-black rounded-full" />
          </div>
          <div className="absolute top-5 right-4 w-4 h-4 bg-blue-600 rounded-full border border-blue-800 flex items-center justify-center">
            <div className="w-2 h-2 bg-black rounded-full" />
          </div>
          {/* Nose */}
          <div className="absolute top-10 left-1/2 -translate-x-1/2 w-2 h-1 bg-[#f0a080] rounded-full" />
          {/* Smile */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-10 h-4 border-b-2 border-[#d07050] rounded-b-full" />
        </div>
        {/* Body */}
        <div className="w-16 h-10 bg-pink-300 rounded-b-xl border-2 border-pink-400" />
      </div>
    ),
  },
];

export default function MemoryBox({ onClose }: { onClose: () => void }) {
  const [selectedItem, setSelectedItem] = useState<string | null>(null);
  const activeItem = ITEMS.find(i => i.id === selectedItem);

  return (
    <motion.div
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      className="absolute inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ y: 50, scale: 0.9 }} animate={{ y: 0, scale: 1 }} exit={{ y: 50, scale: 0.9 }}
        className="w-full max-w-4xl bg-[#8b5a2b] rounded-xl border-[12px] border-[#5c3a21] shadow-2xl relative flex flex-col p-6"
        style={{ maxHeight: "90vh" }}
        onClick={e => e.stopPropagation()}
      >
        <button onClick={onClose} className="absolute -top-6 -right-6 w-12 h-12 bg-red-600 rounded-full border-4 border-white text-white font-bold shadow-lg hover:bg-red-500 z-10">✕</button>

        <h2 className="font-display text-3xl text-amber-100 mb-4 text-center drop-shadow-md">Secret Memory Box ✨</h2>

        {/* Wood grain */}
        {[30,60,90,120].map(y => (
          <div key={y} className="absolute left-0 right-0 h-px bg-black/10 pointer-events-none" style={{ top: y }} />
        ))}

        <div className="grid grid-cols-4 gap-4 bg-black/20 rounded-xl p-4 shadow-inner overflow-y-auto">
          {ITEMS.map(item => (
            <motion.div
              key={item.id}
              whileHover={{ scale: 1.05, y: -4 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedItem(item.id)}
              className="bg-white/10 hover:bg-white/20 rounded-xl p-3 flex flex-col items-center gap-2 cursor-pointer transition-colors border-2 border-white/10 hover:border-white/30"
            >
              <div className="flex items-end justify-center h-24">
                {item.render()}
              </div>
              <span className="text-xs text-amber-100 font-bold text-center leading-tight">{item.name}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Item detail */}
      <AnimatePresence>
        {selectedItem && activeItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 z-60 flex items-center justify-center"
            onClick={() => setSelectedItem(null)}
          >
            <motion.div
              initial={{ scale: 0.85, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.85, y: 20 }}
              className="bg-[#fef3c7] border-4 border-amber-500 rounded-2xl shadow-2xl p-8 max-w-xs w-full flex flex-col items-center gap-4"
              onClick={e => e.stopPropagation()}
            >
              <div className="flex items-end justify-center h-28">
                {activeItem.render()}
              </div>
              <h3 className="font-display text-xl text-amber-900 text-center">{activeItem.name}</h3>
              <p className="text-amber-700 italic text-center text-sm leading-relaxed">"{activeItem.desc}"</p>
              <button onClick={() => setSelectedItem(null)} className="bg-amber-600 hover:bg-amber-500 text-white px-6 py-2 rounded-full font-bold shadow transition-colors">
                Put Back
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
