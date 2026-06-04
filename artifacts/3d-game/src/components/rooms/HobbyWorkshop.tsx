import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ACTIVITIES = [
  { id: "loom", name: "Rainbow Loom", icon: "🌈", color: "bg-red-100" },
  { id: "stew", name: "Eagle Stew", icon: "🦅", color: "bg-amber-100" },
  { id: "turtle", name: "Turtle Sandbox", icon: "🐢", color: "bg-green-100" },
  { id: "butterfly", name: "Butterfly Catching", icon: "🦋", color: "bg-blue-100" },
  { id: "firefly", name: "Lightning Bugs", icon: "✨", color: "bg-indigo-100" },
  { id: "rolly", name: "Rolly Pollies", icon: "🪲", color: "bg-slate-200" },
  { id: "slime", name: "Slime Making", icon: "💧", color: "bg-lime-100" },
];

export default function HobbyWorkshop() {
  const [activeGame, setActiveGame] = useState<string | null>(null);

  return (
    <div className="w-full h-full bg-[url('https://www.transparenttextures.com/patterns/wood-pattern.png')] bg-amber-50/90 p-8 flex flex-col relative">
      <div className="flex justify-between items-center mb-8">
        <h2 className="font-display text-4xl text-amber-900 drop-shadow-sm">Hobby Workshop 🎨</h2>
        {activeGame && (
          <button 
            onClick={() => setActiveGame(null)}
            className="bg-amber-200 hover:bg-amber-300 text-amber-900 px-4 py-2 rounded-full font-bold shadow transition-colors"
          >
            ← Back to Stations
          </button>
        )}
      </div>

      <AnimatePresence mode="wait">
        {!activeGame ? (
          <motion.div 
            key="grid"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 content-start flex-1 overflow-y-auto"
          >
            {ACTIVITIES.map((activity) => (
              <motion.button
                key={activity.id}
                whileHover={{ scale: 1.05, rotate: [-1, 1, -1, 0] }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveGame(activity.id)}
                className={`${activity.color} p-6 rounded-2xl shadow-lg border-2 border-black/10 flex flex-col items-center gap-4 text-center hover:shadow-xl transition-all group`}
              >
                <span className="text-5xl group-hover:scale-110 transition-transform">{activity.icon}</span>
                <span className="font-display text-lg text-slate-800">{activity.name}</span>
              </motion.button>
            ))}
          </motion.div>
        ) : (
          <motion.div
            key="game"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="flex-1 bg-white rounded-3xl shadow-inner border-4 border-amber-200 p-8 flex flex-col items-center justify-center relative overflow-hidden"
          >
            <span className="text-6xl mb-6">{ACTIVITIES.find(a => a.id === activeGame)?.icon}</span>
            <h3 className="font-display text-3xl text-slate-800 mb-4">{ACTIVITIES.find(a => a.id === activeGame)?.name}</h3>
            
            <div className="bg-slate-100 w-full max-w-2xl h-64 rounded-xl border-2 border-dashed border-slate-300 flex items-center justify-center p-8 text-center">
              <p className="text-slate-500 font-bold text-xl italic">
                Interactive {ACTIVITIES.find(a => a.id === activeGame)?.name} mini-game loads here...
                <br/><span className="text-sm font-normal mt-2 block">(Imagine dragging items, catching bugs, or mixing slime!)</span>
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
