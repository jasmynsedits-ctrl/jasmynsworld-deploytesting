import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const TOYS = [
  { id: "bottle", name: "Magic Baby Bottle", desc: "The milk disappears when you tilt it." },
  { id: "skeebo", name: "Skeebo Beebo", desc: "My little lime green alien friend." },
  { id: "doodle", name: "Doodle Bear (Purple)", desc: "A purple bear you can draw on!" },
  { id: "fijit", name: "Fijit Friend (Purple)", desc: "A classic interactive robotic toy." },
  { id: "furby", name: "Furby (Orange)", desc: "Classic orange electronic pet." },
  { id: "journal", name: "Password Journal", desc: "Voice-activated secrets locker." },
  { id: "playdoh", name: "Play-Doh Sets", desc: "The smell alone takes me back." },
  { id: "easybake", name: "Easy Bake Oven", desc: "Tiny light-bulb powered cakes." },
  { id: "wagon", name: "Red Wagon", desc: "The original ride on toy." },
  { id: "wand", name: "Alex's Magic Wand", desc: "Aunt Alex brought it from the UK." },
  { id: "remote", name: "Sam's TV Remote", desc: "Cousin Sam's old TV remote." },
  { id: "shopkins", name: "Shopkins", desc: "Tiny food characters." }
];

const MyRoom = () => {
  const [selectedToy, setSelectedToy] = useState(null);
  const [hoveredItem, setHoveredItem] = useState(null);
  const bgUrl = "https://lh3.googleusercontent.com/pw/AP1GczOKuj3oJ2SzDmpzjJlp5lfZhli0nlWcYb-KibxvMCXJpcxbDIKDRezIQeP6OPWsg5mNNk7JSV8eeqt41irWF3coGOpXURFdAfsjLIfOC5LWS9zSOyC9u9VnyQbR8c_y30k2awYBqoSDsqUJZfMbK8REuw=w1035-h947-s-no-gm?authuser=0";

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#1a1c2c] p-4 font-mono text-white">
      <div className="relative w-[600px] h-[600px] shadow-2xl border-4 border-[#333] rounded-lg overflow-hidden">
        <img src={bgUrl} alt="My Childhood Room" className="w-full h-full object-cover" />

        {/* Interactive Areas */}
        
        {/* Computer Area - Adjusted Placement */}
        <div 
          className="absolute top-[220px] left-[350px] w-[140px] h-[110px] cursor-pointer z-10 border-2 border-dashed border-white/50 hover:border-white transition-all rounded-lg"
          onClick={() => window.location.href = '/computer-interface'}
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const TOYS = [
  { id: "bottle", name: "Magic Baby Bottle", desc: "The milk disappears when you tilt it." },
  { id: "skeebo", name: "Skeebo Beebo", desc: "My little lime green alien friend." },
  { id: "doodle", name: "Doodle Bear (Purple)", desc: "A purple bear you can draw on!" },
  { id: "fijit", name: "Fijit Friend (Purple)", desc: "A classic interactive robotic toy." },
  { id: "furby", name: "Furby (Orange)", desc: "Classic orange electronic pet." },
  { id: "journal", name: "Password Journal", desc: "Voice-activated secrets locker." },
  { id: "playdoh", name: "Play-Doh Sets", desc: "The smell alone takes me back." },
  { id: "easybake", name: "Easy Bake Oven", desc: "Tiny light-bulb powered cakes." },
  { id: "wagon", name: "Red Wagon", desc: "The original ride on toy." },
  { id: "wand", name: "Alex's Magic Wand", desc: "Aunt Alex brought it from the UK." },
];

export default function MyRoom() {
  const [selectedToy, setSelectedToy] = useState<string | null>(null);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  return (
    <div className="relative w-full h-full bg-[#1a1a1a] overflow-hidden font-sans text-white">
      {/* Background Room Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-80"
        style={{ backgroundImage: "url('/room-bg.png')" }}
      />

      {/* Interactive Areas */}

      {/* Computer Area */}
      <div 
        className="absolute top-[220px] left-[685px] w-[140px] h-[110px] cursor-pointer z-10 border-2 border-transparent hover:border-white hover:shadow-[0_0_15px_rgba(255,255,255,0.7)] transition-all rounded-lg group"
        onClick={() => window.location.href = '/computer-interface'}
        onMouseEnter={() => setHoveredItem('Computer')}
        onMouseLeave={() => setHoveredItem(null)}
      >
        <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-black/80 px-2 py-1 rounded text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
          Use Computer
        </div>
      </div>

      {/* Nightstand Area */}
      <div 
        className="absolute top-[380px] left-[245px] w-[90px] h-[130px] cursor-pointer z-10 border-2 border-transparent hover:border-white hover:shadow-[0_0_15px_rgba(255,255,255,0.7)] transition-all rounded-lg group"
        onClick={() => setSelectedToy('nightstand')}
        onMouseEnter={() => setHoveredItem('Nightstand')}
        onMouseLeave={() => setHoveredItem(null)}
      >
        <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-black/80 px-2 py-1 rounded text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
          Open Drawer
        </div>
      </div>

      {/* Toy Collection Overlay */}
      <AnimatePresence>
        {selectedToy && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 z-50 bg-black/60 flex items-center justify-center p-8"
            onClick={() => setSelectedToy(null)}
          >
            <motion.div 
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              className="bg-[#2a2a2a] p-6 rounded-xl max-w-2xl w-full border border-white/20 shadow-2xl"
              onClick={e => e.stopPropagation()}
            >
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-white">Toy Collection</h2>
                <button 
                  onClick={() => setSelectedToy(null)}
                  className="text-white/60 hover:text-white"
                >
                  ✕
                </button>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                {TOYS.map(toy => (
                  <div key={toy.id} className="p-3 bg-white/5 rounded-lg border border-white/10 hover:bg-white/10 transition-colors">
                    <h3 className="font-semibold text-white">{toy.name}</h3>
                    <p className="text-xs text-white/60">{toy.desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hover Status Label */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-black/40 backdrop-blur-md px-4 py-2 rounded-full border border-white/10">
        <p className="text-sm tracking-widest uppercase">
          {hoveredItem ? `Exploring: ${hoveredItem}` : 'Explore the Room'}
        </p>
      </div>
    </div>
  );
}
        {/* Nightstand Area - Adjusted Placement */}
        <div 
          className="absolute top-[380px] left-[100px] w-[90px] h-[130px] cursor-pointer z-10 border-2 border-dashed border-white/50 hover:border-white transition-all rounded-lg"
          onClick={() => setSelectedToy('nightstand')}
          onMouseEnter={() => setHoveredItem('Nightstand')}
          onMouseLeave={() => setHoveredItem(null)}
        />

        {/* Hover Label */}
        {hoveredItem && (
          <div className="absolute top-4 left-1/2 -translate-x-1/2 bg-black/80 px-4 py-2 rounded-full border border-purple-500/50 z-20 pointer-events-none">
            Exploring: {hoveredItem}
          </div>
        )}
      </div>

      {/* Toy Detail Feedback */}
      {selectedToy && (
        <div className="mt-8 p-6 bg-[#2a2c3c] rounded-xl border-2 border-purple-500 max-w-md text-center">
          <h3 className="text-2xl font-bold text-purple-400 mb-2 capitalize">{selectedToy}</h3>
          <p className="text-gray-300 italic">This area holds secrets from my childhood...</p>
          <button 
            onClick={() => setSelectedToy(null)} 
            className="mt-4 px-4 py-2 bg-purple-600 hover:bg-purple-700 rounded-lg transition-colors"
          >
            Close
          </button>
        </div>
      )}
    </div>
  );
};

export default MyRoom;
