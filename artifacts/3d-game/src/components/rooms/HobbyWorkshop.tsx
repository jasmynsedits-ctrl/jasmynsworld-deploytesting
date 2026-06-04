import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function HobbyWorkshop() {
  const [activeStation, setActiveStation] = useState<string | null>(null);

  const stations = [
    { id: "loom", name: "Rainbow Loom", color: "bg-red-400" },
    { id: "slime", name: "Slime Making", color: "bg-green-400" },
    { id: "bug", name: "Lightning Bugs", color: "bg-indigo-900" }
  ];

  return (
    <div className="w-full h-full bg-[#fcd34d] relative overflow-hidden flex flex-col items-center p-8">
      {/* Wood Wall Pattern */}
      <div className="absolute inset-0 opacity-30 pointer-events-none" style={{ backgroundImage: 'repeating-linear-gradient(to right, #d97706, #d97706 40px, #b45309 40px, #b45309 42px)' }} />
      
      {/* Floor */}
      <div className="absolute bottom-0 left-0 right-0 h-1/4 bg-[#92400e] border-t-8 border-[#78350f] z-0" />

      <h2 className="font-display text-4xl text-[#78350f] z-10 mb-8 bg-white/40 px-6 py-2 rounded-full backdrop-blur-sm">Hobby Workshop</h2>

      <div className="flex-1 w-full max-w-4xl z-10 flex flex-col relative items-center justify-center pb-20">
        
        {/* Craft Table */}
        <div className="w-[600px] h-64 bg-[#fef3c7] border-8 border-[#d97706] rounded-xl shadow-[0_30px_50px_rgba(0,0,0,0.2)] relative flex justify-around items-center px-8 z-20">
          
          {stations.map(station => (
            <motion.div
              key={station.id}
              whileHover={{ scale: 1.1, y: -10 }}
              onClick={() => setActiveStation(station.id)}
              className="cursor-pointer group flex flex-col items-center gap-4"
            >
              <div className={`w-24 h-24 ${station.color} rounded-2xl shadow-lg border-4 border-white flex items-center justify-center relative overflow-hidden`}>
                 <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <span className="font-display text-[#92400e] bg-white/80 px-3 py-1 rounded-full text-sm">{station.name}</span>
            </motion.div>
          ))}

          {/* Table Legs */}
          <div className="absolute -bottom-24 left-10 w-6 h-24 bg-[#d97706] rounded-b-md" />
          <div className="absolute -bottom-24 right-10 w-6 h-24 bg-[#d97706] rounded-b-md" />
        </div>

        <AnimatePresence>
          {activeStation && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="absolute inset-[-100px] bg-white/90 backdrop-blur-md rounded-3xl shadow-2xl z-50 flex flex-col items-center justify-center p-8 border-8 border-[#d97706]"
            >
              <button 
                onClick={() => setActiveStation(null)}
                className="absolute top-6 right-6 bg-red-500 text-white w-10 h-10 rounded-full font-bold shadow hover:bg-red-600"
              >
                X
              </button>
              <h3 className="font-display text-3xl mb-8 text-[#92400e]">
                {stations.find(s => s.id === activeStation)?.name} Interactive Preview
              </h3>
              
              <div className="w-96 h-64 bg-gray-100 rounded-xl border-4 border-gray-300 flex items-center justify-center">
                 <p className="text-gray-400 italic">Mini-game interactive area</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </div>
  );
}
