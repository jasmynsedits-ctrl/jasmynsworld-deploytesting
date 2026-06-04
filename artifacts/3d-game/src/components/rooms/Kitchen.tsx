import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Kitchen() {
  const [activeView, setActiveView] = useState<"room" | "fridge" | "pantry">("room");
  const [fridgeOpen, setFridgeOpen] = useState(false);
  const [pantryOpen, setPantryOpen] = useState(false);

  return (
    <div className="w-full h-full bg-[#a7f3d0] relative overflow-hidden">
      {/* Background Tile Backsplash */}
      <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: 'linear-gradient(to right, #059669 1px, transparent 1px), linear-gradient(to bottom, #059669 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      
      {/* Floor */}
      <div className="absolute bottom-0 left-0 right-0 h-1/4 bg-[#d97706] border-t-8 border-[#b45309]" />

      {/* Header */}
      <div className="absolute top-0 left-0 right-0 p-8 flex justify-between items-center z-20">
        <h2 className="font-display text-4xl text-teal-900 bg-white/50 px-6 py-2 rounded-full backdrop-blur-md">The Kitchen</h2>
        {activeView !== "room" && (
          <button 
            onClick={() => { setActiveView("room"); setFridgeOpen(false); setPantryOpen(false); }}
            className="bg-white/80 hover:bg-white text-teal-900 px-6 py-2 rounded-full font-bold shadow-md"
          >
            ← Back to Room
          </button>
        )}
      </div>

      <AnimatePresence mode="wait">
        {activeView === "room" && (
          <motion.div 
            key="room"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="absolute inset-0 flex items-end justify-center gap-20 pb-24 z-10"
          >
            {/* Fridge */}
            <div className="relative group cursor-pointer" onClick={() => { setActiveView("fridge"); setFridgeOpen(true); }}>
              <div className="w-64 h-96 bg-gray-100 rounded-t-xl border-4 border-gray-300 shadow-[20px_0_30px_rgba(0,0,0,0.2)] flex flex-col relative z-10">
                <div className="h-1/3 border-b-4 border-gray-300 relative">
                  <div className="absolute top-4 left-4 w-2 h-16 bg-gray-400 rounded-full" />
                </div>
                <div className="flex-1 relative">
                  <div className="absolute top-4 left-4 w-2 h-32 bg-gray-400 rounded-full" />
                  {/* Fridge magnets */}
                  <div className="absolute top-10 right-10 w-8 h-8 bg-yellow-400 rounded-full shadow-sm flex items-center justify-center text-xs font-bold">☺</div>
                  <div className="absolute top-24 right-16 w-6 h-8 bg-blue-400 rotate-12 shadow-sm" />
                </div>
              </div>
              <div className="absolute -bottom-4 w-full h-8 bg-black/20 blur-md rounded-full" />
            </div>

            {/* Island Counter */}
            <div className="w-80 h-48 bg-teal-800 rounded-t-md border-t-[16px] border-amber-100 shadow-[0_10px_30px_rgba(0,0,0,0.3)] relative z-20 flex justify-center pt-4">
               {/* Stools */}
               <div className="absolute -bottom-8 left-10 w-12 h-20 bg-amber-700 rounded-t-full" />
               <div className="absolute -bottom-8 right-10 w-12 h-20 bg-amber-700 rounded-t-full" />
            </div>

            {/* Pantry */}
            <div className="relative cursor-pointer group" onClick={() => { setActiveView("pantry"); setPantryOpen(true); }}>
              <div className="w-56 h-[400px] bg-[#8b5a2b] border-8 border-[#5c3a21] shadow-[-20px_0_30px_rgba(0,0,0,0.3)] flex flex-col justify-evenly p-2 relative z-10">
                <div className="w-full h-2 bg-[#4a332a]" />
                <div className="w-full h-2 bg-[#4a332a]" />
                <div className="w-full h-2 bg-[#4a332a]" />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
                <div className="absolute top-1/2 -left-4 w-4 h-16 bg-yellow-600 rounded-l-md" /> {/* Handle */}
              </div>
            </div>
          </motion.div>
        )}

        {activeView === "fridge" && (
          <motion.div 
            key="fridge-view"
            initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }}
            className="absolute inset-0 bg-blue-50/95 backdrop-blur flex flex-col items-center pt-24 pb-8 z-30"
          >
            <h3 className="font-display text-3xl text-blue-900 mb-8">Inside the Fridge</h3>
            <div className="w-full max-w-4xl flex-1 bg-white border-8 border-gray-200 rounded-xl shadow-2xl flex flex-col p-4 gap-4">
              
              {/* Top Shelf - Drinks */}
              <div className="flex-1 border-b-4 border-blue-100 flex items-end gap-8 pb-2 px-8">
                {/* Bug Juice */}
                <div className="relative group">
                  <div className="w-12 h-20 bg-gradient-to-b from-red-500 to-red-600 rounded-md border-2 border-red-700 relative shadow-md">
                    <div className="absolute -top-4 left-1/2 w-1 h-6 bg-gray-300 rotate-12" />
                    <div className="absolute top-2 w-full text-center text-[8px] font-bold text-white">BUG</div>
                  </div>
                </div>
                {/* Hugs Barrel */}
                <div className="relative group">
                  <div className="w-16 h-20 bg-blue-500 rounded-t-xl rounded-b-md border-2 border-blue-600 shadow-md flex flex-col items-center pt-2">
                    <div className="w-10 h-2 bg-white rounded-full opacity-50" />
                    <div className="w-full mt-2 h-4 bg-white/20" />
                  </div>
                </div>
                {/* White Grape */}
                <div className="relative group">
                  <div className="w-14 h-24 bg-green-100 rounded-b-xl rounded-t-3xl border-2 border-green-200 shadow-md relative mt-4">
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-6 h-4 bg-green-600 rounded-t-sm" />
                    <div className="absolute inset-2 bg-green-200/50 rounded-xl" />
                  </div>
                </div>
              </div>

              {/* Bottom Shelf - Food */}
              <div className="flex-1 flex items-end gap-8 pb-2 px-8">
                {/* Pickled Eggs */}
                <div className="w-20 h-24 bg-pink-100/60 border-2 border-pink-200 rounded-t-xl rounded-b-lg relative shadow-md overflow-hidden flex flex-wrap content-end p-2 gap-1">
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-12 h-3 bg-pink-400 rounded-t-md" />
                  <div className="w-6 h-8 bg-white rounded-full shadow-inner" />
                  <div className="w-6 h-8 bg-white rounded-full shadow-inner" />
                  <div className="w-6 h-8 bg-white rounded-full shadow-inner" />
                </div>
                {/* Kid Cuisine */}
                <div className="w-32 h-20 bg-blue-600 rounded-md border-b-4 border-blue-800 shadow-md relative p-2 grid grid-cols-2 gap-1 transform rotate-[-5deg]">
                  <div className="bg-yellow-800 rounded-sm" />
                  <div className="bg-green-600 rounded-sm" />
                  <div className="bg-yellow-400 col-span-2 rounded-sm" />
                </div>
              </div>

            </div>
          </motion.div>
        )}

        {activeView === "pantry" && (
          <motion.div 
            key="pantry-view"
            initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }}
            className="absolute inset-0 bg-amber-50/95 backdrop-blur flex flex-col items-center pt-24 pb-8 z-30"
          >
            <h3 className="font-display text-3xl text-amber-900 mb-8">Pantry Shelves</h3>
            <div className="w-full max-w-4xl flex-1 bg-[#8b5a2b] border-8 border-[#5c3a21] shadow-2xl flex flex-col p-4 gap-4 rounded-lg">
              
              {/* Top Shelf */}
              <div className="flex-1 border-b-8 border-[#4a332a] flex items-end gap-12 pb-2 px-8">
                {/* Banana Stars */}
                <div className="flex gap-2">
                  <div className="w-8 h-8 bg-yellow-300 relative rounded-sm shadow-md rotate-12" style={{ clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)' }} />
                  <div className="w-8 h-8 bg-yellow-300 relative rounded-sm shadow-md -rotate-12" style={{ clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)' }} />
                  <div className="w-8 h-8 bg-yellow-300 relative rounded-sm shadow-md rotate-45" style={{ clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)' }} />
                </div>
                {/* Smiley Fries */}
                <div className="relative w-24 h-16 bg-red-500 rounded-md border-b-4 border-red-700 shadow-md flex items-center justify-center p-2">
                  <div className="w-10 h-10 bg-yellow-400 rounded-full relative shadow-sm">
                    <div className="absolute top-2 left-2 w-1.5 h-1.5 bg-yellow-600 rounded-full" />
                    <div className="absolute top-2 right-2 w-1.5 h-1.5 bg-yellow-600 rounded-full" />
                    <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-6 h-2 border-b-2 border-yellow-600 rounded-full" />
                  </div>
                </div>
                {/* Nacho Dinamita */}
                <div className="flex gap-1 transform rotate-12">
                   <div className="w-3 h-16 bg-gradient-to-r from-red-600 to-red-500 rounded-full shadow-md" />
                   <div className="w-3 h-16 bg-gradient-to-r from-red-600 to-red-500 rounded-full shadow-md" />
                   <div className="w-3 h-16 bg-gradient-to-r from-red-600 to-red-500 rounded-full shadow-md" />
                </div>
              </div>

              {/* Bottom Shelf */}
              <div className="flex-1 flex items-end gap-12 pb-2 px-8">
                {/* Hamburger Helper */}
                <div className="w-20 h-28 bg-orange-500 rounded-sm border-2 border-orange-600 shadow-md relative flex justify-center">
                  <div className="absolute top-4 w-12 h-12 bg-white rounded-full flex items-center justify-center">
                    <div className="text-orange-500 font-bold text-xl">✋</div>
                  </div>
                </div>
                {/* Gummy Bag */}
                <div className="w-24 h-32 bg-white/30 backdrop-blur-sm rounded-md border border-white/50 shadow-md relative overflow-hidden flex flex-wrap content-end p-2 gap-1">
                   <div className="absolute top-0 left-0 right-0 h-4 bg-red-500" />
                   {Array.from({length: 12}).map((_, i) => (
                     <div key={i} className={`w-4 h-6 rounded-full opacity-80 ${i%2===0 ? 'bg-green-500' : 'bg-yellow-400'}`} />
                   ))}
                   {/* Tweezers */}
                   <div className="absolute top-8 right-2 w-1 h-16 bg-gray-300 rotate-[-20deg]" />
                   <div className="absolute top-8 right-4 w-1 h-16 bg-gray-300 rotate-[20deg]" />
                </div>
              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
