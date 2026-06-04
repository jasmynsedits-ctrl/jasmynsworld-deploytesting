import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Kitchen from "./rooms/Kitchen";
import MyRoom from "./rooms/MyRoom";
import GameRoom from "./rooms/GameRoom";
import TVLounge from "./rooms/TVLounge";
import Library from "./rooms/Library";
import MusicCorner from "./rooms/MusicCorner";
import HobbyWorkshop from "./rooms/HobbyWorkshop";
import PhotoBooth from "./rooms/PhotoBooth";
import MemoryBox from "./rooms/MemoryBox";

const ROOMS = [
  { id: "kitchen", title: "Kitchen", icon: "🍽️", component: Kitchen },
  { id: "myroom", title: "My Room", icon: "🛏️", component: MyRoom },
  { id: "gameroom", title: "Game Room", icon: "🎮", component: GameRoom },
  { id: "tvlounge", title: "TV Lounge", icon: "📺", component: TVLounge },
  { id: "library", title: "Library", icon: "📚", component: Library },
  { id: "musiccorner", title: "Music Corner", icon: "💿", component: MusicCorner },
  { id: "hobby", title: "Hobby Workshop", icon: "🎨", component: HobbyWorkshop },
  { id: "photo", title: "Photo Booth", icon: "📷", component: PhotoBooth },
];

export default function MainWorld() {
  const [currentRoom, setCurrentRoom] = useState<string | null>(null);
  const [boxOpen, setBoxOpen] = useState(false);

  const activeRoom = ROOMS.find(r => r.id === currentRoom);
  const RoomComponent = activeRoom?.component;

  return (
    <div className="w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-pink-100 via-purple-100 to-white flex flex-col items-center overflow-hidden">
      {/* Header */}
      <div className="w-full p-6 flex justify-between items-center z-10 relative">
        <h1 className="font-display text-3xl text-primary bg-white/50 px-6 py-2 rounded-full backdrop-blur shadow-sm border border-white">
          Jasmyn's World ✨
        </h1>
        <div className="flex gap-4">
          <button 
            onClick={() => setBoxOpen(true)}
            className="bg-amber-100 hover:bg-amber-200 px-6 py-2 rounded-full font-display text-lg text-amber-800 shadow-md transition-all border border-amber-300"
          >
            📦 Memory Box
          </button>
          {currentRoom && (
            <button 
              onClick={() => setCurrentRoom(null)}
              className="bg-white/80 hover:bg-white px-6 py-2 rounded-full font-display text-lg text-purple-700 shadow-md transition-all border border-purple-200"
            >
              ← Back to Hub
            </button>
          )}
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 w-full max-w-6xl relative">
        <AnimatePresence mode="wait">
          {!currentRoom ? (
            <motion.div
              key="hub"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.05 }}
              className="w-full h-full p-8 grid grid-cols-2 md:grid-cols-4 gap-6 items-center content-center"
            >
              {ROOMS.map((room) => (
                <motion.button
                  key={room.id}
                  whileHover={{ scale: 1.05, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setCurrentRoom(room.id)}
                  className="bg-white/60 backdrop-blur-md p-8 rounded-3xl border-2 border-white/80 shadow-xl shadow-purple-200/50 flex flex-col items-center gap-4 group hover:bg-white/80 transition-colors"
                >
                  <span className="text-5xl group-hover:scale-110 transition-transform filter drop-shadow-md">{room.icon}</span>
                  <span className="font-display text-xl text-purple-900">{room.title}</span>
                </motion.button>
              ))}
            </motion.div>
          ) : (
            <motion.div
              key={currentRoom}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ type: "spring", bounce: 0, duration: 0.6 }}
              className="w-full h-full bg-white/40 backdrop-blur-lg rounded-t-[3rem] border-t-4 border-x-4 border-white/50 shadow-2xl overflow-hidden"
            >
              {RoomComponent && <RoomComponent />}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <AnimatePresence>
        {boxOpen && <MemoryBox onClose={() => setBoxOpen(false)} />}
      </AnimatePresence>
    </div>
  );
}
