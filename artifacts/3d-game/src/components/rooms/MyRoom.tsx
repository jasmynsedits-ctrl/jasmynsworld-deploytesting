import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// - TOY INVENTORY -
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

function ToyGraphic({ id }: { id: string }) {
  return <div className="w-16 h-16 bg-purple-300 rounded-full flex items-center justify-center font-bold text-xs">{id[0].toUpperCase()}</div>;
}

export default function MyRoom({ onEnterGameRoom }: { onEnterGameRoom?: () => void }) {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [selectedToy, setSelectedToy] = useState<typeof TOYS[0] | null>(null);

  return (
    <div className="relative w-full h-full bg-[#fce4ec] flex items-center justify-center overflow-hidden font-sans">
      <div className="relative w-[800px] h-[600px] bg-white shadow-2xl overflow-hidden border-8 border-[#333]">
        {/* Room Background / Walls */}
        <div className="absolute inset-0 bg-[#f8f9fa]" />

        {/* SVG Room Layout */}
        <svg viewBox="0 0 800 600" className="w-full h-full">
          {/* Floor */}
          <path d="M 0 450 L 800 450 L 800 600 L 0 600 Z" fill="#e9ecef" />

          {/* Bed - Black frame */}
          <rect x="50" y="380" width="300" height="150" fill="#333" />
          <rect x="60" y="390" width="280" height="100" fill="#ff69b4" />
          <rect x="60" y="390" width="100" height="40" fill="white" />

          {/* Nightstand */}
          <rect x="360" y="400" width="70" height="80" fill="#ffffff" stroke="#1a1a1a" strokeWidth="2" />
          <rect x="370" y="420" width="50" height="15" fill="#ff69b4" />
          <rect x="370" y="450" width="50" height="15" fill="#ff69b4" />

          {/* Desk */}
          <rect x="450" y="380" width="150" height="100" fill="#333" />
          <rect x="460" y="370" width="130" height="10" fill="#333" />
          <rect x="500" y="340" width="50" height="40" fill="#1a1a1a" />

          {/* Nightstand with Toy Vault Interaction */}
          <g onClick={() => setDrawerOpen(true)} className="cursor-pointer">
            <rect x="360" y="400" width="70" height="80" fill="#ffffff" stroke="#1a1a1a" strokeWidth="2" />
            <rect x="370" y="420" width="50" height="15" fill="#ff69b4" />
            <rect x="370" y="450" width="50" height="15" fill="#ff69b4" />
          </g>

          {/* Door to Game Room */}
          <g onClick={onEnterGameRoom} className="cursor-pointer">
            <rect x="650" y="150" width="100" height="150" fill="#1a1a1a" />
            <rect x="660" y="160" width="80" height="130" fill="#ff69b4" />
          </g>
        </svg>

        {/* UI Overlay */}
        <div className="absolute top-4 left-4 bg-white/90 p-4 rounded-lg shadow-md border-2 border-[#1a1a1a]">
          <h1 className="text-xl font-bold text-[#1a1a1a]">My Room</h1>
          <p className="text-sm text-gray-600">Click the nightstand drawer to see your toys!</p>
        </div>
      </div>

      {/* Toy Drawer Modal */}
      <AnimatePresence>
        {drawerOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/50 flex items-center justify-center p-8 z-50"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              className="bg-white rounded-2xl w-full max-w-2xl h-[500px] flex flex-col shadow-2xl overflow-hidden border-4 border-[#1a1a1a]"
            >
              <div className="p-4 border-b-2 border-gray-100 flex justify-between items-center bg-[#fce4ec]">
                <h2 className="text-2xl font-black uppercase tracking-tighter text-[#1a1a1a]">Toy Vault</h2>
                <button
                  onClick={() => setDrawerOpen(false)}
                  className="bg-[#1a1a1a] text-white px-4 py-1 rounded-full font-bold hover:bg-gray-800 transition-colors"
                >
                  CLOSE
                </button>
              </div>

              <div className="flex-1 overflow-y-auto p-6 grid grid-cols-2 sm:grid-cols-3 gap-4 bg-gray-50">
                {TOYS.map(toy => (
                  <button
                    key={toy.id}
                    onClick={() => setSelectedToy(toy)}
                    className="flex flex-col items-center p-4 bg-white rounded-xl border-2 border-transparent hover:border-[#ff69b4] hover:shadow-lg transition-all group"
                  >
                    <ToyGraphic id={toy.id} />
                    <span className="mt-2 text-sm font-bold text-gray-700 text-center group-hover:text-[#ff69b4]">{toy.name}</span>
                  </button>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toy Detail Modal */}
      <AnimatePresence>
        {selectedToy && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/80 flex items-center justify-center p-8 z-[60]"
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              className="bg-white p-8 rounded-3xl max-w-sm w-full text-center shadow-2xl border-4 border-[#1a1a1a]"
            >
              <ToyGraphic id={selectedToy.id} />
              <h3 className="text-2xl font-black mt-4 uppercase text-[#1a1a1a]">{selectedToy.name}</h3>
              <p className="mt-2 text-gray-600 font-medium">{selectedToy.desc}</p>
              <button
                onClick={() => setSelectedToy(null)}
                className="mt-6 w-full py-3 bg-[#ff69b4] text-white font-black rounded-xl border-b-4 border-pink-700 active:border-b-0 active:translate-y-1 transition-all"
              >
                BACK TO VAULT
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
