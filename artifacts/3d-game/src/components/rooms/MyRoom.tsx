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

export default function MyRoom({ onEnterGameRoom }: { onEnterGameRoom?: () => void }) {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [activeToy, setActiveToy] = useState<string | null>(null);
  const activeToyData = TOYS.find(t => t.id === activeToy);

  return (
    <div className="w-full h-full bg-[#1b152b] text-white relative font-sans overflow-hidden select-none flex flex-col items-center justify-center p-8">
      
      {/* ── GRAINY 2-BIT BACKGROUND TEXTURE (Repeated Pattern Block) ── */}
      <div className="absolute inset-0 z-0 opacity-20" style={{
        backgroundImage: "url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAYAAACp8Z5+AAAAIklEQVQIW2NkQAKrVq36z8gAFmMAArVq1b9Zs2b9Z4QCAGkPCAGb9z98AAAAAElFTkSuQmCC')",
        backgroundRepeat: "repeat",
        backgroundSize: "32px"
      }}/>

      {/* Navigation and map back button navbar layout */}
      <div className="absolute top-4 left-4 z-50">
        <button 
          onClick={() => window.history.back()}
          className="px-4 py-2 bg-[#2a1d40]/90 border-4 border-[#3c2a5c] rounded-lg text-xs font-bold hover:bg-[#382654] transition-all shadow-md active:scale-95"
        >
          ← Back to Map
        </button>
      </div>

      {/* HUD BannerConsole Strip */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-30 bg-[#161226]/95 p-3 rounded-lg border-4 border-[#392b52] shadow-2xl backdrop-blur-md flex items-center gap-6">
        <p className="text-[11px] font-bold tracking-wide text-[#b198db] uppercase">
          📸 **2-Bit Nostalgia Console:** Use your custom Hot Pink Desk or sliding Drawer ports to explore your world.
        </p>
      </div>

      {/* ── INTERACTIVE 2-BIT PIXEL ART ROOM VIEWPORT ── */}
      <div className="relative border-8 border-[#3c2a5c] bg-[#1b152b] rounded-2xl shadow-2xl overflow-hidden cursor-crosshair">
        
        {/* Sage-Green Textured Walls (Dithering Matrix Block Pattern) */}
        <div className="absolute inset-x-0 top-0 bottom-1/2 z-0 flex" style={{
          backgroundImage: "linear-gradient(45deg, #a7bfa7 25%, #6a9c6a 25%, #6a9c6a 50%, #a7bfa7 50%, #a7bfa7 75%, #6a9c6a 75%, #6a9c6a 100%)",
          backgroundSize: "32px 32px",
          imageRendering: "pixelated",
          borderBottom: "10px solid #221c38"
        }}>
          {/* Windows with Pink & Purple Curtains behind Desk */}
          <div className="absolute top-6 left-28 w-20 h-16 bg-[#e2e8f0]/30 border-4 border-black flex items-center justify-center opacity-70">
            <div className="w-full h-1 bg-black/60 absolute" />
            <div className="h-full w-1 bg-black/60 absolute" />
          </div>
          <div className="absolute top-2 left-22 w-6 h-36 bg-[#e11d48] border-4 border-black" />
          <div className="absolute top-2 left-48 w-6 h-36 bg-[#8c50a6] border-4 border-black" />
        </div>

        {/* Brown Plank Flooring (2-Bit Plank dithering pattern block) */}
        <div className="absolute inset-x-0 top-1/2 bottom-0 z-0 flex items-center justify-center" style={{
          backgroundImage: "repeating-linear-gradient(45deg, #5c3e1e, #5c3e1e 10px, #241407 10px, #241407 20px)",
          imageRendering: "pixelated"
        }}/>

        {/* ── HIGH-FIDELITY INTERACTIVE 2-BIT FURNITURE MATRIX (SVG perspective block) ── */}
        <div className="w-[800px] h-[520px] relative z-10 flex items-center justify-center transform scale-110">
          <svg viewBox="0 0 800 520" className="w-full h-full" style={{ imageRendering: "pixelated" }}>
            
            {/* ── BLACK MINIMALIST TALL BOOKSHELF FRAME ── */}
            <g id="2bit-bookshelf">
              <polygon points="680,180 720,160 720,290 680,310" fill="#0c0a17" stroke="#12051c" strokeWidth="4" />
              <polygon points="720,160 750,175 750,305 720,290" fill="#140a1c" stroke="#12051c" strokeWidth="4" />
              <polygon points="680,180 710,195 750,175 720,160" fill="#221c38" stroke="#12051c" strokeWidth="4" />
              {/* Shelf divisions */}
              <polygon points="680,225 710,240 750,220 720,205" fill="#140a1c" stroke="#12051c" strokeWidth="2" />
              <polygon points="680,265 710,280 750,260 720,245" fill="#140a1c" stroke="#12051c" strokeWidth="2" />
            </g>

            {/* ── CENTERED FLORAL COMFY BED FRAME (With pattern dithering dots block) ── */}
            <g id="2bit-bed">
              {/* Wood Base */}
              <polygon points="460,250 600,180 730,245 590,315" fill="#241407" stroke="#12051c" strokeWidth="4" />
              {/* Floral Comforter Base Layer */}
              <polygon points="490,240 610,180 720,235 600,295" fill="#ffffff" stroke="#12051c" strokeWidth="4" opacity="0.95" />
              {/* Floral Dots vector pattern blocks (Pink, Green, Blue) */}
              <circle cx="530" cy="225" r="5" fill="#e63956" />
              <circle cx="560" cy="210" r="4" fill="#2a9d8f" />
              <circle cx="640" cy="210" r="6" fill="#457b9d" />
              <circle cx="590" cy="250" r="5" fill="#e63956" />
              <circle cx="660" cy="240" r="4" fill="#2a9d8f" />
              {/* Cozy Pillows shapes */}
              <polygon points="495,225 540,202 555,212 510,235" fill="#fdfcf0" stroke="#12051c" strokeWidth="3" />
              <polygon points="535,205 580,182 595,192 550,215" fill="#fdfcf0" stroke="#12051c" strokeWidth="3" />
            </g>

            {/* ── BLACK RETRO NIGHTSTAND & POTTED AMBIANCE PLANT ── */}
            <g id="2bit-nightstand">
              <polygon points="420,220 460,200 490,215 450,235" fill="#120a17" stroke="#12051c" strokeWidth="4" />
              <polygon points="420,220 420,250 450,265 450,235" fill="#0a0a14" stroke="#12051c" strokeWidth="4" />
              <polygon points="450,235 450,265 490,250 490,215" fill="#1f182e" stroke="#12051c" strokeWidth="4" />
              {/* Clay Pot with Ambiance Green Sprite plant */}
              <ellipse cx="455" cy="195" rx="8" ry="12" fill="#166534" stroke="#052e16" strokeWidth="2" />
              <ellipse cx="455" cy="200" rx="6" ry="4" fill="#a16207" stroke="#052e16" strokeWidth="2" />
            </g>

            {/* Stacks of Reading material on floor axis */}
            <g id="2bit-books-floor">
              <polygon points="470,320 500,305 515,312 485,327" fill="#1d4ed8" stroke="#12051c" strokeWidth="2" />
              <polygon points="478,318 505,304 518,310 491,324" fill="#be185d" stroke="#12051c" strokeWidth="2" />
            </g>

            {/* ── DESIGN CHROME MULTI-HEAD LAMP CONES AMBIANCE ── */}
            <g id="2bit-lamp">
              <line x1="120" y1="380" x2="120" y2="220" stroke="#a8a8a8" strokeWidth="5" />
              <circle cx="120" cy="380" r="14" fill="#444" stroke="#12051c" strokeWidth="4" />
              {/* Multi-Colored Ajustable Cones Shades sprites block */}
              <path d="M 95,200 Q 110,205 115,220 Z" fill="#3b82f6" stroke="#12051c" strokeWidth="3" />
              <path d="M 120,190 Q 125,205 130,220 Z" fill="#fafafa" stroke="#12051c" strokeWidth="3" />
              <path d="M 145,205 Q 135,200 125,220 Z" fill="#a855f7" stroke="#12051c" strokeWidth="3" />
            </g>

            {/* ── PERSONALIZED CENTERED HOT PINK COMPUTER DESK STATION ── */}
            <g id="2bit-hp-station" className="group">
              {/* Metal Frame Supports legs */}
              <line x1="200" y1="340" x2="200" y2="430" stroke="#78716c" strokeWidth="6" />
              <line x1="380" y1="430" x2="380" y2="520" stroke="#78716c" strokeWidth="6" />
              <line x1="340" y1="340" x2="340" y2="430" stroke="#78716c" strokeWidth="6" />
              
              {/* Glass Hot Pink Workspace Top surface panel block */}
              <polygon points="160,340 340,250 440,300 260,390" fill="#e11d48" stroke="#12051c" strokeWidth="4" />
              {/* Keyboard Shelf Pull out tray casing shape */}
              <polygon points="190,360 320,295 360,315 230,380" fill="#ffffff" stroke="#12051c" strokeWidth="2.5" />
              <polygon points="210,362 300,317 325,330 235,375" fill="#e5e7eb" stroke="#12051c" strokeWidth="1" />

              {/* INTEGRATED PULL-OUT TOY VAULT CHEST DRAWER (Clickable Drawer block) */}
              <g id="2bit-toybox" onClick={() => setDrawerOpen(true)} className="cursor-pointer">
                {/* Drawer base block unit */}
                <polygon points="200,430 290,385 290,485 200,530" fill="#ffffff" stroke="#12051c" strokeWidth="4" />
                <polygon points="290,385 340,410 340,510 290,485" fill="#e5e7eb" stroke="#12051c" strokeWidth="4" />
                {/* Hot Pink Drawer Band Accent blocks */}
                <polygon points="205,450 285,410 285,435 205,475" fill="#e11d48" stroke="#12051c" strokeWidth="1.5" />
                <polygon points="205,490 285,450 285,475 205,515" fill="#e11d48" stroke="#12051c" strokeWidth="1.5" />
                {/* Clickable Tooltip text sprite block */}
                <text x="210" y="470" fill="#12051c" fontSize="10" fontWeight="bold" fontFamily="monospace" transform="rotate(-23.5)" style={{ pointerEvents: "none" }}>VAULT</text>
              </g>

              {/* HP All-In-One Computer Monitor Unit Display (Click to open map game computer browser) */}
              <g id="2bit-hp-comp" onClick={onEnterGameRoom} className="cursor-pointer">
                {/* Base support loop neck stem */}
                <polygon points="280,305 320,285 330,290 290,310" fill="#a8a8a8" stroke="#12051c" strokeWidth="1.5" />
                {/* Thick lower monitor shell panel block */}
                <polygon points="240,270 340,220 375,238 275,288" fill="#d1d5db" stroke="#12051c" strokeWidth="4" />
                {/* Black Bezel Frame Screen border block */}
                <polygon points="242,262 338,214 363,226 267,274" fill="#120a17" stroke="#12051c" strokeWidth="1.5" />
                {/* Blue Terminal Display View shape block */}
                <polygon points="245,255 335,210 355,220 265,265" fill="#0055e5" />
                <text x="275" y="240" fill="#fff" fontSize="9" fontWeight="bold" fontFamily="sans-serif" transform="rotate(26.5) skewX(-30)">OS-XP</text>
              </g>

              {/* Orange Cushion Swivel Seat Stool sprite block */}
              <g id="2bit-orange-stool" style={{ pointerEvents: "none" }}>
                <ellipse cx="280" cy="405" rx="20" ry="10" fill="#ff6b2b" stroke="#12051c" strokeWidth="4" />
                <ellipse cx="280" cy="408" rx="20" ry="7" fill="#ea580c" />
                <line x1="280" y1="415" x2="280" y2="455" stroke="#12051c" strokeWidth="6" />
                <ellipse cx="280" cy="455" rx="16" ry="6" fill="#444" stroke="#12051c" strokeWidth="2.5" />
              </g>
            </g>
          </svg>
        </div>
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
