import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// ── TOY INVENTORY ──
const TOYS = [
  { id: "bottle", name: "Magic Baby Bottle", desc: "The milk disappears when you tilt it." },
  { id: "skeebo", name: "Skeebo Beebo", desc: "My little lime green alien friend." },
];

function ToyGraphic({ id }: { id: string }) {
  return <div className="w-16 h-16 bg-purple-300 rounded-full flex items-center justify-center font-bold text-xs">{id[0].toUpperCase()}</div>;
}

export default function MyRoom({ onEnterGameRoom }: { onEnterGameRoom?: () => void }) {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [activeToy, setActiveToy] = useState<string | null>(null);

  return (
    <div className="w-full h-full bg-[#1b152b] flex items-center justify-center relative overflow-hidden">
      {/* ── IMMEDIATE RENDER LAYER (Prevents White Screen) ── */}
      <div className="relative w-[800px] h-[520px] bg-[#14111a] border-8 border-[#3c2a5c] rounded-2xl shadow-2xl">
        <svg viewBox="0 0 800 520" className="w-full h-full">
          {/* Wall/Floor Foundation */}
          <polygon points="0,260 400,130 800,260 400,390" fill="#3a2f4c" stroke="#1b1226" strokeWidth="2" />
          <polygon points="0,260 0,0 400,130" fill="#fafafa" stroke="#000" />
          <polygon points="800,260 800,0 400,130" fill="#ededed" stroke="#000" />

          {/* Interactive HP Computer Screen */}
          <g onClick={onEnterGameRoom} className="cursor-pointer">
            <rect x="550" y="200" width="100" height="80" fill="#1f1f1f" />
            <rect x="560" y="210" width="80" height="50" fill="#2563eb" />
          </g>

          {/* Interactive Toy Drawer Base */}
          <g onClick={() => setDrawerOpen(true)} className="cursor-pointer">
            <rect x="250" y="320" width="80" height="100" fill="#ffffff" stroke="#000" strokeWidth="3" />
            <rect x="260" y="340" width="60" height="20" fill="#ff2a6d" />
            <rect x="260" y="380" width="60" height="20" fill="#ff2a6d" />
          </g>
        </svg>
      </div>

      {/* Navigation */}
      <div className="absolute top-4 left-4">
        <button onClick={() => window.history.back()} className="px-4 py-2 bg-[#221c2e] text-white rounded-full text-xs font-bold shadow-md">← Back</button>
      </div>

      {/* Toys Vault Modal */}
      <AnimatePresence>
        {drawerOpen && (
          <motion.div className="absolute inset-4 m-auto w-11/12 h-5/6 bg-[#ece9d8] z-50 p-6 overflow-y-auto grid grid-cols-4 gap-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
             <button onClick={() => setDrawerOpen(false)} className="absolute top-2 right-2 p-2 bg-red-600 text-white font-bold">✕</button>
             {TOYS.map(toy => (
                <div key={toy.id} onClick={() => setActiveToy(toy.id)} className="border p-4 bg-white cursor-pointer">
                   <ToyGraphic id={toy.id} />
                   <p className="text-black text-sm">{toy.name}</p>
                </div>
             ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
