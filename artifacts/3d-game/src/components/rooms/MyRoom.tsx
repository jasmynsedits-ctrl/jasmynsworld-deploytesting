import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// ── TOY INVENTORY (PRESERVED FROM ORIGINAL) ──
const TOYS = [
  { id: "bottle", name: "Magic Baby Bottle", desc: "The milk disappears when you tilt it." },
  { id: "jojos circus skeebo figure", name: "Skeebo Beebo", desc: "My little lime green alien friend." },
  { id: "doodle", name: "Doodle Bear (Purple)", desc: "A purple bear you can draw on!" },
  { id: "fijit", name: "Fijit Friend (Purple)", desc: "Interactive dancing purple friend." },
  { id: "furby", name: "Furby (Orange)", desc: "Classic orange electronic pet." },
  { id: "journal", name: "Password Journal", desc: "Keep your secrets safe with voice recognition." },
  { id: "playdoh", name: "Play-Doh Sets", desc: "Endless creativity with colorful clay." },
  { id: "oven", name: "Easy Bake Oven", desc: "Bake real treats with a lightbulb!" },
  { id: "radio flyer tricycle", name: "Red Tricycle", desc: "Classic toddler ride." },
  { id: "wizards of waverly place wand", name: "Alex's Wand", desc: "Make magic happen with a flick of the wrist." },
  { id: "icarly remote", name: "Sam's TV Remote", desc: "*insert laugh track*." },
  { id: "shopkins", name: "Shopkins", desc: "Cute little characters from the grocery store." }
];

export default function MyRoom({ onEnterGameRoom }: { onEnterGameRoom?: () => void }) {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [selectedToy, setSelectedToy] = useState<typeof TOYS[0] | null>(null);
  const [computerActive, setComputerActive] = useState(false);

  return (
    <div className="relative w-full h-full bg-[#fce4ec] flex items-center justify-center overflow-hidden font-sans select-none">
      {/* ── CORE GAME WINDOW (800x600 Fixed Aspect Ratio) ── */}
      <div className="relative w-[800px] h-[600px] bg-[#1e222b] shadow-2xl overflow-hidden border-[6px] border-[#2a2f3a] rounded-lg">
        
        {/* Layer 1: Flat Base Isometric Room Art */}
        <img
          src="https://images.prodia.xyz/00000000-0000-0000-0000-000000000000.png" /* Replace with your absolute deployment URL path when uploaded to your project structure */
          alt="Childhood Room Base"
          className="w-full h-full object-cover pointer-events-none"
        />

        {/* ── LAYER 2: INTERACTIVE POP-OUT ELEMENT HOVERS ── */}

        {/* Clickable Glowing Toy Drawer Hotspot */}
        <div 
          className="absolute top-[310px] left-[510px] w-[95px] h-[75px] group cursor-pointer z-10"
          onClick={() => setDrawerOpen(true)}
        >
          {/* Cyan Vector Overlay Glow simulating game pathfinding highlights */}
          <div className="absolute inset-0 bg-cyan-400/0 group-hover:bg-cyan-400/20 rounded-md transition-all duration-300 shadow-[0_0_0px_rgba(34,211,238,0)] group-hover:shadow-[0_0_20px_rgba(34,211,238,0.6)] border border-transparent group-hover:border-cyan-400/50" />
          
          {/* Tooltip Popup Anchor */}
          <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-slate-900/90 text-cyan-300 border border-cyan-500/40 text-[10px] font-mono px-2 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-md pointer-events-none">
            OPEN DRAWER
          </div>
        </div>

        {/* Clickable Glowing Desktop Computer Hotspot */}
        <div 
          className="absolute top-[245px] left-[615px] w-[90px] h-[80px] group cursor-pointer z-10"
          onClick={() => setComputerActive(true)}
        >
          {/* Cyberpunk Blue interface flash overlay */}
          <div className="absolute inset-0 bg-blue-400/0 group-hover:bg-blue-400/20 rounded-md transition-all duration-300 shadow-[0_0_0px_rgba(96,165,250,0)] group-hover:shadow-[0_0_20px_rgba(96,165,250,0.6)] border border-transparent group-hover:border-blue-400/50" />
          
          <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-slate-900/90 text-blue-300 border border-blue-500/40 text-[10px] font-mono px-2 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-md pointer-events-none">
            BOOT COMPUTER
          </div>
        </div>

        {/* ── LAYER 3: MODALS AND INTERFACE SCREENS ── */}

        {/* TOY DRAWER INVENTORY POP-OUT SCREEN */}
        <AnimatePresence>
          {drawerOpen && (
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="absolute inset-0 bg-slate-950/70 backdrop-blur-sm z-30 flex items-center justify-center p-6"
            >
              <div className="w-[550px] h-[420px] bg-gradient-to-b from-[#2e1f4d] to-[#160f29] border-2 border-purple-500/40 rounded-xl p-4 flex flex-col shadow-[0_0_30px_rgba(147,51,234,0.3)]">
                <div className="flex items-center justify-between pb-2 border-b border-purple-500/20">
                  <h3 className="text-purple-300 font-mono text-sm font-bold tracking-wider">🧸 TOY DRAWER COLLECTION</h3>
                  <button 
                    onClick={() => { setDrawerOpen(false); setSelectedToy(null); }}
                    className="text-purple-400 hover:text-purple-200 text-xs font-mono bg-purple-950/40 px-2 py-1 rounded border border-purple-500/20"
                  >
                    [CLOSE]
                  </button>
                </div>

                <div className="flex flex-1 gap-4 pt-4 overflow-hidden">
                  {/* Grid Left */}
                  <div className="w-1/2 grid grid-cols-3 gap-2 overflow-y-auto pr-1 max-h-[330px] scrollbar-thin">
                    {TOYS.map((toy) => (
                      <button
                        key={toy.id}
                        onClick={() => setSelectedToy(toy)}
                        className={`p-2 rounded border flex flex-col items-center justify-center text-center gap-1.5 aspect-square transition-all ${
                          selectedToy?.id === toy.id 
                            ? "bg-purple-600/30 border-purple-400 shadow-[0_0_10px_rgba(168,85,247,0.4)]" 
                            : "bg-purple-950/20 border-purple-900/50 hover:border-purple-700/80"
                        }`}
                      >
                        <span className="text-xl">✨</span>
                        <span className="text-[10px] text-purple-200 font-bold leading-tight truncate w-full px-1">{toy.name}</span>
                      </button>
                    ))}
                  </div>

                  {/* Inspector Panel Right */}
                  <div className="w-1/2 bg-purple-950/30 border border-purple-900/60 rounded-lg p-4 flex flex-col items-center justify-center text-center">
                    {selectedToy ? (
                      <motion.div initial={{ opacity: 0, y: 5 }} animate={{ opacity: 1, y: 0 }} className="flex flex-col items-center">
                        <div className="w-16 h-16 bg-gradient-to-tr from-purple-600 to-pink-500 rounded-full flex items-center justify-center text-2xl shadow-inner mb-3">
                          🔮
                        </div>
                        <h4 className="text-purple-100 font-bold text-sm mb-1">{selectedToy.name}</h4>
                        <p className="text-purple-300/80 text-xs italic px-2 leading-relaxed">{selectedToy.desc}</p>
                      </motion.div>
                    ) : (
                      <span className="text-purple-400/50 font-mono text-[11px] italic">Select a toy to view details</span>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* FAKE COMPUTER OS WINDOW POP-OUT (Direct Port from GameRoom.tsx) */}
        <AnimatePresence>
          {computerActive && (
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="absolute inset-0 bg-slate-950/60 backdrop-blur-xs z-30 flex items-center justify-center"
            >
              <div className="w-[620px] h-[440px] bg-[#ece9d8] flex flex-col border-[3px] border-[#0055e5] rounded-t-lg shadow-2xl font-mono text-xs select-none">
                {/* Windows XP style Header Bar */}
                <div className="flex items-center justify-between px-2 py-1 bg-gradient-to-r from-[#0b3394] to-[#1250d4] h-7 shrink-0">
                  <span className="text-white font-bold text-[11px]">💻 scripts/lamp_logic.js — Internet Explorer</span>
                  <button 
                    onClick={() => setComputerActive(false)}
                    className="w-5 h-5 bg-gradient-to-b from-[#e05] to-[#b00] border border-black/30 text-white rounded-sm text-[9px] font-bold flex items-center justify-center hover:brightness-110"
                  >
                    ✕
                  </button>
                </div>

                {/* Simulated Content Area */}
                <div className="flex-1 bg-white p-3 font-mono text-[11px] text-emerald-700 overflow-y-auto leading-relaxed">
                  <p className="text-gray-400 font-sans italic mb-2">// Project Nostalgia Sandbox Initialized</p>
                  <p><span className="text-blue-600 font-bold">import</span> &#123; activeRoom, triggerGlow &#125; <span className="text-blue-600 font-bold">from</span> <span className="text-amber-700">"../core/world"</span>;</p>
                  <p><span className="text-blue-600 font-bold">const</span> CONFIG_DECAL = <span className="text-purple-600">"CHILDHOOD_REMIX"</span>;</p>
                  <br />
                  <p><span className="text-blue-600 font-bold">function</span> <span className="text-yellow-600">initRoomDecals</span>() &#123;</p>
                  <p className="pl-4">console.log(<span className="text-amber-700">"Rendering active neon material matrix..."</span>);</p>
                  <p className="pl-4">object.place(LAMP, grid_pos(3,2));</p>
                  <p className="pl-4">bed.set_texture(FABRIC_01);</p>
                  <p>&#125;</p>
                  <br />
                  <p className="text-gray-400 font-sans italic">// Dynamic variables monitoring coordinates</p>
                  <p><span className="text-blue-600 font-bold">export default function</span> <span className="text-yellow-600">lamp_logic</span>() &#123;</p>
                  <p className="pl-4 text-emerald-800">let roomState = <span className="text-purple-600">true</span>;</p>
                  <p className="pl-4 text-emerald-800">return roomState;</p>
                  <p>&#125;</p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Bottom Navigation Ribbon */}
        {onEnterGameRoom && (
          <button 
            onClick={onEnterGameRoom}
            className="absolute bottom-4 left-4 z-10 bg-slate-900/80 hover:bg-slate-900 text-white border border-slate-700 hover:border-purple-500 font-mono text-[11px] px-3 py-1.5 rounded transition-all shadow-md flex items-center gap-1.5"
          >
            <span>🗺️</span> Back to Map/GameRoom
          </button>
        )}
      </div>
    </div>
  );
}
