import { useState, useEffect, useRef } from "react";
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
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [activeToy, setActiveToy] = useState<string | null>(null);
  const [zoom, setZoom] = useState(1);

  const activeToyData = TOYS.find(t => t.id === activeToy);

  // Isometric projections mapping constants
  const tileW = 64;
  const tileH = 32;
  const originX = 400;
  const originY = 220;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Clear frame cache
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.save();
    
    // Process zoom adjustments scales
    ctx.translate(canvas.width / 2, canvas.height / 2);
    ctx.scale(zoom, zoom);
    ctx.translate(-canvas.width / 2, -canvas.height / 2);

    // ── RENDER BACKGROUND WALLS (Lime Green / Sage) ──
    ctx.lineWidth = 2;
    ctx.strokeStyle = "#110b1a";

    // Left Wall
    ctx.fillStyle = "#b4c99c";
    ctx.beginPath();
    ctx.moveTo(originX, originY);
    ctx.lineTo(originX - 256, originY + 128);
    ctx.lineTo(originX - 256, originY - 100);
    ctx.lineTo(originX, originY - 228);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();

    // Right Wall
    ctx.fillStyle = "#a5b88e";
    ctx.beginPath();
    ctx.moveTo(originX, originY);
    ctx.lineTo(originX + 256, originY + 128);
    ctx.lineTo(originX + 256, originY - 100);
    ctx.lineTo(originX, originY - 228);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();

    // ── RENDER PINKS & PURPLE WINDOW CURTAINS ──
    ctx.fillStyle = "#e64c87"; // Pink panel
    ctx.fillRect(originX - 200, originY - 120, 25, 140);
    ctx.strokeRect(originX - 200, originY - 120, 25, 140);

    ctx.fillStyle = "#8c50a6"; // Purple panel
    ctx.fillRect(originX - 175, originY - 120, 25, 140);
    ctx.strokeRect(originX - 175, originY - 120, 25, 140);

    // ── BASE DECOR FLOOR TILES LAYER ──
    ctx.fillStyle = "#312542";
    for (let x = 0; x < 8; x++) {
      for (let y = 0; y < 8; y++) {
        const isoX = originX + (x - y) * (tileW / 2);
        const isoY = originY + (x + y) * (tileH / 2);
        
        ctx.beginPath();
        ctx.moveTo(isoX, isoY);
        ctx.lineTo(isoX + tileW / 2, isoY + tileH / 2);
        ctx.lineTo(isoX, isoY + tileH);
        ctx.lineTo(isoX - tileW / 2, isoY + tileH / 2);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();
      }
    }

    // ── BLACK TALL BOOKSHELF (Depth layer index 10) ──
    const bsX = originX + 160;
    const bsY = originY + 80;
    ctx.fillStyle = "#121214";
    ctx.fillRect(bsX, bsY - 120, 45, 130);
    ctx.strokeRect(bsX, bsY - 120, 45, 130);

    // Shelf racks lines slots
    ctx.strokeStyle = "#27272a";
    ctx.beginPath();
    ctx.moveTo(bsX, bsY - 80); ctx.lineTo(bsX + 45, bsY - 80);
    ctx.moveTo(bsX, bsY - 40); ctx.lineTo(bsX + 45, bsY - 40);
    ctx.moveTo(bsX, bsY); ctx.lineTo(bsX + 45, bsY);
    ctx.stroke();

    // ── CENTERED FLORAL COMFY BED (Depth layer index 12) ──
    const bedX = originX + 40;
    const bedY = originY + 110;
    ctx.strokeStyle = "#000";

    // Espresso Wood base
    ctx.fillStyle = "#241407";
    ctx.beginPath();
    ctx.moveTo(bedX - 40, bedY + 20);
    ctx.lineTo(bedX + 80, bedY - 40);
    ctx.lineTo(bedX + 120, bedY - 20);
    ctx.lineTo(bedX, bedY + 40);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();

    // Comforter Top surface (White base with floral vector print circles)
    ctx.fillStyle = "#ffffff";
    ctx.beginPath();
    ctx.moveTo(bedX - 30, bedY + 15);
    ctx.lineTo(bedX + 75, bedY - 38);
    ctx.lineTo(bedX + 112, bedY - 20);
    ctx.lineTo(bedX, bedY + 32);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();

    // Floral Accent dots print layers (Pink, Green, Blue)
    ctx.fillStyle = "#e63956"; ctx.beginPath(); ctx.arc(bedX + 15, bedY + 2, 4, 0, Math.PI * 2); ctx.fill();
    ctx.fillStyle = "#2a9d8f"; ctx.beginPath(); ctx.arc(bedX + 50, bedY - 15, 3, 0, Math.PI * 2); ctx.fill();
    ctx.fillStyle = "#457b9d"; ctx.beginPath(); ctx.arc(bedX + 80, bedY - 10, 4, 0, Math.PI * 2); ctx.fill();

    // ── BLACK NIGHTSTAND & PLANT NODE (Depth layer index 14) ──
    const nsX = originX - 10;
    const nsY = originY + 80;
    ctx.fillStyle = "#18181b";
    ctx.fillRect(nsX, nsY - 20, 30, 40);
    ctx.strokeRect(nsX, nsY - 20, 30, 40);
    // Green leaf circle accent on top
    ctx.fillStyle = "#166534";
    ctx.beginPath(); ctx.arc(nsX + 15, nsY - 25, 8, 0, Math.PI * 2); ctx.fill();

    // ── HOT PINK DESK CORE LAYOUT (Depth layer index 18) ──
    const deskX = originX - 120;
    const deskY = originY + 150;

    // Hot Pink Glass Surface Desk tray
    ctx.fillStyle = "#ff2a6d";
    ctx.beginPath();
    ctx.moveTo(deskX - 50, deskY);
    ctx.lineTo(deskX + 60, deskY - 55);
    ctx.lineTo(deskX + 110, deskY - 30);
    ctx.lineTo(deskX, deskY + 25);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();

    // Pull-out keyboard shelf under-tray panel
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(deskX - 15, deskY + 12, 45, 8);
    ctx.strokeRect(deskX - 15, deskY + 12, 45, 8);

    // Integrated White Drawer Vault Base Unit for Toys Storage
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(deskX - 45, deskY + 40, 40, 50);
    ctx.strokeRect(deskX - 45, deskY + 40, 40, 50);
    // Pink accents pull handles layers lines
    ctx.fillStyle = "#ff2a6d";
    ctx.fillRect(deskX - 40, deskY + 50, 30, 10);
    ctx.fillRect(deskX - 40, deskY + 70, 30, 10);

    // HP All-In-One Desktop Computer Frame
    ctx.fillStyle = "#e8e7e1";
    ctx.fillRect(deskX + 10, deskY - 45, 45, 35);
    ctx.strokeRect(deskX + 10, deskY - 45, 45, 35);
    // Blue Display Monitor Screen Face
    ctx.fillStyle = "#0055e5";
    ctx.fillRect(deskX + 14, deskY - 41, 37, 24);

    // NEON ORANGE CHAIR SWIVEL CHAIR
    ctx.fillStyle = "#ff6b2b";
    ctx.beginPath(); ctx.arc(deskX + 25, deskY + 30, 14, 0, Math.PI * 2); ctx.fill(); ctx.stroke();
    ctx.fillStyle = "#111";
    ctx.fillRect(deskX + 23, deskY + 30, 4, 25);

    // ── MULTI-HEAD CONE FLOOR LAMP SPRITES (Depth layer index 22) ──
    const lpX = originX - 220;
    const lpY = originY + 160;
    ctx.strokeStyle = "#000";
    ctx.lineWidth = 3;
    ctx.beginPath(); ctx.moveTo(lpX, lpY); ctx.lineTo(lpX, lpY - 140); ctx.stroke();
    ctx.lineWidth = 2;
    // Colorful shade cones
    ctx.fillStyle = "#3b82f6"; ctx.beginPath(); ctx.arc(lpX - 12, lpY - 145, 8, 0, Math.PI * 2); ctx.fill(); ctx.stroke();
    ctx.fillStyle = "#fafafa"; ctx.beginPath(); ctx.arc(lpX, lpY - 152, 8, 0, Math.PI * 2); ctx.fill(); ctx.stroke();
    ctx.fillStyle = "#a855f7"; ctx.beginPath(); ctx.arc(lpX + 12, lpY - 145, 8, 0, Math.PI * 2); ctx.fill(); ctx.stroke();

    ctx.restore();
  }, [zoom]);

  const handleCanvasInteractionClick = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    
    // Translate real pixel points values relative to resolution bounding box scale
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Click trigger parameters matching the drawer layout zone bounding area
    if (x > 210 && x < 280 && y > 320 && y < 440) {
      setDrawerOpen(true);
    }
    // Click trigger parameters matching the HP computer node window frame matrix
    if (x > 270 && x < 350 && y > 210 && y < 290 && onEnterGameRoom) {
      onEnterGameRoom();
    }
  };

  return (
    <div className="w-full h-full bg-[#0f0a17] text-white relative font-sans overflow-hidden select-none flex flex-col items-center justify-center">
      
      {/* Back to map navbar button */}
      <div className="absolute top-4 left-4 z-50">
        <button 
          onClick={() => window.history.back()}
          className="px-4 py-2 bg-[#20152b]/90 border border-[#523770] rounded-full text-xs font-bold tracking-wide hover:bg-[#2d1e3d] transition-all shadow-md active:scale-95"
        >
          ← Back to Map
        </button>
      </div>

      {/* Camera zoom console options panel layout (Habbo design style) */}
      <div className="absolute top-4 right-4 z-50 bg-[#191124]/90 p-1.5 rounded-xl border border-[#442f5c] flex items-center gap-2 shadow-2xl backdrop-blur-md">
        <button onClick={() => setZoom(z => Math.min(1.75, z + 0.25))} className="px-3 py-1.5 bg-[#331f47] hover:bg-[#482c63] active:scale-90 text-xs font-bold rounded-lg transition-all">
          ➕ Step Closer
        </button>
        <button onClick={() => setZoom(z => Math.max(0.75, z - 0.25))} className="px-3 py-1.5 bg-[#331f47] hover:bg-[#482c63] active:scale-90 text-xs font-bold rounded-lg transition-all">
          ➖ Step Away
        </button>
      </div>

      {/* Unified Interactive Core Screen Node Canvas */}
      <div className="relative border-4 border-[#241733] bg-[#160f21] rounded-2xl shadow-2xl overflow-hidden cursor-pointer">
        <canvas 
          ref={canvasRef} 
          width={800} 
          height={520} 
          onClick={handleCanvasInteractionClick}
          className="block"
        />
      </div>

      {/* Guide HUD Strip bar */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-30 bg-[#09050f]/95 px-6 py-2.5 rounded-xl border border-[#422a5c] shadow-2xl backdrop-blur-md">
        <p className="text-[11px] font-bold tracking-wide text-[#b498d9] uppercase">
          🏨 Click the HP Computer Screen to launch your OS node, or click the White/Pink desk drawers to look inside.
        </p>
      </div>

      {/* ── TOYS SYSTEM DRAWER SHEET MODAL OVERLAY ── */}
      <AnimatePresence>
        {drawerOpen && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.96 }} 
            animate={{ opacity: 1, scale: 1 }} 
            exit={{ opacity: 0, scale: 0.96 }} 
            className="absolute inset-4 m-auto w-11/12 h-5/6 bg-[#ece9d8] border-2 border-[#0055e5] rounded-t-lg shadow-2xl z-55 flex flex-col overflow-hidden text-black pointer-events-auto"
          >
            <div className="flex items-center justify-between px-3 py-1 shrink-0" style={{ background: "linear-gradient(180deg, #2f5bb7 0%, #1e3f8a 50%, #1a3578 100%)", height: 28 }}>
              <span className="text-white text-xs font-bold">📂 Integrated Hot Pink Desk Drawer — Childhood Toy Inventory</span>
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

      {/* Individual item description inspect badge modal box */}
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
