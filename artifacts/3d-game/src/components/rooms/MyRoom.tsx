import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const TOYS = [
  { id: "bottle", name: "Disappearing Liquid Bottles",
  { id: "skeebo", name: "Skeebo Beebo",
  { id: "doodle", name: "Doodle Bear (Purple)",
  { id: "fijit", name: "Fijit Friend (Purple)",
  { id: "furby", name: "Furby (Orange)",
  { id: "journal", name: "Password Journal",
  { id: "playdoh", name: "Play-Doh Sets",
  { id: "easybake", name: "Easy Bake Oven",
  { id: "wagon", name: "Red Wagon",
  { id: "wand", name: "Alex's Magic Wand",
  { id: "remote", name: "iCarly remote",
  { id: "shopkins", name: "Shopkins",
];

export default function MyRoom({ onEnterGameRoom }: { onEnterGameRoom?: () => void }) {
  const [selectedToy, setSelectedToy] = useState<string | null>(null);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  return (
    <div className="relative w-full h-full bg-[#160f24] flex items-center justify-center font-sans text-white p-4">
      <div className="relative w-[1000px] h-[800px] border-4 border-white/20 shadow-2xl overflow-hidden bg-[#160f24]">
        <div 
          className="absolute inset-0 bg-contain bg-center bg-no-repeat opacity-90" 
          style={{ backgroundImage: "url('https://lh3.googleusercontent.com/pw/AP1GczNqdMwbbKVtKjjz32kkKDPmv3-_vFAs6V3D3sAyxtmM5GI1Wu7EkxVYCuaTRKfyKHYYcntUUUdLFFE7yZHrFZ2bY39nmK0klkQpmm8mFd-Ku_l2iXiEoICJHIwJlnP9awy1quFuQ9uBFrHjjQSTjGWlDg=w1350-h900-s-no-gm" }} 
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
