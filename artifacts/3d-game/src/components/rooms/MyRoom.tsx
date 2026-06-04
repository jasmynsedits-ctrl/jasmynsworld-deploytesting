import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const TOYS = [
  { id: "bottle", name: "Fake liquid baby bottle", desc: "The milk magically disappeared!", icon: "🍼" },
  { id: "skeebo", name: "Skeebo Beebo", desc: "My favorite little weirdo.", icon: "👾" },
  { id: "doodle", name: "Doodle Bear", desc: "Purple and covered in washable marker.", icon: "🧸" },
  { id: "fijit", name: "Fijit Friend", desc: "Purple squishy dancer.", icon: "💃" },
  { id: "furby", name: "Orange Furby", desc: "Kinda creepy, kinda cute.", icon: "🦉" },
  { id: "journal", name: "Password Journal", desc: "Voice activated secrets.", icon: "📓" },
  { id: "playdoh", name: "Play-Doh sets", desc: "The dentist one was the best.", icon: "🦷" },
  { id: "easybake", name: "Easy Bake Oven", desc: "Eating slightly raw tiny cakes.", icon: "🧁" },
  { id: "wagon", name: "Red Wagon", desc: "Classic.", icon: "🛻" },
  { id: "wand", name: "Alex's wand", desc: "Wizards of Waverly Place vibes.", icon: "🪄" },
  { id: "remote", name: "Sam's remote", desc: "iCarly!", icon: "📱" },
  { id: "shopkins", name: "Shopkins", desc: "Baby Mobile Mary & Cheese.", icon: "🧀" },
];

export default function MyRoom() {
  const [toyboxOpen, setToyboxOpen] = useState(false);
  const [selectedToy, setSelectedToy] = useState<string | null>(null);

  return (
    <div className="w-full h-full p-8 flex flex-col items-center bg-purple-50/50">
      <h2 className="font-display text-4xl text-purple-900 mb-8">My Room 🛏️</h2>

      <div className="flex gap-12 items-center justify-center w-full max-w-4xl flex-1">
        
        {/* Toybox Section */}
        <div className="flex-1 flex flex-col items-center relative">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setToyboxOpen(!toyboxOpen)}
            className="w-48 h-32 bg-pink-400 rounded-xl border-4 border-pink-600 shadow-xl flex items-center justify-center relative z-10"
          >
            <span className="font-display text-2xl text-white">Toybox</span>
            {toyboxOpen && (
              <motion.div 
                initial={{ rotateX: 0 }} 
                animate={{ rotateX: 120, y: -20 }} 
                className="absolute inset-x-[-4px] top-[-4px] h-12 bg-pink-500 rounded-t-xl origin-bottom border-x-4 border-t-4 border-pink-600"
              />
            )}
          </motion.button>

          <AnimatePresence>
            {toyboxOpen && (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                className="absolute top-40 w-full max-w-md bg-white p-6 rounded-2xl shadow-2xl border-2 border-pink-200 grid grid-cols-3 md:grid-cols-4 gap-4 z-20 h-64 overflow-y-auto"
              >
                {TOYS.map((toy) => (
                  <motion.div
                    key={toy.id}
                    whileHover={{ scale: 1.1, y: -5 }}
                    onClick={() => setSelectedToy(toy.id)}
                    className="flex flex-col items-center gap-2 cursor-pointer bg-pink-50 p-2 rounded-xl"
                  >
                    <span className="text-3xl">{toy.icon}</span>
                    <span className="text-xs text-center font-bold text-pink-800 line-clamp-1">{toy.name}</span>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Desk Section */}
        <div className="flex-1 flex flex-col items-center">
          <div className="w-64 h-48 bg-gray-200 rounded-lg border-8 border-gray-300 shadow-xl flex flex-col overflow-hidden">
            <div className="bg-blue-600 text-white text-xs px-2 py-1 font-sans flex justify-between">
              <span>Windows XP</span>
              <span>_ [] X</span>
            </div>
            <div className="flex-1 bg-[url('https://upload.wikimedia.org/wikipedia/en/2/23/Bliss_%28Windows_XP%29.png')] bg-cover bg-center p-2 grid grid-cols-2 gap-2 content-start">
              <div className="flex flex-col items-center gap-1">
                <span className="text-xl">🌐</span>
                <span className="text-[8px] text-white drop-shadow-md">Internet</span>
              </div>
              <div className="flex flex-col items-center gap-1">
                <span className="text-xl">🎮</span>
                <span className="text-[8px] text-white drop-shadow-md">Games</span>
              </div>
            </div>
            <div className="h-6 bg-gradient-to-r from-green-500 to-blue-500 border-t-2 border-blue-400 flex items-center px-1">
              <div className="bg-green-600 text-white text-[10px] px-2 py-0.5 rounded-sm shadow-inner italic font-bold">Start</div>
            </div>
          </div>
          <div className="w-32 h-4 bg-gray-300 mx-auto" />
          <div className="w-48 h-2 bg-gray-400 mx-auto rounded-full" />
          <p className="mt-4 font-display text-gray-500 text-sm">Gateway to the Game Room...</p>
        </div>

      </div>

      <AnimatePresence>
        {selectedToy && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/20 backdrop-blur-sm"
            onClick={() => setSelectedToy(null)}
          >
            <div className="bg-white p-8 rounded-3xl shadow-2xl max-w-sm w-full text-center border-4 border-pink-300" onClick={e => e.stopPropagation()}>
              <span className="text-6xl mb-4 block">
                {TOYS.find(t => t.id === selectedToy)?.icon}
              </span>
              <h3 className="font-display text-2xl text-pink-600 mb-2">
                {TOYS.find(t => t.id === selectedToy)?.name}
              </h3>
              <p className="text-gray-600">
                {TOYS.find(t => t.id === selectedToy)?.desc}
              </p>
              <button 
                className="mt-6 bg-pink-100 text-pink-600 px-6 py-2 rounded-full font-bold hover:bg-pink-200 transition-colors"
                onClick={() => setSelectedToy(null)}
              >
                Close
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
