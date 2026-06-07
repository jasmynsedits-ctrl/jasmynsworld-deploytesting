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
    <div className="w-full h-full bg-[#110d1a] text-white relative font-sans overflow-hidden select-none flex flex-col items-center justify-center">
      
      {/* Navigation */}
      <div className="absolute top-4 left-4 z-50">
        <button 
          onClick={() => window.history.back()}
          className="px-4 py-2 bg-[#221c2e]/90 border border-[#4d3f66] rounded-full text-xs font-bold tracking-wide hover:bg-[#322942] transition-all shadow-md active:scale-95"
        >
          ← Back to Map
        </button>
      </div>

      {/* ── HIGH-FIDELITY VECTOR ART SCENE VIEWPORT ── */}
      <div className="relative w-[800px] h-[550px] flex items-center justify-center">
        <svg viewBox="0 0 800 550" className="w-full h-full drop-shadow-2xl">
          {/* Base Room Definition Outline */}
          <g id="room-shells">
            {/* Floor board Base */}
            <polygon points="400,150 750,325 400,500 50,325" fill="#423325" stroke="#1c120b" strokeWidth="3" />
            
            {/* White Left Wall */}
            <polygon points="50,325 50,100 400,20 400,150" fill="#fafafa" stroke="#111" strokeWidth="2" />
            {/* White Right Wall */}
            <polygon points="400,150 400,20 750,100 750,325" fill="#ededed" stroke="#111" strokeWidth="2" />
            
            {/* Back Wall Window Grid */}
            <rect x="130" y="55" width="120" height="80" fill="#c0dcf7" stroke="#333" strokeWidth="3" opacity="0.8" />
            <line x1="190" y1="55" x2="190" y2="135" stroke="#333" strokeWidth="2" />
            <line x1="130" y1="95" x2="250" y2="95" stroke="#333" strokeWidth="2" />
            
            {/* 2014 Reference Curtains */}
            <rect x="110" y="45" width="30" height="150" fill="#e64c87" stroke="#111" strokeWidth="1.5" />
            <rect x="240" y="45" width="35" height="150" fill="#8c50a6" stroke="#111" strokeWidth="1.5" />
          </g>

          {/* ── BLACK TALL BOOKSHELF (Right Wall) ── */}
          <g id="bookshelf">
            <polygon points="650,160 700,135 700,285 650,310" fill="#18181b" stroke="#000" strokeWidth="2" />
            <polygon points="700,135 730,150 730,300 700,285" fill="#09090b" stroke="#000" strokeWidth="2" />
            <polygon points="650,160 680,175 730,150 700,135" fill="#27272a" stroke="#000" strokeWidth="2" />
            {/* Shelf Division slots lines */}
            <polygon points="650,210 680,225 730,200 700,185" fill="#18181b" stroke="#000" strokeWidth="1" />
            <polygon points="650,260 680,275 730,250 700,235" fill="#18181b" stroke="#000" strokeWidth="1" />
          </g>

          {/* ── CENTERED FLORAL BED PORTAL ── */}
          <g id="centered-bed">
            {/* Espresso Wood Frame Bed */}
            <polygon points="450,240 600,165 720,225 570,300" fill="#241407" stroke="#000" strokeWidth="2" />
            <polygon points="450,240 450,210 600,135 600,165" fill="#1a0e05" stroke="#000" strokeWidth="2" />
            
            {/* Main Floral Print Comforter Cover */}
            <polygon points="480,230 610,165 715,218 585,283" fill="#ffffff" stroke="#111" strokeWidth="2" />
            {/* Pattern Dots vector representations */}
            <circle cx="530" cy="220" r="5" fill="#e63956" />
            <circle cx="560" cy="200" r="4" fill="#2a9d8f" />
            <circle cx="640" cy="200" r="6" fill="#457b9d" />
            <circle cx="590" cy="240" r="5" fill="#e63956" />
            <circle cx="660" cy="230" r="4" fill="#2a9d8f" />

            {/* Cozy White Bed Pillows */}
            <polygon points="485,210 535,185 550,195 500,220" fill="#f5f5f5" stroke="#000" strokeWidth="1.5" />
            <polygon points="535,185 585,160 600,170 550,195" fill="#f5f5f5" stroke="#000" strokeWidth="1.5" />
          </g>

          {/* ── BLACK RETRO NIGHTSTAND & POTTED PLANT ── */}
          <g id="nightstand">
            <polygon points="410,210 460,185 500,205 450,230" fill="#18181b" stroke="#000" strokeWidth="2" />
            <polygon points="410,210 410,245 450,265 450,230" fill="#09090b" stroke="#000" strokeWidth="2" />
            <polygon points="450,230 450,265 500,245 500,205" fill="#27272a" stroke="#000" strokeWidth="2" />
            {/* Green Stem Plant */}
            <ellipse cx="455" cy="180" rx="8" ry="12" fill="#166534" stroke="#052e16" strokeWidth="1" />
            <ellipse cx="455" cy="185" rx="6" ry="4" fill="#b45309" stroke="#000" strokeWidth="1" />
          </g>

          {/* Stacks of Reading material near bed axis */}
          <g id="books-floor">
            <polygon points="470,320 510,300 530,310 490,330" fill="#1d4ed8" stroke="#000" strokeWidth="1" />
            <polygon points="480,315 515,298 532,306 497,323" fill="#be185d" stroke="#000" strokeWidth="1" />
          </g>

          {/* ── DESIGN CHROME MULTI-HEAD LAMP CONES ── */}
          <g id="lamp-fixture">
            <line x1="120" y1="360" x2="120" y2="210" stroke="#a8a8a8" strokeWidth="4" />
            <circle cx="120" cy="360" r="14" fill="#444" stroke="#000" strokeWidth="2" />
            {/* Multi Colored Adjustable Cones Shades */}
            <path d="M 95,190 Q 110,195 115,210 Z" fill="#3b82f6" stroke="#000" strokeWidth="1.5" />
            <path d="M 120,180 Q 125,195 130,210 Z" fill="#fafafa" stroke="#000" strokeWidth="1.5" />
            <path d="M 145,195 Q 135,190 125,210 Z" fill="#a855f7" stroke="#000" strokeWidth="1.5" />
          </g>

          {/* ── PERSONALIZED CENTERED HOT PINK COMPUTER DESK STATION ── */}
          <g id="hotpink-desk" className="group">
            {/* Metal Frame Support Beams */}
            <line x1="200" y1="320" x2="200" y2="410" stroke="#4b5563" strokeWidth="5" />
            <line x1="380" y1="410" x2="380" y2="500" stroke="#4b5563" strokeWidth="5" />
            <line x1="340" y1="320" x2="340" y2="410" stroke="#4b5563" strokeWidth="5" />
            
            {/* Glass Hot Pink Workspace Top Surface Panel */}
            <polygon points="160,320 340,230 440,280 260,370" fill="#ff2a6d" stroke="#05050a" strokeWidth="3" opacity="0.9" />
            {/* Slide-out Keyboard Shelf Tray Casing */}
            <polygon points="190,340 320,275 360,295 230,360" fill="#ffffff" stroke="#222" strokeWidth="1.5" />
            <polygon points="210,342 300,297 325,310 235,355" fill="#e5e7eb" />

            {/* INTEGRATED PULL-OUT TOY VAULT CHEST DRAWER (Clickable Drawer block) */}
            <g id="toy-drawer" onClick={() => setDrawerOpen(true)} className="cursor-pointer">
              <polygon points="200,410 290,365 290,455 200,500" fill="#ffffff" stroke="#111" strokeWidth="2.5" />
              <polygon points="290,365 340,390 340,480 290,455" fill="#e2e8f0" stroke="#111" strokeWidth="2.5" />
              {/* Pink Drawer Casing Accent Bands */}
              <polygon points="205,430 285,390 285,415 205,455" fill="#ff2a6d" stroke="#000" strokeWidth="1" />
              <polygon points="205,470 285,430 285,455 205,495" fill="#ff2a6d" stroke="#000" strokeWidth="1" />
              {/* Text tooltip overlay label inside view space */}
              <text x="220" y="445" fill="#fff" fontSize="10" fontWeight="bold" fontFamily="monospace" style={{ pointerEvents: "none" }}>TOY_DRAWER</text>
            </g>

            {/* HP All-In-One Computer Monitor Unit Display (Click to open computer browser) */}
            <g id="hp-computer" onClick={onEnterGameRoom} className="cursor-pointer">
              {/* Base support loop neck */}
              <polygon points="280,285 320,265 330,270 290,290" fill="#a8a8a8" stroke="#111" strokeWidth="1" />
              {/* Thick lower monitor shell panel container */}
              <polygon points="240,250 340,200 375,218 275,268" fill="#e8e7e1" stroke="#111" strokeWidth="2.5" />
              {/* Black Core Bezel Frame Screen border */}
              <polygon points="242,242 338,194 363,206 267,254" fill="#1a1a1b" stroke="#111" strokeWidth="1" />
              {/* Blue Terminal Display View */}
              <polygon points="245,235 335,190 355,200 265,245" fill="#0055e5" />
              <text x="275" y="222" fill="#fff" fontSize="9" fontWeight="bold" fontFamily="sans-serif" transform="rotate(26.5) skewX(-30)">HP_XP</text>
            </g>

            {/* Neon Orange Rolling Cushion Swivel Stool */}
            <g id="orange-stool" style={{ pointerEvents: "none" }}>
              <ellipse cx="280" cy="385" rx="20" ry="10" fill="#ff6b2b" stroke="#000" strokeWidth="2" />
              <ellipse cx="280" cy="388" rx="20" ry="7" fill="#e05316" />
              <line x1="280" y1="395" x2="280" y2="435" stroke="#111" strokeWidth="4" />
              <ellipse cx="280" cy="435" rx="16" ry="6" fill="#444" stroke="#000" strokeWidth="1.5" />
            </g>
          </g>
        </svg>
      </div>

      {/* Interactive UI bottom display bar */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-30 bg-[#0c0914]/95 px-6 py-2 rounded-xl border border-[#483663] shadow-2xl backdrop-blur-md flex items-center gap-6">
        <p className="text-[11px] font-bold tracking-wide text-[#bfa6e0] uppercase">
          📸 **2014 Room Port:** Click your custom HP Monitor to launch the browser or click the White/Pink desk drawer to inspect your toys.
        </p>
      </div>

      {/* ── TOY VAULT GRID DRAWER MODAL SHEET ── */}
      <AnimatePresence>
        {drawerOpen && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.96 }} 
            animate={{ opacity: 1, scale: 1 }} 
            exit={{ opacity: 0, scale: 0.96 }} 
            className="absolute inset-4 m-auto w-11/12 h-5/6 bg-[#ece9d8] border-2 border-[#0055e5] rounded-t-lg shadow-2xl z-55 flex flex-col overflow-hidden text-black pointer-events-auto"
          >
            <div className="flex items-center justify-between px-3 py-1 shrink-0" style={{ background: "linear-gradient(180deg, #2f5bb7 0%, #1e3f8a 50%, #1a3578 100%)", height: 28 }}>
              <span className="text-white text-xs font-bold">📂 Built-in Hot Pink Desk Drawer — Childhood Toy Inventory</span>
              <button onClick={() => setDrawerOpen(false)} className="w-6 h-5 bg-gradient-to-b from-[#e05] to-[#b00] border border-black/30 rounded text-white text-xs font-bold flex items-center justify-center hover:brightness-110">✕</button>
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

      {/* Individual Toy Inspection detail overlay window */}
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
