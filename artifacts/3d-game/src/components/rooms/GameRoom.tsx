import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const GAMES = [
  { id: "weeworld", name: "WeeWorld", icon: "🧍", memo: "Making endless WeeMees!" },
  { id: "smallworlds", name: "Smallworlds", icon: "🌍", memo: "The ultimate virtual hangout." },
  { id: "clubpenguin", name: "Club Penguin", icon: "🐧", memo: "Waddle around and meet new friends!" },
  { id: "prankster", name: "Prankster Planet", icon: "🤪", memo: "Electric Company vibes." },
  { id: "moshi", name: "Moshi Monsters", icon: "👾", memo: "Adopting my little monster." },
  { id: "msp", name: "MovieStar Planet", icon: "⭐", memo: "Fame, fortune, and lots of pink." },
  { id: "animaljam", name: "Animal Jam", icon: "🦊", memo: "Trading items in Jamaa Township." },
  { id: "pbs", name: "PBS Kids", icon: "📺", memo: "Arthur, Cyberchase, all the classics." },
  { id: "disney", name: "Disney/Nick", icon: "🐭", memo: "Suite Life and iCarly flash games." },
];

const PE_MEMORIES = [
  { id: "hamster", name: "Nutter Fort Hamster Balls", icon: "🐹" },
  { id: "parachute", name: "Parachute Game", icon: "🎪" },
  { id: "clipboard", name: "Strawberry Clipboard", icon: "📋" },
];

export default function GameRoom() {
  const [activeWindow, setActiveWindow] = useState<{ type: string, data: any } | null>(null);
  const [startMenuOpen, setStartMenuOpen] = useState(false);

  return (
    <div className="w-full h-full bg-[#3a6ea5] relative overflow-hidden flex flex-col">
      {/* Desktop Area */}
      <div className="flex-1 p-4 grid grid-cols-[repeat(auto-fill,minmax(100px,1fr))] gap-4 content-start">
        {GAMES.map(game => (
          <motion.div
            key={game.id}
            whileHover={{ scale: 1.05 }}
            onDoubleClick={() => setActiveWindow({ type: "game", data: game })}
            className="flex flex-col items-center gap-1 cursor-pointer group"
          >
            <div className="w-12 h-12 bg-white/10 rounded border border-white/20 flex items-center justify-center text-3xl group-hover:bg-white/20">
              {game.icon}
            </div>
            <span className="text-white text-xs text-center drop-shadow-md px-1 group-hover:bg-blue-600/50 rounded">{game.name}</span>
          </motion.div>
        ))}

        {/* PE Folder */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          onDoubleClick={() => setActiveWindow({ type: "folder", data: { name: "PE Memories", items: PE_MEMORIES } })}
          className="flex flex-col items-center gap-1 cursor-pointer group mt-8"
        >
          <div className="text-4xl">📁</div>
          <span className="text-white text-xs text-center drop-shadow-md px-1 group-hover:bg-blue-600/50 rounded">PE_Class</span>
        </motion.div>
      </div>

      {/* Modals */}
      <AnimatePresence>
        {activeWindow && (
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] max-w-[90vw] bg-gray-100 rounded-t-lg shadow-2xl flex flex-col border border-gray-400"
          >
            {/* Window Header */}
            <div className="bg-gradient-to-r from-blue-600 to-blue-400 text-white px-3 py-1 flex justify-between items-center rounded-t-lg">
              <span className="font-bold text-sm drop-shadow">
                {activeWindow.type === "game" ? activeWindow.data.name : activeWindow.data.name}
              </span>
              <button 
                onClick={() => setActiveWindow(null)}
                className="bg-red-500 hover:bg-red-400 border border-white/40 text-white px-2 rounded-sm text-xs"
              >
                X
              </button>
            </div>
            {/* Window Body */}
            <div className="p-6 bg-white min-h-[300px] flex flex-col items-center justify-center">
              {activeWindow.type === "game" ? (
                <>
                  <span className="text-6xl mb-4">{activeWindow.data.icon}</span>
                  <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg w-full">
                    <p className="text-gray-700 italic font-serif">"{activeWindow.data.memo}"</p>
                    <p className="text-xs text-gray-400 mt-4">- Jasmyn</p>
                  </div>
                </>
              ) : (
                <div className="w-full grid grid-cols-3 gap-4">
                  {activeWindow.data.items.map((item: any) => (
                    <div key={item.id} className="flex flex-col items-center gap-2">
                      <span className="text-4xl">{item.icon}</span>
                      <span className="text-xs text-center">{item.name}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Taskbar */}
      <div className="h-10 bg-gradient-to-b from-blue-500 via-blue-600 to-blue-700 border-t border-blue-400 flex items-center px-1 relative z-50">
        <button 
          onClick={() => setStartMenuOpen(!startMenuOpen)}
          className="bg-gradient-to-b from-green-400 to-green-600 hover:from-green-300 hover:to-green-500 text-white font-bold italic px-4 py-1 rounded-r-lg shadow-inner flex items-center gap-2"
        >
          <span className="text-xl">❖</span> start
        </button>

        <AnimatePresence>
          {startMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              className="absolute bottom-10 left-0 w-64 bg-white border-2 border-blue-600 rounded-t-lg shadow-2xl flex flex-col"
            >
              <div className="bg-blue-600 text-white p-4 flex items-center gap-3">
                <div className="w-10 h-10 bg-white/20 rounded-sm flex items-center justify-center text-xl">👩🏾</div>
                <span className="font-bold">Jasmyn</span>
              </div>
              <div className="p-2 flex flex-col gap-1">
                <div className="p-2 hover:bg-blue-100 cursor-pointer rounded">My Documents</div>
                <div className="p-2 hover:bg-blue-100 cursor-pointer rounded">My Pictures</div>
                <div className="p-2 hover:bg-blue-100 cursor-pointer rounded">Control Panel</div>
                <hr className="my-1" />
                <div className="p-2 hover:bg-blue-100 cursor-pointer rounded">Log Off</div>
                <div className="p-2 hover:bg-blue-100 cursor-pointer rounded">Turn Off Computer</div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="ml-auto flex items-center gap-2 px-2 text-white text-xs bg-blue-800/30 rounded py-1 border border-blue-800/50">
          <span>🔊</span>
          <span>4:20 PM</span>
        </div>
      </div>
    </div>
  );
}
