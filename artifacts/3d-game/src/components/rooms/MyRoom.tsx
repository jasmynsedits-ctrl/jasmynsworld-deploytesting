import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// ── TOY INVENTORY ──
const TOYS = [
  { id: "bottle", name: "Magic Baby Bottle", desc: "The milk disappears when you tilt it." },
  { id: "skeebo", name: "Skeebo Beebo", desc: "My little lime green alien friend." },
  { id: "doodle", name: "Doodle Bear (Purple)", desc: "A purple bear you can draw on!" },
  { id: "fijit", name: "Fijit Friend (Purple)", desc: import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// — TOY INVENTORY —
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
];

export default function MyRoom() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [computerActive, setComputerActive] = useState(false);
  const [selectedToy, setSelectedToy] = useState(null);

  const bgUrl = "https://lh3.googleusercontent.com" + "/pw/AP1GczOkuj3oJ2SzDmpzj1p5fZhli0nlwcYb-KibxvMCXJpcxbDIKDRezIQeP6C";

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#1a1c2c] p-4 font-mono text-white">
      <div className="relative w-[800px] h-[400px] shadow-2xl border-[10px] border-[#2d2f3d] rounded-lg overflow-hidden">
        {/* ROOM BASE IMAGE */}
        <img 
          src={bgUrl}
          alt="My Childhood Room"
          className="w-full h-full object-contain pointer-events-none"
        />

        {/* — INTERACTIVE OVERLAYS — */}
        {/* 1. Nightstand Toy Drawer (Targeted at nightstand coordinates) */}
        <div 
          className="absolute top-[345px] left-[385px] w-[70px] h-[55px] cursor-pointer group"
          onClick={() => setDrawerOpen(true)}
        >
          <div className="hidden group-hover:block absolute -top-8 left-1/2 -translate-x-1/2 bg-black/80 px-2 py-1 rounded text-xs whitespace-nowrap">
            Open Toy Drawer
          </div>
        </div>

        {/* 2. Computer (Targeted at desk coordinates) */}
        <div 
          className="absolute top-[210px] left-[540px] w-[140px] h-[110px] cursor-pointer group"
          onClick={() => setComputerActive(true)}
        >
          <div className="hidden group-hover:block absolute -top-8 left-1/2 -translate-x-1/2 bg-black/80 px-2 py-1 rounded text-xs whitespace-nowrap">
            Use Computer
          </div>
        </div>

        {/* — MODALS — */}
        <AnimatePresence>
          {drawerOpen && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="absolute inset-0 bg-black/60 flex items-center justify-center z-10 p-8">
              <div className="bg-[#ece9d8] p-4 w-[500px] h-[350px] border-4 border-purple-800 rounded shadow-2xl flex flex-col">
                <h2 className="font-bold text-black mb-2">Toy Vault</h2>
                <div className="grid grid-cols-4 gap-2 overflow-auto">
                  {TOYS.map(t => (
                    <button key={t.id} onClick={() => setSelectedToy(t)} className="p-2 bg-white border text-[10px] text-black hover:bg-purple-100">
                      {t.name}
                    </button>
                  ))}
                </div>
                <button onClick={() => setDrawerOpen(false)} className="mt-auto bg-red-600 text-white p-1 hover:bg-red-700">close</button>
              </div>
            </motion.div>
          )}

          {computerActive && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="absolute inset-0 bg-black/60 flex items-center justify-center z-10 p-8">
              <div className="bg-[#000080] p-4 w-[500px] h-[350px] border-4 border-[#c0c0c0] rounded shadow-2xl flex flex-col text-white">
                <div className="flex justify-between items-center mb-4 bg-[#c0c0c0] p-1 text-black">
                  <span className="font-bold">Retro PC - Desktop</span>
                  <button onClick={() => setComputerActive(false)} className="bg-[#c0c0c0] border-2 border-white px-2">X</button>
                </div>
                <div className="flex-1 bg-teal-700 p-4 border-inset">
                  <p>Welcome to 2004.</p>
                  <div className="mt-4 grid grid-cols-3 gap-4">
                    <div className="flex flex-col items-center">
                      <div className="w-8 h-8 bg-yellow-400 mb-1"></div>
                      <span className="text-[10px]">My Documents</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="w-8 h-8 bg-blue-400 mb-1"></div>
                      <span className="text-[10px]">Internet Explorer</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Navigation */}
      <div className="mt-8 flex gap-4">
        <button className="px-6 py-2 bg-purple-600 rounded-full hover:bg-purple-500 transition shadow-lg">Go to Living Room</button>
      </div>
    </div>
  );
}"Interactive dancing purple friend." },
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
