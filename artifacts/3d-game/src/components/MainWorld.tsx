import { useState, useMemo } from "react";
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
  { id: "kitchen", title: "Kitchen", component: Kitchen, color: "bg-teal-600", shape: "rounded-t-full border-t-8 border-x-8 border-teal-800", icon: "🍽️" },
  { id: "myroom", title: "My Room", component: MyRoom, color: "bg-pink-500", shape: "rounded-t-[40px] border-t-8 border-x-8 border-pink-700", icon: "🛏️" },
  { id: "gameroom", title: "Game Room", component: GameRoom, color: "bg-blue-800", shape: "rounded-t-lg border-t-8 border-x-8 border-blue-950", icon: "🎮" },
  { id: "tvlounge", title: "TV Lounge", component: TVLounge, color: "bg-orange-500", shape: "rounded-t-2xl border-t-8 border-x-8 border-orange-700", icon: "📺" },
  { id: "library", title: "Library", component: Library, color: "bg-[#5c4033]", shape: "rounded-t-md border-t-8 border-x-8 border-[#3d2c23]", icon: "📚" },
  { id: "musiccorner", title: "Music Corner", component: MusicCorner, color: "bg-purple-800", shape: "rounded-t-[30px] border-t-8 border-x-8 border-purple-950", icon: "💿" },
  { id: "hobby", title: "Hobby Workshop", component: HobbyWorkshop, color: "bg-[#8b5a2b]", shape: "rounded-t-xl border-t-8 border-x-8 border-[#5c3a21]", icon: "🎨" },
  { id: "photo", title: "Photo Booth", component: PhotoBooth, color: "bg-fuchsia-500", shape: "rounded-t-3xl border-t-8 border-x-8 border-fuchsia-700", icon: "📷" },
];

export default function MainWorld() {
  const [currentRoom, setCurrentRoom] = useState<string | null>(null);
  const [boxOpen, setBoxOpen] = useState(false);

  const activeRoom = ROOMS.find(r => r.id === currentRoom);
  const RoomComponent = activeRoom?.component;

  const particles = useMemo(() => {
    return Array.from({ length: 30 }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      delay: Math.random() * 5,
      duration: 3 + Math.random() * 4,
    }));
  }, []);

  return (
    <div className="w-full h-[100dvh] bg-gradient-to-b from-[#2a0845] via-[#6441A5] to-[#ffb88c] flex flex-col items-center overflow-hidden relative">
      {/* Background Particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {particles.map(p => (
          <motion.div
            key={p.id}
            animate={{ y: [0, -100], opacity: [0, 1, 0], scale: [0.5, 1.5, 0.5] }}
            transition={{ duration: p.duration, delay: p.delay, repeat: Infinity, ease: "linear" }}
            className="absolute w-2 h-2 bg-yellow-200 rounded-full shadow-[0_0_10px_#fef08a]"
            style={{ left: p.left, top: p.top }}
          />
        ))}
      </div>

      {/* Header */}
      <div className="w-full p-6 flex justify-between items-center z-20 relative">
        <h1 className="font-display text-4xl text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]">
          Jasmyn's World ✨
        </h1>
        <div className="flex gap-4">
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setBoxOpen(true)}
            className="bg-gradient-to-r from-amber-400 to-amber-600 px-6 py-2 rounded-full font-display text-lg text-amber-950 shadow-[0_0_15px_rgba(251,191,36,0.6)] border-2 border-amber-200"
          >
            📦 Memory Box
          </motion.button>
          {currentRoom && (
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setCurrentRoom(null)}
              className="bg-white/20 hover:bg-white/30 backdrop-blur-md px-6 py-2 rounded-full font-display text-lg text-white shadow-md transition-all border border-white/30"
            >
              ← Back to Hub
            </motion.button>
          )}
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 w-full relative z-10">
        <AnimatePresence mode="wait">
          {!currentRoom ? (
            <motion.div
              key="hub"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, scale: 1.1 }}
              className="absolute inset-0 flex items-end justify-start overflow-x-auto overflow-y-hidden pb-16 custom-scrollbar px-10"
            >
              {/* Floor */}
              <div className="absolute bottom-0 left-0 right-0 h-24 bg-[#4a332a] border-t-8 border-[#2d1f19] z-0" style={{ minWidth: '200%' }} />
              
              <div className="flex items-end gap-12 relative z-10 h-full pb-8">
                {ROOMS.map((room) => (
                  <motion.div
                    key={room.id}
                    whileHover={{ y: -20, filter: "brightness(1.2)" }}
                    onClick={() => setCurrentRoom(room.id)}
                    className="relative cursor-pointer group flex flex-col items-center justify-end h-80"
                  >
                    {/* Door Sign (Hover) */}
                    <div className="absolute -top-16 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/90 text-purple-900 px-4 py-2 rounded-xl font-display whitespace-nowrap shadow-xl border-2 border-purple-200 pointer-events-none z-20">
                      {room.icon} {room.title}
                      <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 border-x-8 border-x-transparent border-t-8 border-t-white/90" />
                    </div>

                    {/* Door Structure */}
                    <div className={`w-40 h-64 ${room.color} ${room.shape} shadow-[0_10px_30px_rgba(0,0,0,0.5)] flex flex-col items-center justify-center relative overflow-hidden`}>
                      <div className="w-4 h-4 bg-yellow-400 rounded-full absolute right-4 top-1/2 shadow-[0_0_10px_#facc15]" />
                      <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ) : (
            <motion.div
              key={currentRoom}
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 100 }}
              transition={{ type: "spring", bounce: 0, duration: 0.8 }}
              className="absolute inset-0 bg-white"
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
