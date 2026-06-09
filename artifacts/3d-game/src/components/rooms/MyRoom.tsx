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
        <div 
          className="absolute top-[25%] left-[65%] w-32 h-32 cursor-pointer z-10 hover:bg-white/10 transition-colors rounded-full"
          onClick={() => setSelectedToy('computer')}
          onMouseEnter={() => setHoveredItem('Computer')}
          onMouseLeave={() => setHoveredItem(null)}
        />
        
        <div 
          className="absolute top-[55%] left-[15%] w-24 h-24 cursor-pointer z-10 hover:bg-white/10 transition-colors rounded-full"
          onClick={() => setSelectedToy('nightstand')}
          onMouseEnter={() => setHoveredItem('Nightstand')}
          onMouseLeave={() => setHoveredItem(null)}
        />

        {/* Hover Label */}
        {hoveredItem && (
          <div className="absolute top-4 left-1/2 -translate-x-1/2 bg-black/80 px-4 py-2 rounded-full border border-purple-500/50 z-20">
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
