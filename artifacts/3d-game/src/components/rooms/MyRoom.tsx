import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import roomBackground from "@/assets/room-background.mp4";

const TOYS = [
  { id: "bottle", name: "Disappearing Liquid Bottles", desc: "insert desc" },
  { id: "skeebo", name: "Skeebo Beebo", desc: "insert desc" },
  { id: "doodle", name: "Doodle Bear (Purple)", desc: "insert desc" },
  { id: "fijit", name: "Fijit Friend (Purple)", desc: "insert desc" },
  { id: "furby", name: "Furby (Orange)", desc: "insert desc" },
  { id: "journal", name: "Password Journal", desc: "insert desc" },
  { id: "playdoh", name: "Play-Doh Sets", desc: "insert desc" },
  { id: "easybake", name: "Easy Bake Oven", desc: "insert desc" },
  { id: "wagon", name: "Red Wagon", desc: "insert desc" },
  { id: "wand", name: "Alex's Magic Wand", desc: "insert desc" },
  { id: "remote", name: "iCarly remote", desc: "insert desc" },
  { id: "shonkins", name: "Shonkins", desc: "insert desc" }
];

export default function MyRoom({ onEnterGameRoom }: { onEnterGameRoom?: () => void }) {
  const [selectedToy, setSelectedToy] = useState<string | null>(null);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  return (
    <div className="relative w-full h-full bg-black flex items-center justify-center overflow-hidden">
      {/* Background Video */}
     <video
  autoPlay
  loop
  muted
  playsInline
  className="absolute inset-0 w-full h-full object-cover"
      >
       <source src={roomBackground} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import roomBackground from "@/assets/room-background.mp4";

const TOYS = [
  { id: "bottle", name: "Disappearing Liquid Bottles", desc: "insert desc" },
  { id: "skeebo", name: "Skeebo Beebo", desc: "insert desc" },
  { id: "doodle", name: "Doodle Bear (Purple)", desc: "insert desc" },
  { id: "fijit", name: "Fijit Friend (Blue)", desc: "insert desc" },
  { id: "furby", name: "Furby (Orange)", desc: "insert desc" },
  { id: "journal", name: "Password Journal", desc: "insert desc" },
  { id: "playdoh", name: "Play-Doh Sets", desc: "insert desc" },
  { id: "easybake", name: "Easy Bake Oven", desc: "insert desc" },
  { id: "wagon", name: "Red Wagon", desc: "insert desc" },
  { id: "shonkins", name: "Shonkins", desc: "insert desc" }
];

export default function MyRoom({ onEnterGameRoom }: { onEnterGameRoom: () => void }) {
  const [activeToy, setActiveToy] = useState<string | null>(null);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.error("Video play failed:", error);
      });
    }
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black flex items-center justify-center">
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={roomBackground} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="relative z-10 w-full h-full flex items-center justify-center">
        {/* Computer Clickable Area - Moved further left */}
        <div
          className="absolute top-[320px] left-[680px] w-[90px] h-[70px] cursor-pointer z-10 border-2 border-transparent"
          onClick={onEnterGameRoom}
          onMouseEnter={() => setHoveredItem('Computer')}
          onMouseLeave={() => setHoveredItem(null)}
        />
        
        {hoveredItem === 'Computer' && (
          <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-black/80 px-2 py-1 rounded text-xs whitespace-nowrap text-white">
            Go to Computer
          </div>
        )}

        {/* Modal for viewing toy details */}
        <AnimatePresence>
          {activeToy && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="absolute z-50 p-6 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 text-white max-w-md"
            >
              <h2 className="text-2xl font-bold mb-2">
                {TOYS.find(t => t.id === activeToy)?.name}
              </h2>
              <p className="text-white/80">
                {TOYS.find(t => t.id === activeToy)?.desc}
              </p>
              <button 
                onClick={() => setActiveToy(null)}
                className="mt-4 px-4 py-2 bg-white/20 hover:bg-white/30 rounded-lg transition-colors"
              >
                Close
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
      {/* Computer Clickable Area - Moved further left */}
      <div
        className="absolute top-[320px] left-[680px] w-[90px] h-[70px] cursor-pointer z-10 border-2 border-transparent hover:border-white/30 transition-all rounded-lg"
        onClick={onEnterGameRoom}
        onMouseEnter={() => setHoveredItem('Computer')}
        onMouseLeave={() => setHoveredItem(null)}
      >
        <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-black/80 px-2 py-1 rounded text-xs whitespace-nowrap">
          {hoveredItem === 'Computer' && 'Go to Computer'}
        </div>
      </div>

      {/* Nightstand Clickable Area - Smaller */}
      <div
        className="absolute top-[510px] left-[135px] w-[80px] h-[80px] cursor-pointer z-10 border-2 border-transparent hover:border-white/30 transition-all rounded-lg"
        onMouseEnter={() => setHoveredItem('Nightstand')}
        onMouseLeave={() => setHoveredItem(null)}
      >
        <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-black/80 px-2 py-1 rounded text-xs whitespace-nowrap">
          {hoveredItem === 'Nightstand' && 'Check Nightstand'}
        </div>
      </div>
      
      <AnimatePresence>
        {selectedToy && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 z-50 bg-black/60 flex items-center justify-center p-4"
          >
            <div className="bg-zinc-900 border border-white/10 p-6 rounded-2xl max-w-md w-full relative">
              <h2 className="text-2xl font-bold text-white mb-4">Toy Collection</h2>
              <button 
                onClick={() => setSelectedToy(null)}
                className="absolute top-4 right-4 text-white/60 hover:text-white"
              >
                ✕
              </button>
              <div className="grid grid-cols-2 gap-4">
                {TOYS.map(toy => (
                  <div key={toy.id} className="p-3 bg-white/5 rounded-lg border border-white/10 hover:bg-white/10">
                    <h3 className="font-semibold text-white">{toy.name}</h3>
                    <p className="text-xs text-white/60">{toy.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
