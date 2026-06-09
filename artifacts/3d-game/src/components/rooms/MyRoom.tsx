import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// ── TOY INVENTORY ──
const TOYS = [
  { id: "bottle", name: "Magic Baby Bottle", desc: "The milk disappears when you tilt it." },
  { id: "skeebo", name: "Skeebo Beebo", desc: "My little lime green alien friend." },
  { id: "doodle", name: "Doodle Bear (Purple)", desc: "A purple bear you can draw on!" },
  { id: "fijit", name: "Fijit Friend (Purple)", desc: "Interactive dancing purple friend." },
  { id: "furby", name: "Furby (Orange)", desc: "Classic orange electronic pet." },
  { id: "journal", name: "Password Journal", desc: "Keep your secrets safe with voice recognition." },
  { id: "playdoh", name: "Play-Doh Sets", desc: "Endless creativity with colorful clay." },
  { id: "oven", name: "Easy Bake Oven", desc: "Bake real treats with a lightbulb!" },
  { id: "wagon", name: "Red Wagon", desc: "Classic metal wagon for adventures." },
  { id: "wand", name: "Alex's Wand", desc: "Make magic happen with a flick of the wrist." },
  { id: "remote", name: "Sam's TV Remote", desc: "*insert laugh track*." },
  { id: "shopkins", name: "Shopkins", desc: "Cute little characters from the grocery store." }
];

export default function MyRoom({ onEnterGameRoom }: { onEnterGameRoom?: () => void }) {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [selectedToy, setSelectedToy] = useState<typeof TOYS[0] | null>(null);
  const [computerActive, setComputerActive] = useState(false);

  return (
    <div className="relative w-full h-full bg-[#1b152b] flex items-center justify-center font-sans select-none">
      
      {/* ── CORE VIEWPORT ── */}
      <div className="relative w-[800px] h-[400px] shadow-2xl border-[6px] border-[#2a2f3a] rounded-lg overflow-hidden">
        
        {/* ROOM BASE IMAGE */}
        <img 
          src="https://lh3.googleusercontent.com/pw/AP1GczOKuj3oJ2SzDmpzjJlp5lfZhli0nlWcYb-KibxvMCXJpcxbDIKDRezIQeP6OPWsg5mNNk7JSV8eeqt41irWF3coGOpXURFdAfsjLIfOC5LWS9zSOyC9u9VnyQbR8c_y30k2awYBqoSDsqUJZfMbK8REuw=w1035-h947-s-no-gm?authuser=0" 
          alt="My Childhood Room" 
          className="w-full h-full object-cover pointer-events-none" 
        />

        {/* ── INTERACTIVE OVERLAYS ── */}
        
        {/* 1. Nightstand Toy Drawer (Targeted at nightstand coordinates) */}
        <div 
          className="absolute top-[350px] left-[390px] w-[60px] h-[50px] cursor-pointer group"
          onClick={() => setDrawerOpen(true)}
        >
          <div className="absolute inset-0 bg-cyan-400/0 group-hover:bg-cyan-400/20 transition-all rounded-md shadow-[0_0_0px_rgba(34,211,238,0)] group-hover:shadow-[0_0_15px_rgba(34,211,238,0.5)] border border-transparent group-hover:border-cyan-400/40" />
        </div>

        {/* 2. Computer Screen (Targeted at desk coordinates) */}
        <div 
          className="absolute top-[210px] left-[170px] w-[140px] h-[100px] cursor-pointer group"
          onClick={() => setComputerActive(true)}
        >
          <div className="absolute inset-0 bg-blue-400/0 group-hover:bg-blue-400/20 transition-all rounded-md shadow-[0_0_0px_rgba(96,165,250,0)] group-hover:shadow-[0_0_15px_rgba(96,165,250,0.5)] border border-transparent group-hover:border-blue-400/40" />
        </div>

      </div>

      {/* ── MODALS (Re-used Logic) ── */}
      <AnimatePresence>
        {drawerOpen && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="absolute inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
            <div className="bg-[#ece9d8] p-4 w-[500px] h-[350px] border-4 border-purple-800 rounded shadow-2xl flex flex-col">
              <h2 className="font-bold text-black mb-2">Toy Vault</h2>
              <div className="grid grid-cols-4 gap-2 overflow-auto">
                {TOYS.map(t => (
                  <button key={t.id} onClick={() => setSelectedToy(t)} className="p-2 bg-white border text-[10px]">{t.name}</button>
                ))}
              </div>
              <button onClick={() => setDrawerOpen(false)} className="mt-auto bg-red-600 text-white p-1">Close</button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Navigation */}
      <button onClick={() => window.history.back()} className="absolute top-4 left-4 bg-slate-800 text-white p-2 rounded text-xs shadow-lg">← Back to Map</button>
    </div>
  );
}
