import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";

const TOYS = [
  { id: "bottle", name: "Magic Baby Bottle", desc: "The milk disappears when you tilt it. TECHNOLOGY." },
  { id: "skeebo", name: "Skeebo Beebo", desc: "Strongest memory is being at the car wash while holding it." },
  { id: "doodle", name: "Doodle Bear (Purple)", desc: "You could draw on it and wash it off. Revolutionary." },
  { id: "fijit", name: "Fijit Friend (Purple)", desc: "She danced and talked back. Best friend material." },
  { id: "furby", name: "Furby (Orange)", desc: "Terrifying. Beloved. Could not be turned off." },
  { id: "journal", name: "Password Journal", desc: "Voice-activated diary. Nobody was getting in, even me." },
  { id: "playdoh", name: "Play-Doh Sets", desc: "The smell alone is a core memory." },
  { id: "easybake", name: "Easy Bake Oven", desc: "Tiny light-bulb cakes. Peak childhood engineering." },
  { id: "wagon", name: "Red Wagon", desc: "The original ride-or-die vehicle." },
  { id: "wand", name: "Alex's Magic Wand", desc: "Came with a tiny spellbook. I wanted it to be real so bad." },
  { id: "remote", name: "Sam's TV Remote", desc: "*Insert laugh track*." },
  { id: "shopkins", name: "Shopkins", desc: "Trading these at school...and getting them stolen. That part wasn't fun." },
];

function ToyGraphic({ id }: { id: string }) {
  switch (id) {
    case "bottle": return (
      <div className="relative w-14 h-28 flex flex-col items-center">
        <div className="w-8 h-5 bg-yellow-200 rounded-t-full border-2 border-yellow-300 relative z-10">
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-yellow-400 rounded-full" />
        </div>
        <div className="w-12 h-4 bg-white/60 border-t-2 border-white rounded-sm -mt-1 z-10" />
        <div className="w-14 h-20 bg-white/40 border-2 border-white/70 rounded-b-2xl rounded-t-sm flex flex-col justify-end overflow-hidden">
          <div className="w-full bg-white/80 transition-all" style={{ height: "50%" }} />
        </div>
      </div>
    );
    case "skeebo": return (
      <div className="relative w-16 h-20 flex flex-col items-center">
        <div className="w-12 h-12 bg-lime-400 rounded-full border-2 border-lime-600 relative flex items-center justify-center">
          <div className="absolute -top-2 left-2 w-1.5 h-4 bg-lime-300 rounded-full rotate-[-20deg]" />
          <div className="absolute -top-2 right-2 w-1.5 h-4 bg-lime-300 rounded-full rotate-[20deg]" />
          <div className="flex gap-2">
            <div className="w-3 h-3 bg-black rounded-full border border-white" />
            <div className="w-3 h-3 bg-black rounded-full border border-white" />
          </div>
        </div>
        <div className="w-10 h-8 bg-lime-500 rounded-b-xl border-2 border-lime-600 relative">
          <div className="absolute -left-2 top-1 w-3 h-5 bg-lime-400 rounded-full" />
        </div>
      </div>
    );
    case "doodle": return (
      <div className="relative w-20 h-20">
        <div className="w-20 h-20 bg-purple-400 rounded-full relative border-2 border-purple-600">
          <div className="absolute -top-3 left-2 w-6 h-6 bg-purple-400 rounded-full border-2 border-purple-600" />
          <div className="absolute -top-3 right-2 w-6 h-6 bg-purple-400 rounded-full border-2 border-purple-600" />
        </div>
      </div>
    );
    case "fijit": return (
      <div className="relative w-16 h-20 flex flex-col items-center">
        <div className="w-14 h-14 bg-purple-500 rounded-full border-2 border-purple-700 relative flex items-center justify-center">
          <div className="flex gap-2"><div className="w-3 h-3 bg-white rounded-full" /><div className="w-3 h-3 bg-white rounded-full" /></div>
        </div>
        <div className="w-10 h-6 bg-purple-600 rounded-b-xl border-2 border-purple-700" />
      </div>
    );
    case "furby": return (
      <div className="relative w-20 h-20">
        <div className="w-20 h-20 bg-orange-400 rounded-full border-2 border-orange-600 relative shadow-lg">
          <div className="absolute -top-4 left-1 w-8 h-10 bg-orange-300 rounded-full rotate-[-30deg]" />
          <div className="absolute top-5 left-2 w-8 h-8 bg-white rounded-full flex items-center justify-center"><div className="w-3 h-3 bg-black rounded-full" /></div>
          <div className="absolute top-5 right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center"><div className="w-3 h-3 bg-black rounded-full" /></div>
        </div>
      </div>
    );
    case "journal": return (
      <div className="relative w-16 h-22">
        <div className="w-16 h-20 bg-pink-400 rounded-r-lg border-l-4 border-gray-400 shadow-md relative">
          <div className="absolute top-1/2 right-3 -translate-y-1/2 w-5 h-7 bg-pink-200 rounded border border-pink-500" />
        </div>
      </div>
    );
    case "playdoh": return (
      <div className="flex gap-1">
        {["bg-red-500", "bg-yellow-400", "bg-blue-500", "bg-green-500"].map((c, i) => (
          <div key={i} className={`w-8 h-10 ${c} rounded-t-full border-2 border-white/50 shadow-md`} />
        ))}
      </div>
    );
    case "easybake": return (
      <div className="w-24 h-16 bg-pink-400 rounded-md border-2 border-pink-600 shadow-md relative" />
    );
    case "wagon": return (
      <div className="relative w-24 h-16">
        <div className="absolute top-0 left-4 right-0 h-9 bg-red-500 rounded-sm border-2 border-red-700 shadow-md" />
      </div>
    );
    case "wand": return (
      <div className="relative w-10 h-28 flex flex-col items-center">
        <div className="w-4 h-4 bg-yellow-300 rounded-full border-2 border-yellow-500 z-10" />
        <div className="w-1.5 h-20 bg-gradient-to-b from-yellow-400 to-yellow-600 rounded-full" />
      </div>
    );
    case "remote": return (
      <div className="w-12 h-20 bg-gray-700 rounded-xl border-2 border-gray-600 shadow-md relative p-2" />
    );
    case "shopkins": return (
      <div className="flex flex-wrap gap-1 w-20">
        {["bg-red-400","bg-pink-400","bg-yellow-400"].map((c,i) => (
          <div key={i} className={`w-7 h-8 ${c} rounded-xl border border-white/50 shadow-sm`} />
        ))}
      </div>
    );
    default: return <div className="w-12 h-12 bg-purple-400 rounded-lg" />;
  }
}

const getIsoCoords = (x: number, y: number, tileWidth = 64, tileHeight = 32) => {
  const screenX = (x - y) * (tileWidth / 2);
  const screenY = (x + y) * (tileHeight / 2);
  return { left: screenX, top: screenY };
};

export default function MyRoom({ onEnterGameRoom }: { onEnterGameRoom?: () => void }) {
  const [toyboxOpen, setToyboxOpen] = useState(false);
  const [activeToy, setActiveToy] = useState<string | null>(null);
  
  const gridSize = 8;
  const tileW = 64;
  const tileH = 32;
  const activeToyData = TOYS.find(t => t.id === activeToy);

  return (
    <div className="w-full h-full bg-[#160f24] text-white relative font-sans overflow-hidden select-none flex items-center justify-center">
      
      {/* ── INTERACTIVE RETRO ISOMETRIC BEDROOM LAYOUT ── */}
      <div className="relative scale-110 transform translate-y-[-20px]" style={{ width: gridSize * tileW, height: gridSize * tileH * 2.5 }}>
        
        {/* Lime Green / Sage Walls from Photo Reference */}
        <div 
          className="absolute origin-top-left bg-[#b4c99c] border-r-4 border-t-4 border-[#12051c]"
          style={{ width: gridSize * tileW / Math.sqrt(2), height: 220, transform: "rotate(30deg) skewX(-30deg) translate(-218px, -114px)", zIndex: 1 }}
        >
          {/* Pink & Purple Curtain Overlays */}
          <div className="absolute top-0 left-4 w-12 h-full bg-[#e64c87] border-r-2 border-black/30 opacity-90" />
          <div className="absolute top-0 left-16 w-14 h-full bg-[#8c50a6] border-r-2 border-black/30 opacity-90" />
          <div className="absolute bottom-12 right-6 font-serif italic text-[#394f25] text-xs font-bold opacity-60">Joy 🌸</div>
        </div>

        <div 
          className="absolute origin-top-right bg-[#a5b88e] border-l-4 border-t-4 border-[#12051c]"
          style={{ width: gridSize * tileW / Math.sqrt(2), height: 220, transform: "rotate(-30deg) skewX(30deg) translate(218px, -114px)", zIndex: 1 }}
        />

        {/* Room Floorboard Coordinate Grid */}
        <div className="absolute top-[180px] left-1/2 transform translate-x-[-50%] relative">
          {Array.from({ length: gridSize }).map((_, x) =>
            Array.from({ length: gridSize }).map((_, y) => {
              const coords = getIsoCoords(x, y, tileW, tileH);
              return (
                <div
                  key={`${x}-${y}`}
                  className="absolute border border-[#1b0f30] bg-[#312542] hover:bg-[#3b2d4f]"
                  style={{ width: tileW, height: tileH, left: coords.left, top: coords.top, transform: "rotateX(60deg) rotateZ(45deg)", zIndex: 2 }}
                />
              );
            })
          )}

          {/* ── BED LAYER WITH FLORAL PATTERNED COMFORTER (Slots 1,2) ── */}
          {(() => {
            const coords = getIsoCoords(1, 2, tileW, tileH);
            return (
              <div className="absolute" style={{ left: coords.left - 20, top: coords.top + 35, zIndex: 12 }}>
                <div className="relative w-36 h-28">
                  <div className="absolute top-0 left-2 w-4 h-20 bg-[#1a0e05] border-2 border-black rounded-xs" />
                  <div className="absolute bottom-0 left-2 w-full h-10 bg-[#241407] border-2 border-black rounded-xs shadow-lg" />
                  {/* Floral Print Comforter */}
                  <div className="absolute bottom-2 left-4 w-[124px] h-14 bg-[#ffffff] border-2 border-black rounded-sm overflow-hidden p-1">
                    <div className="w-full h-full opacity-80" style={{
                      backgroundImage: "radial-gradient(circle at 20% 30%, #e63956 6px, transparent 7px), radial-gradient(circle at 60% 70%, #2a9d8f 5px, transparent 6px), radial-gradient(circle at 80% 20%, #457b9d 6px, transparent 7px)"
                    }} />
                  </div>
                  <div className="absolute top-4 left-6 w-10 h-7 bg-white border-2 border-black rounded-sm transform rotate-[-6deg]" style={{ backgroundImage: "radial-gradient(circle at 50% 50%, #e63956 4px, transparent 5px)" }} />
                </div>
              </div>
            );
          })()}

          {/* ── GLASS TOP COMPUTER DESK STATION & CHAIR (Slots 5,2) ── */}
          {(() => {
            const coords = getIsoCoords(5, 2, tileW, tileH);
            return (
              <div 
                onClick={onEnterGameRoom}
                className="absolute cursor-pointer group"
                style={{ left: coords.left + 16, top: coords.top + 30, zIndex: 18 }}
              >
                <div className="relative w-24 h-36 flex flex-col items-center justify-end transform transition-transform duration-200 group-hover:translate-y-[-4px]">
                  {/* HP All-In-One Desktop Computer Frame */}
                  <div className="w-18 h-15 bg-[#1a1a1a] border-2 border-black rounded-md shadow-2xl p-0.5 flex flex-col items-center justify-between relative mb-2 z-10">
                    <div className="w-full h-11 bg-black p-0.5 rounded-t-sm">
                      <div className="w-full h-full bg-gradient-to-br from-[#1d4ed8] to-[#1e1b4b] rounded-xs flex flex-col items-center justify-center">
                        <span className="text-[7px] font-bold text-[#93c5fd] animate-pulse">BOOT_TERMINAL</span>
                      </div>
                    </div>
                    <div className="w-full h-2.5 bg-[#a8a8a8] rounded-b-xs border-t border-black" />
                    <div className="absolute -bottom-2 w-12 h-3 border-x-2 border-b-2 border-[#8a8a8a] rounded-b-md" />
                  </div>

                  {/* Glass Top Surface */}
                  <div className="w-24 h-3 bg-gradient-to-b from-[#22d3ee]/20 to-[#0891b2]/30 border-2 border-[#222] rounded-xs shadow-md z-0" />

                  {/* Metal Framework Legs with Side Cross Braces */}
                  <div className="flex justify-between w-22 h-14 px-1 relative z-0">
                    <div className="w-1.5 h-full bg-gray-600 border border-black" />
                    <div className="w-1.5 h-full bg-gray-600 border border-black" />
                  </div>

                  {/* Neon Orange Swivel Cushion Stool */}
                  <div className="absolute bottom-[-16px] left-6 w-10 h-14 flex flex-col items-center z-25 pointer-events-none">
                    <div className="w-9 h-4 bg-[#ff6b2b] border-2 border-black rounded-full shadow-md" />
                    <div className="w-1.5 h-5 bg-black" />
                    <div className="w-10 h-2 bg-[#444] border border-black rounded-full" />
                  </div>
                </div>
              </div>
            );
          })()}

          {/* ── RETRO ACCENT CHEST TOYBOX STORAGE NODE (Slots 1,5) ── */}
          {(() => {
            const coords = getIsoCoords(1, 5, tileW, tileH);
            return (
              <div 
                onClick={() => { setToyboxOpen(true); setActiveToy(null); }}
                className="absolute cursor-pointer group"
                style={{ left: coords.left + 12, top: coords.top + 65, zIndex: 16 }}
              >
                <div className="w-20 h-16 bg-[#9c6233] border-2 border-[#1f1105] shadow-xl relative flex flex-col items-center justify-start rounded-xs transform transition-transform duration-200 group-hover:translate-y-[-4px]">
                  <div className="w-[84px] h-4 bg-[#bd7e4a] border-b-2 border-t border-x border-[#1f1105] rounded-t-xs" />
                  <div className="w-4 h-5 bg-[#e0b434] border border-[#1f1105] rounded-xs mt-1 relative flex items-center justify-center">
                    <div className="w-1 h-2 bg-black rounded-full" />
                  </div>
                  <span className="absolute bottom-1 text-[8px] font-bold text-[#ffd966] tracking-widest uppercase">Toys</span>
                </div>
              </div>
            );
          })()}

          {/* ── MULTI-HEAD CONE SHADE FLOOR LAMP (Slots 4,5) ── */}
          {(() => {
            const coords = getIsoCoords(4, 5, tileW, tileH);
            return (
              <div className="absolute" style={{ left: coords.left + 22, top: coords.top + 10, zIndex: 16 }}>
                <div className="relative w-16 h-40 flex flex-col items-center justify-end">
                  <div className="absolute top-2 left-[-12px] w-5 h-5 bg-[#3b82f6] border border-black rounded-b-xl transform -rotate-45" />
                  <div className="absolute top-0 left-4 w-5 h-5 bg-[#ffffff] border border-black rounded-b-xl" />
                  <div className="absolute top-3 right-[-10px] w-5 h-5 bg-[#a855f7] border border-black rounded-b-xl transform rotate-45" />
                  <div className="w-1 h-32 bg-[#a8a8a8] border-x border-black" />
                  <div className="w-8 h-2.5 bg-[#555] rounded-full border border-black" />
                </div>
              </div>
            );
          })()}

        </div>
      </div>

      {/* ── TOYS MODAL GRID PORTAL ── */}
      <AnimatePresence>
        {toyboxOpen && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }} 
            animate={{ opacity: 1, scale: 1 }} 
            exit={{ opacity: 0, scale: 0.95 }} 
            className="absolute inset-4 m-auto w-11/12 h-5/6 bg-[#ece9d8] border-2 border-[#0055e5] rounded-t-lg shadow-2xl z-55 flex flex-col overflow-hidden text-black"
          >
            <div className="flex items-center justify-between px-3 py-1 shrink-0" style={{ background: "linear-gradient(180deg, #2f5bb7 0%, #1e3f8a 50%, #1a3578 100%)", height: 28 }}>
              <span className="text-white text-xs font-bold">📂 Jasmyn's Interactive Toy Box Drawer</span>
              <button onClick={() => setToyboxOpen(false)} className="w-6 h-5 bg-gradient-to-b from-[#e05] to-[#b00] border border-black/30 rounded text-white text-xs font-bold flex items-center justify-center hover:brightness-110">✕</button>
            </div>
            <div className="flex-1 bg-white p-6 overflow-y-auto grid grid-cols-4 gap-4">
              {TOYS.map(toy => (
                <div key={toy.id} onClick={() => setActiveToy(toy.id)} className="border border-[#aca899] p-3 bg-[#f5f3ee] hover:border-blue-600 rounded-sm flex flex-col items-center justify-center cursor-pointer transition-colors group">
                  <div className="h-24 flex items-center justify-center"><ToyGraphic id={toy.id} /></div>
                  <span className="text-xs font-bold text-purple-900 mt-2 text-center">{toy.name}</span>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── TOY INDIVIDUAL DETAIL OVERLAY ── */}
      <AnimatePresence>
        {activeToy && activeToyData && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="absolute inset-0 z-60 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4" onClick={() => setActiveToy(null)}>
            <motion.div initial={{ scale: 0.8 }} animate={{ scale: 1 }} exit={{ scale: 0.8 }} className="bg-[#ece9d8] rounded-t-lg border-2 border-[#0055e5] max-w-sm w-full flex flex-col shadow-2xl overflow-hidden text-black" onClick={e => e.stopPropagation()}>
              <div className="flex items-center justify-between px-3 py-1 shrink-0" style={{ background: "linear-gradient(180deg, #2f5bb7 0%, #1e3f8a 50%, #1a3578 100%)", height: 26 }}><span className="text-white text-xs font-bold">Toy Inspection Log</span><button onClick={() => setActiveToy(null)} className="text-white text-xs font-bold">✕</button></div>
              <div className="p-6 bg-white flex flex-col items-center gap-4">
                <div className="h-32 bg-purple-50/50 w-full rounded border flex items-center justify-center"><ToyGraphic id={activeToy} /></div>
                <h3 className="text-lg font-bold text-purple-900">{activeToyData.name}</h3>
                <p className="text-sm text-purple-700 italic text-center">"{activeToyData.desc}"</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
