import { useState } from "react";
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
    default: return <div className="w-12 h-12 bg-pink-400 rounded-lg" />;
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
    <div className="w-full h-full bg-[#14111a] text-white relative font-sans overflow-hidden select-none flex flex-col items-center justify-center">
      
      {/* Navigation */}
      <div className="absolute top-4 left-4 z-50">
        <button 
          onClick={() => window.history.back()}
          className="px-4 py-2 bg-[#221c2e]/90 border border-[#4d3f66] rounded-full text-xs font-bold tracking-wide hover:bg-[#322942] transition-all shadow-md active:scale-95"
        >
          ← Back to Map
        </button>
      </div>

      {/* ── DESIGN WINDOW VIEWPORT CONTAINER ── */}
      <div className="relative scale-125 transform translate-y-[-10px]" style={{ width: gridSize * tileW, height: gridSize * tileH * 2.5 }}>
        
        {/* White Walls */}
        <div 
          className="absolute origin-top-left bg-[#f2f2f2] border-r-4 border-t-4 border-[#120a1c]"
          style={{ width: gridSize * tileW / Math.sqrt(2), height: 220, transform: "rotate(30deg) skewX(-30deg) translate(-218px, -114px)", zIndex: 1 }}
        >
          {/* Windows with Pink & Purple Curtains behind Desk */}
          <div className="absolute top-6 left-16 w-24 h-20 bg-[#e2e8f0]/40 border-2 border-black/80 flex items-center justify-center">
            <div className="w-full h-0.5 bg-black/60 absolute" />
            <div className="h-full w-0.5 bg-black/60 absolute" />
          </div>
          <div className="absolute top-2 left-10 w-8 h-40 bg-[#e64c87] border border-black/20" />
          <div className="absolute top-2 left-40 w-8 h-40 bg-[#8c50a6] border border-black/20" />
        </div>

        <div 
          className="absolute origin-top-right bg-[#e8e8e8] border-l-4 border-t-4 border-[#120a1c]"
          style={{ width: gridSize * tileW / Math.sqrt(2), height: 220, transform: "rotate(-30deg) skewX(30deg) translate(218px, -114px)", zIndex: 1 }}
        />

        {/* Floorboard Grid Area */}
        <div className="absolute top-[180px] left-1/2 transform translate-x-[-50%] relative">
          {Array.from({ length: gridSize }).map((_, x) =>
            Array.from({ length: gridSize }).map((_, y) => {
              const coords = getIsoCoords(x, y, tileW, tileH);
              return (
                <div
                  key={`${x}-${y}`}
                  className="absolute border border-[#1b1226] bg-[#3a2f4c]"
                  style={{ width: tileW, height: tileH, left: coords.left, top: coords.top, transform: "rotateX(60deg) rotateZ(45deg)", zIndex: 2 }}
                />
              );
            })
          )}

          {/* ── CENTERED BED WITH FLORAL COMFORTER (Slots 2,2) ── */}
          {(() => {
            const coords = getIsoCoords(2, 2, tileW, tileH);
            return (
              <div className="absolute" style={{ left: coords.left - 10, top: coords.top + 30, zIndex: 12 }}>
                <div className="relative w-36 h-28">
                  <div className="absolute top-0 left-2 w-4 h-22 bg-[#1a0e05] border-2 border-black rounded-xs" />
                  <div className="absolute bottom-0 left-2 w-full h-10 bg-[#241407] border-2 border-black rounded-xs shadow-lg" />
                  {/* Floral Pattern Comforter Bed Cover */}
                  <div className="absolute bottom-2 left-4 w-[124px] h-15 bg-[#ffffff] border-2 border-black rounded-sm overflow-hidden p-1">
                    <div className="w-full h-full opacity-90" style={{
                      backgroundImage: "radial-gradient(circle at 20% 30%, #e63956 6px, transparent 7px), radial-gradient(circle at 60% 70%, #2a9d8f 5px, transparent 6px), radial-gradient(circle at 80% 20%, #457b9d 6px, transparent 7px)"
                    }} />
                  </div>
                  <div className="absolute top-3 left-6 w-10 h-7 bg-white border-2 border-black rounded-sm transform rotate-[-6deg]" style={{ backgroundImage: "radial-gradient(circle at 50% 50%, #e63956 4px, transparent 5px)" }} />
                </div>
              </div>
            );
          })()}

          {/* ── BLACK BOOKSHELF RIGHT OF BED (Slots 1,4) ── */}
          {(() => {
            const coords = getIsoCoords(1, 4, tileW, tileH);
            return (
              <div className="absolute" style={{ left: coords.left + 24, top: coords.top, zIndex: 11 }}>
                <div className="w-14 h-40 bg-[#121214] border-2 border-black rounded-xs flex flex-col justify-between p-1 shadow-xl">
                  <div className="w-full h-8 border-b border-gray-800" />
                  <div className="w-full h-8 border-b border-gray-800" />
                  <div className="w-full h-8 border-b border-gray-800" />
                </div>
              </div>
            );
          })()}

          {/* ── BLACK NIGHTSTAND WITH PLANT, BOOKS, & MAGAZINES (Slots 4,1) ── */}
          {(() => {
            const coords = getIsoCoords(4, 1, tileW, tileH);
            return (
              <div className="absolute" style={{ left: coords.left, top: coords.top + 45, zIndex: 13 }}>
                <div className="relative w-14 h-16 bg-[#18181b] border-2 border-black rounded-sm shadow-md flex flex-col items-center justify-start pt-1">
                  {/* Potted Plant */}
                  <div className="w-5 h-4 bg-amber-700 rounded-b-md border border-black relative flex items-center justify-center">
                    <div className="w-7 h-5 bg-green-600 rounded-full absolute -top-3 border border-green-800" />
                  </div>
                </div>
              </div>
            );
          })()}

          {/* Stained Reading Material Layer on Floor */}
          {(() => {
            const coords = getIsoCoords(4, 2, tileW, tileH);
            return (
              <div className="absolute" style={{ left: coords.left + 10, top: coords.top + 50, zIndex: 14 }}>
                <div className="relative w-8 h-4 bg-blue-600 border border-black shadow-xs transform rotate-12" />
                <div className="relative w-7 h-4 bg-pink-600 border border-black shadow-xs -mt-2 ml-1" />
              </div>
            );
          })()}

          {/* ── CENTERED HOT PINK GLASS DESK & DRAWERS (Slots 5,4) ── */}
          {(() => {
            const coords = getIsoCoords(5, 4, tileW, tileH);
            return (
              <div className="absolute" style={{ left: coords.left + 12, top: coords.top + 40, zIndex: 18 }}>
                <div className="relative w-28 h-36 flex flex-col items-center justify-end">
                  
                  {/* HP All-In-One Computer Screen Monitor */}
                  <div onClick={onEnterGameRoom} className="w-20 h-16 bg-[#1a1a1a] border-2 border-black rounded-md shadow-2xl p-0.5 flex flex-col items-center justify-between relative mb-2 z-30 cursor-pointer hover:scale-105 transition-transform">
                    <div className="w-full h-11 bg-black p-0.5 rounded-t-sm">
                      <div className="w-full h-full bg-gradient-to-br from-[#1d4ed8] to-[#1e1b4b] rounded-xs flex flex-col items-center justify-center">
                        <span className="text-[7px] font-bold text-[#93c5fd] animate-pulse">BOOT_COMPUTER</span>
                      </div>
                    </div>
                    <div className="w-full h-2.5 bg-[#a8a8a8] rounded-b-xs border-t border-black" />
                    <div className="absolute -bottom-2 w-12 h-3 border-x-2 border-b-2 border-[#8a8a8a] rounded-b-md" />
                  </div>

                  {/* Hot Pink Glass Desktop Surface with Pull-out Tray casing */}
                  <div className="w-26 h-4 bg-[#e11d48] border-2 border-[#12051c] relative rounded-xs shadow-md z-10 flex flex-col justify-end">
                    {/* Keyboard Pull out tray accent */}
                    <div className="w-16 h-1 bg-white mx-auto border-x border-t border-black rounded-t-xs" />
                  </div>

                  {/* Metal Framework Desk Legs */}
                  <div className="flex justify-between w-22 h-14 px-1 relative z-0">
                    <div className="w-1.5 h-full bg-gray-600 border border-black" />
                    {/* INTEGRATED WHITE DRAWER VAULT CHEST LAYER */}
                    <div onClick={() => setToyboxOpen(true)} className="w-12 h-12 bg-white border-2 border-black rounded-xs shadow-md absolute bottom-0 left-5 flex flex-col p-1 gap-1 cursor-pointer hover:bg-gray-100 transition-colors z-20">
                      <div className="w-full h-3 bg-[#e11d48] rounded-xs border border-black" />
                      <div className="w-full h-3 bg-[#e11d48] rounded-xs border border-black" />
                    </div>
                    <div className="w-1.5 h-full bg-gray-600 border border-black" />
                  </div>

                  {/* Orange Cushion Swivel Seat Stool */}
                  <div className="absolute bottom-[-14px] left-8 w-10 h-14 flex flex-col items-center z-25 pointer-events-none">
                    <div className="w-8 h-3 bg-[#ff6b2b] border-2 border-black rounded-full shadow-md" />
                    <div className="w-1 h-5 bg-black" />
                    <div className="w-8 h-1.5 bg-[#444] border border-black rounded-full" />
                  </div>
                </div>
              </div>
            );
          })()}

        </div>
      </div>

      {/* Manual User Guide Notification HUD banner */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-30 bg-[#120c1a]/95 px-6 py-2.5 rounded-xl border border-[#4c3563] shadow-2xl backdrop-blur-md flex items-center gap-6">
        <p className="text-[11px] font-bold tracking-wide text-[#c0a2e0] uppercase">
          📷 Click the HP All-In-One Monitor to boot the browser, or click the Built-In Desk Drawer to view toys.
        </p>
      </div>

      {/* ── TOYS MODAL GRID OVERLAY ── */}
      <AnimatePresence>
        {toyboxOpen && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }} 
            animate={{ opacity: 1, scale: 1 }} 
            exit={{ opacity: 0, scale: 0.95 }} 
            className="absolute inset-4 m-auto w-11/12 h-5/6 bg-[#ece9d8] border-2 border-[#0055e5] rounded-t-lg shadow-2xl z-55 flex flex-col overflow-hidden text-black pointer-events-auto"
          >
            <div className="flex items-center justify-between px-3 py-1 shrink-0" style={{ background: "linear-gradient(180deg, #2f5bb7 0%, #1e3f8a 50%, #1a3578 100%)", height: 28 }}>
              <span className="text-white text-xs font-bold">📂 Built-in Desk Drawer — Memory Toys Vault</span>
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

      {/* Toy detail modal box overlay */}
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
