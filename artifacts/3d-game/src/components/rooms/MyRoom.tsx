import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const TOYS = [
  { id: "bottle", name: "Disappearing Liquid Bottles", desc: "Magic milk and juice." },
  { id: "skeebo", name: "Skeebo Beebo", desc: "My little lime green alien friend." },
  { id: "doodle", name: "Doodle Bear (Purple)", desc: "A purple bear you can draw on!" },
  { id: "fijit", name: "Fijit Friend (Purple)", desc: "A classic interactive robotic toy." },
  { id: "furby", name: "Furby (Orange)", desc: "Classic orange electronic pet." },
  { id: "journal", name: "Password Journal", desc: "Voice-activated secrets locker." },
  { id: "playdoh", name: "Play-Doh Sets", desc: "The smell alone takes me back." },
  { id: "easybake", name: "Easy Bake Oven", desc: "Tiny light-bulb powered cakes." },
  { id: "wagon", name: "Red Wagon", desc: "The original ride on toy." },
  { id: "wand", name: "Alex's Magic Wand", desc: "Aunt Alex brought it from the UK." },
  { id: "remote", name: "iCarly remote", desc: "Random dancing!" },
  { id: "shopkins", name: "Shopkins", desc: "Tiny collectible figures." },
];

export default function MyRoom({ onEnterGameRoom }: { onEnterGameRoom?: () => void }) {
  const [selectedToy, setSelectedToy] = useState<string | null>(null);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  return (
    <div className="relative w-full h-full bg-[#160f24] flex items-center justify-center font-sans text-white p-4">
      <div className="relative w-[1000px] h-[800px] border-4 border-white/20 shadow-2xl overflow-hidden bg-[#160f24]">
        <div 
          className="absolute inset-0 bg-contain bg-center bg-no-repeat opacity-90" 
          style={{ backgroundImage: "url('https://lh3.googleusercontent.com/pw/AP1GczOKuj3oJ2SzDmpzjJlp5lfZhli0nlWcYb-KibxvMCXJpcxbDIKDRezIQeP6OPWsg5mNNk7JSV8eeqt41irWF3coGOpXURFdAfsjLIfOC5LWS9zSOyC9u9VnyQbR8c_y30k2awYBqoSDsqUJZfMbK8REuw=w1035-h947-s-no-gm?authuser=0')" }} 
        />

        {/* Computer Clickable Area - Moved further left */}
        <div 
          className="absolute top-[320px] left-[680px] w-[90px] h-[70px] cursor-pointer z-10 border-2 border-transparent hover:border-white hover:shadow-[0_0_15px_rgba(255,255,255,0.7)] transition-all rounded-lg group" 
          onClick={onEnterGameRoom}
          onMouseEnter={() => setHoveredItem('Computer')} 
          onMouseLeave={() => setHoveredItem(null)}
        >
          <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-black/80 px-2 py-1 rounded text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">Use Computer</div>
        </div>

        {/* Nightstand Clickable Area - Smaller */}
        <div 
          className="absolute top-[510px] left-[135px] w-[80px] h-[80px] cursor-pointer z-10 border-2 border-transparent hover:border-white hover:shadow-[0_0_15px_rgba(255,255,255,0.7)] transition-all rounded-lg group" 
          onClick={() => setSelectedToy('nightstand')}
          onMouseEnter={() => setHoveredItem('Nightstand')} 
          onMouseLeave={() => setHoveredItem(null)}
        >
          <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-black/80 px-2 py-1 rounded text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">Open Drawer</div>
        </div>

        <AnimatePresence>
          {selectedToy && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="absolute inset-0 z-50 bg-black/60 flex items-center justify-center p-8" onClick={() => setSelectedToy(null)}>
              <motion.div initial={{ scale: 0.9, y: 20 }} animate={{ scale: 1, y: 0 }} className="bg-[#2a2a2a] p-6 rounded-xl max-w-2xl w-full border border-white/20 shadow-2xl" onClick={e => e.stopPropagation()}>
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-bold text-white">Toy Collection</h2>
                  <button onClick={() => setSelectedToy(null)} className="text-white/60 hover:text-white">✕</button>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {TOYS.map(toy => (
                    <div key={toy.id} className="p-3 bg-white/5 rounded-lg border border-white/10 hover:bg-white/10 transition-colors">
                      <h3 className="font-semibold text-white">{toy.name}</h3>
                      <p className="text-xs text-white/60">{toy.desc}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-black/40 backdrop-blur-md px-4 py-2 rounded-full border border-white/10">
        <p className="text-sm tracking-widest uppercase">{hoveredItem ? `Exploring: ${hoveredItem}` : 'Explore the Room'}</p>
      </div>
    </div>
  );
}
